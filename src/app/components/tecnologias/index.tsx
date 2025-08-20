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
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { CardTecnologia, TitleTecnologia } from "./cardTecnologia";

export default function Tecnologias() {
  return (
    <div className=" bg-black">
      <section
        id="tecnologia"
        className=" content float-right text-white py-10 flex justify-center
        max-sm:p-0
        "
      >
        <div
          className="w-9/10 grid grid-cols-3
          max-sm:w-full max-sm:grid-cols-1
        "
        >
          {/* Front-End */}
          <article
            className="p-6 flex flex-col items-center
          max-sm:p-0  max-sm:pt-5
          "
          >
            <TitleTecnologia titulo="Front-End" />
            <div
              className="flex flex-wrap  gap-15 py-2 justify-center  my-15
               max-sm:gap-15 
            "
            >
              <CardTecnologia text="HTML5" icon={SiHtml5} />

              <CardTecnologia text="JavaScript" icon={SiJavascript} />
              <CardTecnologia text="TypeScript" icon={SiTypescript} />
              <CardTecnologia text="React" icon={SiReact} />
              <CardTecnologia text="Next.js" icon={SiNextdotjs} />
            </div>
          </article>

          <article className=" rounded-xl p-6 flex flex-col items-center  min-h-[300px]">
            <TitleTecnologia titulo="Design UI/UX" />
            <div className="flex flex-wrap  gap-15 py-2 justify-center w-full my-15">
              <CardTecnologia text={"CSS3"} icon={SiCss3} />
              <CardTecnologia text={"Bootstrap"} icon={SiBootstrap} />
              <CardTecnologia text={"Sass"} icon={FaSass} />
              <CardTecnologia text={"Tailwind"} icon={SiTailwindcss} />
              <CardTecnologia text={"Figma"} icon={SiFigma} />
            </div>
          </article>

          <article className=" rounded-xl p-6 flex flex-col items-center  min-h-[300px]">
            <TitleTecnologia titulo="Back-End" />
            <div className="flex flex-wrap  gap-15 py-2 justify-center w-full my-15">
              <CardTecnologia text={"Node.js"} icon={SiNodedotjs} />
              <CardTecnologia text={"Firebase"} icon={SiFirebase} />
              <CardTecnologia text={"PostgreSQL"} icon={SiPostgresql} />
              <CardTecnologia text={"Prisma"} icon={SiPrisma} />
              <CardTecnologia text={"Express"} icon={SiExpress} />
            </div>
          </article>

          {/* UI/UX */}
        </div>
      </section>
    </div>
  );
}
