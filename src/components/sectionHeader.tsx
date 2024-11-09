import React from 'react'

type SectionHeaderProps = {
    title: string
}

const SectionHeader = ({title} : SectionHeaderProps) => {
  return (
    <div className='text-[1.5rem] my-[1rem] font-semibold'>{title}</div>
  )
}

export default SectionHeader