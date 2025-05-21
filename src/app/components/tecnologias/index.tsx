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

export default function Tecnologias() {
  return (
    <div className="w-full bg-black text-white py-10 flex justify-center">
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Front-End */}
        <div className="border rounded-xl p-6 flex flex-col items-center justify-between min-h-[300px]">
          <h2 className="text-2xl font-semibold text-center mb-6">Front-End</h2>
          <div className="grid grid-cols-3 gap-4 justify-items-center w-full">
            <SiHtml5 size={40} />
            <SiJavascript size={40} />
            <SiReact size={40} />
            <SiTypescript size={40} />
            <SiNextdotjs size={40} />
            <SiTailwindcss size={40} />
          </div>
        </div>

        {/* UI/UX */}
        <div className="border rounded-xl p-6 flex flex-col items-center justify-between min-h-[300px]">
          <h2 className="text-2xl font-semibold text-center mb-6">UI / UX</h2>
          <div className="grid grid-cols-3 gap-4 justify-items-center w-full">
            <SiCss3 size={40} />
            <SiBootstrap size={40} />
            <FaSass size={40} />
            <SiTailwindcss size={40} />
          </div>
        </div>

        {/* Back-End */}
        <div className="border rounded-xl p-6 flex flex-col items-center justify-between min-h-[300px]">
          <h2 className="text-2xl font-semibold text-center mb-6">Back-End</h2>
          <div className="grid grid-cols-3 gap-4 justify-items-center w-full">
            <SiNodedotjs size={40} />
            <SiFirebase size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
