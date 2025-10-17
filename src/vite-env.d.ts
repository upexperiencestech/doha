interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_CONTACT_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_SUBSCRIBE: string;
  readonly VITE_CLIENT_EMAIL: string;
  // add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}