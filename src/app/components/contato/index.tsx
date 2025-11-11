// components/Contato.tsx
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");
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
      setStatus("Mensagem enviada com sucesso!");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error(error);
      setStatus("Erro ao enviar. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div
      className="w-full bg-gray-950 mt-20 
    max-sm:mt-25 max-sm:px-2
    "
    >
      <section
        className="   pb-30 pt-20 text-white 
      "
      >
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-5">
          Entre em Contato.
        </h2>

        <form
          onSubmit={enviarEmail}
          className="max-w-xl mx-auto flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder="Seu nome"
            className="p-3 rounded bg-gray-800 outline-none"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="p-3 rounded bg-gray-800 border border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Sua mensagem"
            className="p-3 rounded bg-gray-800 h-40 resize-none outline-none"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={enviando}
            className={`bg-yellow-400 text-black font-bold py-2 px-4 rounded transition cursor-pointer ${
              enviando ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"
            }`}
          >
            {enviando ? "Enviando..." : "Enviar"}
          </button>

          {status && (
            <p
              className={`text-center mt-2 font-medium ${
                status.includes("sucesso") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
