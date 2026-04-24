import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  icon: ReactNode;
  nome: string;
  descricao: string;
  iconClassName?: string;
}

export function CardHover({
  icon,
  nome,
  descricao,
  iconClassName,
}: CardProps) {
  return (
    <HoverCard openDelay={120} closeDelay={80}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          aria-label={nome}
          className={cn(
            "inline-flex  items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
            iconClassName
          )}
        >
          {icon}
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="center"
        sideOffset={14}
        className="z-50 w-80 border rounded-xl border-white/10 bg-neutral-950/95 text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
            {icon}
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold leading-none">{nome}</h4>
            <p className="text-xs leading-5 text-gray-300">{descricao}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
