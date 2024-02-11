import React from 'react'
import { Icon } from '../icon'
import clsx from 'clsx';

interface Props {
    userName: string;
    image: string;
    course: string;
    color: string;
    description: string
}

export const Card: React.FC<Props> = ({ userName, image, course, color, description }) => {
    return (
        <div className='bg-[#ffffff] rounded-2xl overflow-hidden'>
            <img className='h-[250px]' src={image} />
            <div className='p-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <div className={clsx('w-[30px] h-[30px] rounded-full flex items-center justify-center', color)}><Icon type={'play'} /></div>
                        <p className='font-inter text-light text-[14px]'>25x lesson</p>
                    </div>
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
                <h3 className='text-dark font-semibold text-[20px] mt-8'>{description}</h3>
                <div className='w-full h-[2px] bg-light/20 my-8'></div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <img src="/images/courses/user-1.png" alt="" />
                        <div className='font-inter'>
                            <h4 className='text-dark font-semibold'>{userName}</h4>
                            <p className='text-light text-[14px]'>{course}</p>
                        </div>
                    </div>
                    <button className={clsx('py-2 px-6 rounded-full font-inter text-[14px] text-white', color)}>Design</button>
                </div>
            </div>
        </div>
    )
}
