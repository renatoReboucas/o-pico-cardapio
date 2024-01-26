"use client";
import Image from 'next/image'
export function Card({ data }) {
  return (
    <div className="p-2">
      <div className="flex flex-row justify-between p-1 border-gray-50 px-3">
        <div className='mr-1 text-wrap w-1/2 h-10 mt-5 mb-5'>
          <h4 className="mr-2 text-base font-semibold whitespace-nowrap my-1 text-zinc-500 uppercase">
            {data?.name}
          </h4>
          <p className="text-xs my-1 font-sans text-start ">{data?.description}</p>
          <p className="text-yellow-200 font-sans">R$ {data?.price}</p>
        </div>
        <div className='flex justify-center mt-10'>
          <Image src={'/IMG_8247.JPG'} width={40} height={40} alt='foto hamburguer' className="size-[40px] rounded" />
        </div>
      </div>
    </div>
  );
}
