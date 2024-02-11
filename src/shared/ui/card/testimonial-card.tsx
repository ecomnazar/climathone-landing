import React from 'react'
import { Icon } from '../icon'

interface Props {
    name: string
    image: string
}

export const TestimonialCard: React.FC<Props> = ({ name, image }) => {
    return (
        <div className='bg-white rounded-[22px] p-8'>
            <div className='flex items-center gap-x-4'>
                <img src={image} />
                <h4 className='text-dark font-semibold text-[19px]'>{name}</h4>
            </div>
            <p className='text-light font-inter text-[16px] text-left mt-8 mb-16'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <div className='flex items-center gap-x-1'>
                {Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <div key={index}>
                            <Icon type={'filled-star'} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
