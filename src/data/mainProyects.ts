import type { Proyecto } from "../types/types";
import odyssey from "../assets/odyssey.webp";
import akira from "../assets/akira.webp";
import movieverse from "../assets/movieverse.webp";
import valorantWiki from "../assets/valorantWiki.webp";

export const listadoProyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "valorant wiki",
    año: "2024",
    descripcion:
      "Sitio web dedicado a proporcionar información actualizada sobre Valorant. Desde análisis de personajes hasta informacion sobre armas, ofrece recursos para jugadores que buscan mejorar su comprensión y rendimiento.",
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
      "Odyssey es un sitio web para entusiastas del anime. Permite buscar, hacer un seguimiento según categorías y consultar información detallada de animes. También contiene información de personajes y personas relacionadas a la industria.",
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
      "Ecommerce de productos de indumentaria. Contiene busqueda, filtro y detalle de miles de productos. También es posible agregar productos a favoritos o a un carrito de compras.",
    link: "https://akira-ecommerce.vercel.app/",
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
