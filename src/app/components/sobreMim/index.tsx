import Modal from "../modal";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
export default function Sobre() {
  return (
    <Modal>
      <div
        className="flex flex-col text-xl tracking-wider leading-10 text-justify gap-2 
      max-sm:text-start max-sm:text-[22px]
      "
      >
        <p>
          <strong>
            <span className="text-2xl"> 📅</span> Idade:
          </strong>{" "}
          31 anos.
        </p>
        <p>
          <strong>
            <span className="text-2xl"> 🏠</span> Residência:
          </strong>{" "}
          São José dos Campos, SP.
        </p>
        <p>
          <strong>
            <span className="text-2xl"> 🎓</span> Educação:
          </strong>{" "}
          Atualmente estou no <strong>último semestre</strong> do curso
          Tecnólogo em
          <strong> Análise e Desenvolvimento de Sistemas</strong> na UNIP
          (Universidade Paulista), com duração de 2 anos. Estudo inglês há 2
          anos (ainda não sou fluente, mas já consigo pedir pizza sem problemas
          rs). Além disso, estou me aprofundando em <strong>n8n</strong> para
          automação de fluxos e integrações.
        </p>

        <p>
          <strong>
            <span className="text-2xl">📚</span> Formação:
          </strong>{" "}
          Desenvolvedor <strong>Full Stack</strong> com especialização em
          React.js
          <SiReact size={25} className="mx-2 inline text-blue-500" />, Next.js
          <SiNextdotjs size={25} className="mx-2 inline text-white" />,
          TypeScript
          <SiTypescript
            size={25}
            className="mx-2 inline text-blue-500 bg-white"
          />
          , e Node.js
          <SiNodedotjs size={25} className="mx-2 inline text-green-600" />.{" "}
          <strong>Web Design</strong> com foco em prototipação e design de
          interfaces no{" "}
          <strong>
            Figma <SiFigma size={25} className="mx-2 inline text-violet-600" />
          </strong>
          .
        </p>

        <p>
          <strong>
            <span className="text-2xl"> 💻</span> Profissão:
          </strong>{" "}
          Atualmente atuando como Desenvolvedor Full stack, lidando com
          aplicações web em React.js, Next.js e Node.js (sempre em busca do
          código perfeito, mas aceitando que bugs fazem parte da vida ).
        </p>
        <p>
          <strong>
            <span className="text-2xl"> 🛠️</span> Habilidades:
          </strong>{" "}
          Conhecimento sólido em HTML, CSS, JavaScript, React.js, TypeScript,
          Next.js, Tailwind CSS, SASS, Bootstrap, Git, GitHub, JQuery, Node.js,
          Firebase e Postgressql. (Meu cinto de utilidades está sempre preparado
          para qualquer desafio).
        </p>
        <p>
          <strong>
            <span className="text-2xl"> 🔮</span> Futuro:
          </strong>{" "}
          Busco ingressar no mundo do desenvolvimento de aplicações mobile
          <FaMobileAlt
            size={25}
            className="mx-2 inline text-white
            "
          />
          . Porque não adicionar mais uma camada de complexidade à vida? rs
        </p>
      </div>
    </Modal>
  );
}
