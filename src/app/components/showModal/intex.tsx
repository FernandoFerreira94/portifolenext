import {
  IoArrowBack,
  IoLogoGithub,
  IoGlobeOutline,
  IoLogoFigma,
} from "react-icons/io5";
import Link from "next/link";

import Modal from "../modal";
import { ProjetoProps } from "@/app/utils/type";

interface ShowModal {
  iten: ProjetoProps | null;
  handleClose: () => void;
}

export default function ShowModal({ iten, handleClose }: ShowModal) {
  console.log(iten);
  return (
    <section
      className=" flex justify-center  border h-full p-50 z-50
    max-sm:p-5 
    "
    >
      <Modal>
        <div
          className="flex text-xl flex-col relative gap-2 tracking-wider p-5 
        max-sm:p-1
        "
        >
          <IoArrowBack
            onClick={handleClose}
            className="absolute text-4xl top-0 right-10 cursor-pointer text-red-500 transition duration-300 hover:scale-110
            max-sm:right-0 max-sm:text-3xl
            "
          />
          <p>
            <strong className="text-2xl text-yellow-500">Nome :</strong>{" "}
            {iten?.nome}
          </p>
          <p>
            <strong className="text-2xl text-yellow-500">Front-End :</strong>{" "}
            {iten?.front}
          </p>
          {iten?.back.length !== 0 && (
            <p>
              <strong className="text-2xl text-yellow-500">Back-End :</strong>{" "}
              {iten?.back}
            </p>
          )}
          {iten?.database && (
            <p>
              <strong className="text-2xl text-yellow-500">Data Base :</strong>{" "}
              {iten?.database}
            </p>
          )}
          <p>
            <strong className="text-2xl text-yellow-500">Descrição :</strong>{" "}
            {iten?.descricao}
          </p>
          <strong className="text-2xl text-yellow-500">Funcionalidade :</strong>
          {Array.isArray(iten?.funcionalidade) &&
            iten?.funcionalidade.map((doc, index) => (
              <ul key={index}>
                <li>* {doc}</li>
              </ul>
            ))}
          {iten?.url && (
            <div className="flex gap-5  w-full justify-center mt-8">
              <span className="hover:scale-110 transition duration-800 text-blue-400  p-1 rounded-2xl  ">
                <Link href={iten.url} target="_blank">
                  <IoGlobeOutline size={40} />
                </Link>
              </span>
              {iten?.github && (
                <span className="hover:scale-110 transition duration-800  p-1 rounded-2xl  ">
                  <Link href={iten.github} target="_blank">
                    <IoLogoGithub size={40} />
                  </Link>
                </span>
              )}
              {iten?.figma && (
                <span className="hover:scale-110 transition duration-800  text-purple-600 p-1 rounded-2xl  ">
                  <Link href={iten.figmaUrl} target="_blank">
                    <IoLogoFigma size={40} />
                  </Link>
                </span>
              )}
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
}
