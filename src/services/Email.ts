import emailjs from "@emailjs/browser";

// Define the type for template params
interface TemplateParams {
  [key: string]: string | number; // adjust based on your data
}

// Common EmailJS send function
export const sendEmail = async (
  templateId: string, 
  templateParams: TemplateParams
) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
    throw new Error("EmailJS not configured or missing template ID.");
  }

  try {
    const result = await emailjs.send(SERVICE_ID, templateId, templateParams, PUBLIC_KEY);
    console.log("EmailJS result:", result);
    return result;
  } catch (err) {
    console.error("Email send error:", err);
    throw err; // rethrow for the caller to handle
  }
};
