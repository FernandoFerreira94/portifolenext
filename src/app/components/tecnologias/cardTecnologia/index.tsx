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
      className="min-w-[110px] flex flex-col items-center gap-3 justify-center
                 
                 h-32 w-2/8 rounded-[20px_0_20px_0]
                 card text-[12px] transition duration-500 ease-out  tracking-widest
                 max-sm:h-35 hover:shadow-[2px_2px_100px_5px_#9370db]"
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
