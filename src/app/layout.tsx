import type { Metadata } from "next";
import "./globals.css";
import { Unbounded, Inter, Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
export const metadata: Metadata = {
  title: "Fernando | Desenvolvedor Full Stack",
  description:
    "Portfólio de Fernando – Desenvolvedor Full Stack especializado em React.js, Node.js e Web Design. Crio interfaces modernas com Figma, soluções escaláveis em Next.js e aplicações otimizadas para performance e usabilidade.",

  keywords: [
    "Desenvolvedor Full Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Frontend",
    "Backend",
    "Web Design",
    "Figma",
    "Tailwind CSS",
    "UI/UX",
    "Portfólio Fernando",
  ],

  authors: [{ name: "Fernando", url: "https://fernandodev.vercel.app/" }],
  creator: "Fernando",
  publisher: "Fernando",

  openGraph: {
    type: "website",
    url: "https://fernandodev.vercel.app/",
    title: "Fernando | Desenvolvedor Full Stack",
    description:
      "Sou Fernando, desenvolvedor Full Stack React.js & Node.js. Transformo ideias em aplicações funcionais e modernas. Confira meu portfólio.",
    siteName: "Portfólio Fernando",
    images: [
      {
        url: "https://fernandodev.vercel.app/og-image.jpg",
        width: 1201,
        height: 586,
        alt: "Portfólio Fernando - Desenvolvedor Full Stack",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://fernandodev.vercel.app/"),

  alternates: {
    canonical: "https://fernandodev.vercel.app/",
  },

  category: "technology",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${unbounded}  ${inter} ${poppins.className} antialiased`}
      >
        <ToastContainer autoClose={4000} />
        {children}
      </body>
    </html>
  );
}
