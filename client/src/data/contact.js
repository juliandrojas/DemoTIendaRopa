const CONTACT = {
  whatsapp: {
    number: "573164167536",
    message:
      "Hola%2C%20soy%20_____%20y%20estoy%20interesado%28a%29%20en%3A%0A%0A%E2%9E%A4%20Proyecto%20de%20desarrollo%0A%E2%9E%A4%20Tutor%C3%ADas%20personalizadas%0A%E2%9E%A4%20Colaboraci%C3%B3n%20tecnol%C3%B3gica%0A%0APor%20favor%2C%20cu%C3%A9ntame%20m%C3%A1s%20sobre%20tu%20necesidad.%20%C2%A1Gracias%21",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61580255146556",
    instagram: "https://www.instagram.com/im.juliandrojas",
    github: "https://github.com/juliandrojas",
    linkedin: "https://linkedin.com/in/tu-perfil",
    website: "https://juliandrojas.vercel.app/",
  },
  email: "julian.rojas@example.com",
};

// ✅ URL CORREGIDA (sin espacios)
export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp.number}?text=${CONTACT.whatsapp.message}`;

export default CONTACT;
