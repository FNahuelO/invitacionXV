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
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Mis%2015%20A%C3%B1os%20Zoe&dates=20261030T230000Z/20261031T070000Z&details=Te%20espero%20para%20celebrar%20este%20momento%20tan%20especial%20con%20vos&location=Infinity%20Eventos%2C%20Dardo%20Rocha%201708%2C%20Mart%C3%ADnez&sf=true&output=xml",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Infinity+Eventos,+Dardo+Rocha+1708,+Martinez,+Buenos+Aires&z=16&output=embed",
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
