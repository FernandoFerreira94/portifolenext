import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

import { ReactNode } from "react";
interface ModalProps {
  children: ReactNode;
}
export function CardModal({ children }: ModalProps) {
  return (
    <Card className="relative w-8/10 bg-gray-950/60 max-sm:w-11/12">
      {children}
      
      <BorderBeam
        duration={8}
        size={600}
        borderWidth={3}
        className="from-transparent via-gray-200 to-transparent"
      />
      <BorderBeam
        duration={8}
        delay={4}
        size={600}
        borderWidth={3}
        className="from-transparent via-gray-200 to-transparent"
      />
    </Card>
  );
}
