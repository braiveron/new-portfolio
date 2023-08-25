import ProfilePic from "./assets/images/brai.png";
import BecomingFit from "./assets/images/BFLogo.png";
import ColmanProd from "./assets/images/ColmanProd.png";
import Tareas from "./assets/images/Tareas.png";
import Food from "./assets/images/Food.png";
import Weather from "./assets/images/Weather.png";
import Contador from "./assets/images/Contador.png";
import Calculadora from "./assets/images/Calculadora.png";

const logotext = "BRAIAN";
const meta = {
  title: "Braian Veron",
  description:
    "Soy Braian Veron Full Stack Developer,actualmente trabajando desde Argentina",
};

const introdata = {
  title: "Soy Braian Veron",
  animated: {
    first: "Apasionado por la programación",
    second: "Diseño sitios web creativos",
    third: "Desarrollo aplicaciones móviles",
  },
  description: "Full Stack Developer, actualmente trabajando desde Argentina",
  your_img_url: ProfilePic,
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Egresado de la carrera de Full Stack Developer del bootcamp Soy Henry con background en diseño gráfico cursado en la Universidad de Buenos Aires. Habilidades para el diseño y desarrollo de sitios web interactivos.",
};
const worktimeline = [
  {
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "Node Js",
    value: 75,
  },
  {
    name: "React",
    value: 90,
  },
  {
    name: "Next Js",
    value: 70,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Me encargo de crear interfaces digitales atractivas y funcionales, optimizadas para brindar a los usuarios la mejor experiencia posible al interactuar con una aplicación o sitio web. Esto incluye el diseño de la apariencia visual y la estructura de navegación y usabilidad para garantizar que los usuarios puedan utilizar la plataforma de manera eficiente y placentera.",
  },
  {
    title: "Web Developer",
    description:
      "Me enfoco en la creación y programación de sitios y aplicaciones web, trabajando en la interacción del usuario, la funcionalidad de los sitios, la seguridad y la gestión de bases de datos, asegurando que los sitios web y aplicaciones funcionen correctamente y sean eficientes.",
  },
];

const dataportfolio = [
  {
    img: BecomingFit,
    description: "E-Commerce como proyecto final del bootcamp. ",
    link: "https://becoming-fit-br1oli.vercel.app/",
  },
  {
    img: ColmanProd,
    description: "Landing Page para uso profesional de productora audiovisual.",
    link: "https://www.colmanproducciones.com.ar/",
  },
  {
    img: Tareas,
    description: "Aplicaciòn para generar una lista de tareas a realizar.",
    link: "https://bv-mistareas.vercel.app/",
  },
  {
    img: Calculadora,
    description: "Calculadora de operaciones simples.",
    link: "https://bv-calculadora.vercel.app/",
  },
  {
    img: Contador,
    description: "Aplicacion para realizar conteo ascendente/descendente.",
    link: "https://bv-contador.vercel.app/",
  },
  {
    img: Food,
    description:
      "Aplicacion para realizar busqueda de recetas, consumiendo informacion de una API.",
    link: "https://github.com/braiveron/PI-FOOD",
  },

  {
    img: Weather,
    description: "Aplicacion para buscar el clima de distintas ciudades.",
    link: "https://bv-weather.vercel.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "braianveron88@gmail.com",
  /*  YOUR_FONE: "(555)123-4567", */
  description:
    "¿Tienes alguna pregunta o necesitas asistencia? No dudes en ponerte en contacto conmigo. Estoy para ayudarte. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_v4qj326",
  YOUR_TEMPLATE_ID: "template_oa8q3hd",
  YOUR_USER_ID: "WkknylIeDfRNqZ10r",
};

const socialprofils = {
  github: "https://github.com/braiveron",
  instagram: "https://instagram.com/brai.coder",
  linkedin: "https://linkedin.com/in/braianveron",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
