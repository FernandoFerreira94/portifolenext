"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import imgProjeto from "../../../assets/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg";
import { fetchProjetosProfissionais } from "@/service/fetchProjetosProfissionais";
import { fetchProjetoAcademicos } from "@/service/fetchProjetoAcademicos";
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
import { FolderGit2 } from "lucide-react";
import Title from "../title";
import { AuroraText } from "@/components/ui/aurora-text";

import { PiGithubLogo } from "react-icons/pi";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { ordenarPorCriacaoAsc } from "@/app/actions/ordenarProjeto";

export default function Projetos() {
  const [projetosAcademicos, setProjetosAcademicos] = useState<ProjetoProps[]>(
    []
  );
  const [projetosProfissioanis, setProjetosProfissionais] = useState<
    ProjetoProps[]
  >([]);
  const [expandedId, setExpandedId] = useState<number | null | string>(null);
  useEffect(() => {
    async function debugProjetos() {
      const academicos = await fetchProjetoAcademicos();
      setProjetosAcademicos(academicos);
      const profissionais = await fetchProjetosProfissionais();
      const projetoOrdenador = ordenarPorCriacaoAsc(profissionais);

      setProjetosProfissionais(projetoOrdenador);
    }

    debugProjetos();
  }, []);

  console.log(projetosProfissioanis);
  console.log(projetosAcademicos);
  return (
    <>
      <section className="w-full container mx-auto ">
        <article className="w-full flex flex-col items-center mt-6 mb-8 text-gray-200 text-4xl  tracking-wide">
          <Title icon={<FolderGit2 />} titulo="Projetos" />
          <h1 className="mt-10">
            Conheça meus{" "}
            <AuroraText className="font-semibold">Projetos</AuroraText>{" "}
          </h1>
          <p className="text-[12px] text-gray-200/60 text-center mt-6">
            Projetos profissionais e academicos
          </p>
        </article>
        <p className=" text-center text-xl text-gray-200/90 mt-20">
          Projetos profissionais
        </p>
        <section className="w-full flex items-center mx-auto  justify-center gap-20 mt-10 px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {projetosProfissioanis.map((iten) => (
                <CarouselItem
                  key={iten.id}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <div className=" h-full ">
                    <Card className="h-full ">
                      <CardContent className="p-4 h-full">
                        <div className="h-full  relative flex flex-col bg-neutral-900 rounded-2xl  opacity-60 hover:opacity-100 transition duration-300 ease-in hover:scale-101">
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
                            className="rounded-t-2xl object-cover  h-[300px] "
                          />

                          <div className="p-6 flex flex-col gap-4 flex-1">
                            <h1 className="text-gray-100 font-semibold tracking-wide">
                              {iten.nome}
                            </h1>

                            <p className="text-gray-300/60 text-[12px]">
                              {iten.descricao.length > 200 &&
                              expandedId !== iten.id
                                ? iten.descricao.slice(0, 200) + "..."
                                : iten.descricao}
                              {iten.descricao.length > 200 && (
                                <button
                                  onClick={() =>
                                    setExpandedId(
                                      expandedId === iten.id ? null : iten.id
                                    )
                                  }
                                  className="ml-1 text-blue-400/60 hover:underline"
                                >
                                  {expandedId === iten.id
                                    ? "ver menos"
                                    : "ver mais"}
                                </button>
                              )}
                            </p>

                            <div className=" flex gap-3 w-full flex-wrap text-[11px]">
                              {iten.html && <SpanTecnologia nome="Html" />}
                              {iten.javascript && (
                                <SpanTecnologia nome="Javascript" />
                              )}
                              {iten.react && <SpanTecnologia nome="React" />}
                              {iten.next && <SpanTecnologia nome="Next" />}
                              {iten.typescript && (
                                <SpanTecnologia nome="Typescript" />
                              )}
                              {iten.css && <SpanTecnologia nome="Css" />}
                              {iten.sass && <SpanTecnologia nome="Sass" />}
                              {iten.tailwind && (
                                <SpanTecnologia nome="Tailwind" />
                              )}
                              {iten.shancn && <SpanTecnologia nome="Shancn" />}
                              {iten.reactNative && (
                                <SpanTecnologia nome="React Native" />
                              )}
                              {iten.node && <SpanTecnologia nome="Node" />}
                              {iten.postgressql && (
                                <SpanTecnologia nome="Postgressql" />
                              )}
                              {iten.supabase && (
                                <SpanTecnologia nome="Supabase" />
                              )}
                              {iten.firebase && (
                                <SpanTecnologia nome="Firebase" />
                              )}
                              {iten.figma && <SpanTecnologia nome="Figma" />}
                            </div>

                            <div className="w-full flex  gap-6 pt-2 mt-auto">
                              <Link
                                target="_blank"
                                href={iten.github}
                                className="w-full border-sky-800 py-2 transition duration-300 hover:bg-sky-900/60 text-gray-100  font-light text-sm m-0 p-0 cursor-pointer flex rounded-lg items-center gap-2 relative border justify-center "
                              >
                                <PiGithubLogo size={20} className="" />
                                Código
                              </Link>
                              <Link
                                target="_blank"
                                href={iten.url}
                                className="w-full transition duration-300 hover:bg-neutral-700/60 relative flex items-center justify-center py-2 bg-neutral-700 text-gray-100 rounded-lg text-sm gap-2 cursor-pointer"
                              >
                                <ExternalLink size={20} className="" /> Projeto
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-gray-100" />
            <CarouselNext className="text-gray-100" />
          </Carousel>
        </section>
        <p className=" text-center text-xl text-gray-200/90 mt-20">
          Projetos academicos
        </p>
        <section className="w-full flex  justify-center gap-20 mt-10 px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {projetosAcademicos.map((iten) => (
                <CarouselItem
                  key={iten.id}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <div className=" h-full ">
                    <Card className="h-full ">
                      <CardContent className="p-4 h-full">
                        <div className="h-full relative flex flex-col bg-neutral-900 rounded-2xl  opacity-60 hover:opacity-100 transition duration-300 ease-in hover:scale-101">
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
                            className="rounded-t-2xl object-cover  h-[300px]"
                          />

                          <div className="p-6 flex flex-col gap-4 flex-1">
                            <h1 className="text-gray-100 font-semibold tracking-wide">
                              {iten.nome}
                            </h1>

                            <p className="text-gray-300/60 text-[12px]">
                              {iten.descricao.length > 200 &&
                              expandedId !== iten.id
                                ? iten.descricao.slice(0, 200) + "..."
                                : iten.descricao}
                              {iten.descricao.length > 200 && (
                                <button
                                  onClick={() =>
                                    setExpandedId(
                                      expandedId === iten.id ? null : iten.id
                                    )
                                  }
                                  className="ml-1 text-blue-400/60 hover:underline"
                                >
                                  {expandedId === iten.id
                                    ? "ver menos"
                                    : "ver mais"}
                                </button>
                              )}
                            </p>

                            <div className=" flex gap-4 w-full flex-wrap">
                              {iten.html && <SpanTecnologia nome="Html" />}
                              {iten.javascript && (
                                <SpanTecnologia nome="Javascript" />
                              )}
                              {iten.react && <SpanTecnologia nome="React" />}
                              {iten.next && <SpanTecnologia nome="Next" />}
                              {iten.typescript && (
                                <SpanTecnologia nome="Typescript" />
                              )}
                              {iten.css && <SpanTecnologia nome="Css" />}
                              {iten.sass && <SpanTecnologia nome="Sass" />}
                              {iten.tailwind && (
                                <SpanTecnologia nome="Tailwind" />
                              )}
                              {iten.shancn && <SpanTecnologia nome="Shancn" />}
                              {iten.reactNative && (
                                <SpanTecnologia nome="React Native" />
                              )}
                              {iten.node && <SpanTecnologia nome="Node" />}
                              {iten.postgressql && (
                                <SpanTecnologia nome="Postgressql" />
                              )}
                              {iten.supabase && (
                                <SpanTecnologia nome="Supabase" />
                              )}
                              {iten.firebase && (
                                <SpanTecnologia nome="Firebase" />
                              )}
                              {iten.figma && <SpanTecnologia nome="Figma" />}
                            </div>

                            <div className="w-full flex  gap-6 pt-2 mt-auto">
                              <Link
                                target="_blank"
                                href={iten.github}
                                className="w-full border-sky-800 py-2 transition duration-300 hover:bg-sky-900/60 text-gray-100  font-light text-sm m-0 p-0 cursor-pointer flex rounded-lg items-center gap-2 relative border justify-center "
                              >
                                <PiGithubLogo size={20} className="" />
                                Código
                              </Link>
                              <Link
                                target="_blank"
                                href={iten.url}
                                className="w-full transition duration-300 hover:bg-neutral-700/60 relative flex items-center justify-center py-2 bg-neutral-700 text-gray-100 rounded-lg text-sm gap-2 cursor-pointer"
                              >
                                <ExternalLink size={20} className="" /> Projeto
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-gray-100" />
            <CarouselNext className="text-gray-100" />
          </Carousel>
        </section>
      </section>
    </>
  );
}

export function SpanTecnologia({ nome }: { nome: string }) {
  return (
    <span className="border text-[11px] py-1 px-4 rounded-full border-blue-400 bg-blue-600/5 text-blue-400 ">
      {nome}
    </span>
  );
}
