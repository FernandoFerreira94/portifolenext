"use client";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

import Perfil from "../../../assets/perfilGemini.jpg";
import Logo from "../../../assets/logo.png";
import {
  ChevronFirst,
  ChevronLast,
  Download,
  FolderGit2,
  PhoneCall,
  User,
} from "lucide-react";

interface FuncProps {
  onTecnologiaClick: () => void;
  onSobreMimClick: () => void;
  onContatoClick: () => void;
  onProjetosClick: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function Header({
  onTecnologiaClick,
  onSobreMimClick,
  onContatoClick,
  onProjetosClick,
  isCollapsed,
  setIsCollapsed,
}: FuncProps) {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <header
      className={`fixed top-0 left-0  z-50 h-screen bg-neutral-950 text-gray-400 flex flex-col transition-all duration-500  ease-in-out
       ${isCollapsed ? "w-[60px]" : "w-[200px] "} 
        max-sm:w-full max-sm:h-25  max-sm:bg-black max-sm:flex-row max-sm:items-center  max:sm:justify-between  `}
    >
      <div
        className="flex flex-col  items-center 
        max-sm:gap-0  
      max-sm:flex-row max-sm:w-full  max-sm:justify-around "
      >
        <div
          className={`xl:w-full h-full   flex items-center justify-center bg-black max-sm:bg-transparent `}
        >
          <Image
            src={Perfil}
            alt="Perfil"
            className={`  object-cover transition-all duration-300
            max-sm:m-0 max-sm:w-22  max-sm:h-18  max-sm:ml-2 
            ${isCollapsed ? "w-18 h-18" : "w-35 h-45"}`}
          />
        </div>

        <nav
          className={`flex  flex-col  mt-5 w-full 
          max-sm:m-0  max-sm:flex-row  `}
        >
          <div
            onClick={onSobreMimClick}
            className={`flex w-full  items-center  px-3 py-5 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-sm 
              
              ${isCollapsed && "justify-center"}`}
          >
            <User size={`${!isSmallScreen ? 22 : 30}`} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Sobre mim</span>
            )}
          </div>
          {/* Novo item de menu para Tecnologias */}
          <div
            onClick={onTecnologiaClick}
            className={`flex w-full  items-center   px-3 py-5 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-sm ${
              isCollapsed && "justify-center"
            }`}
          >
            <FaCode size={`${!isSmallScreen ? 22 : 30}`} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Tecnologias</span>
            )}
          </div>
          {/* O antigo "Projetos" agora usa a nova propriedade onProjetosClick */}
          <div
            onClick={onProjetosClick}
            className={`flex w-full  items-center   px-3 py-5 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-sm ${
              isCollapsed && "justify-center"
            }`}
          >
            <FolderGit2 size={`${!isSmallScreen ? 22 : 30}`} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Projetos</span>
            )}
          </div>
          <div
            onClick={onContatoClick}
            className={`flex w-full  items-center  px-3 py-5 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-sm ${
              isCollapsed && "justify-center"
            }`}
          >
            <PhoneCall size={`${!isSmallScreen ? 22 : 30}`} />
            {!isSmallScreen && !isCollapsed && (
              <span className="whitespace-nowrap">Contato</span>
            )}
          </div>
          <div
            className={`flex w-full  items-center  px-3 py-5 gap-3  cursor-pointer transition duration-300 hover:text-white  hover:bg-gray-900 text-sm ${
              isCollapsed && "justify-center"
            }`}
          >
            <Link
              href="/curriculo/Curriculo-Front-End.pdf"
              className="flex items-center gap-3"
              download="Curriculo-Front-End"
            >
              <Download size={`${!isSmallScreen ? 22 : 30}`} />
              {!isSmallScreen && !isCollapsed && (
                <span className="whitespace-nowrap">Currículo</span>
              )}
            </Link>
          </div>
        </nav>
      </div>

      {!isSmallScreen && (
        <div
          className=" top-50 left-10 text-gray-400 cursor-pointer flex justify-center items-center w-full  hover:bg-gray-900 text-sm transitio duration-300 hover:text-white py-3 mt-20"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronLast size={24} /> : <ChevronFirst size={24} />}
        </div>
      )}

      <div
        className="mt-auto flex justify-center mb-10 w-full items-center 
      max-sm:m-0 max-sm:w-12 max-sm:mr-3 max-sm:hidden
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
