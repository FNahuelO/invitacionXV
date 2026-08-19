export const event = {
  honoree: "Mia",
  romanTitle: "XV",
  subtitle: "MIS 15 AÑOS",
  dateLabel: "01.08.2025",
  weekdayLabel: "Viernes 01 de Agosto",
  countdownTarget: "2025-08-01T21:00:00-03:00",
  venue: "Janos Martinez",
  address: "Monseñor Larumbe 821",
  schedule: "Fiesta 21.00 hs",
  tagline:
    "Te espero para compartir la alegría de esta noche que será mágica",
  dressCodeLabel: "Dress Code",
  dressCode: "Elegante sport",
  dressCodeNote: "Acá unos detalles a tener en cuenta",
  giftsMessage:
    "Si te gustaría sumarte a mi regalo soñado, acá podés dejar tu aporte. ¡Gracias por el amor!",
  alias: "REGALOMIA15.UALA",
  audioSrc: "/audio.mp3",
  portraitSrc: "/images/portrait.png",
  dressSrc: "/images/dress.png",
  whatsapp: {
    phone: "5491158017866",
    message: "Hola! Confirmo que voy asistir, mi nombre es:",
  },
  calendarUrl:
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Mis%2015%20A%C3%B1os&dates=20250801T230000Z/20250802T040000Z&details=Estás%20invitado%20a%20una%20noche%20inolvidable%20para%20celebrar.&location=Janos%20Martínez&sf=true&output=xml",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.4063993332325!2d-58.51372732347435!3d-34.492579951638646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0550248cff3%3A0x94edbaa9edf4190b!2sJanos%20Mart%C3%ADnez.!5e0!3m2!1ses-419!2sar!4v1747242359648!5m2!1ses-419!2sar",
  photos: [
    { src: "/images/book/01.png", alt: "Mia — book de fotos 1" },
    { src: "/images/book/02.png", alt: "Mia — book de fotos 2" },
    { src: "/images/book/03.png", alt: "Mia — book de fotos 3" },
    { src: "/images/book/04.png", alt: "Mia — book de fotos 4" },
    { src: "/images/book/05.png", alt: "Mia — book de fotos 5" },
    { src: "/images/book/06.png", alt: "Mia — book de fotos 6" },
    { src: "/images/book/07.png", alt: "Mia — book de fotos 7" },
    { src: "/images/book/08.png", alt: "Mia — book de fotos 8" },
    { src: "/images/book/09.png", alt: "Mia — book de fotos 9" },
    { src: "/images/book/10.png", alt: "Mia — book de fotos 10" },
    { src: "/images/book/11.png", alt: "Mia — book de fotos 11" },
    { src: "/images/book/12.png", alt: "Mia — book de fotos 12" },
    { src: "/images/book/13.png", alt: "Mia — book de fotos 13" },
    { src: "/images/book/14.png", alt: "Mia — book de fotos 14" },
    { src: "/images/book/15.png", alt: "Mia — book de fotos 15" },
    { src: "/images/book/16.png", alt: "Mia — book de fotos 16" },
    { src: "/images/book/17.png", alt: "Mia — book de fotos 17" },
    { src: "/images/book/18.png", alt: "Mia — book de fotos 18" },
  ],
} as const;

export function whatsappUrl(): string {
  const text = encodeURIComponent(event.whatsapp.message);
  return `https://wa.me/${event.whatsapp.phone}?text=${text}`;
}
