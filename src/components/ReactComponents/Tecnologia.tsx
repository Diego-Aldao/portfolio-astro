import type { NombresTecnologias } from "../../types/types";
import NextJs from "../Icon/ReactIcons/NextJs";
import React from "../Icon/ReactIcons/React";
import StyledComponents from "../Icon/ReactIcons/StyledComponents";
import Tailwind from "../Icon/ReactIcons/Tailwind";
import Typescript from "../Icon/ReactIcons/Typescript";

const getIconFromName = (nombreDelIcono: NombresTecnologias) => {
  switch (nombreDelIcono) {
    case "next.js":
      return (
        <NextJs className="w-4 h-4 xl:h-6 xl:w-6 opacity-50 lg:group-hover:opacity-100" />
      );
    case "typeScript":
      return (
        <Typescript className="w-4 h-4 xl:h-6 xl:w-6 opacity-50 lg:group-hover:opacity-100" />
      );
    case "tailwind CSS":
      return (
        <Tailwind className="w-4 h-4 xl:h-6 xl:w-6 opacity-50 lg:group-hover:opacity-100" />
      );
    case "styled components":
      return (
        <StyledComponents className="w-6 h-6 xl:h-8 xl:w-8 opacity-50 lg:group-hover:opacity-100" />
      );
    case "react":
      return (
        <React className="w-4 h-4 xl:h-6 xl:w-6 opacity-50 lg:group-hover:opacity-100" />
      );
  }
};

interface Props {
  nombre: NombresTecnologias;
}

export default function Tecnologia({ nombre }: Props) {
  const icono = getIconFromName(nombre);
  return (
    <span className="tecnologia flex gap-1 items-center capitalize ">
      {icono}
      <span className="tecnologia__nombre hidden md:inline-block lg:text-secondary-white lg:group-hover:text-main-white">
        {nombre}
      </span>
    </span>
  );
}
