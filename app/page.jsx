"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// componentes
import Social from "./pages/Social";
import Photo from "./pages/Photo";
import Stats from "./pages/Stats";


const Home = () => {
  const handleDownloadCV = () => {
    // Caminho direto para o arquivo PDF na pasta public
    const pdfUrl = "/assets/Pdf/PDF-teste.pdf"; // Certifique-se de que o arquivo está no diretório correto
  
    // Criar um link invisível e simular o clique para download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "teste.pdf"; // Nome do arquivo que será baixado
    document.body.appendChild(link); // Adiciona o link ao DOM
    link.click(); // Simula o clique no link
    document.body.removeChild(link); // Remove o link do DOM após o clique
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24"
        >
          {/* texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor Front-End</span>
            <h1 className="h2 mb-6">
              Olá, eu sou
              <br />
              <span className="text-accent">Alessandro Lucas</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Eu sou especializado em criar experiências digitais elegantes e sou
              proficiente em várias linguagens de programação e tecnologias
            </p>

            {/* botão e sociais */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>Baixar CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border
                  border-accent rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;