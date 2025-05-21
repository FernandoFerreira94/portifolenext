"use client";
import { useRef, useState } from "react";

import TypingEffect from "./components/TypeingEffect";

import Header from "./components/header";
import Title from "./components/title";
import Modal from "./components/modal";
import Sobre from "./components/sobreMim";
import Tecnologias from "./components/tecnologias";
import Projetos from "./components/projeto";
import ShowModal from "./components/showModal/intex";
import Contato from "./components/contato";

interface ProjetoProps {
  id: string;
  nome: string;
  back: string;
  front: string;
  descricao: string;
  funcionalidade: Array<string>;
  img: string;
  url: string;
  html: boolean;
  javascript: boolean;
  react: boolean;
  typescript: boolean;
  next: boolean;
  css: boolean;
  tailwind: boolean;
  node: boolean;
  firebase: boolean;
  mysql: boolean;
}

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
              <Title titulo="Seja bem-vindo" />
              <Modal>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl  text-gray-200 font-bold">
                    Olá sou o Fernando Ferreira.
                  </h2>
                  <span className="text-xl text-yellow-400">
                    Desenvolvedor Full Stack <TypingEffect text="React.js" />
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
            <div className="flex flex-col items-center  relative content float-right max-sm:float-none max-sm:w-full max-sm:mt-15">
              <Title titulo="Projetos" />
              <Projetos
                showModal={showModal}
                setShowModal={setShowModal}
                setProjetoModal={setProjetoModal}
              />
            </div>
          </section>
          <section ref={contatoRef}>
            <Contato />
          </section>
        </main>
      )}
      {showModal && (
        <ShowModal iten={projetoModal} handleClose={handleCloseModal} />
      )}
    </>
  );
}
