import Link from "next/link";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { toast } from "react-toastify";

export default function ContatosWeb() {
  return (
    <div className=" float-right gap-4  text-gray-200/50 hover:text-gray-50 flex  justify-center  ">
      <Link
        href="https://www.linkedin.com/in/fernando-ferreira-78927b203"
        target="blank"
        className=" rounded-full p-0.5  bg-white/8 transition duration-500 hover:-translate-y-2 "
      >
        <SiLinkedin
          size={33}
          className=" border-transparent  p-1.5 max-sm:p-1 rounded-2xl text-gray-200/50 hover:text-gray-50 transition duration-500   cursor-pointer"
        />
      </Link>
      <Link
        href="https://github.com/FernandoFerreira94"
        className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
        target="blank"
      >
        <SiGithub
          size={33}
          className=" border-transparent  p-1.5 max-sm:p-1 rounded-2xl text-gray-200/50 hover:text-gray-50 transition duration-500   cursor-pointer"
        />
      </Link>
      <div
        onClick={() => toast("webdevff@outlook.com")}
        className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
      >
        <SiGmail
          size={33}
          className=" border-transparent  p-1.5 max-sm:p-1 rounded-2xl text-gray-200/50 hover:text-gray-50 transition duration-500  cursor-pointer"
        />
      </div>
      <Link
        href="https://www.instagram.com/webcodeff/"
        className=" rounded-full p-0.5 bg-white/8 transition duration-500 hover:-translate-y-2 "
        target="blank"
      >
        <SiInstagram
          size={33}
          className=" border-transparent  p-1.5 max-sm:p-1 rounded-2xl text-gray-200/50 hover:text-gray-50 transition duration-500   cursor-pointer"
        />
      </Link>
    </div>
  );
}
