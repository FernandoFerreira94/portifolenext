"use client";

import { SiClaude, SiDocker, SiGit, SiGithub, SiN8N } from "react-icons/si";
import React, { forwardRef, useRef } from "react";
import { FaAws, FaFigma } from "react-icons/fa";
import { Bot, Star } from "lucide-react";

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

export function BeemSkill() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="z-2 flex size-full max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <CardHover
              nome="Figma"
              descricao="Ferramenta de design colaborativo para exploracao visual, prototipagem e validacao de interfaces."
              icon={<FaFigma size={30} className="text-[#A259FF]" />}
            />
          </Circle>
          <Circle ref={div8Ref}>
            <CardHover
              nome="Claude AI"
              descricao="Assistente tecnico usado para acelerar implementacao, revisar codigo e apoiar decisoes de arquitetura."
              icon={<SiClaude size={30} className="text-[#D97757]" />}
            />
          </Circle>
          <Circle ref={div5Ref}>
            <CardHover
              nome="Docker"
              descricao="Plataforma de conteinerizacao para padronizar ambiente local, build e deploy."
              icon={<SiDocker size={30} className="text-[#2496ED]" />}
            />
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <CardHover
              nome="AWS"
              descricao="Plataforma de cloud computing para infraestrutura, redes, bancos, deploy e escalabilidade."
              icon={<FaAws size={30} className="text-[#FF9900]" />}
            />
          </Circle>
          <Circle
            ref={div4Ref}
            className="size-16 border-green-950 bg-green-950"
          >
            <CardHover
              nome="Ferramentas"
              descricao="Recursos que aumentam produtividade, padronizam fluxo de trabalho e reduzem friccao no desenvolvimento."
              icon={<Star size={30} className="text-green-600" />}
            />
          </Circle>
          <Circle ref={div6Ref}>
            <CardHover
              nome="GitHub"
              descricao="Hospedagem de codigo com colaboracao, pull requests, automacoes e pipelines de CI/CD."
              icon={<SiGithub size={30} className="text-gray-100" />}
            />
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <CardHover
              nome="n8n"
              descricao="Automacao de fluxos e integracoes entre servicos, APIs e processos internos."
              icon={<SiN8N size={30} className="text-[#EA4B71]" />}
            />
          </Circle>
          <Circle ref={div9Ref}>
            <CardHover
              nome="Agentes de IA"
              descricao="Automacoes e agentes implementados nos projetos para atendimento, assistencia contextual, execucao de tarefas e ganho operacional."
              icon={<Bot size={30} className="text-cyan-300" />}
            />
          </Circle>
          <Circle ref={div7Ref}>
            <CardHover
              nome="Git"
              descricao="Controle de versao distribuido para historico de mudancas, branches e colaboracao segura."
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
        fromRef={div9Ref}
        toRef={div4Ref}
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
