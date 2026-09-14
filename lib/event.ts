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
  taglineHero: [
    "Una noche magica para celebrar",
    "y guardar en el corazon para siempre",
  ],
  dressCodeLabel: "Dress Code",
  dressCode: "Elegante",
  dressCodeNote: "Acá unos detalles a tener en cuenta",
  giftsMessage:
    "Compartir este momento con vos es lo que más deseo. Si querés hacerme un regalo, te dejo este espacio para que puedas hacerlo.",
  alias: "Zoe.2510",
  audioSrc: "/audio.mp3",
  portraitSrc: "/images/portrait.png",
  dressSrc: "/images/vestido.svg",
  whatsapp: {
    phone: "5491126162278",
    message: "Hola Zoe! Confirmo que voy asistir, mi nombre es:",
  },
  calendarUrl:
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Mis%2015%20A%C3%B1os%20Zoe&dates=20261030T230000Z/20261031T070000Z&details=Te%20espero%20para%20celebrar%20este%20momento%20tan%20especial%20con%20vos&location=Infinity%20Eventos%2C%20Dardo%20Rocha%201708%2C%20Mart%C3%ADnez&sf=true&output=xml",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Infinity+Eventos,+Dardo+Rocha+1708,+Martinez,+Buenos+Aires&z=16&output=embed",
  photos: [
    { src: "/images/book/IMG_5502.jpeg", alt: "Zoe — book de fotos 2" },
    { src: "/images/book/IMG_5503.jpeg", alt: "Zoe — book de fotos 3" },
    { src: "/images/book/IMG_5504.jpeg", alt: "Zoe — book de fotos 4" },
    { src: "/images/book/IMG_5505.jpeg", alt: "Zoe — book de fotos 5" },
    { src: "/images/book/IMG_5506.jpeg", alt: "Zoe — book de fotos 6" },
    { src: "/images/book/IMG_5507.jpeg", alt: "Zoe — book de fotos 7" },
    { src: "/images/book/IMG_5508.jpeg", alt: "Zoe — book de fotos 8" },
    { src: "/images/book/IMG_5509.jpeg", alt: "Zoe — book de fotos 9" },
    { src: "/images/book/IMG_5510.jpeg", alt: "Zoe — book de fotos 10" },
    { src: "/images/book/IMG_5511.jpeg", alt: "Zoe — book de fotos 11" },
    { src: "/images/book/IMG_5512.jpeg", alt: "Zoe — book de fotos 12" },
    { src: "/images/book/IMG_5513.jpeg", alt: "Zoe — book de fotos 13" },
    { src: "/images/book/IMG_5576.jpeg", alt: "Zoe — book de fotos 14" },
    { src: "/images/book/IMG_5579.jpeg", alt: "Zoe — book de fotos 15" },
    { src: "/images/book/IMG_5580.jpeg", alt: "Zoe — book de fotos 16" },
    { src: "/images/book/IMG_5582.jpeg", alt: "Zoe — book de fotos 17" },
  ],
} as const;

export function whatsappUrl(options?: {
  name?: string;
  attending?: boolean;
  diet?: "none" | "vegetarian" | "vegan";
}): string {
  const name = options?.name?.trim();
  const attending = options?.attending ?? true;
  const dietLabels = {
    none: "sin restricciones alimentarias",
    vegetarian: "vegetariano/a",
    vegan: "vegano/a",
  } as const;

  let message: string = event.whatsapp.message;

  if (name) {
    if (!attending) {
      message = `Hola! Lamentablemente no puedo asistir, mi nombre es: ${name}`;
    } else if (options?.diet) {
      message = `Hola! Confirmo que voy a asistir, mi nombre es: ${name}. Preferencia alimentaria: ${dietLabels[options.diet]}`;
    } else {
      message = `Hola! Confirmo que voy a asistir, mi nombre es: ${name}`;
    }
  }

  const text = encodeURIComponent(message);
  return `https://wa.me/${event.whatsapp.phone}?text=${text}`;
}
