"use client";
import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <main
          className={`w-full flex flex-col transition-all duration-500
          ${isCollapsed ? "pl-[60px]" : "pl-[200px]"}
          max-sm:p-0`}
        >
          <section>
            <div className="flex flex-col items-center relative float-right max-sm:float-none max-sm:w-full max-sm:mt-15">
              <Header
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                onTecnologiaClick={scrollToTecnologia}
                onSobreMimClick={scrollToSobreMim}
                onContatoClick={scrollToContato}
                onProjetosClick={scrollToProjetos}
              />

              <div className="w-full">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="object-cover  mb-30 mt-20 ml- scale-60 max-sm:ml-0 max-sm:mb-20 max-sm:mt-30 max-sm:scale-100"
                />
              </div>
              <Modal>
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl  text-gray-200 font-bold">
                    Olá sou Fernando Ferreira.
                  </h2>
                  <span className="text-lg text-yellow-400">
                    Desenvolvedor{" "}
                    <span className=" max-sm:block">
                      Full stack{" "}
                      <span className="text-blue-500 font-bold">React.js</span>{" "}
                      <span className="text-green-500 font-bold">Node.js</span>
                    </span>{" "}
                  </span>
                  <span className="text-lg text-yellow-400">
                    <span className=" max-sm:block">
                      Mobile{" "}
                      <span className="text-blue-400 font-bold">
                        React Native
                      </span>
                    </span>{" "}
                  </span>
                  <span className="text-lg text-yellow-400">
                    Web Design{" "}
                    <span className="text-violet-600 ml-1"> Figma </span>
                  </span>
                </div>
              </Modal>
              <section ref={sobreMimRef}>
                <Title titulo="Sobre mim" />
              </section>

              <Sobre />
            </div>
          </section>
          <section ref={tecnologiasRef} className="w-full flex justify-center">
            <Title titulo="Tecnologias" />
          </section>
          <section className="bg-gray-950 flex flex-col items-center  max-sm:pl-0">
            <Tecnologias />
          </section>
          <section ref={projetosRef}>
            <div className="flex flex-col items-center  relative  float-right max-sm:w-full ">
              <Title titulo="Projetos" />
              <Projetos
                showModal={showModal}
                setShowModal={setShowModal}
                setProjetoModal={setProjetoModal}
              />
            </div>
          </section>
          <section ref={contatoRef}>
            <h1 className=" text-center  mt-20 italic text-lg tracking-wide text-gray-300 max-sm:w-9/10 max-sm:m-auto max-sm:mt-10 max-sm:text-sm">
              Se você tem um projeto em mente, eu tenho o código. Vamos colocar
              essa ideia pra rodar!
            </h1>
            <Contato />
          </section>

          <footer className="w-full pb-20 bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col items-center  gap-4 max-sm:pl-0">
            <div
              className=" float-right gap-4  text-white flex  justify-center  pt-10"
              data-aos="zoom-in"
            >
              <Link
                href="https://wa.me/12997041551"
                target="blank"
                className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
              >
                <SiWhatsapp
                  size={40}
                  className=" border-transparent  p-2 rounded-2xl text-white transition duration-500 0  cursor-pointer"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fernando-ferreira-78927b203"
                target="blank"
                className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
              >
                <SiLinkedin
                  size={40}
                  className=" border-transparent  p-2 rounded-2xl text-white transition duration-500   cursor-pointer"
                />
              </Link>
              <Link
                href="https://github.com/FernandoFerreira94"
                className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
                target="blank"
              >
                <SiGithub
                  size={40}
                  className=" border-transparent  p-2 rounded-2xl text-white transition duration-500   cursor-pointer"
                />
              </Link>
              <div
                onClick={() => toast.info("fernandoeqp59@gmail.com")}
                className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
              >
                <SiGmail
                  size={40}
                  className=" border-transparent  p-2 rounded-2xl text-white transition duration-500  cursor-pointer"
                />
              </div>
              <Link
                href="https://www.instagram.com/fernando.ferreira._/"
                className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
                target="blank"
              >
                <SiInstagram
                  size={40}
                  className=" border-transparent  p-2 rounded-2xl text-white transition duration-500   cursor-pointer"
                />
              </Link>
              <Link
                href="https://www.instagram.com/fernando.ferreira._/"
                className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
                target="blank"
              >
                <SiFacebook
                  size={40}
                  className=" border-transparent  p-2 rounded-2xl text-white transition duration-500 cursor-pointer"
                />
              </Link>
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
      )}
      {showModal && (
        <ShowModal iten={projetoModal} handleClose={handleCloseModal} />
      )}
    </>
  );
}
