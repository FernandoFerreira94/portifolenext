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
  SiPostgresql,
  SiSass,
  SiFigma,
  SiShadcnui,
  SiSupabase,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

import imgProjeto from "../../../assets/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg";
import { fetchAllProjetos } from "@/service/api";
import { ProjetoProps } from "@/app/utils/type";
import ImgAyumi from "../../../assets/imgAyumiNails.png";
import ImgFinaFlow from "../../../assets/imgFinaFlow.png";
import ImgPrimeFlix from "../../../assets/imgPrimeFlix.png";
import ImgDevMotor from "../../../assets/ImgDevMotors.png";
import ImgDevPizza from "@/assets/ImgDevPizza.png";
import ImgMataMosca from "@/assets/ImgMataMosca.png";
import ImgDevShop from "@/assets/ImgDevShop.png";
import ImgTask from "@/assets/ImgTask.png";
import ImgCoinsDev from "@/assets/ImgCoinsDev.png";
import ImgGestaoColinas from "@/assets/imgGestaoColinas.png";

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
    console.log(iten);
  }
  console.log(projetos);
  return (
    <>
      {!isLoading ? (
        <section
          className={`w-7/10 mx-auto  max-[2000px]:w-11/12 flex flex-wrap gap-15 justify-center text-gray-300 
    max-sm:gap-15 max-sm:w-full max-sm:px-4 max-sm:mt-0 max-sm:flex-col max-sm:items-center 
    ${showModal ? "hidden" : ""}`}
        >
          {projetos.map((iten) => (
            <div
              key={iten.id}
              className="flex w-3/12 max-w-[350px] ] rounded-2xl  flex-col items-center justify-center bg-gray-950
    hover:scale-105 transition duration-700 opacity-60 hover:opacity-100 max-sm:w-full
    
    max-sm:opacity-80  

    xl2:w-3/10 shadow-[6px_6px_15px_black] hover:shadow-[10px_10px_15px_5px_black] 
  "
            >
              <Link
                href={iten.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full rounded-2xl"
                data-aos="zoom-in"
              >
                <Image
                  src={
                    // Início da nova lógica condicional
                    iten.nome === "AyumiNails"
                      ? ImgAyumi
                      : iten.nome === "Finan Flow"
                      ? ImgFinaFlow
                      : iten.nome === "Prime Flix" // Nova condição para PrimeFlix
                      ? ImgPrimeFlix
                      : iten.nome === "Dev Motors" // Nova condição para Dev Motors
                      ? ImgDevMotor
                      : iten.nome === "Dev Pizza" // Nova condição para Dev Pizza
                      ? ImgDevPizza
                      : iten.nome === "Mata Mosca" // Nova condição para Mata Mosca
                      ? ImgMataMosca
                      : iten.nome === "Dev Shop" // Nova condição para Dev Shop
                      ? ImgDevShop
                      : iten.nome === "Task  +" // Nova condição para Task
                      ? ImgTask
                      : iten.nome === "Coins Dev" // Nova condição para Coins Dev
                      ? ImgCoinsDev
                      : iten.nome === "Gestão Colinas" // Nova condição para Gestão Colinas
                      ? ImgGestaoColinas
                      : imgProjeto
                  }
                  alt="imagem projeto"
                  quality={100}
                  className="w-full border-3  object-cover  h-80 rounded-2xl"
                />
              </Link>
              <div className="mt-1 flex flex-col gap-2 items-center w-full">
                <p className="font-bold text-lg tracking-wider">{iten.nome}</p>
                <div className="text-[#9370db] text-lg flex gap-1.5  flex-wrap justify-center  ">
                  {iten.nome === "Coins Dev" ||
                    (iten.nome === "Mata Mosca" && (
                      <>
                        <SiJavascript />
                        <SiHtml5 />
                        <SiCss3 />
                      </>
                    ))}
                  {iten.react && <SiReact />}
                  {iten.next && <SiNextdotjs />}
                  {iten.typescript && <SiTypescript />}
                  {iten.tailwind && <SiTailwindcss />}
                  {iten.sass && <SiSass />}
                  {iten.node && <SiNodedotjs />}
                  {iten.shancn && <SiShadcnui />}
                  {iten.firebase && <SiFirebase />}
                  {iten.postgressql && <SiPostgresql />}
                  {iten.supabase && <SiSupabase />}
                  {iten.reactNative && <TbBrandReactNative />}
                  {iten.figma && <SiFigma />}
                </div>
                <button
                  onClick={() => handleModal(iten)}
                  className="cursor-pointer text-lg w-full py-2 transition duration-500 hover:bg-gray-900 hover:text-white "
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
