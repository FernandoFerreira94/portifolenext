import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import {
  SiShadcnui,
  SiDocker,
  SiN8N,
  SiGit,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSupabase,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiExpo,
  SiJavascript,
  SiNuxtdotjs,
  SiPrisma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative flex w-full  items-center justify-center  bg-transparent">
      <ScrollVelocityContainer className="text-xl  md:text-7xl md:leading-[5rem] bg-transparent text-white/30 flex gap-4">
        <ScrollVelocityRow
          baseVelocity={2}
          direction={1}
          className="text-4xl flex gap-4 bg-transparent py-4"
        >
          <SiReact className="mr-8" /> <SiNextdotjs className="mr-8" />{" "}
          <SiShadcnui className="mr-8" /> <SiDocker className="mr-8" />{" "}
          <FaAws className="mr-8" /> <FaFigma className="mr-8" />{" "}
          <SiN8N className="mr-8" /> <SiGit className="mr-8" />{" "}
          <SiHtml5 className="mr-8" /> <SiNodedotjs className="mr-8" />{" "}
          <SiSupabase className="mr-8" /> <SiFirebase className="mr-8" />{" "}
          <SiExpress className="mr-8" /> <SiN8N className="mr-8" />{" "}
          <SiTailwindcss className="mr-8" /> <SiTypescript className="mr-8" />{" "}
          <SiExpo className="mr-8" /> <SiJavascript className="mr-8" />{" "}
          <SiNuxtdotjs className="mr-8" /> <SiPrisma className="mr-8" />
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
