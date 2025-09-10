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
  SiExpo, // Adicionado para o Expo
  SiSupabase, // Adicionado para o Supabase
  SiShadcnui,
  SiStyledcomponents,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { CardTecnologia, TitleTecnologia } from "./cardTecnologia";

export default function Tecnologias() {
  return (
    <div className=" bg-gray-950/10 ">
      <section
        id="tecnologia"
        className="   text-white flex justify-center
        max-sm:p-0 max-w-[1800px] mx-auto
        "
      >
        <div
          className="w-9/10 grid grid-cols-3
          max-sm:w-full max-sm:grid-cols-1 
        "
        >
          <article
            className="p-6 flex flex-col items-center
          
          "
            data-aos-delay="200"
            data-aos="fade-right"
          >
            <TitleTecnologia titulo="Front-End" />
            <div
              className="flex flex-wrap gap-8 py-2 justify-center my-10
                max-sm:gap-4 
              "
            >
              <CardTecnologia text="JavaScript" icon={SiJavascript} />
              <CardTecnologia text="React" icon={SiReact} />
              <CardTecnologia text="Next.js" icon={SiNextdotjs} />
              <CardTecnologia text="TypeScript" icon={SiTypescript} />
              <CardTecnologia text="React Native" icon={TbBrandReactNative} />
              <CardTecnologia text="Expo" icon={SiExpo} />
              <CardTecnologia text="HTML5" icon={SiHtml5} />
            </div>
          </article>

          <article
            className="p-6 flex flex-col items-center
         
          "
            data-aos-delay="200"
            data-aos="fade-up"
          >
            <TitleTecnologia titulo="Design UI/UX" />
            <div
              className="flex flex-wrap gap-8 py-2 justify-center my-10
                max-sm:gap-4 
              "
            >
              <CardTecnologia text={"Tailwind"} icon={SiTailwindcss} />
              <CardTecnologia text={"Shadcn UI"} icon={SiShadcnui} />
              <CardTecnologia text={"Figma"} icon={SiFigma} />
              <CardTecnologia text={"Styled Comp"} icon={SiStyledcomponents} />
              <CardTecnologia text={"Sass"} icon={FaSass} />
              <CardTecnologia text={"Bootstrap"} icon={SiBootstrap} />
              <CardTecnologia text={"CSS3"} icon={SiCss3} />
            </div>
          </article>

          <article
            className="p-6 flex flex-col items-center
          
          "
            data-aos-delay="200"
            data-aos="fade-left"
          >
            <TitleTecnologia titulo="Back-End" />
            <div
              className="flex flex-wrap gap-8 py-2 justify-center my-10
                max-sm:gap-4 
              "
            >
              <CardTecnologia text={"Node.js"} icon={SiNodedotjs} />
              <CardTecnologia text={"PostgreSQL"} icon={SiPostgresql} />
              <CardTecnologia text={"Supabase"} icon={SiSupabase} />
              <CardTecnologia text={"Firebase"} icon={SiFirebase} />
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
