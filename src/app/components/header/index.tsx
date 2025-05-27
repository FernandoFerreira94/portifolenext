"use client";
import { useState } from "react";
import { ImProfile } from "react-icons/im";
import { LiaInternetExplorer } from "react-icons/lia";
import { IoMdCloudDownload, IoIosContact } from "react-icons/io";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";

import Perfil from "../../../assets/perfil.png";
import Logo from "../../../assets/logo.png";

interface FuncProps {
  onTecnologiaClick: () => void;
  onSobreMimClick: () => void;
  onContatoClick: () => void;
}

export default function Header({
  onTecnologiaClick,
  onSobreMimClick,
  onContatoClick,
}: FuncProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 639 });

  return (
    <header
      className={`fixed top-0 left-0 z-50 h-screen bg-gray-950 text-gray-400 flex flex-col transition-all duration-500  
        max-sm:w-full max-sm:h-25  max-sm:bg-black max-sm:flex-row max-sm:items-center max-sm:justify-center ${
          isCollapsed ? "w-[60px]" : "w-[200px]"
        }`}
    >
      {/* Conteúdo do topo */}
      <div
        className="flex flex-col items-center 
        max-sm:gap-0  
      max-sm:flex-row max-sm:w-full  max-sm:justify-around"
      >
        <Image
          src={Perfil}
          alt="Perfil"
          className={` rounded-full  object-cover transition-all duration-300
             max-sm:m-0 max-sm:w-18  max-sm:h-18 max-sm:ml-2 
             ${isCollapsed ? "w-18 h-18" : "w-40 h-40"}`}
        />

        <nav
          className={`flex  flex-col  mt-5 ml-3
          max-sm:m-0  max-sm:flex-row max-sm:ml-10  max-sm:gap-0`}
        >
          <div
            onClick={onSobreMimClick}
            className={`flex w-full  items-center  px-3 py-4 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-lg 
             
              ${isCollapsed && "justify-center"}`}
          >
            <ImProfile size={`${!isSmallScreen ? 32 : 35}`} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Sobre mim</span>
            )}
          </div>
          <div
            onClick={onTecnologiaClick}
            className={`flex w-full  items-center  px-3 py-4 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-lg ${isCollapsed && "justify-center"}`}
          >
            <LiaInternetExplorer size={`${!isSmallScreen ? 32 : 35}`} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Projetos</span>
            )}
          </div>
          <div
            onClick={onContatoClick}
            className={`flex w-full  items-center  px-3 py-4 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-lg ${isCollapsed && "justify-center"}`}
          >
            <IoIosContact size={`${!isSmallScreen ? 32 : 35}`} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Contato</span>
            )}
          </div>
          <div
            className={`flex w-full  items-center  px-3 py-4 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-lg ${isCollapsed && "justify-center"}`}
          >
            <Link
              href="/curriculo/Fernando-FullStack.pdf"
              className="flex items-center gap-3"
              download="Fernando_Ferreira_Curriculo.pdf"
            >
              <IoMdCloudDownload size={`${!isSmallScreen ? 32 : 35}`} />
              {!isSmallScreen && !isCollapsed && (
                <span className="whitespace-nowrap">Currículo</span>
              )}
            </Link>
          </div>
        </nav>
      </div>

      {!isSmallScreen && (
        <div
          className=" top-50 left-10 text-gray-400 cursor-pointer flex justify-center items-center w-full  hover:bg-gray-900 transitio duration-300 hover:text-white py-3 mt-60"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <FaAngleDoubleRight size={24} />
          ) : (
            <FaAngleDoubleLeft size={24} />
          )}
        </div>
      )}

      <div
        className="mt-auto flex justify-center mb-10 w-full items-center 
      max-sm:m-0 max-sm:w-12 max-sm:mr-3
      "
      >
        {!isSmallScreen && (
          <Image
            src={Logo}
            alt="logotipo"
            className={`${!isCollapsed ? "w-18" : "w-10"} max-sm:w-12`}
          />
        )}
      </div>
    </header>
  );
}
