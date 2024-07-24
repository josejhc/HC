
import React from "react";
import { ContainerScroll } from "./container"
import './container.css'
import Ubicacion from "../Ubicacion/ubicacion";
// import banner from '/img/videos/banner.mov'
// import Image from "next/image"

// interface Props{} e insertar props.Props en la funcion

const HeroScroll = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll 
        titleComponent={
          <>
            <h1 className="text-2xl  text-black dark:text-white">
            <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
               Ubicación <br /> 
              </span>
               Encuentranos en:
              
            </h1>
          </>
          
        }
      >
        <div className="locationContainer"><Ubicacion/></div>
        
        {/* <div className="locationContainer"><video src="/img/videos/banner.mov" autoPlay loop muted/></div> */}
        
        
      </ContainerScroll>
    </div>
  );
}

export default HeroScroll


  //  { {props.map((props) => <Card/>)} }