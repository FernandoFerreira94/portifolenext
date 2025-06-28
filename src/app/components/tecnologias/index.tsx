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
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

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
            <h2 className="text-4xl font-semibold text-center  mt-3 mb-6">
              Front-End
            </h2>
            <div
              className="flex flex-wrap  gap-15 py-2 justify-center  my-15
               max-sm:gap-15 
            "
            >
              <div
                className=" min-w-[110px] flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
              max-sm:h-35
              "
              >
                {" "}
                <SiHtml5 size={50} color="#9370db" title="HTML5" />
                <p>HTML5 </p>
              </div>
              <div
                className="  min-w-[110px] flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
              max-sm:h-35
              "
              >
                <SiJavascript size={50} color="#9370db" title="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div
                className="  min-w-[110px] flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
              max-sm:h-35
              "
              >
                {" "}
                <SiReact size={50} color="#9370db" title="React.js" />
                <p>React.js</p>
              </div>
              <div
                className="  min-w-[110px] flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
              max-sm:h-35
              
              "
              >
                {" "}
                <SiTypescript size={50} color="#9370db" title="TypeScript" />
                <p>TypeScript</p>
              </div>
              <div
                className="  min-w-[110px] flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
              max-sm:h-35
              "
              >
                {" "}
                <SiNextdotjs size={50} color="#9370db" title="Next.js" />
                <p>Next.js</p>
              </div>
            </div>
          </article>

          <article className=" rounded-xl p-6 flex flex-col items-center  min-h-[300px]">
            <h2 className="text-4xl font-semibold text-center  mt-3 mb-6">
              UI / UX
            </h2>
            <div className="flex flex-wrap  gap-15 py-2 justify-center w-full my-15">
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                {" "}
                <SiCss3 size={50} color="#9370db" title="CSS3" />
                <p>CSS3 </p>
              </div>
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                <SiBootstrap size={50} color="#9370db" title="Bootstrap" />
                <p>Bootstrap</p>
              </div>
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                {" "}
                <SiTailwindcss size={50} color="#9370db" title="Tailwind" />
                <p>Tailwind</p>
              </div>
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                {" "}
                <FaSass size={50} color="#9370db" title="Sass" />
                <p>Sass</p>
              </div>
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                <SiFigma size={50} color="#9370db" title="Figma" />
                <p>Figma</p>
              </div>
            </div>
          </article>

          <article className=" rounded-xl p-6 flex flex-col items-center  min-h-[300px]">
            <h2 className="text-4xl font-semibold text-center  mt-3 mb-6">
              Back-End
            </h2>
            <div className="flex flex-wrap  gap-15 py-2 justify-center w-full my-15">
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                {" "}
                <SiNodedotjs size={50} color="#9370db" title="Node.js" />
                <p>Node.js</p>
              </div>
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                {" "}
                <SiExpress size={50} color="#9370db" title="Express" />
                <p>Express</p>
              </div>
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                {" "}
                <SiPostgresql size={50} color="#9370db" title="PostgreSQL" />
                <p>PostgreSQL</p>
              </div>
              <div
                className="  min-w-[110px]  flex flex-col items-center gap-3  justify-center
              border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
              h-38 w-2/8 rounded-[20px_0_20px_0]
              card text-[12px] transition duration-500 hover:scale-105 cursor-pointer tracking-widest
               max-sm:h-35
              "
              >
                <SiFirebase size={50} color="#9370db" title="FireBase" />
                <p>FireBase</p>
              </div>
            </div>
          </article>

          {/* UI/UX */}
        </div>
      </section>
    </div>
  );
}
