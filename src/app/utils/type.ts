import { Timestamp } from "firebase/firestore";

export interface ProjetoProps {
  id: string; // Garantindo que seja uma string
  nome: string;
  back: string;
  front: string;
  database: string;
  descricao: string;
  funcionalidade: Array<string>;
  img: string;
  url: string;
  html: boolean;
  javascript: boolean;
  react: boolean;
  typescript: boolean;
  next: boolean;
  css: boolean;
  tailwind: boolean;
  sass: boolean;
  node: boolean;
  firebase: boolean;
  figma: boolean;
  postgressql: boolean;
  created: Timestamp | Date; // Agora aceita Timestamp ou Date
  github: string;
  figmaUrl: string;
  shancn: boolean;
  reactNative: boolean;
  supabase: boolean;
}
