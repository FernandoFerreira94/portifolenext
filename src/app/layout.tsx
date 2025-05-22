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
      <body className={`${unbounded}  ${inter} ${poppins} antialiased`}>
        <ToastContainer autoClose={4000} />
        {children}
      </body>
    </html>
  );
}
