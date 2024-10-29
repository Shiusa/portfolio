import React, { ComponentPropsWithoutRef } from 'react'

const ChevronDownIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?:number}) => {
  return (
    <svg height={props.size} width={props.size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

export default ChevronDownIcon