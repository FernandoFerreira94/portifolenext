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
      className="min-w-[110px] flex flex-col items-center gap-3 justify-center
                 border-2 border-[#9370db] shadow-[#9370db] shadow-[3px_3px_5px_#9370db]
                 h-38 w-2/8 rounded-[20px_0_20px_0]
                 card text-[12px] transition duration-500  tracking-widest
                 max-sm:h-35 hover:shadow-[6px_6px_3px_0px_#9370db]"
    >
      <Icon color="#9370db" size={50} /> {/* define a cor aqui */}
      <p>{text}</p>
    </div>
  );
}

export function TitleTecnologia({ titulo }: TituloProps) {
  return (
    <h2 className="text-4xl font-semibold text-center  mt-3 mb-6">{titulo}</h2>
  );
}
