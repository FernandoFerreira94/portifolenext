import { Timestamp } from "firebase/firestore";

function toMillis(date: Date | Timestamp): number {
  return date instanceof Timestamp ? date.toDate().getTime() : date.getTime();
}

import { ProjetoProps } from "@/app/utils/type";

export function ordenarPorCriacaoAsc(projetos: ProjetoProps[]) {
  return [...projetos].sort(
    (a, b) => toMillis(b.created) - toMillis(a.created)
  );
}
