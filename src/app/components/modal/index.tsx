import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="w-8/10 p-8 rounded-xl border border-gray-300 bg-black/60 text-white shadow-[0_1px_15px_#d1d5dc]">
      {children}
    </div>
  );
}
