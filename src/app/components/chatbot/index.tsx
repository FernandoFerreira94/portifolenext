"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState, useMemo } from "react";
import { Send, X, Loader2, RotateCcw, BotIcon, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import logoIcon from "@/assets/logo-icon.png";
import { useLanguage } from "@/context/LanguageContext";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { cn } from "@/lib/utils";

function extractText(parts: { type: string }[] | undefined): string {
  if (!parts) return "";
  return parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

function renderText(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<br key={i} />);
      return;
    }

    const numbered = trimmed.match(/^(\d+)\.\s+(.+)/);
    if (numbered) {
      elements.push(
        <div key={i} className="flex gap-2 mt-1">
          <span className="text-violet-400 font-semibold shrink-0">{numbered[1]}.</span>
          <span>{renderInline(numbered[2])}</span>
        </div>,
      );
      return;
    }

    const bulleted = trimmed.match(/^[-*•]\s+(.+)/);
    if (bulleted) {
      elements.push(
        <div key={i} className="flex gap-2 mt-1">
          <span className="text-violet-400 shrink-0">•</span>
          <span>{renderInline(bulleted[1])}</span>
        </div>,
      );
      return;
    }

    elements.push(
      <p key={i} className="mt-1 first:mt-0">
        {renderInline(trimmed)}
      </p>,
    );
  });

  return <div className="flex flex-col gap-0.5">{elements}</div>;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function extractTopic(text: string): string {
  const clean = text.trim().replace(/[?!.,]/g, "");
  const words = clean.split(/\s+/);
  const stopwords = new Set([
    "quais",
    "qual",
    "como",
    "o",
    "a",
    "de",
    "da",
    "do",
    "que",
    "tem",
    "esta",
    "é",
    "os",
    "as",
    "um",
    "uma",
    "para",
    "sobre",
    "me",
    "nos",
    "se",
    "na",
    "no",
  ]);
  const keywords = words.filter((w) => w.length > 2 && !stopwords.has(w.toLowerCase())).slice(0, 2);
  const topic = keywords.join(" ") || words.slice(0, 2).join(" ");
  return topic.length > 18 ? `${topic.slice(0, 18)}…` : topic;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const [inputValue, setInputValue] = useState("");

  const { messages, setMessages, sendMessage, status } = useChat();
  const isLoading = status === "streaming" || status === "submitted";
  const { t, language } = useLanguage();

  const topics = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const m of messages) {
      if (m.role !== "user") continue;
      const text = extractText(m.parts as { type: string }[] | undefined);
      const topic = extractTopic(text);
      if (topic && !seen.has(topic.toLowerCase())) {
        seen.add(topic.toLowerCase());
        result.push(topic);
      }
    }
    return result;
  }, [messages]);

  const useCarousel = topics.length > 3;

  useEffect(() => {
    if (!open && fabRef.current) {
      const tl = gsap.to(fabRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      return () => {
        tl.kill();
      };
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    const content = inputValue;
    setInputValue("");
    try {
      await sendMessage({ text: content });
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const hasLeadQualified = messages.some(
    (m) =>
      m.role === "assistant" &&
      m.parts?.some(
        (p: { type: string }) => p.type === "tool-submitLead" || p.type === "tool-showContact",
      ),
  );

  const handleEmailContact = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <button
        ref={fabRef}
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50 w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-zinc-600 animate-aurora to-zinc-900 text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group overflow-hidden"
      >
        <BotIcon size={24} className="sm:w-8 sm:h-8" />
      </button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="h-[68vh] sm:h-[90vh] bg-neutral-950 border-white/10 flex flex-col focus:outline-none">
          <DrawerHeader className="border-b border-white/5 flex flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center overflow-hidden">
                <Image src={logoIcon} alt="WebCode" width={28} height={28} className="object-contain" />
              </div>
              <div className="text-left">
                <DrawerTitle className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  {t("chat_title")}
                  <Badge
                    variant="outline"
                    className="text-[9px] sm:text-[10px] py-0 border-violet-500/30 text-violet-400 uppercase tracking-widest"
                  >
                    Beta
                  </Badge>
                </DrawerTitle>
                <p className="text-xs text-gray-400">{t("chat_role")}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMessages([])}
                className="text-gray-400 hover:text-white hover:bg-white/5"
              >
                <RotateCcw size={18} />
              </Button>
              <DrawerClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                >
                  <X size={20} />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 sm:py-8 custom-scrollbar">
            <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-6 sm:py-12 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-4 sm:mb-6 overflow-hidden">
                    <Image src={logoIcon} alt="WebCode" width={40} height={40} className="object-contain" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {t("chat_welcome").split("!")[0]}! 👋
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                    {t("chat_welcome").split("! 👋 ")[1]}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
                    {SUGGESTIONS[language as keyof typeof SUGGESTIONS].map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage({ text: s })}
                        className="text-sm text-gray-300 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn("flex w-full gap-3 sm:gap-4", m.role === "user" ? "flex-row-reverse" : "flex-row")}
                >
                  <div
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden",
                      m.role === "user" ? "bg-blue-600" : "bg-violet-600/20 border border-violet-500/30",
                    )}
                  >
                    {m.role === "user" ? (
                      <span className="text-[10px] font-bold text-white">ME</span>
                    ) : (
                      <Image src={logoIcon} alt="WebCode" width={20} height={20} className="object-contain" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-[13px] sm:text-sm max-w-[88%] sm:max-w-[75%]",
                      m.role === "user"
                        ? "bg-blue-600/20 text-blue-50 border border-blue-500/30"
                        : "text-gray-200",
                    )}
                  >
                    {renderText(extractText(m.parts as { type: string }[] | undefined))}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 sm:gap-4 animate-pulse">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src={logoIcon}
                      alt="WebCode"
                      width={20}
                      height={20}
                      className="object-contain opacity-50"
                    />
                  </div>
                  <div className="h-10 bg-white/5 border border-white/5 rounded-2xl w-24" />
                </div>
              )}

              {hasLeadQualified && (
                <div className="flex flex-col items-center gap-4 py-6 border-t border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Fale diretamente com a WebCode</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => window.open("https://wa.me/5512997041551", "_blank")}
                      className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-600/20 transition-colors"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </button>
                    <button
                      onClick={handleEmailContact}
                      className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-violet-600/10 border border-violet-500/30 text-violet-400 text-sm font-medium hover:bg-violet-600/20 transition-colors"
                    >
                      <Mail size={16} />
                      E-mail
                    </button>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} className="h-1" />
            </div>
          </div>

          <div className="border-t border-white/5 bg-neutral-950">
            <div className="p-4 sm:p-6">
              <form onSubmit={onSend} className="max-w-3xl mx-auto relative group">
                {topics.length > 0 && (
                  <div className="mb-2 overflow-hidden">
                    <div className={cn("flex gap-2", useCarousel ? "topics-carousel" : "flex-wrap")}>
                      {(useCarousel ? [...topics, ...topics] : topics).map((topic, i) => (
                        <span
                          key={`${topic}-${i}`}
                          className="inline-flex items-center shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-950 border border-blue-500/40 text-blue-300 select-none"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="relative flex flex-col bg-neutral-900 border border-white/10 rounded-2xl focus-within:border-violet-500/50 transition-all overflow-hidden">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t("chat_placeholder")}
                    className="min-h-[84px] sm:min-h-[100px] w-full resize-none bg-transparent border-none focus-visible:ring-0 px-3 sm:px-4 py-3 sm:py-4 text-sm text-gray-200"
                    disabled={isLoading}
                  />
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-white/2 border-t border-white/5">
                    <Badge variant="outline" className="text-[9px]">
                      Gemini 2.5 Flash
                    </Badge>
                    <Button
                      type="submit"
                      disabled={isLoading || !inputValue.trim()}
                      size="sm"
                      className="bg-violet-600"
                    >
                      {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={14} />}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }

        .topics-carousel {
          display: flex;
          width: max-content;
          animation: topics-scroll 18s linear infinite;
        }
        .topics-carousel:hover {
          animation-play-state: paused;
        }
        @keyframes topics-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}

const SUGGESTIONS = {
  pt: [
    "Quais projetos a WebCode tem em produção?",
    "Quais tecnologias a WebCode domina?",
    "A WebCode está disponível para freelancers?",
    "Como a WebCode trabalha em sistemas SaaS?",
  ],
  en: [
    "What projects does WebCode have in production?",
    "What technologies does WebCode master?",
    "Is WebCode available for freelance work?",
    "How does WebCode work on SaaS systems?",
  ],
};
