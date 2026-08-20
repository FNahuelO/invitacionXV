export const event = {
  honoree: "Zoe",
  romanTitle: "XV",
  subtitle: "MIS 15 AÑOS",
  dateLabel: "30.10.2026",
  weekdayLabel: "Sábado 30 de Octubre",
  countdownTarget: "2026-10-30T20:00:00-03:00",
  venue: "Infinity Eventos",
  address: "Dardo Rocha 1708",
  partyTime: "20:00 hs",
  tagline:
    "Recuerdos que llevo conmigo",
  taglineHero: "Una noche magica para celebrar y guardar en el corazon para siempre",
  dressCodeLabel: "Dress Code",
  dressCode: "Elegante",
  dressCodeNote: "Acá unos detalles a tener en cuenta",
  giftsMessage:
    "Si te gustaría sumarte a mi regalo soñado, acá podés dejar tu aporte. ¡Gracias por el amor!",
  alias: "",
  audioSrc: "/audio.mp3",
  portraitSrc: "/images/portrait.png",
  dressSrc: "/images/vestido.svg",
  whatsapp: {
    phone: "5491158017866",
    message: "Hola! Confirmo que voy asistir, mi nombre es:",
  },
  calendarUrl:
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Mis%2015%20A%C3%B1os&dates=20250801T230000Z/20250802T040000Z&details=Estás%20invitado%20a%20una%20noche%20inolvidable%20para%20celebrar.&location=Janos%20Martínez&sf=true&output=xml",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.4063993332325!2d-58.51372732347435!3d-34.492579951638646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0550248cff3%3A0x94edbaa9edf4190b!2sJanos%20Mart%C3%ADnez.!5e0!3m2!1ses-419!2sar!4v1747242359648!5m2!1ses-419!2sar",
  photos: [
    { src: "/images/book/book-main.jpg", alt: "Zoe — book de fotos 1" },

  ],
} as const;

export function whatsappUrl(options?: {
  name?: string;
  attending?: boolean;
}): string {
  const name = options?.name?.trim();
  const attending = options?.attending ?? true;

  const message = name
    ? attending
      ? `Hola! Confirmo que voy a asistir, mi nombre es: ${name}`
      : `Hola! Lamentablemente no puedo asistir, mi nombre es: ${name}`
    : event.whatsapp.message;

  const text = encodeURIComponent(message);
  return `https://wa.me/${event.whatsapp.phone}?text=${text}`;
}
