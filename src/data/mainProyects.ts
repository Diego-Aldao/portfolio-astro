import type { Proyecto } from "../types/types";
import odyssey from "../assets/Odyssey.png";
import akira from "../assets/Akira.png";
import movieverse from "../assets/Movieverse.png";
import valorantWiki from "../assets/valorantWiki.png";

export const listadoProyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "valorant wiki",
    año: "2024",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ea commodi perferendis vel cupiditate perspiciatis. Quos quaerat cum adipisci illum, deserunt  nesciunt magni?",
    link: "https://wikivalorant.vercel.app/",
    tecnologias: [
      {
        id: 1,
        nombre: "next.js",
      },
      {
        id: 2,
        nombre: "typeScript",
      },
      {
        id: 3,
        nombre: "tailwind CSS",
      },
    ],
    imagen: valorantWiki,
  },
  {
    id: 2,
    titulo: "odyssey",
    año: "2023",
    descripcion:
      "Permite buscar, hacer un seguimiento según categorías y consultar información detallada de animes. También contiene información de personajes y personas relacionadas a la industria.",
    link: "https://odysseyanime.vercel.app/",
    tecnologias: [
      {
        id: 1,
        nombre: "react",
      },
      {
        id: 2,
        nombre: "typeScript",
      },
      {
        id: 3,
        nombre: "tailwind CSS",
      },
    ],
    imagen: odyssey,
  },
  {
    id: 3,
    titulo: "akira",
    año: "2023",
    descripcion:
      "Obtiene información sobre productos y categorías a través de llamadas a  API. Permite buscar, filtrar, y ver en detalle miles de productos. También es posible agregar dichos productos a favoritos o a un carrito de compras.",
    link: "https://akira-ecommerce.web.app/",
    tecnologias: [
      {
        id: 1,
        nombre: "react",
      },
      {
        id: 2,
        nombre: "styled components",
      },
    ],
    imagen: akira,
  },
  {
    id: 4,
    titulo: "movieverse",
    año: "2023",
    descripcion:
      "Base de datos de películas, programas de televisión y celebridades. Permite a los usuarios buscar dentro de esos 3 parametros, ver estrenos, tendencias y tops. También ver los detalles de un parámetro en concreto y guardarlo o agregarlo a favoritos.",
    link: "https://movieverse-db.netlify.app/",
    tecnologias: [
      {
        id: 1,
        nombre: "react",
      },
      {
        id: 2,
        nombre: "styled components",
      },
    ],
    imagen: movieverse,
  },
];
