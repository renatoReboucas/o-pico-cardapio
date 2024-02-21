"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp, Instagram, Phone } from "lucide-react";
import { Card } from "./Components/Card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"


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
      <main className="flex min-h-screen  flex-col">
        <div className="flex flex-row justify-center">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
        </div>
        <h1 className="text-3xl mb-8 text-center p-7 font-federo">O Pico Food & Drink</h1>
        {
  data.length > 0 ? (
    <>
      <div className="mb-10 font-sans">
        <p className="px-5 text-lg uppercase">
          fritas individual + refri lata{" "}
          <span className="text-yellow-600">R$ 12</span>
        </p>
        <p className="px-5 text-lg uppercase">
          fritas individual cheddar e bacon + refri lata{" "}
          <span className="text-yellow-600">R$ 15</span>
        </p>
      </div>

      {data.map((item, index) => (
        <React.Fragment key={index}>
          <p className="px-5 text-lg uppercase flex justify-center mt-5">
            {item.section}
          </p>
          {item.menu.map((subItem, subIndex) => (
            <Card key={subIndex} data={subItem} />
          ))}
        </React.Fragment>
      ))}
    </>
  ) : (
    <div className="mb-10 p-2">
      <Skeleton className="w-full h-[20px] rounded-full bg-slate-200" />
      <Skeleton className="w-1/2 h-[20px] rounded-full bg-slate-200 mt-1" />
      <Skeleton className="w-[25%] h-[20px] rounded-full bg-slate-200 mt-1" />
    </div>
  )
}
       
        
        <button
          onClick={ScrollToTopButton}
          className="fixed bottom-5 right-5 h-12 w-12 rounded-full bg-white text-black flex items-center justify-center z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 text-black" />
        </button>
        <p className="text-center uppercase text-xs text-zinc-400 font-federo my-2">Imagens Meramente Ilustrativas</p>
        <div className="flex flex-row text-center justify-center  text-base border-t-[1px] border-gray-50 mt-10 p-10">
          <a
            className="hover:text-zinc-500"
            href="https://www.instagram.com/opico__/"
          >
            <Instagram className="size-6 ml-1 " />
          </a>
          <a
            className="hover:text-zinc-500"
            href="https://api.whatsapp.com/message/TLRVSQQU3HURP1?autoload=1&app_absent=0"
          >
            <Phone className="size-6 ml-5 " />
          </a>
        </div>
        <div>
          <p className="text-center uppercase text-xs text-zinc-400 font-federo h-10 leading-8  mb-7">
            <a href="https://renatoreboucas.dev.br">
              Feito com 💖 por R2 Systens
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
