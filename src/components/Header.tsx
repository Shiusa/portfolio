"use client"
import React from 'react'
import Tab from './Tab';
import { useTabContext } from '@/context/TabProvider';
import { AnimatePresence } from 'framer-motion'

// type tabType = {
// 	id: number;
// 	title: string;
// 	path: string;
// }

// const tabTest:tabType[] = [
// 	{
// 		id: 1,
// 		title: "test",
// 		path: "/projects/1"
// 	},
// 	{
// 		id: 2,
// 		title: "Projet azd azd qsdsqd",
// 		path: "/projects/2"
// 	},
// 	{
// 		id: 3,
// 		title: "Projet azd",
// 		path: "/projects/3"
// 	},
// ]

const Header = () => {

	const { tabs, removeTab } = useTabContext();

	return (
		<header className='sticky top-0 left-0 h-10 lg:h-[4%] w-full hidden lg:flex z-50'>
			{/* <div className='lg:w-1/5 xl:w-[10.5%] bg-bleuAcier text-orTamise lg:flex items-center lg:justify-start pl-[4%] xl:pl-[2%] hidden'>
				<p className='xl:text-left w-full'>Nguyen Kyle</p>
			</div> */}
			{/*lg:w-4/5 xl:w-[89.5%]*/}
			{/* <div className='flex items-start justify-center w-full bg-grisAnthracite'>
				<div className='bg-roseNeon w-[20%] h-3/4 rounded-b-full'></div>
			</div> */}
			<div className='flex items-center w-full bg-grisAnthracite gap-[1px] max-h-[100%]'>
				<AnimatePresence>
					{tabs.map(tab=><Tab key={tab.id} title={tab.title} path={tab.path} onRemove={()=>removeTab(tab.id)} />)}
				</AnimatePresence>
			</div>
		</header>
	)
}

export default Header