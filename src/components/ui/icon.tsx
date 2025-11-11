"use client";

import { IconCloud } from "@/components/ui/icon-cloud";
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
  SiBootstrap,
  SiFigma,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiExpo,
  SiSupabase,
  SiShadcnui,
  SiStyledcomponents,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

// 1. Defina um array de referências aos componentes de ícones
const IconComponents = [
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiBootstrap,
  SiFigma,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiExpo,
  SiSupabase,
  SiShadcnui,
  SiStyledcomponents,
  FaSass,
  TbBrandReactNative,
];

// 2. Mapeie o array de referências para elementos React renderizáveis
const renderedIcons = IconComponents.map((Icon, index) => (
  // O componente IconCloud espera um elemento React que renderize um SVG.
  // Você pode customizar o tamanho (size) e a cor (color) aqui.
  <Icon key={index} size={90} color="#d1d5dc " className="bg-gray-300" />
));

// O array 'images' que você tinha, com URLs, não é mais necessário.

export function IconCloudDemo() {
  return (
    <div className="  ">
      {/* 3. Passe o array de elementos renderizados para a prop 'icons' */}
      <IconCloud icons={renderedIcons} />
      {/* Certifique-se de que a prop 'images' foi removida ou está vazia */}
    </div>
  );
}
