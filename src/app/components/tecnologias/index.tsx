"use client";

import Title from "../title";
import { AuroraText } from "@/components/ui/aurora-text";
import { BeemFront } from "@/components/ui/BemFront";
import { BeemBack } from "@/components/ui/BemBack";
import { BeemSkill } from "@/components/ui/BeemSkill";
import { FaCode } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Tecnologias() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col container items-center">
      <article className="mb-12 mt-20 max-sm:m-0">
        <Title icon={<FaCode />} titulo={t("tech_title")} />
      </article>

      <article
        className="mt-2  text-gray-200 text-4xl  tracking-wide flex flex-col items-center gap-6 
      max-sm:text-3xl"
      >
        <h1 className="text-center">
          Skills &{" "}
          <AuroraText className="font-semibold ">{t("tech_subtitle").split("& ")[1] || "Ferramentas"}</AuroraText>{" "}
        </h1>
        <p className="text-[12px] text-gray-200/60 text-center">
          {t("tech_description")}
        </p>
      </article>
      <section
        id="tecnologia"
        className=" w-full  text-white flex justify-center
        max-sm:p-0 max-w-[1800px] mx-auto 
        "
      >
        <div className="w-full grid grid-cols-3 max-sm:grid-cols-1  justify-between mt-24 gap-18 ">
          <article
            className=" w-full "
            data-aos-delay="200"
            data-aos="fade-right"
          >
            <article className="flex gap-2 items-center justify-center">
              <span className="text-2xl text-center"> {t("tech_frontend")} </span>
            </article>
            <BeemFront />
          </article>

          <article className=" w-full" data-aos-delay="200" data-aos="fade-up">
            <article className="flex gap-2 items-center justify-center">
              <span className="text-2xl text-center"> {t("tech_backend")} </span>
            </article>
            <BeemBack />
          </article>

          <article
            className="w-full "
            data-aos-delay="200"
            data-aos="fade-left"
          >
            <article className="flex gap-2 items-center justify-center">
              <span className="text-2xl text-center"> {t("tech_tools")} </span>
            </article>
            <BeemSkill />
          </article>
        </div>
      </section>
    </div>
  );
}
