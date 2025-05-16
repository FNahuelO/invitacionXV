import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../assets/Loading";

const CurtainEffect = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Contenido principal */}
      <div className="absolute inset-0 z-0">{children}</div>

      {/* Cortina */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0 z-10 h-screen w-screen bg-white flex flex-col justify-center items-center"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Loading />
            <button
              className="mt-12 text-[#82638C] bg-transparent outline-none font-berkshire text-3xl"
              onClick={() => setIsOpen(false)}
            >
              Abrir
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurtainEffect;
