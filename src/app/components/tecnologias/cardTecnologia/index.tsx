import { IconType } from "react-icons"; // caso use react-icons

interface CardTecnologiaProps {
  text: string;
  icon: IconType; // componente de ícone
}

interface TituloProps {
  titulo: string;
}

export function CardTecnologia({ text, icon: Icon }: CardTecnologiaProps) {
  return (
    <div
      title={text}
      className=" flex flex-col  items-center gap-3 justify-center
                 
                 h-30 w-[100px] rounded-[20px_0_20px_0]
                 card text-[12px] transition duration-500 ease-out  tracking-widest
                  hover:shadow-[2px_2px_100px_5px_#9370db] "
    >
      <Icon color="#9370db" className="text-[40px] max-sm:text-[30px]" />
      <p className="text-sm font-sans">{text}</p>
    </div>
  );
}

export function TitleTecnologia({ titulo }: TituloProps) {
  return (
    <h2 className="text-2xl font-semibold text-center  mt-3 mb-6">{titulo}</h2>
  );
}
