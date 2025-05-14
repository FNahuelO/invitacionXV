import { useState } from "react";
import Sol from "./assets/Sol.jsx";
import Vestido from "./assets/Vestido.jsx";
import CarouselComponent from "./components/Carousel.jsx";
import CountdownTimer from "./components/CounterTimer.jsx";
import Traje from "./assets/Traje.jsx";
import Regalo from "./assets/Regalo.jsx";
import Torre from "./assets/Torre.jsx";
import Flor from "./assets/Flor.jsx";
import Torre2 from "./assets/Torre2.jsx";
import Bandera from "./assets/Bandera.jsx";
import FlorHome from "./assets/FlorHome.jsx";
import FlorHome2 from "./assets/FlorHome2.jsx";
import MediaPlayer from "./components/Player.jsx";
import { Copy } from "lucide-react";

const ALIAS = "REGALOMIA15.UALA";

function App() {
  const [modal, setModal] = useState({ view: false, type: "" });
  const [textCopy, setTextCopy] = useState("");
  const labelFooter = [
    "CONFIRMAR ASISTENCIA A LA FIESTA",
    "BOOK DE FOTOS",
    "REGALOS",
    "CÓMO LLEGAR",
    "AGENDAR FIESTA",
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5491158017866"; // Número de teléfono con código de país
    const message = encodeURIComponent("¡Hola! Confirmo Asistencia");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  const handleCopy = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(ALIAS);
      setTextCopy("Alias copiado al portapapeles ✔️");
      setTimeout(() => {
        setTextCopy("");
        setModal({ view: false, type: "" });
      }, 1500);
    } else {
      setTextCopy("No se pudo copiar el alias");
    }
  };

  return (
    <>
      <div className="max-w-screen-md mx-auto h-svh overflow-x-hidden bg-[#704D7B] scroll-smooth">
        <div className="w-full h-[150svh] bg-[#704D7B] flex flex-col justify-center relative items-center gap-4">
          <FlorHome className="absolute top-0 w-full h-max pointer-events-none" />
          <FlorHome2 className="absolute -bottom-10 w-full h-max pointer-events-none" />
          <div className="w-full flex flex-col items-center -translate-y-20 gap-4">
            <Sol />
            <span
              className="text-xl"
              style={{
                background:
                  "linear-gradient(273.43deg, #EFB810 2.28%, #FFEAA9 37.15%, #E6B10F 97.72%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              01.08.2025
            </span>
            <div
              className="flex flex-col w-1/2 justify-center items-center py-4 border-b my-2"
              style={{
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderImage:
                  "linear-gradient(273.43deg, #EFB810 2.28%, #FFEAA9 37.15%, #E6B10F 97.72%) 1",
              }}
            >
              <span className="text-4xl font-tinos text-[#F9DB5C]">XV</span>

              <span
                className="text-[3rem] font-berkshire"
                style={{
                  background:
                    "linear-gradient(109.42deg, #FFF8E4 3.88%, #FFCC45 79.37%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Mia
              </span>
            </div>
            <span className="text-[#FFDB6E] text-xl">MIS 15 AÑOS</span>
            <span className="text-white text-base w-2/3 text-center">
              Te espero para compartir la alegria de esta noche que sera magica
            </span>
          </div>
          <MediaPlayer />
        </div>
        <div className="w-full h-[140svh] bg-[#8C7299] translate-y-10 rounded-[3rem] z-10 relative flex flex-col justify-center items-center">
          <div
            className="w-[80%] h-[92.5%] mx-auto border-2 absolute"
            style={{
              borderImage:
                "linear-gradient(180deg, #967309 0%, #FFC000 49.04%, #FFAE2D 100%) 2",
            }}
          ></div>
          <div
            className="w-[85%] h-[90%] mx-auto border-2"
            style={{
              borderImage:
                "linear-gradient(180deg, #967309 0%, #FFC000 49.04%, #FFAE2D 100%) 2",
            }}
          >
            <div className="w-full flex flex-col items-center gap-4">
              <CountdownTimer />
              <span className="w-4/5 text-center text-white text-4xl text-shadow-lg font-monteCarlo">
                Los esperamos
              </span>

              <div className="flex flex-col gap-4 z-10">
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-normal text-white font-berkshire text-2xl">
                    Día
                  </span>
                  <span className="font-medium text-white font-buenard">
                    Viernes 01 de Agosto
                  </span>
                  <button
                    className="bg-white text-[#D28A58] rounded-2xl px-8 py-2 uppercase font-alegreya font-bold text-xs w-full"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/calendar/render?action=TEMPLATE&text=Mis%2015%20A%C3%B1os&dates=20250801T230000Z/20250802T040000Z&details=Estás%20invitado%20a%20una%20noche%20inolvidable%20para%20celebrar.&location=Janos%20Martínez&sf=true&output=xml",
                        "_blank"
                      )
                    }
                  >
                    Agendar
                  </button>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-normal text-white font-berkshire text-2xl">
                    Lugar
                  </span>
                  <span className="font-medium text-white font-buenard">
                    Janos Martinez
                  </span>
                  <button
                    className="bg-white text-[#D28A58] rounded-2xl px-8 py-2 uppercase font-alegreya font-bold text-xs w-full"
                    onClick={handleWhatsAppClick}
                  >
                    Confirmar Asistencia
                  </button>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <span className="font-normal text-white font-berkshire text-2xl">
                    Dirección
                  </span>
                  <span className="font-medium text-white font-alegreya">
                    Monseñor Larumbe 821
                  </span>
                  <button
                    className="bg-white text-[#D28A58] rounded-2xl px-8 py-2 uppercase font-alegreya font-bold text-xs w-full"
                    onClick={() => setModal({ view: true, type: "map" })}
                  >
                    Como llegar
                  </button>
                </div>
                <div className="flex flex-col items-center font-berkshire text-2xl">
                  <span className="font-normal text-white">Horarios</span>
                  <span className="font-normal text-sm text-white uppercase font-buenard tracking-wide">
                    Fiesta 21.00 hs
                  </span>
                </div>
              </div>

              <div className="w-1.5 h-1.5 bg-[#C89A0F] rounded-full mt-6"></div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[110svh] bg-[#82638C] flex flex-col justify-center">
          <div className="flex flex-col h-[90vh] justify-start items-center gap-8">
            <span
              className="font-monteCarlo text-shadow-lg text-white text-4xl"
              style={{
                background:
                  "linear-gradient(273.43deg, #EFB810 2.28%, #FFEAA9 37.15%, #E6B10F 97.72%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Fiesta
            </span>
            <div className="flex gap-4 justify-center w-full h-[80%]">
              <div className="min-w-72 h-full lg:min-w-[70%] bg-white rounded-2xl "></div>
              <div className="min-w-72 h-full lg:min-w-[70%] bg-white rounded-2xl  flex flex-col justify-evenly items-center">
                <span className="text-[#4A6360BF] text-3xl font-carattere">
                  Dress Code
                </span>
                <div className="flex gap-2">
                  <Vestido />
                  <Traje />
                </div>
                <span className="text-[#4A6360BF] text-sm font-david">
                  Vestimenta: Elegante sport
                </span>
              </div>
              <div className="min-w-72 h-full lg:min-w-[70%] bg-white rounded-2xl "></div>
            </div>
            <span className="text-white font-buenard text-lg">
              Acá unos detalles a tener en cuenta
            </span>
          </div>
        </div>
        <div
          className="w-full min-h-[110svh] bg-white flex flex-col justify-center"
          id="book"
        >
          <div className="flex flex-col h-[90vh] justify-start items-center gap-8">
            <span
              className="font-monteCarlo text-shadow-lg text-white text-4xl"
              style={{
                background:
                  "linear-gradient(273.43deg, #EFB810 2.28%, #FFEAA9 37.15%, #E6B10F 97.72%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Book
            </span>
            <CarouselComponent />
          </div>
        </div>
        <div
          className="w-full min-h-full bg-[#FFFFFF47] flex flex-col justify-center items-center gap-14 relative"
          id="regalos"
        >
          <span className="font-monteCarlo text-shadow-lg text-white text-4xl">
            Regalos
          </span>
          <div
            className="flex flex-col items-center justify-center rounded-full"
            style={{
              padding: "0.2rem", // border width
              background:
                "linear-gradient(144.45deg, #FFE79E 6.49%, #967309 101.6%)",
            }}
          >
            <div className="bg-white p-8 rounded-full">
              <Regalo />
            </div>
          </div>
          <span className="text-white font-buenard w-[70%] text-center">
            Queremos brindarles una gran noche y con su colaboracion nos
            ayudarian a hacerlo posible
          </span>
          <button
            className="bg-white text-[#D28A58] rounded-2xl px-8 py-2 uppercase font-alegreya font-bold text-xs"
            onClick={() => setModal({ view: true, type: "cbu" })}
          >
            Ver más
          </button>
          <Torre className="absolute bottom-0 right-0" />
        </div>
        <div className="w-full h-svh bg-[#704D7B] flex flex-col justify-center">
          <div className="w-[90%] h-full relative border border-[#EAB000] mx-auto my-3 flex justify-center items-center">
            <Bandera className="absolute -top-2 z-10 w-44 h-44 pointer-events-none" />
            <div className="w-[95%] h-[98%] relative border border-[#EAB000] flex flex-col justify-center items-center">
              <div className="flex flex-col items-center translate-y-[10%] gap-10">
                <div className="flex flex-col justify-center items-center">
                  <span
                    className="text-[3rem] font-berkshire"
                    style={{
                      background:
                        "linear-gradient(109.42deg, #FFF8E4 3.88%, #FFCC45 79.37%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Mia
                  </span>
                  <span
                    className="font-david text-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #E6B215 0%, #FFE8A3 77.08%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    mis 15 años
                  </span>
                </div>
                <div className="w-full flex flex-col gap-4 text-white text-center font-bold font-buenard text-sm z-50">
                  {labelFooter.map((item, idx) => {
                    if (item === "BOOK DE FOTOS") {
                      return (
                        <a
                          href="#book"
                          key={idx}
                          style={{ textDecoration: "none" }}
                        >
                          <span>{item}</span>
                        </a>
                      );
                    } else if (item === "REGALOS") {
                      return (
                        <a
                          href="#regalos"
                          key={idx}
                          style={{ textDecoration: "none" }}
                        >
                          <span>{item}</span>
                        </a>
                      );
                    } else if (item === "CÓMO LLEGAR") {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setModal({ view: true, type: "map" });
                          }}
                        >
                          {item}
                        </button>
                      );
                    } else if (item === "AGENDAR FIESTA") {
                      return (
                        <a
                          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Mis%2015%20A%C3%B1os&dates=20250801T230000Z/20250802T040000Z&details=Estás%20invitado%20a%20una%20noche%20inolvidable%20para%20celebrar.&location=Janos%20Martínez&sf=true&output=xml"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item}
                        </a>
                      );
                    } else {
                      return (
                        <button
                          key={idx}
                          onClick={handleWhatsAppClick}
                          style={{ cursor: "pointer" }}
                        >
                          {item}
                        </button>
                      );
                    }
                  })}
                </div>
                <span
                  className="text-lg"
                  style={{
                    background:
                      "linear-gradient(273.43deg, #EFB810 2.28%, #FFEAA9 37.15%, #E6B10F 97.72%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  01.08.2025
                </span>
                <div className="w-1 h-1 bg-[#C89A0F] rounded-full"></div>
              </div>
              <div className="absolute bottom-20 w-full flex items-center justify-around"></div>
              <Flor className="absolute right-0 bottom-0 pointer-events-none" />
              <Torre2 className="absolute -left-4 bottom-0 pointer-events-none" />
            </div>
          </div>
        </div>
        {modal.view && (
          <div className="fixed inset-0 bg-[#704D7B] z-20 flex items-center justify-center">
            {modal.type === "map" ? (
              <div className="bg-white p-4 rounded-lg shadow-lg relative h-11/12">
                <button
                  className="absolute top-0 right-1 text-black text-xl"
                  onClick={() => setModal({ view: false, type: "" })}
                >
                  &times;
                </button>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.4063993332325!2d-58.51372732347435!3d-34.492579951638646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0550248cff3%3A0x94edbaa9edf4190b!2sJanos%20Mart%C3%ADnez.!5e0!3m2!1ses-419!2sar!4v1747242359648!5m2!1ses-419!2sar"
                  height="600"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg py-4"
                ></iframe>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg relative h-11/12 px-16 py-16 flex  flex-col">
                <button
                  className="absolute top-1 right-3 text-black text-xl"
                  onClick={() => setModal({ view: false, type: "" })}
                >
                  &times;
                </button>
                <div className="flex gap-4">
                  <span>Alias: {ALIAS}</span>
                  <Copy onClick={() => handleCopy()} />
                </div>
                <span className="text-xs text-center mt-4 text-green-700">
                  {textCopy}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
