"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desenvolvimento Web",
    description:
      "Utilizo as mais recentes tecnologias como Next.js, React, e Tailwind CSS para construir projetos, que são rápidos e otimizados para SEO.",
    href: "",
  },
  {
    num: "02",
    title: "Criação de Landing Pages",
    description:
      "Desenvolvimento de páginas de alta conversão, responsivas e otimizadas para SEO, a partir de designs fornecidos (ex: Figma).",
    href: "",
  },
  {
    num: "03",
    title: "Criação de E-commerces",
    description:
      "Personalização de lojas online com recursos como filtros de produtos, banners dinâmicos e mais.",
    href: "",
  },
  {
    num: "04",
    title: "Otimização de Sites",
    description:
      "Ajustes em sites já existentes, tornando-os mais rápidos, eficientes e acessíveis.",
    href: "",
  },
  
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline 
                  text-transparent group-hover:text-outline-hover transition-all"
                  >
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
                  group-hover:bg-accent transition-all duration-500 flex
                  justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{item.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
