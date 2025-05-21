import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";

import Modal from "../modal";
import { ProjetoProps } from "../projeto";

interface ShowModal {
  iten: ProjetoProps;
  handleClose: () => void;
}

export default function ShowModal({ iten, handleClose }: ShowModal) {
  console.log(iten);
  return (
    <section className=" flex justify-center fixed top-0 border h-full p-50  z-50">
      <Modal>
        <div className="flex text-xl flex-col relative gap-2 tracking-wider p-5 ">
          <FaRegWindowClose
            size={40}
            onClick={handleClose}
            className="absolute top-0 right-10 cursor-pointer text-red-500 transition duration-300 hover:scale-110"
          />
          <p>
            <strong className="text-2xl text-yellow-500">Nome :</strong>{" "}
            {iten.nome}
          </p>
          <p>
            <strong className="text-2xl text-yellow-500">Front-End :</strong>{" "}
            {iten.front}
          </p>
          {iten.back.length !== 0 && (
            <p>
              <strong className="text-2xl text-yellow-500">Back-End :</strong>{" "}
              {iten.back}
            </p>
          )}
          <p>
            <strong className="text-2xl text-yellow-500">Descrição :</strong>{" "}
            {iten.descricao}
          </p>
          <strong className="text-2xl text-yellow-500">Funcionalidade :</strong>
          {Array.isArray(iten.funcionalidade) &&
            iten.funcionalidade.map((doc, index) => (
              <ul key={index}>
                <li>* {doc}</li>
              </ul>
            ))}
          <p>
            <strong className="text-2xl text-yellow-500">Site :</strong>{" "}
            <Link
              href={iten.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              {" "}
              {iten.nome}
            </Link>
          </p>
        </div>
      </Modal>
    </section>
  );
}
