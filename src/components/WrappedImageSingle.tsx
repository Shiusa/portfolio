"use client"
import React from 'react'
import Image from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionOberserver';
import { motion } from 'framer-motion'

type WrappedImageSingleType = {
    src: string;
    alt?: string;
    desc?: string;
    width?: string;
    children: React.ReactNode;
}

const WrappedImageSingle = ({ src, alt, desc, width }: WrappedImageSingleType) => {

  const { isVisible, containerRef } = useIntersectionObserver(0.5);

  const isVideo = /\.(webm|mp4)$/i.test(src);
  const isImage = /\.(webp|gif|jpg|jpeg|png)$/i.test(src);

    return (
        <motion.div ref={containerRef} className={`flex justify-center items-center`}
			initial={{
				opacity: 0,
			}}
			animate={isVisible ? {
				opacity:1,
				transition: {
					duration: 0.5,
				}
			}:{}}
		>
			<div className={`flex flex-col items-center w-[${width}%]`}>
				{
					isVisible && (
						isImage ? (
							<Image
								src={src}
								alt={alt? alt : ""}
								width={1920}
								height={1080}
								className={`object-contain object-center rounded-md border-[2px] border-orTamise m-0`}
								// fill
							/>
						) :
						isVideo ? (
							<video
								src={src}
								autoPlay
								loop
								muted
								className={`object-contain object-center rounded-md border-[2px] border-orTamise m-0`}
								width="100%"
							/>
						) : ''
					)
				}
				<p className='p-0 m-0 mb-8 text-sm'>{desc}</p>
			</div>
        </motion.div>
      );
}

export default WrappedImageSingle