import { CardModal } from "../Card";
import Title from "../title";
import { User, Database, Star, Cloud } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { FaCode } from "react-icons/fa";
import { Highlighter } from "@/components/ui/highlighter";

export default function SobreMim() {
  return (
    <CardModal>
      <article className="my-12 max-sm:my-0">
        <Title icon={<User />} titulo="Sobre mim" />
      </article>

      <article
        className="mt-6 mb-8 text-gray-200 text-4xl tracking-wide 
        max-sm:m-0 max-sm:text-3xl"
      >
        <h1 className="text-center">
          Prazer em{" "}
          <AuroraText className="font-semibold">conhecê-lo!</AuroraText>
        </h1>
      </article>

      <div
        className="grid grid-cols-2 container relative gap-12 text-lg py-20 h-full tracking-wider leading-10 text-justify 
        max-sm:text-[16px] text-white p-8 max-sm:grid-cols-1 max-sm:p-5 max-sm:py-12"
      >
        <section className="grid max-sm:gap-5 gap-6 text-gray-200/70 text-sm ml-20 max-sm:m-0">
          <p>
            Sou{" "}
            <Highlighter action="underline" color="#FF9800">
              Full-Stack Developer
            </Highlighter>{" "}
            e fundador da{" "}
            <Highlighter action="highlight" color="#7FDFFF" >
              <span className="text-gray-800 pt-0.5">
              WebCodeFF
              </span>
                
            </Highlighter>
            , software house focada no desenvolvimento de sistemas web
            modernos, escaláveis e orientados a resultado. Atuo com{" "}
         
              React
          
            e{" "}
            <Highlighter action="highlight" color="#1e2939">
              <span className="p-2">

              Next.js
              </span>
            </Highlighter>{" "}
            no frontend, construindo interfaces de alta performance com foco
            total na experiência do usuário.
          </p>

          <p>
            No backend, desenvolvo APIs e sistemas completos com{" "}
          
              Node.js
          
            ,{" "}
            <Highlighter action="circle" color="#E0234E">
              <span className="
              p-2">

              NestJS
              </span>
            </Highlighter>{" "}
            e{" "}
            <Highlighter action="box" color="#e12afb">
              PostgreSQL
            </Highlighter>
            , usando Prisma como ORM e arquiteturas modulares prontas para
            produção. Tenho experiência real com deploy e infraestrutura na{" "}
            <Highlighter action="highlight" color="#2b0249">
              AWS
            </Highlighter>{" "}
            — Amplify, App Runner, RDS e S3.
          </p>

          <p>
            Um dos projetos que mais me orgulha é o{" "}
            <Highlighter action="highlight" color="#3D3C6C">
              Colinas Gestão de Ativos
            </Highlighter>
            , um ERP customizado em produção para o Shopping Colinas — com
            gestão de ordens de serviço, controle de estoque e rastreabilidade
            por centro de custo. Desenvolvo também soluções de{" "}
            <Highlighter action="underline" color="#39FF14">
              monitoramento IoT
            </Highlighter>{" "}
            com ESP32 e dashboards em tempo real para ambientes industriais.
          </p>

          <p>
            Minha abordagem é pragmática e orientada a produto: código limpo,
            arquitetura sólida e entrega que funciona em produção — não só em
            ambiente de desenvolvimento.
          </p>
        </section>

        <section className="grid gap-6 items-center justify-center">
          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4 max-sm:w-full">
            <CardContent className="flex items-start pt-4 gap-4">
              <span className="p-2 rounded-lg bg-[#03243a]">
                <FaCode size={20} className="text-sky-600" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Front-End</h2>
                <span className="text-[12px] text-gray-200/60">
                  Interfaces modernas e responsivas com React, Next.js e
                  TailwindCSS
                </span>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4 max-sm:w-full">
            <CardContent className="flex items-start pt-4 gap-4">
              <span className="p-2 rounded-lg bg-[#2b0249]">
                <Database size={20} className="text-fuchsia-600" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Back-End & APIs</h2>
                <span className="text-[12px] text-gray-200/60">
                  Sistemas escaláveis com NestJS, PostgreSQL e Prisma
                </span>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4 max-sm:w-full">
  <CardContent className="flex items-start pt-4 gap-4">
    <span className="p-2 rounded-lg bg-[#2d1a00]">
      <Cloud size={20} className="text-[#FF9900]" />
    </span>
    <CardDescription>
      <h2 className="text-sm mb-1">Cloud & Infra</h2>
      <span className="text-[12px] text-gray-200/60">
        Deploy em produção com AWS — Amplify, App Runner, RDS e S3
      </span>
    </CardDescription>
  </CardContent>
</Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4 max-sm:w-full">
  <CardContent className="flex items-start pt-4 gap-4">
    <span className="p-2 rounded-lg bg-[#0a1f0a]">
      <Star size={20} className="text-[#22c55e]" />
    </span>
    <CardDescription>
      <h2 className="text-sm mb-1">Qualidade</h2>
      <span className="text-[12px] text-gray-200/60">
        Clean code, arquitetura modular e entrega orientada a produto
      </span>
    </CardDescription>
  </CardContent>
</Card>
        </section>
      </div>
    </CardModal>
  );
}