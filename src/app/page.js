"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp, Instagram, Phone } from "lucide-react";
import { Card } from "./Components/Card";

export default function Home() {
  const [data, setData] = useState([]);

  const ScrollToTopButton = () => {
    // Função para rolar a tela para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para uma transição suave
    });
  };
  const getData = async () => {
    const response = await fetch("/api/menu");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <main className="flex min-h-screen  flex-col bg-[url('../assets/logo.svg')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-3xl mb-10 text-center p-10">O Pico - Cardápio</h1>
        <div className="mb-10">
          <p className="px-5 text-lg uppercase">
            fritas individual + refri lata{" "}
            <span className="text-yellow-50">R$ 12</span>
          </p>
          <p className="px-5 text-lg uppercase">
            fritas individual cheddar e bacon + refri lata{" "}
            <span className="text-yellow-50">R$ 15</span>
          </p>
        </div>
        {data?.map((item, index) => (
          <>
            <p key={index} className="px-5 text-lg uppercase">
              {item?.section}
            </p>
            {item?.menu.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </>
        ))}
        <button
          onClick={ScrollToTopButton}
          className="fixed bottom-5 right-5 h-12 w-12 rounded-full bg-white text-black flex items-center justify-center z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 text-black" />
        </button>

        <div className="flex flex-row text-center justify-center  text-base border-t-2 border-gray-50 mt-10 p-5">
          <a
            className="hover:text-zinc-500"
            href="https://www.instagram.com/opico__/"
          >
            <Instagram className="w-6 h-6 ml-1 " />
          </a>
          <a
            className="hover:text-zinc-500"
            href="https://api.whatsapp.com/message/TLRVSQQU3HURP1?autoload=1&app_absent=0"
          >
            <Phone className="w-6 h-6 ml-5 " />
          </a>
        </div>
        <div>
          <p className="text-center uppercase text-xs text-zinc-400">
            <a href="https://renatoreboucas.dev.br">
              Feito com 💖 por R2 Systens
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
