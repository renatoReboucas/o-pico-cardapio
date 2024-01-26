"use client";
import Image from 'next/image'
export function Card({ data }) {
  return (
    <div className="p-2">
      <div className="flex flex-row justify-between p-1 border-gray-50  hover:opacity-40 hover:duration-300 px-4">
        <div>
        <h4 className="mr-2 text-base font-semibold whitespace-nowrap my-1 text-zinc-500 uppercase">
          {data?.name}
        </h4>
        <p className="text-sm my-1 font-sans">{data?.description}</p>
        <p className="text-yellow-200 font-sans">R$ {data?.price}</p>
        </div>
        <div>
          <Image src={'/IMG_8247.JPG'} width={56} height={56} className="size-14 rounded" />
        </div>
      </div>
    </div>
  );
}
