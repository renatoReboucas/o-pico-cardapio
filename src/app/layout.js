import { Roboto_Flex as Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata = {
  title: "O Pico - cardápio",
  description: "Cardápio hamburgueria O Pico.",
  image: "../assets/logo.jpg",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
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
