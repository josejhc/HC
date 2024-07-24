
import React from "react";
import Body from "../Cuerpo";
// import { calsans } from "@/fonts/calsans";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./BodyPrincipal";

const BodyPrincipal = () => {
  return (
    <TracingBeam className="px-0">
      <Body/>
    </TracingBeam>
  );
}

export default BodyPrincipal


