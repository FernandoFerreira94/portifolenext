"use client";
import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";

import Header from "./components/header";
import Tecnologias from "./components/tecnologias";
import Projetos from "./components/projeto";
import Contato from "./components/contato";

import { TextAnimate } from "@/components/ui/text-animate";
import SobreMim from "./components/Sobre";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AuroraText } from "@/components/ui/aurora-text";

import { Meteors } from "@/components/ui/meteors";

import ContatosWeb from "./components/ContatosWeb";
import ButtonHero from "./components/ButtonHero";
import { ScrollBasedVelocityDemo } from "@/components/ui/ScrolSkill";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const projetosRef = useRef<HTMLFormElement>(null);
  const tecnologiasRef = useRef<HTMLFormElement>(null);
  const sobreMimRef = useRef<HTMLFormElement>(null);
  const contatoRef = useRef<HTMLFormElement>(null);

  const scrollToTecnologia = () => {
    tecnologiasRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSobreMim = () => {
    sobreMimRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContato = () => {
    contatoRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjetos = () => {
    projetosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className=" min-h-screen w-full fixed">
        <Meteors className="" />
      </div>
      <main
        className={`w-full min-h-screen flex flex-col max-sm:justify-center  transition-all duration-500 bg-neutral-950/60 
          ${isCollapsed ? "pl-0" : "pl-[200px]"}
         max-sm:p-0  max-sm:mt-14 `}
      >
        <section className="w-full container mx-auto min-h-screen flex items-center justify-center">
          <div className=" flex flex-col w-full items-center relative float-right max-sm:float-none max-sm:w-full max-sm:mt-0">
            <Header
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              onTecnologiaClick={scrollToTecnologia}
              onSobreMimClick={scrollToSobreMim}
              onContatoClick={scrollToContato}
              onProjetosClick={scrollToProjetos}
            />

            <div className="w-full flex justify-center text-sm flex-col items-center  max-sm:px-5">
              <ShimmerButton className="text-sm">
                Disponivel para contratação
              </ShimmerButton>
              <div className="mt-24 flex flex-col items-center max-sm:mt-15">
                <h1
                  className="text-gray-50 text-6xl font-semibold font-sans text-center 
                max-sm:text-[40px]
                "
                >
                  Olá, eu sou <AuroraText>Fernando Ferreira</AuroraText>
                </h1>
                <TextAnimate
                  className="text-gray-50 mt-16 text-2xl font-semibold font-sans "
                  animation="blurIn"
                  as="h1"
                >
                  Desenvolvedor Front-end
                </TextAnimate>
                <TextAnimate
                  className="text-gray-200/60 mt-8 text-lg  font-medium w-2/4 text-center 
                  max-sm:w-full max-sm:text-base"
                  animation="blurIn"
                  as="h1"
                  delay={1}
                >
                  Desenvolvedor Front-end com foco em experiência do usuário,
                  performance e qualidade de código, construindo interfaces
                  robustas com React e Next.js em ambientes de produção.
                </TextAnimate>
                <article
                  className="mt-16"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                >
                  <ContatosWeb />
                </article>
              </div>
              <article
                className="mt-16 max-sm:w-full max-sm:mx-5"
                data-aos="zoom-in"
                data-aos-delay="1300"
              >
                <ButtonHero
                  onProjetosClick={scrollToProjetos}
                  onContatoClick={scrollToContato}
                />
              </article>
            </div>
          </div>
        </section>

        <section ref={sobreMimRef} className="max-sm:w-full max-sm:z-20">
          <SobreMim />
        </section>

        <section
          ref={tecnologiasRef}
          className=" w-full container mx-auto flex items-center justify-center "
        >
          <Tecnologias />
        </section>

        <div className=" w-full my-28 max-sm:my-16">
          <ScrollBasedVelocityDemo />
        </div>

        <section
          ref={projetosRef}
          className="w-full bg-gray-950 py-12 z-20 max-sm:py-0"
        >
          <Projetos />
        </section>

        <section ref={contatoRef}>
          <Contato />
        </section>

        <footer className="w-full pb-20 bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col items-center  gap-4 max-sm:pl-0">
          <div className="mt-10" data-aos="zoom-in">
            <ContatosWeb />{" "}
          </div>
          <div
            className="flex flex-col items-center gap-6 justify-center mt-5 text-gray-400"
            data-aos="zoom-in"
          >
            <ul className="flex flex-wrap justify-center gap-6">
              <li
                className="hover:text-white transition duration-300 cursor-pointer"
                onClick={scrollToSobreMim}
              >
                Sobre mim
              </li>
              <li
                className="hover:text-white transition duration-300 cursor-pointer"
                onClick={scrollToTecnologia}
              >
                Tecnologias
              </li>
              <li
                className="hover:text-white transition duration-300 cursor-pointer"
                onClick={scrollToProjetos}
              >
                Projetos
              </li>
              <li
                className="hover:text-white transition duration-300 cursor-pointer"
                onClick={scrollToContato}
              >
                Contato
              </li>
              <li>
                <Link
                  href="/curriculo/Fernando-FullStack.pdf"
                  download="Fernando_Ferreira_Curriculo.pdf"
                  className="hover:text-white transition duration-300 cursor-pointer"
                >
                  Currículo
                </Link>
              </li>
            </ul>
            <p className="text-gray-400  text-sm">
              {" "}
              Todos os direitos reservados &copy; 2024 WebCodeFF.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
