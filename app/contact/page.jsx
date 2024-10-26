"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(+55) 21 96487-0832",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "alessandrolucass22@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Endereço",
    description: "Santa - Cruz, RJ",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
              <p className="text-white/60">
              Estou sempre em busca de novas oportunidades para colaborar em projetos desafiadores e criativos. Com experiência em desenvolvimento front-end e foco em soluções práticas e inovadoras, estou pronto para transformar suas ideias em realidade digital. Se você precisa de um portfólio profissional, uma landing page de alta conversão, ou até mesmo um e-commerce dinâmico e responsivo, eu posso ajudar.

Entre em contato e vamos criar algo incrível juntos!
              </p>
              {/* input */}
              <div
                className="grid grid-cols-1 
              md:grid-cols-2 gap-6"
              >
                <Input type="firstname" placeholder="Primeiro Nome" />
                <Input type="lastname" placeholder="Ultimo Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Número de Telefone" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione um serviço</SelectLabel>
                    <SelectItem value="est">Desenvolvimento Web</SelectItem>
                    <SelectItem value="cst">Criação de Landing Pages</SelectItem>
                    <SelectItem value="ast">Criação de E-commerces</SelectItem>
                    <SelectItem value="mst">Otimização de Sites</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[130px]"
                placeholder="Escreva sua mensagem aqui."
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Enviar
              </Button>
            </form>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                  text-accent rounded-md flex items-center
                  justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
