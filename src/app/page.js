export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col ">
     <h1 className="text-3xl mb-10 text-center p-10">O Pico - Cardápio</h1>
      <p className="px-5 text-lg">Clássico burguers</p>
     <div className=" p-5">
      <div className="flex flex-col justify-start sm:border-t-2 sm:border-b-2 sm:border-gray-50 p-2"> 
      <h4 className="mr-2 text-base font-semibold whitespace-nowrap my-2 text-zinc-500">Capital inicial </h4>
      <p className="text-sm my-1">(Pao tipo brioche, carne 150g, queijo e maionese da casa)</p>
      <p className="text-yellow-50">R$ 20</p>
      </div>
     </div>
    </main>
  )
}
