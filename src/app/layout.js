import "./globals.css";
import { PT_Sans_Narrow as  Sans ,Federo } from "next/font/google";

const sans = Sans({ subsets: ["latin"],weight:'400', variable: "--font-sans" });
const federo = Federo({ subsets: ["latin"], weight:'400', variable: "--font-federo" });

export const metadata = {
  title: "O Pico - cardápio",
  description: "Cardápio hamburgueria O Pico.",
  // image: "https://o-pico-cardapio.vercel.app/logo.jpg",
  images: [
    {
      url: "https://o-pico-cardapio.vercel.app/logo.svg", // Must be an absolute URL
      width: 800,
      height: 600,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${sans.variable} ${federo.variable} bg-black font-federo  text-zinc-50`}>
        {children}
      </body>
    </html>
  );
}
