import { Roboto_Flex as Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

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
      <body className={`${roboto.variable} bg-black font-roboto text-zinc-50`}>
        {children}
      </body>
    </html>
  );
}
