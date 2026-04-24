import { CardModal } from "../Card";
import Title from "../title";
import { User, Database, Star, Cloud } from "lucide-react";
import type { ReactNode } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { FaCode } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { Highlighter } from "@/components/ui/highlighter";

type HighlightConfig = {
  terms: string[];
  action: "highlight" | "underline" | "box" | "circle";
  color: string;
  className?: string;
};

const ABOUT_HIGHLIGHTS: HighlightConfig[] = [
  {
    terms: ["WebCode", "WebCodeFF"],
    action: "highlight",
    color: "#7FDFFF",
    className: "text-neutral-900 px-1",
  },

  {
    terms: ["frontend", "Front-End"],
    action: "underline",
    color: "#38BDF8",
    className: "text-sky-300",
  },
  {
    terms: ["backend", "Back-End"],
    action: "circle",
    color: "#A855F7",
    className: "text-fuchsia-300",
  },

  {
    terms: ["Next.js"],
    action: "highlight",
    color: "#E5E7EB",
    className: "text-black px-1",
  },

  {
    terms: ["NestJS"],
    action: "circle",
    color: "#E0234E",
    className: "text-rose-300",
  },
  {
    terms: ["PostgreSQL", "Postgres"],
    action: "box",
    color: "#336791",
    className: "text-blue-300",
  },

  {
    terms: ["Colinas Gestão de Ativos", "Colinas Asset Management"],
    action: "highlight",
    color: "#7C3AED",
    className: "text-white px-1",
  },
  {
    terms: ["IoT"],
    action: "underline",
    color: "#39FF14",
    className: "text-lime-300",
  },
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedText(text: string, configs: HighlightConfig[]) {
  const terms = configs
    .flatMap((config) => config.terms.map((term) => ({ term, config })))
    .sort((a, b) => b.term.length - a.term.length);

  if (terms.length === 0) {
    return text;
  }

  const pattern = new RegExp(`(${terms.map(({ term }) => escapeRegExp(term)).join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, index): ReactNode => {
    const match = terms.find(({ term }) => term.toLowerCase() === part.toLowerCase());

    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <Highlighter
        key={`${part}-${index}`}
        action={match.config.action}
        color={match.config.color}
        strokeWidth={2}
        iterations={1}
      >
        <span className={match.config.className}>{part}</span>
      </Highlighter>
    );
  });
}

export default function SobreMim() {
  const { t } = useLanguage();

  return (
    <CardModal>
      <article className="my-12 max-sm:my-0 min-h-100dvh">
        <Title icon={<User />} titulo={t("about_title")} />
      </article>

      <article
        className="mt-6 mb-8 text-gray-200 text-4xl tracking-wide 
        max-sm:m-0 max-sm:text-3xl"
      >
        <h1 className="text-center">
          <AuroraText className="font-semibold">{t("about_intro_title")}</AuroraText>
        </h1>
      </article>

      <div
        className="grid grid-cols-2 container relative gap-12 text-lg py-20 h-full tracking-wider leading-10 text-justify 
        max-sm:text-[16px] text-white p-8 max-sm:grid-cols-1 max-sm:p-5 max-sm:py-12"
      >
        <section className="grid max-sm:gap-5 gap-6 text-gray-200/70 text-sm ml-20 max-sm:m-0">
          <p>{renderHighlightedText(t("about_p1"), ABOUT_HIGHLIGHTS)}</p>
          <p>{renderHighlightedText(t("about_p2"), ABOUT_HIGHLIGHTS)}</p>
          <p>{renderHighlightedText(t("about_p3"), ABOUT_HIGHLIGHTS)}</p>
          <p>{renderHighlightedText(t("about_p4"), ABOUT_HIGHLIGHTS)}</p>
        </section>

        <section className="grid gap-6 items-center justify-center">
          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4 max-sm:w-full">
            <CardContent className="flex items-start pt-4 gap-4">
              <span className="p-2 rounded-lg bg-[#03243a]">
                <FaCode size={20} className="text-sky-600" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Front-End</h2>
                <span className="text-[12px] text-gray-200/60">
                  {t("about_card_front")}
                </span>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4 max-sm:w-full">
            <CardContent className="flex items-start pt-4 gap-4">
              <span className="p-2 rounded-lg bg-[#2b0249]">
                <Database size={20} className="text-fuchsia-600" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Back-End & APIs</h2>
                <span className="text-[12px] text-gray-200/60">
                  {t("about_card_back")}
                </span>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4 max-sm:w-full">
            <CardContent className="flex items-start pt-4 gap-4">
              <span className="p-2 rounded-lg bg-[#2d1a00]">
                <Cloud size={20} className="text-[#FF9900]" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Cloud & Infra</h2>
                <span className="text-[12px] text-gray-200/60">
                  {t("about_card_cloud")}
                </span>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-white/30 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 w-3/4 max-sm:w-full">
            <CardContent className="flex items-start pt-4 gap-4">
              <span className="p-2 rounded-lg bg-[#0a1f0a]">
                <Star size={20} className="text-[#22c55e]" />
              </span>
              <CardDescription>
                <h2 className="text-sm mb-1">Qualidade</h2>
                <span className="text-[12px] text-gray-200/60">
                  {t("about_card_quality")}
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        </section>
      </div>
    </CardModal>
  );
}
