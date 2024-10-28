"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../pages/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "E-commerce",
    title: "E-commerce",
    description:
      "Este projeto de e-commerce foi desenvolvido com as tecnologias mais modernas do mercado, como Next.js, React, Tailwind CSS e SwiperJS, para criar uma loja virtual, rápida e responsiva",
    stack: [{ name: "Next.JS" }, { name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/e-commerce - home.png",
    live: "https://e-commerce-alessandro-lucas-projects.vercel.app/",
    github: "https://github.com/lulckss/E-commerce",
  },
  {
    num: "02",
    category: "Rpg - Dragon Fight",
    title: "Rpg - Dragon Fight",
    description:
      "RPG Dragon Fight é um jogo de RPG simples e envolvente, desenvolvido usando HTML, CSS e JavaScript, onde o jogador embarca em batalhas épicas contra dragões em um mundo fictício. Este projeto foi criado com o objetivo de explorar as mecânicas básicas de um jogo de RPG, como pontos de vida, ataques, defesas e estratégias de batalha, proporcionando uma experiência divertida e interativa para os jogadores.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/rpg - home.png",
    live: "https://rpg-dragon-fight-alessandro-lucas-projects.vercel.app/",
    github: "https://github.com/lulckss/RPG---Dragon-Fight",
  },
  {
    num: "03",
    category: "Music Player",
    title: "Music Player",
    description:
      "O Music Player é um projeto simples e intuitivo desenvolvido com HTML, CSS e JavaScript, que permite ao usuário reproduzir músicas de uma forma dinâmica e interativa. Criado com o objetivo de explorar as funcionalidades básicas de um player de áudio na web, o projeto conta com recursos como controle de volume, navegação entre faixas, e funções de pausa, reprodução aleatória e repetição.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/music player - projeto.png",
    live: "https://music-player-alessandro-lucas-projects.vercel.app/",
    github: "https://github.com/lulckss/Music-Player",
  },
  {
    num: "04",
    category: "Portfólio Pessoal",
    title: "Portfólio Pessoal",
    description:
      "Este Portfólio Pessoal foi desenvolvido utilizando Next.js, React e Tailwind CSS com o objetivo de criar uma presença digital profissional, exibindo meus projetos, habilidades e serviços de forma visualmente atraente e acessível.",
    stack: [
      { name: "Next.JS" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "ShadCN UI" },
    ],
    image: "/assets/work/home - portfolio.png",
    live: "https://ale-portfolio-chi.vercel.app/",
    github: "https://github.com/lulckss/ale-portfolio",
  },
  {
    num: "05",
    category: "Weather - App",
    title: "Weather - App",
    description:
      "Este é um aplicativo de previsão do tempo desenvolvido com JavaScript, HTML e CSS. Utilizando a API OpenWeather, ele fornece informações meteorológicas precisas em tempo real, como temperatura, umidade, velocidade do vento e condições climáticas para qualquer localidade desejada. Com um design moderno e intuitivo, a interface facilita a navegação e a consulta rápida do clima atual e da previsão dos próximos dias.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/weatherapp.png",
    live: "https://weather-app-opal-five-54.vercel.app/",
    github: "https://github.com/lulckss/weather-app",
  },
  {
    num: "06",
    category: "Calculadora - IMC",
    title: "Calculadora - IMC",
    description:
      "Este projeto é uma calculadora de IMC prática e interativa, desenvolvida para ajudar os usuários a avaliarem sua faixa de peso em relação à altura. Inserindo os valores de peso e altura, a calculadora realiza o cálculo do IMC automaticamente e classifica o resultado com base em categorias como peso saudável, sobrepeso e obesidade. Projetada com foco em simplicidade e usabilidade, a interface facilita a navegação e compreensão dos resultados, tornando-a uma ferramenta útil para quem deseja monitorar sua saúde.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/calculadora IMC.png",
    live: "https://calculadora-imc-alessandro-lucas-projects.vercel.app/",
    github: "https://github.com/lulckss/calculadora-imc",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent
              text-outline"
              >
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} {/* projeto */}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight
                          className="text-white text-3xl
                      group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-white text-3xl
                      group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center
                    items-center bg-pink-50/2"
                    >
                      {/* BG-PINK-50/20 em cima */}

                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover rounded-xl"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
              xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]
              h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
