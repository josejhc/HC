import AuroraBackground from "./Header";
import { motion } from "framer-motion";
import React from "react";
import './style.css'
import BotonHeader from "../BotonesHeader";
 
const Header = () => {
  return (
    <AuroraBackground className="Aurora">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
              
            <div className="caja">
                <h1><img className="logo" src="/img/logo.png"/></h1>              
                <nav>
                    <ul className="lista">
                    <BotonHeader titulo={'Inicio'} url={'index.html'}/>
                    <BotonHeader titulo={'Productos'} url={'index.html'}/>
                    <BotonHeader titulo={'Contacto'} url={'index.html'} />
                    </ul>              
                </nav>
            </div>
        
            
        
        <div className=  " font-serif text-3xl md:text-8xl font-bold dark:text-white text-center">
          HCOMPANY
        </div>
        <div className="font-serif font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Calidad y eficiencia en cada trazo
        </div>
        <button className="font-sans bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Ver más
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

export default Header