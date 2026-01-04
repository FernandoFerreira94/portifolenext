"use client";
import {
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  // Adicionado para o Expo
  SiSupabase, // Adicionado para o Supabase
  SiNestjs,
} from "react-icons/si";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { Database } from "lucide-react";
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
        " flex size-14 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-950 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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
      className="relative flex  w-full items-center justify-center overflow-hidden p-10 "
      ref={containerRef}
    >
      <div className="flex size-full  max-w-lg flex-col items-stretch justify-between gap-10 z-2">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <CardHover
              nome="Node.js"
              descricao="Ambiente de execução de JavaScript, baseado na plataforma V8 do Google."
              icon={<SiNodedotjs size={30} className="text-[#339933] " />}
            />
          </Circle>
          <Circle ref={div8Ref}>
            <CardHover
              nome="Nest.js"
              descricao="Framework Node.js para criar APIs RESTful e microserviços."
              icon={<SiNestjs size={30} className="text-[#E0234E]" />}
            />
          </Circle>
          <Circle ref={div5Ref}>
            <CardHover
              nome="PostgreSQL"
              descricao="Sistema de gerenciamento de banco de dados relacional."
              icon={<SiPostgresql size={30} className="text-[#336791]" />}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <CardHover
              nome="Supabase"
              descricao="Backend open source baseado em PostgreSQL com auth, storage e APIs automáticas."
              icon={<SiSupabase size={30} className="text-[#3ECF8E]" />}
            />
          </Circle>
          <Circle
            ref={div4Ref}
            className="size-16 bg-[#2b0249] border-[#2b0249]"
          >
            <CardHover
              nome="Back-end"
              descricao="Camada responsável por regras de negócio, persistência de dados, segurança e comunicação com clientes e serviços externos."
              icon={<Database size={38} className="text-fuchsia-600 " />}
            />
          </Circle>
          <Circle ref={div6Ref}>
            <CardHover
              nome="Firebase"
              descricao="Plataforma backend gerenciada com autenticação, banco e serviços prontos."
              icon={<SiFirebase size={30} className="text-[#FFCA28]" />}
            />
            <SiFirebase size={38} className="text-[#FFCA28]" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <CardHover
              nome="Prisma ORM"
              descricao="ORM moderno para modelar, consultar e manter consistência do banco de dados."
              icon={<SiPrisma size={30} className="text-gray-300" />}
            />
          </Circle>

          <Circle ref={div7Ref}>
            <CardHover
              nome="Express.js"
              descricao="Framework minimalista para criação de APIs HTTP no Node.js."
              icon={<SiExpress size={30} className="text-gray-100" />}
            />
            <SiExpress size={38} className="text-gray-100" />
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
