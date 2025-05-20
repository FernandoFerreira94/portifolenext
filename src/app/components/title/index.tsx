interface TituloProps {
  titulo: string;
}

export default function Title({ titulo }: TituloProps) {
  return <h2 className="text-gray-300 text-3xl font-bold my-20">{titulo}</h2>;
}
