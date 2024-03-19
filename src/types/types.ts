export type NombresTecnologias =
  | "next.js"
  | "typeScript"
  | "tailwind CSS"
  | "styled components"
  | "react";

export type ItemTecnologia = {
    id: number;
    nombre: NombresTecnologias;
  };

export type Proyecto = {
    id: number;
    titulo: string;
    año: string;
    descripcion: string;
    link: string;
    tecnologias: ItemTecnologia[];
    imagen: ImageMetadata
  };