import Modal from "../modal";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
export default function Sobre() {
  return (
    <Modal>
      <div
        className="flex flex-col text-lg  tracking-wider leading-10 text-justify gap-2 
      max-sm:text-start max-sm:text-[16px]
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
          Estou no <strong>último semestre</strong> do curso Tecnólogo em
          <strong> Análise e Desenvolvimento de Sistemas</strong> na UNIP, com 2
          anos de duração. Tenho conhecimento em inglês (intermediário).
        </p>

        <p>
          <strong>
            <span className="text-2xl">📚</span> Especialização:
          </strong>{" "}
          Como desenvolvedor <strong>Full Stack</strong>, tenho especialização
          em React.js{" "}
          <SiReact size={25} className="mx-2 inline text-blue-500" />, Next.js{" "}
          <SiNextdotjs size={25} className="mx-2 inline text-white" />,
          TypeScript{" "}
          <SiTypescript
            size={25}
            className="mx-2 inline text-blue-500 bg-white"
          />
          , e Node.js{" "}
          <SiNodedotjs size={25} className="mx-2 inline text-green-600" />.
          Também possuo experiência com React Native{" "}
          <TbBrandReactNative size={25} className="mx-2 inline text-blue-500" />
          , Expo , Shadcn UI e Supabase .Minhas habilidades incluem HTML,
          JavaScript , CSS, Tailwind CSS{" "}
          <SiTailwindcss size={25} className="mx-2 inline text-cyan-400" />,
          SASS , Bootstrap , Git{" "}
          <SiGit size={25} className="mx-2 inline text-orange-500" />, GitHub ,
          Firebase , Postgresql{" "}
          <SiPostgresql size={25} className="mx-2 inline text-blue-600" />,
          Express e Prisma . Além disso, tenho domínio em{" "}
          <strong>Web Design</strong>, com foco em prototipação e design de
          interfaces usando{" "}
          <strong>
            Figma <SiFigma size={25} className="mx-2 inline text-violet-600" />
          </strong>
          .
        </p>

        <p>
          <strong>
            <span className="text-2xl"> 💻</span> Profissão:
          </strong>{" "}
          Atualmente atuo como Desenvolvedor Full Stack, construindo aplicações
          web com React.js, Next.js e Node.js. Estou sempre em busca do código
          perfeito, mas aceitando que bugs fazem parte da vida.
        </p>
        <p>
          <strong>
            <span className="text-2xl"> 🔮</span> Futuro:
          </strong>{" "}
          Meu objetivo é me aprofundar em automação e inteligência artificial,
          explorando ferramentas como <strong>n8n</strong> e buscando criar
          fluxos de trabalho inteligentes que otimizem processos e melhorem a
          produtividade.
          <FaBrain size={25} className="mx-2 inline text-white" />
        </p>
      </div>
    </Modal>
  );
}
