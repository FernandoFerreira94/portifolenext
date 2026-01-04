"use client";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiExpo,
  SiTailwindcss, // Adicionado para o Expo
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { FaCode } from "react-icons/fa";
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
        " flex size-14 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-950  shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function BeemFront() {
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
      className="relative flex  w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full  max-w-lg flex-col items-stretch justify-between gap-10 z-2">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <CardHover
              nome="JavaScript"
              descricao="Linguagem base da web, responsável por lógica, interatividade e comunicação com APIs."
              icon={<IoLogoJavascript size={30} className="text-[#F7DF1E] " />}
            />
          </Circle>
          <Circle ref={div8Ref}>
            <CardHover
              nome="Tailwind Css"
              descricao="Framework utilitário de estilos, rápido, previsível e sem abstrações desnecessárias."
              icon={
                <SiTailwindcss
                  size={30}
                  title="JavaScript"
                  className="text-[#1572B6]"
                />
              }
            />
          </Circle>

          <Circle ref={div5Ref}>
            <CardHover
              nome="React js"
              descricao="Biblioteca para construir interfaces reativas baseadas em componentes."
              icon={<SiReact size={38} className="text-[#61DAFB]" />}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <CardHover
              nome="Next js"
              descricao="Framework React com foco em performance, SEO e renderização híbrida."
              icon={<SiNextdotjs size={38} className="text-gray-100" />}
            />
          </Circle>
          <Circle ref={div4Ref} className="size-16 bg-[#03243a]">
            <CardHover
              nome="Front-end"
              descricao="Camada responsável pela interface, experiência do usuário e integração com o back-end."
              icon={<FaCode size={38} className="text-sky-600" />}
            />
          </Circle>
          <Circle ref={div6Ref}>
            <CardHover
              nome="Typescript"
              descricao="Linguagem de programação orientada a objetos e tipada, desenvolvida pela Microsoft."
              icon={<SiTypescript size={38} className="text-[#3178C6]" />}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <CardHover
              nome="React Native"
              descricao="Framework para desenvolvimento de aplicativos nativos para iOS e Android."
              icon={<TbBrandReactNative size={38} className="text-[#61DAFB]" />}
            />
          </Circle>

          <Circle ref={div7Ref}>
            <CardHover
              nome="Expo"
              descricao="Camada sobre React Native que simplifica build, deploy e acesso a APIs nativas."
              icon={<SiExpo size={38} className="text-gray-100" />}
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
        fromRef={div8Ref}
        toRef={div4Ref}
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
