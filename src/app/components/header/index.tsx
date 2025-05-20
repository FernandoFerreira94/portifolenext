"use client";
import { useState } from "react";
import { ImProfile } from "react-icons/im";
import { FaInternetExplorer } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import {
  IoMdCloudDownload,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import Image from "next/image";

import Perfil from "../../../assets/perfil.png";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-black/30 text-gray-400 flex flex-col justify-baseline  transition-all duration-500 ${
        isCollapsed ? "w-[100px]" : "w-[160px]"
      }`}
    >
      {/* Conteúdo do topo */}
      <div className="flex flex-col items-center gap-6 ">
        <Image
          src={Perfil}
          alt="Perfil"
          className={`rounded-full object-cover transition-all duration-300 ${
            isCollapsed ? "w-20 h-20" : "w-33 h-33"
          }`}
        />

        <nav className="flex flex-col w-full ">
          <div className="flex items-center  px-3 py-3 gap-2  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900">
            <ImProfile size={32} />
            {!isCollapsed && (
              <span className="whitespace-nowrap">Sobre mim</span>
            )}
          </div>
          <div className="flex items-center  px-3 py-3 gap-2  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900">
            <FaInternetExplorer size={32} />
            {!isCollapsed && (
              <span className="whitespace-nowrap">Projetos</span>
            )}
          </div>
          <div className="flex items-center  px-3 py-3 gap-2  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900">
            <IoIosContact size={32} />
            {!isCollapsed && <span className="whitespace-nowrap">Contato</span>}
          </div>
          <div className="flex items-center  px-3 py-3 gap-2  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900">
            <IoMdCloudDownload size={32} />
            {!isCollapsed && (
              <span className="whitespace-nowrap">Currículo</span>
            )}
          </div>
        </nav>
      </div>

      {/* Botão de toggle */}
      <div
        className=" top-50 left-10 text-gray-400 cursor-pointer flex justify-center items-center w-full  hover:bg-gray-900 transitio duration-300 hover:text-white py-2 mt-60"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <IoIosArrowForward size={24} />
        ) : (
          <IoIosArrowBack size={24} />
        )}
      </div>
    </aside>
  );
}
