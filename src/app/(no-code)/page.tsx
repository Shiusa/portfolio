
'use client'
import DownloadCVBtn from '@/components/DownloadCVBtn';
import { motion, Variants } from 'framer-motion'

const childVariant:Variants = {
	hidden: {
		opacity: 0,
		y: 50
	},
	visible: {
		opacity: 1,
		y: 0,
	}
}

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-y-scroll py-[5%] text-gray-200 px-[4%] scrollbar-hidden">
		<motion.div className="w-full flex flex-col items-center justify-center py-[50%]"
			variants={{
				hidden: {
					opacity: 1
				},
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: 0.075,
						ease: 'easeInOut'
					}
				}
			}}
			initial="hidden"
			animate="visible"
		>
			<motion.h1 className='pt-[12%] pb-[2%] w-full font-bold text-6xl text-center text-orTamise tracking-tighter'
				variants={childVariant}
			>
				NGUYEN KYLE
			</motion.h1>
			<motion.h1 className='pt-[4%] pb-[2%] w-full font-bold text-3xl text-center text-mauveNeon tracking-tight'
				variants={childVariant}
			>
				Étudiant en Informatique, Déterminé & Curieux
			</motion.h1>
			<motion.p className="text-center text-gray-200 text-pretty w-[40%] leading-4"
				variants={childVariant}
			>
				Passionné par le développement logiciel et les technologies modernes, je cherche un <span className="text-mauveNeon font-bold text-xl underline underline-offset-4">stage</span> pour appliquer mes compétences et continuer à apprendre.
			</motion.p>
			<div className='mt-[4%]'>
				<DownloadCVBtn/>
			</div>
		</motion.div>
		<div className="text-center">
			{/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, accusamus! Id excepturi est ducimus delectus. Eveniet repellendus, optio incidunt rerum ratione inventore quod ullam eligendi sint at quidem praesentium porro!</p> */}
		</div>
    </div>
  );
}
