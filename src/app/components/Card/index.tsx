import { Card } from "@/components/ui/card";

import { ReactNode } from "react";
interface ModalProps {
  children: ReactNode;
}
export function CardModal({ children }: ModalProps) {
  return (
    <Card className=" w-full  bg-gradient-to-b from-gray-950 via-gray-950  to-gray-950/10 max-sm:w-11/12 pb-20  ">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {children}
      </div>
    </Card>
  );
}
