"use client";

import {
  SiExpress,
  SiFirebase,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";
import React, { forwardRef, useRef } from "react";
import { Database } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { CardHover } from "@/app/components/hoverCard";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; title?: string }
>(({ className, children, title }, ref) => {
  return (
    <div
      title={title}
      ref={ref}
      className={cn(
        "flex size-14 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-950 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function BeemBack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="z-2 flex size-full max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <CardHover
              nome="Node.js"
              descricao="Ambiente de execucao JavaScript orientado a eventos, ideal para APIs, streaming e servicos em tempo real."
              icon={<SiNodedotjs size={30} className="text-[#339933]" />}
            />
          </Circle>
          <Circle ref={div8Ref}>
            <CardHover
              nome="NestJS"
              descricao="Framework opinionado para Node.js, focado em arquitetura modular, injecao de dependencia e APIs escalaveis."
              icon={<SiNestjs size={30} className="text-[#E0234E]" />}
            />
          </Circle>
          <Circle ref={div5Ref}>
            <CardHover
              nome="PostgreSQL"
              descricao="Banco relacional robusto com consistencia, consultas avancadas e alta confiabilidade para producao."
              icon={<SiPostgresql size={30} className="text-[#336791]" />}
            />
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <CardHover
              nome="Supabase"
              descricao="Backend open source com auth, storage, realtime e APIs sobre PostgreSQL."
              icon={<SiSupabase size={30} className="text-[#3ECF8E]" />}
            />
          </Circle>
          <Circle
            ref={div4Ref}
            className="size-16 border-[#2b0249] bg-[#2b0249]"
          >
            <CardHover
              nome="Back-end"
              descricao="Camada responsavel por regras de negocio, persistencia, seguranca e integracoes entre servicos."
              icon={<Database size={38} className="text-fuchsia-600" />}
            />
          </Circle>
          <Circle ref={div6Ref}>
            <CardHover
              nome="Firebase"
              descricao="BaaS com autenticacao, banco, funcoes e servicos gerenciados para acelerar entrega."
              icon={<SiFirebase size={30} className="text-[#FFCA28]" />}
            />
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <CardHover
              nome="Prisma ORM"
              descricao="ORM tipado para modelagem, migracoes e consultas com boa ergonomia em projetos TypeScript."
              icon={<SiPrisma size={30} className="text-gray-300" />}
            />
          </Circle>

          <Circle ref={div7Ref}>
            <CardHover
              nome="Express.js"
              descricao="Framework minimalista para construir APIs HTTP e middlewares no ecossistema Node.js."
              icon={<SiExpress size={30} className="text-gray-100" />}
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
