import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";

import Modal from "../modal";
import { ProjetoProps } from "../projeto";

interface ShowModal {
  iten: ProjetoProps | null;
  handleClose: () => void;
}

export default function ShowModal({ iten, handleClose }: ShowModal) {
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
          <FaRegWindowClose
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
            <p>
              <strong className="text-2xl text-yellow-500">Site :</strong>{" "}
              <Link href={iten.url} className="text-blue-400" target="_blank">
                {iten.nome}
              </Link>
            </p>
          )}
        </div>
      </Modal>
    </section>
  );
}
