"use client";
import { SiShadcnui, SiDocker, SiN8N, SiGit } from "react-icons/si";

import React, { forwardRef, useRef } from "react";
import { FaAws } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { FaFigma } from "react-icons/fa";
import { Star } from "lucide-react";
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

export function BeemSkill() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex  w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full  max-w-lg flex-col items-stretch justify-between gap-10 z-2">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <CardHover
              nome="Figma"
              descricao="Ferramenta de design colaborativo para criação e validação de interfaces."
              icon={<FaFigma size={30} className="text-[#A259FF]" />}
            />
          </Circle>

          <Circle ref={div5Ref}>
            <CardHover
              nome="Docker"
              descricao="Plataforma de conteinerização para padronizar ambientes de desenvolvimento e deploy."
              icon={<SiDocker size={30} className="text-[#2496ED]" />}
            />
            <SiDocker size={38} className="text-[#2496ED]" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <CardHover
              nome="AWS"
              descricao="Plataforma de cloud computing para infraestrutura, escalabilidade e serviços gerenciados."
              icon={<FaAws size={30} />}
            />
            <FaAws size={38} className="text-[#FF9900]" />
          </Circle>
          <Circle
            ref={div4Ref}
            className="size-16 bg-green-950 border-green-950"
          >
            <CardHover
              nome="Ferramentas"
              descricao="Recursos que aceleram produtividade, padronizam fluxos e reduzem erros no ciclo de desenvolvimento."
              icon={<Star size={30} className="text-green-600 " />}
            />
          </Circle>
          <Circle ref={div6Ref}>
            <CardHover
              nome="Shadcn UI"
              descricao="Biblioteca de componentes acessíveis e customizáveis para aplicações React."
              icon={<SiShadcnui size={30} className="text-neutral-300" />}
            />
            <SiShadcnui size={38} className="text-neutral-300" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <CardHover
              nome="N8N"
              descricao="Ferramenta de automação de fluxos e integrações entre sistemas."
              icon={<SiN8N size={30} className="text-[#EA4B71]" />}
            />
            <SiN8N size={38} className="text-[#EA4B71]" />
          </Circle>
          <Circle ref={div7Ref}>
            <CardHover
              nome="Git"
              descricao="Sistema de controle de versão para rastrear mudanças e colaborar em equipe."
              icon={<SiGit size={30} className="text-[#F05032]" />}
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
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
