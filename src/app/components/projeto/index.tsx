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
import ImgFlume from "@/assets/imgFlume1.png";
import ImgAxion from "@/assets/imgAxion.png";
import ImgColinasAtivo from "@/assets/imgColinasAtivo.png";
import { FolderGit2 } from "lucide-react";
import Title from "../title";
import { AuroraText } from "@/components/ui/aurora-text";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/context/LanguageContext";

import { PiGithubLogo } from "react-icons/pi";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Card, CardContent } from "@/components/ui/card";
import { ordenarPorCriacaoAsc } from "@/app/actions/ordenarProjeto";
import { MagicCard } from "@/components/ui/magic-card";

function getProjectImage(nome: string) {
  switch (nome) {
    case "AyumiNails": return ImgAyumi;
    case "Finan Flow": return ImgFinaFlow;
    case "Prime Flix": return ImgPrimeFlix;
    case "Dev Motors": return ImgDevMotor;
    case "Dev Pizza": return ImgDevPizza;
    case "Mata Mosca": return ImgMataMosca;
    case "Dev Shop": return ImgDevShop;
    case "Task  +": return ImgTask;
    case "Coins Dev": return ImgCoinsDev;
    case "Gestão Colinas": return ImgGestaoColinas;
    case "Flume": return ImgFlume;
    case "Axion": return ImgAxion;
    case "Colinas Ativos": return ImgColinasAtivo;
    default: return imgProjeto;
  }
}

export default function Projetos() {
 
  const [projetosProfissioanis, setProjetosProfissionais] = useState<
    ProjetoProps[]
  >([]);
  const [expandedId, setExpandedId] = useState<number | null | string>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    async function init() {
      try {
        const profissionais = await fetchProjetosProfissionais();
        const projetoOrdenador = ordenarPorCriacaoAsc(profissionais);
        setProjetosProfissionais(projetoOrdenador);
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);

  return (
    <>
      <section className="w-full container mx-auto pb-12">
        <article className="w-full flex flex-col items-center mt-6 mb-8 text-gray-200 text-4xl  tracking-wide">
          <Title icon={<FolderGit2 />} titulo={t("projects_title")} />
          <h1 className="mt-10 max-sm:text-3xl text-center max-sm:m-0">
            {t("projects_subtitle").split("Projetos")[0]}
            <AuroraText className="font-semibold">Projetos</AuroraText>{" "}
          </h1>
          <p className="text-[12px] text-gray-200/60 text-center mt-6">
            {t("projects_category")}
          </p>
        </article>
      
        <section className="w-full flex items-center mx-auto  justify-center gap-20 mt-10 px-20 max-sm:px-0">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-4">
                      <div className="h-full flex flex-col bg-neutral-900/40 rounded-2xl p-4 gap-4 border border-white/5">
                        <Skeleton className="h-[250px] w-full rounded-xl" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-20 w-full" />
                        <div className="flex gap-2">
                          <Skeleton className="h-8 w-16 rounded-full" />
                          <Skeleton className="h-8 w-16 rounded-full" />
                        </div>
                        <div className="flex gap-4 mt-auto">
                          <Skeleton className="h-10 flex-1 rounded-lg" />
                          <Skeleton className="h-10 flex-1 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              ) : (
                projetosProfissioanis.map((iten) => (
                  <CarouselItem
                    key={iten.id}
                    className="md:basis-1/2 lg:basis-1/3 "
                  >
                    <div className=" h-full w-full">
                      <Card className="h-full w-full bg-transparent">
                        <MagicCard
        gradientColor={  "#D9D9D955"}
        className="p-0"
      >
                        <CardContent className=" h-full w-full p-0">
                          <div className="h-full w-full flex flex-col bg-neutral-900 rounded-2xl opacity-60 hover:opacity-100 transition duration-300 ease-in hover:scale-[1.01]">
                            <Image
                              src={getProjectImage(iten.nome)}
                              alt={iten.nome}
                              quality={100}
                              className="rounded-t-2xl object-cover h-[300px] w-full"
                            />

                            <div className="p-6 flex flex-col gap-4 flex-1">
                              <h1 className="text-gray-100 font-semibold tracking-wide text-lg">
                                {iten.nome}
                              </h1>

                              <p className="text-gray-300/60 text-[12px] leading-relaxed">
                                {iten.descricao.length > 200 &&
                                expandedId !== iten.id
                                  ? iten.descricao.slice(0, 200) + "..."
                                  : iten.descricao}
                                {iten.descricao.length > 200 && (
                                  <button
                                    onClick={() =>
                                      setExpandedId(
                                        expandedId === iten.id ? null : iten.id,
                                      )
                                    }
                                    className="ml-1 text-blue-400 hover:underline transition-all"
                                  >
                                    {expandedId === iten.id
                                      ? t("projects_view_less")
                                      : t("projects_view_more")}
                                  </button>
                                )}
                              </p>

                              <div className="flex gap-2 w-full flex-wrap">
                                {iten.html && <SpanTecnologia nome="Html" />}
                                {iten.javascript && <SpanTecnologia nome="Javascript" />}
                                {iten.react && <SpanTecnologia nome="React" />}
                                {iten.next && <SpanTecnologia nome="Next" />}
                                {iten.typescript && <SpanTecnologia nome="Typescript" />}
                                {iten.css && <SpanTecnologia nome="Css" />}
                                {iten.sass && <SpanTecnologia nome="Sass" />}
                                {iten.tailwind && <SpanTecnologia nome="Tailwind" />}
                                {iten.shancn && <SpanTecnologia nome="Shancn" />}
                                {iten.reactNative && <SpanTecnologia nome="React Native" />}
                                {iten.node && <SpanTecnologia nome="Node" />}
                                {iten.nest && <SpanTecnologia nome="Nest" />}
                                {iten.express && <SpanTecnologia nome="Express" />}
                                {iten.postgressql && <SpanTecnologia nome="Postgressql" />}
                                {iten.supabase && <SpanTecnologia nome="Supabase" />}
                                {iten.firebase && <SpanTecnologia nome="Firebase" />}
                                {iten.figma && <SpanTecnologia nome="Figma" />}
                              </div>

                              <div className="w-full pt-4 mt-auto">
                                <Drawer>
                                  <DrawerTrigger asChild>
                                    <button className="w-full bg-zinc-600/10 border border-zinc-200/60 text-zinc-200 hover:bg-zinc-600/20 font-medium py-2.5 rounded-xl text-sm transition-colors">
                                      Detalhes
                                    </button>
                                  </DrawerTrigger>
                                  <DrawerContent className="h-[70vh] bg-neutral-950 border-white/10 pb-12">
                                    <div className="mx-auto w-full max-w-5xl p-6 h-full flex flex-col">
                                      <DrawerHeader className="px-0 pt-0">
                                        <DrawerTitle className="text-2xl text-white">{iten.nome}</DrawerTitle>
                                        <DrawerDescription className="text-gray-400">
                                          Mais informações sobre o projeto
                                        </DrawerDescription>
                                      </DrawerHeader>
                                      
                                      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 flex-1 overflow-y-auto custom-scrollbar pr-2">
                                        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                                          <Image
                                            src={getProjectImage(iten.nome)}
                                            alt={iten.nome}
                                            quality={100}
                                            className="w-full h-auto object-cover max-h-full"
                                          />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                          <div>
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Sobre</h3>
                                            <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                                              {iten.descricao}
                                            </p>
                                          </div>
                                          
                                          <div>
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Tecnologias</h3>
                                            <div className="flex gap-2 w-full flex-wrap">
                                              {iten.html && <SpanTecnologia nome="Html" />}
                                              {iten.javascript && <SpanTecnologia nome="Javascript" />}
                                              {iten.react && <SpanTecnologia nome="React" />}
                                              {iten.next && <SpanTecnologia nome="Next" />}
                                              {iten.typescript && <SpanTecnologia nome="Typescript" />}
                                              {iten.css && <SpanTecnologia nome="Css" />}
                                              {iten.sass && <SpanTecnologia nome="Sass" />}
                                              {iten.tailwind && <SpanTecnologia nome="Tailwind" />}
                                              {iten.shancn && <SpanTecnologia nome="Shancn" />}
                                              {iten.reactNative && <SpanTecnologia nome="React Native" />}
                                              {iten.node && <SpanTecnologia nome="Node" />}
                                              {iten.nest && <SpanTecnologia nome="Nest" />}
                                              {iten.express && <SpanTecnologia nome="Express" />}
                                              {iten.postgressql && <SpanTecnologia nome="Postgressql" />}
                                              {iten.supabase && <SpanTecnologia nome="Supabase" />}
                                              {iten.firebase && <SpanTecnologia nome="Firebase" />}
                                              {iten.figma && <SpanTecnologia nome="Figma" />}
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <DrawerFooter className="px-0 pb-0 pt-6 flex-row gap-4 border-t border-white/5 mt-4">
                                        <Link
                                          target="_blank"
                                          href={iten.github}
                                          className="flex-1 border-sky-800/50 py-3 transition duration-300 hover:bg-sky-900/40 text-gray-100 font-medium text-sm rounded-xl flex items-center justify-center gap-2 border bg-sky-950/20"
                                        >
                                          <PiGithubLogo size={20} />
                                          {t("projects_code")}
                                        </Link>
                                        <Link
                                          target="_blank"
                                          href={iten.url}
                                          className="flex-1 transition duration-300 hover:bg-neutral-800 flex items-center justify-center py-3 bg-neutral-800/50 border border-white/10 text-gray-100 rounded-xl text-sm font-medium gap-2"
                                        >
                                          <ExternalLink size={20} />
                                          {t("projects_live")}
                                        </Link>
                                      </DrawerFooter>
                                    </div>
                                  </DrawerContent>
                                </Drawer>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        </MagicCard>
                      </Card>
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="text-gray-100 -left-12 max-sm:left-2 scale-110" />
            <CarouselNext className="text-gray-100 -right-12 max-sm:right-2 scale-110" />
          </Carousel>
        </section>
      </section>
    </>
  );
}

export function SpanTecnologia({ nome }: { nome: string }) {
  return (
    <span className="border text-xs py-1 px-3 rounded-full border-blue-400/30 bg-blue-400/5 text-blue-400 font-medium">
      {nome}
    </span>
  );
}
