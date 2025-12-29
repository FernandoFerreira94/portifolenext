// components/Contato.tsx
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../title";
import { PhoneCall } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BorderBeam } from "@/components/ui/border-beam";
import { Textarea } from "@/components/ui/textarea";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";
import Link from "next/link";
export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [enviando, setEnviando] = useState(false);

  const enviarEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
    };
    try {
      setEnviando(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Mensagem enviada com sucesso!");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div
      className="w-full container mx-auto mt-20 flex flex-col items-center  mb-20
    max-sm:mt-25 max-sm:px-2
    "
    >
      {" "}
      <article className="w-full flex flex-col items-center mt-6 mb-8 text-gray-200 text-4xl  tracking-wide">
        <Title icon={<PhoneCall />} titulo="Contato" />
        <h1 className="mt-6">
          Vamos trabalhar{" "}
          <AuroraText className="font-semibold"> juntos?</AuroraText>{" "}
        </h1>
        <p className="text-sm text-gray-200/60 text-center mt-8 w-1/2">
          Disponível para novos projetos e colaborações. Vamos discutir como
          transformar ideias em soluções bem executadas.
        </p>
      </article>
      <section className="w-3/4 text-white flex  border border-gray-200/10 rounded-xl bg-neutral-900 z-20 relative  px-12 py-8">
        <Card className="w-full max-w-xl text-gray-100 relative ">
          <CardHeader>
            <CardDescription className="text-gray-200/60 text-[12px]">
              Obrigada por visitar meu portfólio. Para mais informações ou para
              conversar sobre oportunidades, fique à vontade para entrar em
              contato.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="font-sans relative" onSubmit={enviarEmail}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Input
                    placeholder="Seu nome:"
                    className="text-[12px]  bg-gray-800 border border-gray-600"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Seu email:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" bg-gray-800 border border-gray-600"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Textarea
                    id="message"
                    placeholder="Sua mensagem:"
                    className="bg-gray-800 border border-gray-600"
                    rows={6}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button
                variant="outline"
                type="submit"
                className={`relative mt-6 bg-yellow-400 w-full text-gray-800 font-semibold py-2 px-4 rounded-lg transition cursor-pointer ${
                  enviando
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-yellow-500"
                }`}
              >
                {enviando ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4 justify-center items-center w-full ">
          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4">
            <CardContent className="flex items-start pt-4 gap-4 ">
              {" "}
              <span className=" p-2 rounded-lg bg-[#03243a]">
                <FaGithub size={20} className="text-gray-200" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">GitHub</h2>
                <Link
                  target="_blank"
                  href="https://github.com/FernandoFerreira94"
                  className="text-[12px] text-gray-200/60  hover:text-gray-50  transition duration-300 "
                >
                  https://github.com
                </Link>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4">
            <CardContent className="flex items-start pt-4 gap-4">
              {" "}
              <span className=" p-2 rounded-lg bg-[#03243a]">
                <FaLinkedin size={20} className="text-gray-200" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Linkedin</h2>
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/fernando-ferreira-78927b203/"
                  }
                  className="text-[12px] text-gray-200/60  hover:text-gray-50  transition duration-300 "
                >
                  https://www.linkedin.com
                </Link>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4">
            <CardContent className="flex items-start pt-4 gap-4">
              {" "}
              <span className=" p-2 rounded-lg bg-[#03243a]">
                <FaInstagram size={20} className="text-gray-200" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Instagram</h2>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/webcodeff/"}
                  className="text-[12px] text-gray-200/60  hover:text-gray-50  transition duration-300 "
                >
                  https://www.instagram.com
                </Link>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <BorderBeam size={400} duration={15} />
      </section>
    </div>
  );
}
