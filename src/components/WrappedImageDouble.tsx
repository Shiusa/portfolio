import React from 'react'
import Image from 'next/image';

type WrappedImageDoubleType = {
    src1: string;
    src2: string;
    alt1?: string;
    alt2?: string;
    desc1?: string;
    desc2?: string;
    className: string;
    children?: React.ReactNode;
}

const WrappedImageDouble = ({ src1, src2, alt1, alt2, desc1, desc2, className }: WrappedImageDoubleType) => {

    return (
        <div className={`flex gap-[4%] items-center justify-evenly ${className}`}>
          {/* <div className='flex flex-col'>
          </div> */}
          <div className={`flex w-[100%] justify-center gap-[4%]`}>
            <div className='flex flex-col items-center w-[40%]'>
                <Image
                src={src1}
                alt={alt1? alt1 : ""}
                width={1920}
                height={1080}
                className={`object-contain object-center rounded-md border-[2px] border-orTamise m-0`}
                // fill
                />
                <p className='p-0 m-0 text-sm'>{desc1}</p>
            </div>
            <div className='flex flex-col items-center w-[40%]'>
                <Image
                src={src2}
                alt={alt2? alt2 : ""}
                width={1920}
                height={1080}
                className={`object-contain object-center rounded-md border-[2px] border-orTamise m-0`}
                // fill
                />
                <p className='p-0 m-0 text-sm'>{desc2}</p>
            </div>
          </div>
        </div>
      );
}

export default WrappedImageDouble