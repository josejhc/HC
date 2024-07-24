
import React from "react";
import { BackgroundGradient } from "./productos";
import './productos.css'


interface Props {
  imagen: string;
  material: string;
}  

const Card = ({material, imagen}:Props) => {
  return (
    <div>
      <BackgroundGradient className="back rounded-[22px] max-w-sm p-4 sm:p-0 bg-white dark:bg-zinc-900 ">
        <div>
          <img
            src={imagen}
            alt="jordans"
          /> 
        </div>

        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {material}
        </p>
       
      </BackgroundGradient>
    </div>
  );
}

export default Card
