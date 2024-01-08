import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  console.log("api..");
  const data = [
    {
      section: "Clássico burguers",
      menu: [
        {
          name: "Capital inicial",
          description:
            "Pão tipo brioche, carne 150g, queijo e maionese da casa.",
          price: 20,
        },
        {
          name: "maneva",
          description:
            "Pão tipo brioche, linguiça toscana 150g, queijo, alface, tomate, cebola roxa e maionese da casa.",
          price: 24,
        },
        {
          name: "Pitty",
          description:
            "Pão tipo brioche, carne 150g, queijo, alface, tomate, cebola roxa e maionese da casa.",
          price: 24,
        },
        {
          name: "Cpm22",
          description:
            "Pão tipo brioche, carne 150g, bacon, queijo e maionese da casa.",
          price: 25,
        },
      ],
    },
    {
      section: "especial burguers",
      menu: [
        {
          name: "Raimundos",
          description:
            "Pão tipo brioche, carne 150g, cheddar cremoso, doritos e maionese da casa.",
          price: 27,
        },
        {
          name: "revelação",
          description:
            "Pão tipo brioche, 2x carne 150g, queijo, batata pringles e maionese da casa.",
          price: 31,
        },
        {
          name: "mamonas",
          description:
            "Pão tipo brioche, carne 150g, carne cozida e desfiada, queijo e maionese da casa.",
          price: 27,
        },
        {
          name: "tim maia",
          description:
            "Pão tipo brioche, 3x carne 150g, bacon, queijo e maionese da casa.",
          price: 37,
        },
      ],
    },
    {
      section: "Baguetes de parmesão",
      menu: [
        {
          name: "hot louco",
          description:
            "Duas salsichas, tomate, cebola roxa, catupiry, mussarela, bacon, batata palha e maionese da casa.",
          price: 21,
        },
        {
          name: "frango louco",
          description:
            "Frango cozido e desfiado, catupiry, batata palha e maionese da casa.",
          price: 25,
        },
        {
          name: "carne louca",
          description:
            "Carne cozida e desfiada, mussarela, batata palha e maionese da casa.",
          price: 28,
        },
        {
          name: "porco louco",
          description:
            "Pernil cozido e desfiado, mussarela, batata palha e maionese da casa.",
          price: 26,
        },
        {
          name: "Nordestão",
          description:
            "Carne seca cozida e refogada na manteiga, catupiry e maionese da casa.",
          price: 31,
        },
      ],
    },
    {
      section: "porções",
      menu: [
        {
          name: "Batata simples",
          description: "",
          price: 18,
        },
        {
          name: "Batata cheddar e bacon",
          description: "",
          price: 24,
        },
        {
          name: "batata com carne cozida e catupiry",
          description: "",
          price: 27,
        },
        {
          name: "onion rings",
          description: "",
          price: 25,
        },
        {
          name: "mini salgados especiais",
          description: "",
          price: 22,
        },
      ],
    },
    {
      section: "refrigerantes",
      menu: [
        {
          name: "guaraná antarctica 310ml",
          description: "",
          price: 6,
        },
        {
          name: "coca cola 310ml",
          description: "",
          price: 6,
        },
        {
          name: "fanta laranja",
          description: "",
          price: 6,
        },
        {
          name: "fanta uva 350ml",
          description: "",
          price: 6,
        },
      ],
    },
    {
      section: "Adicionais",
      menu: [
        {
          name: "catupiry",
          description: "",
          price: 5,
        },
        {
          name: "ovo",
          description: "",
          price: 3,
        },
        {
          name: "hamburguer",
          description: "",
          price: 10,
        },
        {
          name: "salada",
          description: "",
          price: 3,
        },
        {
          name: "bacon",
          description: "",
          price: 4,
        },
      ],
    },
  ];
  return NextResponse.json(data);
}
