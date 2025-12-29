import { CardModal } from "../Card";

import Title from "../title";
import { User, Database, Star } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { FaCode } from "react-icons/fa";
import { Highlighter } from "@/components/ui/highlighter";
export default function SobreMim() {
  return (
    <CardModal>
      <article className="my-12">
        <Title icon={<User />} titulo="Sobre mim" />
      </article>

      <article className="mt-6 mb-8 text-gray-200 text-4xl  tracking-wide">
        <h1 className="">
          Prazer em{" "}
          <AuroraText className="font-semibold">conhecê-lo!</AuroraText>{" "}
        </h1>
      </article>
      <div
        className="grid grid-cols-2 container relative gap-12 text-lg py-20  h-full tracking-wider leading-10 text-justify 
         max-sm:text-start max-sm:text-[16px] text-white p-8  "
      >
        <section className="grid  gap-6 text-gray-200/70 text-sm ml-20">
          <p>
            Sou desenvolvedor{" "}
            <Highlighter action="underline" color="#FF9800">
              Front-end
            </Highlighter>{" "}
            com foco na construção de interfaces modernas, escaláveis e
            orientadas à experiência do usuário. Atuo principalmente com{" "}
            <Highlighter action="underline" color="#61DAFB">
              {" "}
              React
            </Highlighter>{" "}
            e{" "}
            <Highlighter action="highlight" color="#1e2939">
              Next.js{" "}
            </Highlighter>
            , aplicando boas práticas de componentização, organização de código
            e performance em aplicações web.
          </p>
          <p>
            Tenho experiência no desenvolvimento de aplicações que consomem{" "}
            <Highlighter action="box" color="#e12afb">
              APIs REST
            </Highlighter>{" "}
            , gerenciamento de estado, integração com serviços externos e
            preocupação constante com acessibilidade, responsividade e
            consistência visual. Meu trabalho no Front-end vai além da
            interface: busco compreender o fluxo completo da aplicação para
            entregar soluções coesas e funcionais
          </p>
          <p>
            Embora meu foco seja Front-end, possuo conhecimento em{" "}
            <Highlighter action="highlight" color="#2b0249">
              Back-end{" "}
            </Highlighter>{" "}
            com{" "}
            <Highlighter action="circle" color="#339933">
              Node.js
            </Highlighter>{" "}
            e Express, o que me permite colaborar de forma mais eficiente em
            arquiteturas full stack, entendendo regras de negócio, estrutura de
            dados e comunicação entre camadas.
          </p>
          <p>
            Busco constantemente evoluir tecnicamente, aprimorando a qualidade
            do código, a experiência do usuário e a manutenibilidade das
            aplicações, sempre com uma abordagem pragmática e orientada a
            produto.
          </p>
        </section>

        <section className="grid gap-6 items-center justify-center">
          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4">
            <CardContent className="flex items-start pt-4 gap-4">
              {" "}
              <span className=" p-2 rounded-lg bg-[#03243a]">
                <FaCode size={20} className="text-sky-600" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Front-End</h2>
                <span className="text-[12px] text-gray-200/60 ">
                  Interfaces modernas e responsivas com foco na experiência do
                  usuário
                </span>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4">
            <CardContent className="flex items-start pt-4 gap-4">
              {" "}
              <span className=" p-2 rounded-lg bg-[#2b0249]">
                <Database size={20} className="text-fuchsia-600" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Back-End</h2>
                <span className="text-[12px] text-gray-200/60 ">
                  Sistemas seguros e escaláveis, com arquiteturas bem
                  estruturadas
                </span>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4">
            <CardContent className="flex items-start pt-4 gap-4">
              {" "}
              <span className=" p-2 rounded-lg bg-green-950">
                <Star size={20} className="text-green-600" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Qualidade</h2>
                <span className="text-[12px] text-gray-200/60 ">
                  Código limpo, versionamento com Git e práticas ágeis de
                  desenvolvimento
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        </section>
      </div>
    </CardModal>
  );
}
