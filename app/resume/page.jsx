"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiJquery } from "react-icons/si";

// about data
const about = {
  title: "Sobre mim",
  description: "Sou Alessandro Lucas, desenvolvedor front-end apaixonado por criar experiências web dinâmicas e eficientes. Com base em HTML5, CSS3 e JavaScript, além de conhecimento em frameworks modernos como React e Next.js, estou sempre buscando novos desafios que testem minha criatividade e habilidades técnicas.",
  info: [
    {
      fieldName: "Nome:",
      fieldValue: "Alessandro Lucas",
    },
    {
      fieldName: "Telefone:",
      fieldValue: "+55 (21) 96487-0832",
    },
    {
      fieldName: "Experiência:",
      fieldValue: "10 Meses",
    },
    {
      fieldName: "Email:",
      fieldValue: "alessandrolucass22@gmail.com",
    },
    {
      fieldName: "FreeLancer:",
      fieldValue: "Disponivel",
    },
    {
      fieldName: "Idiomas:",
      fieldValue: "Português, Inglês - basico",
    },
  ],
};

// experiencia data
const experience = {
  icon: "../../public/assets/resume/badge.svg",
  title: "Experiência",
  description: "No caminho do desenvolvimento front-end, venho criando soluções web modernas e funcionais, sempre focado em proporcionar uma excelente experiência de usuário. Utilizando tecnologias como Next.js, React, e Tailwind CSS, desenvolvi diversos projetos, desde landing pages responsivas até plataformas de e-commerce dinâmicas.",
  items: [
    {
      company: "FreeLancer",
      position: "Desenvolvedor Front-End",
      duration: "Jan 2024 - Até o momento",
    },
  ],
};

// education data
const education = {
  icon: "../../public/assets/resume/cap.svg",
  title: "Formação",
  description: "Ao longo da minha trajetória como desenvolvedor, me dediquei a aprimorar minhas habilidades e conhecimentos em tecnologias web. Minha formação inclui tanto estudos autodidatas quanto cursos especializados que me prepararam para enfrentar desafios no desenvolvimento front-end.",
  items: [
    {
      institution: "Faculdade - Estácio de Sá",
      degree: "Análise e Desenvolvimento de Sistemas",
      duration: "2021 - 2023",
    },
    {
      institution: "FreeCodeCademy",
      degree: "Certificado - Responsive Web Design",
      duration: "2024",
    },
    {
      institution: "IFRS",
      degree: "Certificado - JavaScript",
      duration: "2024",
    },
    {
      institution: "IFRS",
      degree: "Certificado - Programador Web",
      duration: "2024",
    },
    {
      institution: "DIO",
      degree: "Versionamento de Código com Git e GitHub",
      duration: "2024",
    },
  ],
};

// skill data
const skills = {
  title: "Minhas habilidades",
  description: "Possuo um conjunto diversificado de habilidades em desenvolvimento web, o que me permite criar soluções eficazes e modernas. Abaixo estão as tecnologias e ferramentas nas quais utilizo:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiJquery />,
      name: "Jquery",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6"
          >
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mas-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span
                              className="w-[6px] h-[6px] rounded-full
                            bg-accent"
                            ></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mas-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-[20px] leading-6 max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span
                              className="w-[6px] h-[6px] rounded-full
                            bg-accent"
                            ></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60">
                    {skills.description}
                  </p>
                </div>
                <ul
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-
                [30px]"
                >
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] 
                            rounded-xl flex justify-center items-center
                            group"
                            >
                              <div
                                className="text-6xl group-hover:text-accent
                              transition-all duration-300"
                              >
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li 
                      key={index} 
                      className="flex items-center justify-center xl:justify-start
                      gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-[14.5px]">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
