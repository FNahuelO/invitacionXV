import heart from "./assets/heart.svg";
import Heart2 from "./assets/heart-2.jsx";
import pepa from "./assets/pepa-footer.svg";
import pepaHome from "./assets/peppa-home.png";
import home from "./assets/Leona (4).png";
import TitleFooter from "./assets/TitleFooter";
import gif from "./assets/Leona (1).gif"
import CarouselComponent from "./components/Carousel.jsx";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const labelFooter = [
    "CONFIRMAR ASISTENCIA A LA FIESTA",
    "CÓMO LLEGAR",
    "BOOK DE FOTOS",
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5491127308147"; // Número de teléfono con código de país
    const message = encodeURIComponent("¡Hola! Confirmo Asistencia");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
  
    window.open(url, "_blank");
  };
  

  return (
    <>
      <div className="max-w-screen-md mx-auto h-svh overflow-x-hidden">
        <div className="w-full min-h-full bg-white flex flex-col justify-center relative items-center">
          <img src={gif} className="absolute z-20 w-44 lg:w-50 left-0 -translate-y-1/2" />
          <img src={gif} className="absolute z-20 w-44 lg:w-50 right-0 translate-y-1/2" />
          <img src={home} />
          <div className="flex flex-col justify-center items-center absolute bottom-[15%]">
            <span className="font-parisienne text-[3rem] text-[#FFC000] font-bold">
              Leona
            </span>
            <span className="font-purple w-4/5 text-center text-[#FFC000]">
              Acompáñame a celebrar juntos un sueño hecho realidad{" "}
            </span>
          </div>
        </div>
        <div className="w-full min-h-full bg-[#EC7C88] translate-y-10 rounded-[3rem] z-10 relative ">
          <div className="w-full h-full flex flex-col items-center translate-y-[10%] gap-4">
            <img src={pepaHome} className="w-1/2 md:w-2/5" alt="Peppa Home" />
            <span className="w-4/5 text-center text-white text-2xl text-shadow-lg font-sevillana text-wrap">
              ¡Los esperamos para celebrar el cumple en la pile! Vení preparado{" "}
            </span>
            <span>
              <Heart2 />{" "}
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-center">
                <span className="font-normal text-white font-baloo text-2xl">
                  Lugar
                </span>
                <button className="bg-white text-[#D28A58] rounded-2xl px-8 py-2 uppercase font-alegreya font-bold text-xs" onClick={handleWhatsAppClick}>
                  Confirmar Asistencia
                </button>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="font-normal text-white font-baloo text-2xl">
                  Dirección
                </span>
                <span className="font-medium text-white font-alegreya">
                  Insua 2324 entre Rojas y Maxer
                </span>
                <button
                  className="bg-white text-[#D28A58] rounded-2xl px-8 py-2 uppercase font-alegreya font-bold text-xs"
                  onClick={() => setModal(true)}
                >
                  Como llegar
                </button>
              </div>
              <div className="flex flex-col items-center font-baloo text-2xl">
                <span className="font-normal text-white">Horarios</span>
                <span className="font-normal text-sm text-white uppercase font-alegreya tracking-wide">
                  11am a 19pm
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 right-10 w-1/3">
            <img src={heart} className="w-full" alt="Heart" />
          </div>
        </div>
        <div
          className="w-full min-h-[110svh] bg-[#F3DDB4] flex flex-col justify-center"
          id="book"
        >
          <div className="flex flex-col h-[90vh] justify-start items-center gap-8">
            <span className="font-monteCarlo text-shadow-lg text-white text-4xl">
              Mis Fotos
            </span>
            <CarouselComponent />
          </div>
        </div>
        <div className="w-full min-h-full bg-[#EC7C88]">
          <div className="w-[90%] h-svh border-double relative border-x-4 border-x-[#FFEAAA] mx-auto">
            <div className="flex flex-col items-center translate-y-1/4 gap-10">
              <TitleFooter />
              <div className="w-full flex flex-col gap-4 text-white text-center font-bold">
                {labelFooter.map((item, idx) => {
                  if (item === "BOOK DE FOTOS") {
                    return (
                      <a
                        href={`#book`}
                        key={idx}
                        style={{ textDecoration: "none" }}
                      >
                        <span key={idx}>{item}</span>
                      </a>
                    );
                  } else if (item === "CÓMO LLEGAR") {
                    return (
                      <span key={idx} onClick={() => setModal(true)}>
                        {item}
                      </span>
                    );
                  } else {
                    return <span key={idx} onClick={handleWhatsAppClick}>{item}</span>;
                  }
                })}
              </div>
            </div>
            <div className="absolute bottom-20 w-full flex items-center justify-around">
              <img src={pepa} className="w-3/5 md:w-2/5" alt="Pepa" />
              <span className="text-white font-bold">09 . 02 . 2025</span>
            </div>
          </div>
        </div>
        {modal && (
          <div className="fixed inset-0 bg-black/80 z-20 flex items-center justify-center">
            <div className="bg-white p-4 py-8 rounded-lg shadow-lg relative">
              <button
                className="absolute top-0 right-2 text-black text-2xl"
                onClick={() => setModal(false)}
              >
                &times;
              </button>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.709212098511!2d-58.47778522358375!3d-34.788095072888844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd192100cdc75%3A0x53668220bc5d6b06!2sC.%20Tte.%20Enrique%20Ins%C3%BAa%202324%2C%20B1842GSV%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1737521722270!5m2!1ses!2sar"
                height="600"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
