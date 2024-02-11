import clsx from 'clsx'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    title: string;
}

export const Button: React.FC<Props> = ({ className, title, ...props }) => {
    return (
        <button {...props} className={clsx('h-[48px] bg-primary text-[#ffffff] rounded-[47px] text-[16px] px-6 font-inter font-normal', className)}>{title}</button>
    )
}
