"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMysql,
  SiSass,
} from "react-icons/si";

import Image from "next/image";
import Link from "next/link";

import imgProjeto from "../../../assets/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg";
import { fetchAllProjetos } from "@/service/api";
import { ProjetoProps } from "@/app/utils/type";

export default function Projetos({
  showModal,
  setShowModal,
  setProjetoModal,
}: {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setProjetoModal: Dispatch<SetStateAction<ProjetoProps | null>>; // Corrigido
}) {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function debugProjetos() {
      const lista = await fetchAllProjetos();
      setProjetos(lista);
      setIsLoading(false);
    }

    debugProjetos();
  }, []);

  function handleModal(iten: ProjetoProps) {
    setProjetoModal(() => ({ ...iten, id: iten.id ?? "" })); // Garantindo que id não cause erro
    setShowModal(true);
  }

  return (
    <>
      {!isLoading ? (
        <section
          className={`w-8/10 flex flex-wrap gap-30 mt-20  justify-center text-gray-300 
          max-sm:gap-15 max-sm:w-full max-sm:mt-0
          ${showModal ? "hidden" : ""}`}
        >
          {projetos.map((iten) => (
            <div
              key={iten.id}
              className="flex  flex-col items-center bg-gray-950
            hover:scale-110 transition duration-700 opacity-60 hover:opacity-100 
            max-sm:opacity-80 max-sm:hover:scale-100 max-sm:w-8/10
            "
            >
              <Link
                href={iten.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Image
                  src={imgProjeto}
                  alt="imagem projeto"
                  className="w-full border-3 border-black"
                />
              </Link>
              <div className="mt-1 flex flex-col gap-2 items-center w-full">
                <p className="font-bold text-xl tracking-wider">{iten.nome}</p>
                <div className="text-[#9370db] text-xl flex gap-1 ">
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  {iten.react && <SiReact />}
                  {iten.next && <SiNextdotjs />}
                  {iten.typescript && <SiTypescript />}
                  {iten.tailwind && <SiTailwindcss />}
                  {iten.sass && <SiSass />}
                  {iten.firebase && <SiFirebase />}
                  {iten.node && <SiNodedotjs />}
                  {iten.mysql && <SiMysql />}
                </div>
                <button
                  onClick={() => handleModal(iten)}
                  className="cursor-pointer text-xl w-full py-2 transition duration-500 hover:bg-gray-900 hover:text-white "
                >
                  Mais informações
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="custom-loader"></div>
      )}
    </>
  );
}
