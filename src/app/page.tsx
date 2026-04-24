"use client";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";

import Header from "./components/header";
import Tecnologias from "./components/tecnologias";
import Projetos from "./components/projeto";
import Contato from "./components/contato";
import { TextAnimate } from "@/components/ui/text-animate";
import SobreMim from "./components/Sobre";

import { AuroraText } from "@/components/ui/aurora-text";

import ContatosWeb from "./components/ContatosWeb";
import ButtonHero from "./components/ButtonHero";
import { ScrollBasedVelocityDemo } from "@/components/ui/ScrolSkill";
import Chatbot from "./components/chatbot";
import { Particles } from "@/components/ui/particles";
import { Meteors } from "@/components/ui/meteors";
import { useLanguage } from "@/context/LanguageContext";
import NebulaFooter from "@/components/ui/nebulosa";



const date = new Date()
const year = date.getFullYear()

export default function Home() {
  const { t } = useLanguage();


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
      {/* Ambient background — glows fixos */}
      <div className="" />

   
      {/* Camada de Fundo (Imagem) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
      />

      {/* Camada de Animações (Meteoros e Partículas) */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        {/* Adicione outros efeitos globais se necessário, mas mantenha o NebulaFooter no layout.tsx */}
  <Particles/>
  <Meteors/>
        <NebulaFooter />
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col">

        <section className="w-full container mx-auto min-h-screen flex items-center justify-center">
          <div className=" flex flex-col w-full items-center relative float-right max-sm:float-none max-sm:w-full max-sm:mt-0">
            <Header
              onTecnologiaClick={scrollToTecnologia}
              onSobreMimClick={scrollToSobreMim}
              onContatoClick={scrollToContato}
              onProjetosClick={scrollToProjetos}
            />

            <div className="w-full flex justify-center text-sm flex-col items-center  max-sm:px-5">
          
              <div className="mt-24 flex flex-col items-center max-sm:mt-15">
                <h1
                  className="text-gray-50 text-6xl font-semibold font-sans text-center 
                max-sm:text-[40px]
                "
                data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
                >
                  {t("hero_greeting")} <AuroraText>WebCode</AuroraText>
                </h1>
                <TextAnimate
                  className="text-gray-50 mt-16 text-2xl font-semibold font-sans "
                  animation="blurIn"
                  as="h1"
                >
                  {t("hero_role")}
                </TextAnimate>
                <TextAnimate
                  className="text-gray-200/60 mt-8 text-lg font-medium w-2/4 text-center 
  max-sm:w-full max-sm:text-base"
                  animation="blurIn"
                  as="h1"
                  delay={1}
                >
                  {t("hero_description")}
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

        <section ref={sobreMimRef} className="max-sm:w-full max-sm:z-20 min-h-100dvh">
          <SobreMim />
        </section>

        <section
          ref={tecnologiasRef}
          className=" w-full container mx-auto flex items-center justify-center min-h-100dvh"
        >
          <Tecnologias />
        </section>

        <div className=" w-full my-28 max-sm:my-16">
          <ScrollBasedVelocityDemo />
        </div>

        <section
          ref={projetosRef}
          className="w-full bg-gray-950 py-12 z-20 max-sm:py-0 min-h-100dvh"
        >
          <Projetos />
        </section>

        <section id="contato" ref={contatoRef} className="min-h-100dvh">
          <Contato />
        </section>

        <footer className="w-full pb-20 bg-transparent from-gray-900 to-gray-950 flex flex-col items-center  gap-4 max-sm:pl-0">
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
                {t("nav_about")}
              </li>
              <li
                role="button"
                tabIndex={0}
                className="hover:text-white transition duration-300 cursor-pointer"
                onClick={scrollToTecnologia}
              >
                {t("nav_tech")}
              </li>
              <li
                className="hover:text-white transition duration-300 cursor-pointer"
                onClick={scrollToProjetos}
              >
                {t("nav_projects")}
              </li>
              <li
                className="hover:text-white transition duration-300 cursor-pointer"
                onClick={scrollToContato}
              >
                {t("nav_contact")}
              </li>
              <li>
                <Link
                  href="/curriculo/Fernando-Ferreira-FullStack.pdf"
                  download="Fernando-Ferreira-FullStack.pdf"
                  className="hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("nav_resume")}
                </Link>
              </li>
            </ul>
            <article>
              {t("footer_rights")} &copy; {year}{" "}
              <Link
                href="https://webcodeff.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2E90B8] transition duration-300"
              >
                WebCodeFF
              </Link>
            </article>

          </div>
        </footer>
      </main>
      <Chatbot />
    </>
  );
}
