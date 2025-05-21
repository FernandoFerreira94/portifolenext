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
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

import TypingEffect from "./components/TypeingEffect";

import Header from "./components/header";
import Title from "./components/title";
import Modal from "./components/modal";
import Sobre from "./components/sobreMim";
import Tecnologias from "./components/tecnologias";

export default function Home() {
  return (
    <div
      className="flex w-full content flex-col items-center relative float-right max-sm:float-none max-sm:w-full max-sm:mt-15"
      style={{ width: "calc(100% - 200" }}
    >
      <Header />
      <Title titulo="Seja bem-vindo" />
      <Modal>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl  text-gray-200 font-bold">
            Olá sou o Fernando Pedro.
          </h2>
          <span className="text-xl text-yellow-400">
            Desenvolvedor Frontend <TypingEffect text="React.js" />
          </span>
        </div>
      </Modal>
      <Title titulo="Sobre mim" />
      <Sobre />
      <Title titulo="Tecnologias" />
      <Tecnologias />
    </div>
  );
}
