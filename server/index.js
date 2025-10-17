// server/index.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();

const PHONE_ID = process.env.WA_PHONE_NUMBER_ID;
const ACCESS_TOKEN = process.env.WA_ACCESS_TOKEN;
const GRAPH_API_VERSION = process.env.GRAPH_API_VERSION || 'v22.0';
const DEFAULT_LANGUAGE = process.env.WA_TEMPLATE_LANG || 'en_US';

if (!PHONE_ID || !ACCESS_TOKEN) {
  console.warn('Warning: WA_PHONE_NUMBER_ID or WA_ACCESS_TOKEN not set in env');
}

app.use(express.json());

// simple rate limiting
app.use(
  '/api/',
  rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// simple CORS allow for dev; in production you may restrict or remove
const DEV_ORIGIN = process.env.TRUSTED_ORIGIN || 'http://localhost:5173';
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', DEV_ORIGIN);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/**
 * Generic endpoint to send any approved template.
 * Request body:
 * {
 *   to: string,               // phone number (E.164 or includes +)
 *   templateName: string,     // exact template name in Meta Business Manager
 *   params: string[]          // ordered list of body parameters to fill {{1}},{{2}},...
 * }
 */
app.post('/api/send-whatsapp-template', async (req, res) => {
  try {
    const { to, templateName, params } = req.body;
    if (!to || !templateName || !Array.isArray(params)) {
      return res.status(400).json({ ok: false, error: 'to, templateName, params[] required' });
    }

    // Normalise phone to digits (keep country code). Keep plus removed as Graph API often expects digits.
    const recipient = String(to).replace(/[^\d]/g, '');

    // Build components.body.parameters array
    const bodyParameters = params.map((p) => ({ type: 'text', text: String(p) }));

    const payload = {
      messaging_product: 'whatsapp',
      to: recipient,
      type: 'template',
      template: {
        name: templateName,
        language: { code: DEFAULT_LANGUAGE },
        components: [
          {
            type: 'body',
            parameters: bodyParameters,
          },
        ],
      },
    };

    const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${PHONE_ID}/messages`;
    const resp = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    return res.json({ ok: true, data: resp.data });
  } catch (err) {
    console.error('Error sending WhatsApp template:', err?.response?.data || err.message);
    return res.status(500).json({ ok: false, error: err?.response?.data || err.message });
  }
});

// Serve static client in production from root /dist (Vite build output)
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const PORT = parseInt(process.env.PORT || '3001', 10);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
