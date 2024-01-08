"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
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
      <main className="flex min-h-screen  flex-col ">
        <h1 className="text-3xl mb-10 text-center p-10">O Pico - Cardápio</h1>
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
      </main>
    </>
  );
}
