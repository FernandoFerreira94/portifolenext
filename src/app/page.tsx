"use client";
import { useRef, useState } from "react";

import TypingEffect from "./components/TypeingEffect";
import {
  SiInstagram,
  SiWhatsapp,
  SiFacebook,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from "react-icons/si";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

import Header from "./components/header";
import Title from "./components/title";
import Modal from "./components/modal";
import Sobre from "./components/sobreMim";
import Tecnologias from "./components/tecnologias";
import Projetos from "./components/projeto";
import ShowModal from "./components/showModal/intex";
import Contato from "./components/contato";
import Logo from "../assets/Made with insMind-slogan.png";

import { ProjetoProps } from "./utils/type";

export default function Home() {
  const projetosRef = useRef<HTMLFormElement>(null);
  const sobreMimRef = useRef<HTMLFormElement>(null);
  const contatoRef = useRef<HTMLFormElement>(null);

  const scrollToTecnologia = () => {
    projetosRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSobreMim = () => {
    sobreMimRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContato = () => {
    contatoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [showModal, setShowModal] = useState(false);
  const [projetoModal, setProjetoModal] = useState<ProjetoProps | null>(null);

  function handleCloseModal() {
    setShowModal(false);
    setProjetoModal(null);
    setTimeout(() => {
      projetosRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }

  return (
    <>
      {!showModal && (
        <main className={`w-full flex flex-col `}>
          <section ref={sobreMimRef}>
            <div className="flex flex-col items-center  relative content float-right max-sm:float-none max-sm:w-full max-sm:mt-15">
              <Header
                onTecnologiaClick={scrollToTecnologia}
                onSobreMimClick={scrollToSobreMim}
                onContatoClick={scrollToContato}
              />

              <div
                className="w-9/10
              "
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  className="object-cover  mb-30 mt-20 ml-10 scale-80 max-sm:ml-0 max-sm:mb-20 max-sm:mt-30 max-sm:scale-100"
                />
              </div>
              <Modal>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl  text-gray-200 font-bold">
                    Olá sou o Fernando Ferreira.
                  </h2>
                  <span className="text-xl text-yellow-400">
                    Desenvolvedor{" "}
                    <span className=" max-sm:block">
                      Front-End <TypingEffect text="React.js" />
                    </span>{" "}
                  </span>
                </div>
              </Modal>
              <Title titulo="Sobre mim" />
              <Sobre />
              <Title titulo="Tecnologias" />
            </div>
          </section>
          <section className="bg-gray-950 ">
            <Tecnologias />
          </section>
          <section ref={projetosRef}>
            <div
              className="flex flex-col items-center  relative content float-right
              max-sm:w-full max-sm:mt-0"
            >
              <Title titulo="Projetos" />
              <Projetos
                showModal={showModal}
                setShowModal={setShowModal}
                setProjetoModal={setProjetoModal}
              />
            </div>
          </section>
          <section ref={contatoRef}>
            <h1
              className=" text-center ml-40 mt-30 italic text-xl tracking-wide text-gray-300 
              max-sm:w-9/10 max-sm:m-auto max-sm:mt-20
            "
            >
              Se você tem um projeto em mente, eu tenho o código. Vamos colocar
              essa ideia pra rodar!
            </h1>
            <Contato />
          </section>

          <footer className="w-full  bg-gray-900 h-full">
            <div
              className="content float-right gap-15 h-full text-white flex items-center justify-center
              max-sm:w-full max-sm:flex-wrap max-sm:gap-10 max-sm:py-3
            "
            >
              <Link href="https://wa.me/12997041551" target="blank">
                <SiWhatsapp className="border-3 border-transparent w-22 h-22 p-3 rounded-2xl text-green-600 transition duration-500 hover:border-green-600 cursor-pointer" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/fernando-ferreira-78927b203"
                target="blank"
              >
                <SiLinkedin className="border-3 border-transparent w-22 h-22 p-3 rounded-2xl text-blue-500 transition duration-500 hover:border-blue-500 cursor-pointer" />
              </Link>

              <Link href="https://github.com/FernandoFerreira94" target="blank">
                <SiGithub className="border-3 border-transparent w-22 h-22 p-3 rounded-2xl text-white transition duration-500 hover:border-white cursor-pointer" />
              </Link>

              <div onClick={() => toast.info("fernandoeqp59@gmail.com")}>
                <SiGmail className="border-3 border-transparent w-22 h-22 p-3 rounded-2xl text-red-600 transition duration-500 hover:border-red-600 cursor-pointer" />
              </div>

              <Link
                href="https://www.instagram.com/fernando.ferreira._/"
                target="blank"
              >
                <SiInstagram className="border-3 border-transparent w-22 h-22 p-3 rounded-2xl text-white transition duration-500 hover:border-white cursor-pointer" />
              </Link>
              <Link
                href="https://www.instagram.com/fernando.ferreira._/"
                target="blank"
              >
                <SiFacebook className="border-3 border-transparent w-22 h-22 p-3 rounded-2xl text-blue-800 transition duration-500 hover:border-blue-800  cursor-pointer" />
              </Link>
            </div>
          </footer>
        </main>
      )}
      {showModal && (
        <ShowModal iten={projetoModal} handleClose={handleCloseModal} />
      )}
    </>
  );
}
