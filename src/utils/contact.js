const COMPANY_PHONE = "+971547088668";
const WHATSAPP_NUMBER = "971547088668"; // E.164 format without '+' for wa.me

export const getWhatsAppUrl = (prefillMessage = "Hello, I need a home repair service.") => {
  const encodedMessage = encodeURIComponent(prefillMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const getCallUrl = () => {
  return `tel:${COMPANY_PHONE}`;
};

export const getDisplayPhone = () => {
  return "054 708 8668";
};
