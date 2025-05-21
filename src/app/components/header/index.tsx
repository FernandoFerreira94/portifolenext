"use client";
import { useState } from "react";
import { ImProfile } from "react-icons/im";
import { LiaInternetExplorer } from "react-icons/lia";
import { IoMdCloudDownload, IoIosContact } from "react-icons/io";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import Perfil from "../../../assets/perfil.png";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 639 });

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-black/30 text-gray-400 flex flex-col justify-baseline  transition-all duration-500  
        max-sm:w-full  max-sm:h-20  max-sm:bg-black max-sm:flex-row ${
          isCollapsed ? "w-[60px]" : "w-[200px]"
        }`}
    >
      {/* Conteúdo do topo */}
      <div className="flex flex-col   items-center gap-6 max-sm:gap-0  max-sm:flex-row max-sm:w-full">
        <Image
          src={Perfil}
          alt="Perfil"
          className={` rounded-full  object-cover transition-all duration-300 mt-5 max-sm:m-0 max-sm:w-18  max-sm:h-18 max-sm:ml-2 ${
            isCollapsed ? "w-18 h-18" : "w-33 h-33"
          }`}
        />

        <nav
          className={`flex  flex-col  mt-5 
          max-sm:m-0 max-sm:flex-row max-sm:gap-2 max-sm:ml-15`}
        >
          <div
            className={`flex w-full  items-center  px-3 py-4 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-lg 
             
              ${isCollapsed && "justify-center"}`}
          >
            <ImProfile size={32} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Sobre mim</span>
            )}
          </div>
          <div
            className={`flex w-full  items-center  px-3 py-4 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-lg ${isCollapsed && "justify-center"}`}
          >
            <LiaInternetExplorer size={32} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Projetos</span>
            )}
          </div>
          <div
            className={`flex w-full  items-center  px-3 py-4 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-lg ${isCollapsed && "justify-center"}`}
          >
            <IoIosContact size={32} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Contato</span>
            )}
          </div>
          <div
            className={`flex w-full  items-center  px-3 py-4 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-lg ${isCollapsed && "justify-center"}`}
          >
            <IoMdCloudDownload size={32} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Currículo</span>
            )}
          </div>
        </nav>
      </div>

      {/* Botão de toggle */}
      <div
        className=" top-50 left-10 text-gray-400 cursor-pointer flex justify-center items-center w-full  hover:bg-gray-900 transitio duration-300 hover:text-white py-3 mt-60"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {!isSmallScreen &&
          (isCollapsed ? (
            <FaAngleDoubleRight size={24} />
          ) : (
            <FaAngleDoubleLeft size={24} />
          ))}
      </div>
    </aside>
  );
}
