export function Card({ data }) {
  return (
    <div className=" p-5">
      <div className="flex flex-col justify-start p-2 sm:border-t-2 sm:border-b-2 sm:border-gray-50 lg:border-2 lg:rounded-md hover:opacity-40 hover:duration-300">
        <h4 className="mr-2 text-base font-semibold whitespace-nowrap my-2 text-zinc-500 uppercase">
          {data?.name}
        </h4>
        <p className="text-sm my-1">{data?.description}</p>
        <p className="text-yellow-50">R$ {data?.price}</p>
      </div>
    </div>
  );
}
