import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore/lite";

import { db } from "@/service/fireBaseConective";
import { ProjetoProps } from "@/app/utils/type";

export type ProjetoFormData = {
  nome: string;
  descricao: string;
  front: string;
  back: string;
  database: string;
  github: string;
  url: string;
  funcionalidade: string[];
  is_academico: boolean;
  img: string;
  figmaUrl: string;
  html: boolean;
  javascript: boolean;
  react: boolean;
  typescript: boolean;
  next: boolean;
  css: boolean;
  sass: boolean;
  tailwind: boolean;
  node: boolean;
  nest: boolean;
  express: boolean;
  firebase: boolean;
  figma: boolean;
  postgressql: boolean;
  shancn: boolean;
  reactNative: boolean;
  supabase: boolean;
};

export const defaultProjetoFormData: ProjetoFormData = {
  nome: "",
  descricao: "",
  front: "",
  back: "",
  database: "",
  github: "",
  url: "",
  funcionalidade: [],
  is_academico: false,
  img: "",
  figmaUrl: "",
  html: false,
  javascript: false,
  react: false,
  typescript: false,
  next: false,
  css: false,
  sass: false,
  tailwind: false,
  node: false,
  nest: false,
  express: false,
  firebase: false,
  figma: false,
  postgressql: false,
  shancn: false,
  reactNative: false,
  supabase: false,
};

function normalizeProjeto(
  id: string,
  data: Partial<ProjetoProps>,
): ProjetoProps {
  return {
    id,
    nome: data.nome || "",
    back: data.back || "",
    front: data.front || "",
    database: data.database || "",
    descricao: data.descricao || "",
    funcionalidade: Array.isArray(data.funcionalidade)
      ? data.funcionalidade.filter(Boolean)
      : [],
    img: data.img || "",
    url: data.url || "",
    html: data.html || false,
    javascript: data.javascript || false,
    react: data.react || false,
    typescript: data.typescript || false,
    next: data.next || false,
    css: data.css || false,
    sass: data.sass || false,
    tailwind: data.tailwind || false,
    node: data.node || false,
    firebase: data.firebase || false,
    figma: data.figma || false,
    postgressql: data.postgressql || false,
    created:
      data.created instanceof Timestamp ? data.created.toDate() : new Date(),
    github: data.github || "",
    figmaUrl: data.figmaUrl || "",
    shancn: data.shancn || false,
    reactNative: data.reactNative || false,
    supabase: data.supabase || false,
    express: data.express || false,
    is_academico: data.is_academico || false,
    nest: data.nest || false,
  };
}

function sortProjetos(projetos: ProjetoProps[]) {
  return [...projetos].sort((a, b) => {
    const dateA = a.created instanceof Date ? a.created.getTime() : 0;
    const dateB = b.created instanceof Date ? b.created.getTime() : 0;
    return dateB - dateA;
  });
}

function sanitizeProjetoPayload(data: ProjetoFormData) {
  return {
    nome: data.nome.trim(),
    descricao: data.descricao.trim(),
    front: data.front.trim(),
    back: data.back.trim(),
    database: data.database.trim(),
    github: data.github.trim(),
    url: data.url.trim(),
    funcionalidade: data.funcionalidade
      .map((item) => item.trim())
      .filter(Boolean),
    is_academico: data.is_academico,
    img: data.img.trim(),
    figmaUrl: data.figmaUrl.trim(),
    html: data.html,
    javascript: data.javascript,
    react: data.react,
    typescript: data.typescript,
    next: data.next,
    css: data.css,
    sass: data.sass,
    tailwind: data.tailwind,
    node: data.node,
    nest: data.nest,
    express: data.express,
    firebase: data.firebase,
    figma: data.figma,
    postgressql: data.postgressql,
    shancn: data.shancn,
    reactNative: data.reactNative,
    supabase: data.supabase,
  };
}

export function projetoToFormData(
  projeto: ProjetoProps,
): ProjetoFormData {
  return {
    nome: projeto.nome,
    descricao: projeto.descricao,
    front: projeto.front,
    back: projeto.back,
    database: projeto.database,
    github: projeto.github,
    url: projeto.url,
    funcionalidade: projeto.funcionalidade || [],
    is_academico: projeto.is_academico,
    img: projeto.img || "",
    figmaUrl: projeto.figmaUrl || "",
    html: projeto.html,
    javascript: projeto.javascript,
    react: projeto.react,
    typescript: projeto.typescript,
    next: projeto.next,
    css: projeto.css,
    sass: projeto.sass,
    tailwind: projeto.tailwind,
    node: projeto.node,
    nest: projeto.nest,
    express: projeto.express,
    firebase: projeto.firebase,
    figma: projeto.figma,
    postgressql: projeto.postgressql,
    shancn: projeto.shancn,
    reactNative: projeto.reactNative,
    supabase: projeto.supabase,
  };
}

export async function fetchAllProjetos() {
  const snapshot = await getDocs(collection(db, "projeto"));
  const projetos = snapshot.docs.map((item) =>
    normalizeProjeto(item.id, item.data() as Partial<ProjetoProps>),
  );

  return sortProjetos(projetos);
}

export async function createProjeto(data: ProjetoFormData) {
  const payload = sanitizeProjetoPayload(data);

  await addDoc(collection(db, "projeto"), {
    ...payload,
    created: serverTimestamp(),
  });
}

export async function updateProjetoById(id: string, data: ProjetoFormData) {
  const payload = sanitizeProjetoPayload(data);

  await updateDoc(doc(db, "projeto", id), payload);
}

export async function deleteProjetoById(id: string) {
  await deleteDoc(doc(db, "projeto", id));
}
