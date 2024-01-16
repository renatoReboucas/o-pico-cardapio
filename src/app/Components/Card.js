export function Card({ data }) {
  return (
    <div className=" p-2">
      <div className="flex flex-col justify-start p-1 border-gray-50  hover:opacity-40 hover:duration-300">
        <h4 className="mr-2 text-base font-semibold whitespace-nowrap my-1 text-zinc-500 uppercase">
          {data?.name}
        </h4>
        <p className="text-sm my-1 font-sans">{data?.description}</p>
        <p className="text-yellow-200 font-sans">R$ {data?.price}</p>
      </div>
    </div>
  );
}
