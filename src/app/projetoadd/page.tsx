"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  Bot,
  Database,
  FolderPlus,
  House,
  LayoutDashboard,
  Pencil,
  Plus,
  RefreshCcw,
  Save,
  Trash2,
  Wrench,
} from "lucide-react";
import { toast } from "react-toastify";

import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProjetoProps } from "@/app/utils/type";
import {
  createProjeto,
  defaultProjetoFormData,
  deleteProjetoById,
  fetchAllProjetos,
  ProjetoFormData,
  projetoToFormData,
  updateProjetoById,
} from "@/service/projectCrud";

type TechFlagOption = {
  key: keyof Pick<
    ProjetoFormData,
    | "html"
    | "javascript"
    | "react"
    | "typescript"
    | "next"
    | "css"
    | "sass"
    | "tailwind"
    | "node"
    | "nest"
    | "express"
    | "firebase"
    | "figma"
    | "postgressql"
    | "shancn"
    | "reactNative"
    | "supabase"
  >;
  label: string;
};

const TECH_FLAGS: TechFlagOption[] = [
  { key: "html", label: "HTML" },
  { key: "css", label: "CSS" },
  { key: "javascript", label: "JavaScript" },
  { key: "react", label: "React" },
  { key: "next", label: "Next.js" },
  { key: "typescript", label: "TypeScript" },
  { key: "tailwind", label: "Tailwind" },
  { key: "shancn", label: "shadcn/ui" },
  { key: "sass", label: "Sass" },
  { key: "reactNative", label: "React Native" },
  { key: "node", label: "Node.js" },
  { key: "nest", label: "NestJS" },
  { key: "express", label: "Express" },
  { key: "postgressql", label: "PostgreSQL" },
  { key: "firebase", label: "Firebase" },
  { key: "supabase", label: "Supabase" },
  { key: "figma", label: "Figma" },
];

function formatCreatedDate(created: ProjetoProps["created"]) {
  if (!(created instanceof Date)) {
    return "Sem data";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  }).format(created);
}

function getProjetoTags(projeto: ProjetoProps) {
  return TECH_FLAGS.filter((item) => projeto[item.key]).map((item) => item.label);
}

export default function ProjetoAddPage() {
  const [form, setForm] = useState<ProjetoFormData>(defaultProjetoFormData);
  const [featureInput, setFeatureInput] = useState("");
  const [projetos, setProjetos] = useState<ProjetoProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deletePassword, setDeletePassword] = useState("");
  const [deletePasswordError, setDeletePasswordError] = useState(false);

  const DELETE_PASSWORD = "Foreverxds2@";

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAllProjetos();
        setProjetos(data);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao carregar projetos.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const isEditing = Boolean(editingId);
  const totalProjetos = projetos.length;
  const totalProfissionais = useMemo(
    () => projetos.filter((item) => !item.is_academico).length,
    [projetos],
  );

  function handleChange<K extends keyof ProjetoFormData>(
    key: K,
    value: ProjetoFormData[K],
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function resetForm() {
    setForm(defaultProjetoFormData);
    setFeatureInput("");
    setEditingId(null);
  }

  function addFeature() {
    const value = featureInput.trim();

    if (!value) {
      return;
    }

    if (form.funcionalidade.includes(value)) {
      setFeatureInput("");
      return;
    }

    setForm((current) => ({
      ...current,
      funcionalidade: [...current.funcionalidade, value],
    }));
    setFeatureInput("");
  }

  function removeFeature(value: string) {
    setForm((current) => ({
      ...current,
      funcionalidade: current.funcionalidade.filter((item) => item !== value),
    }));
  }

  function handleEdit(projeto: ProjetoProps) {
    setForm(projetoToFormData(projeto));
    setFeatureInput("");
    setEditingId(projeto.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function refreshProjetos() {
    setIsRefreshing(true);
    try {
      const data = await fetchAllProjetos();
      setProjetos(data);
    } finally {
      setIsRefreshing(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.nome.trim() || !form.descricao.trim()) {
      toast.error("Nome e descrição são obrigatórios.");
      return;
    }

    setIsSaving(true);
    try {
      if (editingId) {
        await updateProjetoById(editingId, form);
        toast.success("Projeto atualizado com sucesso.");
      } else {
        await createProjeto(form);
        toast.success("Projeto criado com sucesso.");
      }
      const data = await fetchAllProjetos();
      setProjetos(data);
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar o projeto.");
    } finally {
      setIsSaving(false);
    }
  }

  function handleDelete(id: string) {
    setDeleteTargetId(id);
    setDeletePassword("");
    setDeletePasswordError(false);
    setDeleteDialogOpen(true);
  }

  async function confirmDelete() {
    if (deletePassword !== DELETE_PASSWORD) {
      setDeletePasswordError(true);
      return;
    }

    const id = deleteTargetId!;
    setDeleteDialogOpen(false);
    setDeletePassword("");
    setDeleteTargetId(null);
    setIsSaving(true);
    try {
      await deleteProjetoById(id);
      toast.success("Projeto removido.");
      const data = await fetchAllProjetos();
      setProjetos(data);
      if (editingId === id) resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao remover o projeto.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.14),transparent_55%)]" />
        <div className="absolute right-0 top-32 h-[360px] w-[360px] bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_60%)]" />
      </div>

      <div className="relative container mx-auto px-4 py-10 md:px-8">
        <div className="mb-8 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
                <LayoutDashboard size={14} />
                Painel interno
              </span>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Adicionar e editar <AuroraText>projetos</AuroraText>
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-white/60">
                Esta página segue a linguagem visual do portfólio, mas prioriza velocidade de cadastro.
                O foco é manter a collection <code>projeto</code> consistente com o que a vitrine já consome.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                <House size={16} />
                Voltar para Home
              </Link>
              <Button
                type="button"
                variant="outline"
                className="h-11 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]"
                onClick={refreshProjetos}
                disabled={isRefreshing}
              >
                <RefreshCcw size={16} />
                Atualizar lista
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              icon={<FolderPlus size={18} className="text-cyan-300" />}
              label="Total de projetos"
              value={String(totalProjetos)}
            />
            <MetricCard
              icon={<Wrench size={18} className="text-emerald-300" />}
              label="Profissionais"
              value={String(totalProfissionais)}
            />
            <MetricCard
              icon={<Bot size={18} className="text-fuchsia-300" />}
              label="Modo atual"
              value={isEditing ? "Editando" : "Criando"}
            />
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-xl">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">
                {isEditing ? "Editar projeto" : "Novo projeto"}
              </CardTitle>
              <CardDescription className="text-white/55">
                Campos principais seguem a estrutura lida hoje pela collection <code>projeto</code>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <section className="grid gap-5 md:grid-cols-2">
                  <Field>
                    <Label htmlFor="nome">Nome</Label>
                    <Input
                      id="nome"
                      value={form.nome}
                      onChange={(event) => handleChange("nome", event.target.value)}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="Axion"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="database">Database</Label>
                    <Input
                      id="database"
                      value={form.database}
                      onChange={(event) => handleChange("database", event.target.value)}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="PostgreSQL"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="front">Front</Label>
                    <Input
                      id="front"
                      value={form.front}
                      onChange={(event) => handleChange("front", event.target.value)}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="React, Next.js, TypeScript, Tailwind CSS"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="back">Back</Label>
                    <Input
                      id="back"
                      value={form.back}
                      onChange={(event) => handleChange("back", event.target.value)}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="Node.js e NestJS"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      value={form.url}
                      onChange={(event) => handleChange("url", event.target.value)}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="https://axion-ruddy.vercel.app/"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      value={form.github}
                      onChange={(event) => handleChange("github", event.target.value)}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="https://github.com/..."
                    />
                  </Field>
                </section>

                <Field>
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    value={form.descricao}
                    onChange={(event) => handleChange("descricao", event.target.value)}
                    className="min-h-36 border-white/10 bg-white/[0.03]"
                    placeholder="Resumo do projeto, problema que ele resolve e contexto de uso."
                  />
                </Field>

                <section className="grid gap-5 md:grid-cols-2">
                  <Field>
                    <Label htmlFor="img">Imagem URL opcional</Label>
                    <Input
                      id="img"
                      value={form.img}
                      onChange={(event) => handleChange("img", event.target.value)}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="https://..."
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="figmaUrl">Figma URL opcional</Label>
                    <Input
                      id="figmaUrl"
                      value={form.figmaUrl}
                      onChange={(event) => handleChange("figmaUrl", event.target.value)}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="https://www.figma.com/..."
                    />
                  </Field>
                </section>

                <section className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="feature-input">Funcionalidades</Label>
                    <p className="text-sm text-white/45">
                      Adicione uma por vez. Exemplo: Equipamento vinculado.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                      id="feature-input"
                      value={featureInput}
                      onChange={(event) => setFeatureInput(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          addFeature();
                        }
                      }}
                      className="h-11 border-white/10 bg-white/[0.03]"
                      placeholder="Nova funcionalidade"
                    />
                    <Button
                      type="button"
                      className="h-11 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                      onClick={addFeature}
                    >
                      <Plus size={16} />
                      Adicionar
                    </Button>
                  </div>

                  <div className="flex min-h-14 flex-wrap gap-2 rounded-2xl border border-dashed border-white/10 bg-black/10 p-3">
                    {form.funcionalidade.length === 0 ? (
                      <span className="text-sm text-white/35">
                        Nenhuma funcionalidade adicionada ainda.
                      </span>
                    ) : (
                      form.funcionalidade.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => removeFeature(item)}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200 transition hover:bg-cyan-400/20"
                        >
                          {item} ×
                        </button>
                      ))
                    )}
                  </div>
                </section>

                <section className="space-y-4">
                  <div className="space-y-1">
                    <Label>Flags de stack</Label>
                    <p className="text-sm text-white/45">
                      Essas flags controlam os badges mostrados na vitrine dos projetos.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {TECH_FLAGS.map((item) => (
                      <label
                        key={item.key}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
                      >
                        <input
                          type="checkbox"
                          checked={form[item.key]}
                          onChange={(event) => handleChange(item.key, event.target.checked)}
                          className="size-4 rounded border-white/20 bg-transparent accent-cyan-400"
                        />
                        {item.label}
                      </label>
                    ))}
                  </div>
                </section>

                <section className="grid gap-3 md:grid-cols-2">
                  <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80">
                    <input
                      type="checkbox"
                      checked={form.is_academico}
                      onChange={(event) => handleChange("is_academico", event.target.checked)}
                      className="size-4 rounded border-white/20 bg-transparent accent-cyan-400"
                    />
                    Projeto acadêmico
                  </label>
                </section>

                <div className="flex flex-wrap gap-3">
                  <Button
                    type="submit"
                    disabled={isSaving}
                    className="h-11 rounded-xl bg-cyan-400 px-5 text-slate-950 hover:bg-cyan-300"
                  >
                    {isSaving ? <RefreshCcw size={16} className="animate-spin" /> : isEditing ? <Save size={16} /> : <FolderPlus size={16} />}
                    {isSaving ? "Salvando..." : isEditing ? "Atualizar projeto" : "Criar projeto"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    disabled={isSaving}
                    className="h-11 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]"
                    onClick={resetForm}
                  >
                    Limpar formulário
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-xl">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">Projetos existentes</CardTitle>
              <CardDescription className="text-white/55">
                Lista compacta para localizar rápido e editar sem poluir a tela.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="rounded-2xl border border-white/10 bg-black/10 p-6 text-sm text-white/45">
                  Carregando projetos...
                </div>
              ) : projetos.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-black/10 p-6 text-sm text-white/45">
                  Nenhum projeto encontrado na collection <code>projeto</code>.
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {projetos.map((projeto) => {
                    return (
                      <article
                        key={projeto.id}
                        className="rounded-3xl border border-white/10 bg-black/10 p-4 transition hover:border-cyan-400/20 hover:bg-white/[0.03]"
                      >
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <div className="min-w-0 space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="truncate text-base font-semibold">{projeto.nome}</h3>
                              {editingId === projeto.id && (
                                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/15 px-2 py-0.5 text-[10px] text-cyan-100">
                                  Em edição
                                </span>
                              )}
                              {projeto.is_academico && (
                                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-200">
                                  Acadêmico
                                </span>
                              )}
                            </div>

                            <div className="flex flex-wrap gap-3 text-[11px] text-white/40">
                              <span className="inline-flex items-center gap-1">
                                <Database size={13} className="text-cyan-300" />
                                {projeto.database || "Sem database"}
                              </span>
                              <span>{formatCreatedDate(projeto.created)}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              className="h-8 rounded-xl border-white/10 bg-white/[0.03] px-3 text-white hover:bg-white/[0.08]"
                              onClick={() => handleEdit(projeto)}
                            >
                              <Pencil size={13} />
                              Editar
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              className="h-8 rounded-xl border-red-400/20 bg-red-400/5 px-3 text-red-200 hover:bg-red-400/10"
                              onClick={() => handleDelete(projeto.id)}
                            >
                              <Trash2 size={13} />
                              Excluir
                            </Button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => {
          setDeleteDialogOpen(open);
          if (!open) {
            setDeletePassword("");
            setDeletePasswordError(false);
          }
        }}
      >
        <DialogContent className="border-white/10 bg-[#050816] text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Trash2 size={18} className="text-red-400" />
              Confirmar exclusão
            </DialogTitle>
            <DialogDescription className="text-white/55">
              Esta ação é permanente e não pode ser desfeita. Digite a senha para confirmar.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2 py-2">
            <Label htmlFor="delete-password" className="text-white/70">
              Senha de confirmação
            </Label>
            <Input
              id="delete-password"
              type="password"
              value={deletePassword}
              onChange={(e) => {
                setDeletePassword(e.target.value);
                setDeletePasswordError(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  confirmDelete();
                }
              }}
              className="h-11 border-white/10 bg-white/[0.03] text-white"
              placeholder="••••••••••••"
              autoFocus
            />
            {deletePasswordError && (
              <p className="text-sm text-red-400">Senha incorreta. Tente novamente.</p>
            )}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              className="border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              className="bg-red-600 text-white hover:bg-red-500"
              onClick={confirmDelete}
              disabled={isSaving}
            >
              <Trash2 size={14} />
              Excluir projeto
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

function Field({ children }: { children: ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
      <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-2">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
