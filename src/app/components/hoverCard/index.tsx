import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface CardProps {
  icon: React.ReactNode;
  nome: string;
  descricao: string;
}

export function CardHover({ icon, nome, descricao }: CardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="">
        <Button variant="link" className="scale-160 ">
          {icon}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-50  bg-neutral-950 border-gray-200/60">
        <div className="flex justify-between gap-4 z-50">
          <Avatar className="p-2 rounded-full flex items-center justify-center">
            {icon}
          </Avatar>
          <div className="space-y-1 z-50">
            <h4 className="text-sm font-semibold">{nome}</h4>
            <p className="text-[11px] text-gray-200/60">{descricao}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
