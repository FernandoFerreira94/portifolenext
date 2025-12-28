interface TituloProps {
  titulo: string;
  icon?: React.ReactNode;
}

export default function Title({ titulo, icon }: TituloProps) {
  return (
    <h2
      className="text-gray-400 text-xl  flex gap-4 titulo max-sm:
    max-sm:my-22
    "
    >
      {icon}
      {titulo}
    </h2>
  );
}
