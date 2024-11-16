"use client"
import useIntersectionObserver from '@/hooks/useIntersectionOberserver';
import Image from 'next/image';
import React from 'react'

type WrappedImageWithTextType = {
    src: string;
    alt?: string;
    position?: "left" | "right";
    width?: string;
    children: React.ReactNode;
}

const WrappedImageWithText = ({ src, alt, position, width, children }: WrappedImageWithTextType) => {

    const { isVisible, containerRef } = useIntersectionObserver(0.5);

    const direction = position === 'left' ? 'flex-row-reverse' : 'flex-row';
    const isVideo = /\.(webm|mp4)$/i.test(src);
    const isImage = /\.(webp|gif|jpg|jpeg|png)$/i.test(src);

    return (
		<div ref={containerRef} className={`flex gap-[4%] ${direction} items-center`}>
			{/* <div className='flex flex-col'>
			</div> */}
			<div className='w-[40%]'>
				{children}
			</div>
			<div className={`flex w-[${width}%]`}>
				{
					isVisible && (
					isImage ? (
						<Image
						src={src}
						alt={alt? alt : ""}
						width={1920}
						height={1080}
						className={`object-contain object-center rounded-md border-[2px] border-orTamise m-0 mb-4`}
						// fill
						/>
					) :
					isVideo ? (
						<video
						src={src}
						autoPlay
						loop
						muted
						className={`object-contain object-center rounded-md border-[2px] border-orTamise m-0 mb-4`}
						width="100%"
						/>
					) : ''
					)
				}
			</div>
		</div>
    );
}

export default WrappedImageWithText