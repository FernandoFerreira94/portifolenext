import type { Metadata } from "next";
import "./globals.css";
import { Unbounded, Inter, Poppins } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-unbounded",
});

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
export const metadata: Metadata = {
  title: "Portifole Fernando",
  description: "Portifole Fernando",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${unbounded.variable}  ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
