import React from 'react'
import Image from 'next/image';

type WrappedImageSingleType = {
    src: string;
    alt?: string;
    desc?: string;
    width?: string;
    children: React.ReactNode;
}

const WrappedImageSingle = ({ src, alt, desc, width }: WrappedImageSingleType) => {
    return (
        <div className={`flex justify-center items-center`}>
          <div className={`flex flex-col items-center w-[${width}%]`}>
            <Image
              src={src}
              alt={alt? alt : ""}
              width={1920}
              height={1080}
              className={`object-contain object-center rounded-md border-[2px] border-orTamise m-0`}
              // fill
            />
            <p className='p-0 m-0 mb-8 text-sm'>{desc}</p>
          </div>
        </div>
      );
}

export default WrappedImageSingle