"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, FolderGit2, Menu, PhoneCall, User, X } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../../../assets/logo.png";
import { useLanguage } from "@/context/LanguageContext";

interface FuncProps {
  onTecnologiaClick: () => void;
  onSobreMimClick: () => void;
  onContatoClick: () => void;
  onProjetosClick: () => void;
}

const getNavItems = (t: (k: any) => string) => [
  { label: t("nav_about"), icon: User, action: "onSobreMimClick" },
  { label: t("nav_tech"), icon: FaCode, action: "onTecnologiaClick" },
  { label: t("nav_projects"), icon: FolderGit2, action: "onProjetosClick" },
  { label: t("nav_contact"), icon: PhoneCall, action: "onContatoClick" },
] as const;

const LANGUAGES = [
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "en", flag: "🇺🇸", label: "EN" },
] as const;

export default function Header({
  onTecnologiaClick,
  onSobreMimClick,
  onContatoClick,
  onProjetosClick,
}: FuncProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language: lang, setLanguage: setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = {
    onSobreMimClick,
    onTecnologiaClick,
    onProjetosClick,
    onContatoClick,
  };

  return (
    <>
      <header
        className={`fixed top-4 left-8 right-8 z-50 h-20 rounded-2xl flex items-center container mx-auto px-5 md:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950/70 backdrop-blur-xl border border-white/8 shadow-2xl shadow-black/40"
            : "bg-transparent border border-transparent"
        }`}
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="flex-shrink-0">
          <Image src={Logo} alt="Logo Fernando" className="w-48" priority quality={100} />
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-1">
          {getNavItems(t).map(({ label, icon: Icon, action }) => (
            <button
              key={label}
              onClick={actions[action]}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
          <Link
            href="/curriculo/Fernando-Ferreira-FullStack.pdf"
            download="Fernando-Ferreira-FullStack.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <Download size={15} />
            {t("nav_resume")}
          </Link>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-lg p-1">
            {LANGUAGES.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                title={label}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                  lang === code ? "bg-white/15 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <span>{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-white/5 md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 mb-3">
                {LANGUAGES.map(({ code, flag, label }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    title={label}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                      lang === code ? "bg-white/15 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span>{flag}</span>
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {getNavItems(t).map(({ label, icon: Icon, action }) => (
                <button
                  key={label}
                  onClick={() => {
                    actions[action]();
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 text-left"
                >
                  <Icon size={17} />
                  {label}
                </button>
              ))}

              <Link
                href="/curriculo/Fernando-Ferreira-FullStack.pdf"
                download="Fernando-Ferreira-FullStack.pdf"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Download size={17} />
                {t("nav_resume")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
