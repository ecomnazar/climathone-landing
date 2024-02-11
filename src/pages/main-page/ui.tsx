import React from 'react';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { TestimonialCard } from '@/shared/ui/card/testimonial-card'
import { Icon } from '@/shared/ui/icon'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export const MainPage = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleMenuClick = () => setIsOpen((prev) => !prev)

    return (
        <>
            <header className='container mx-auto px-4'>
                <nav className='py-6 flex items-center justify-between'>
                    <div className='flex items-center gap-x-4'>
                        {/* <img src="/images/logo.svg" alt="" /> */}
                        <h2 className='text-[21px] font-inter font-semibold'>dropIt.</h2>
                    </div>
                    <ul className='hidden md:flex items-center gap-x-6 font-inter text-light'>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Partners</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <div className='hidden md:flex items-cente gap-x-2'>
                        <Button title={'Sign in'} className='!bg-transparent !text-light hover:!bg-primary/10 ' />
                        <Button title={'Contact us'} />
                    </div>
                    <button className='md:hidden' onClick={handleMenuClick}>
                        <IoMenu size={36} />
                    </button>
                    <div className={clsx('p-4 fixed top-0 right-0 flex flex-col items-end z-[999] h-screen w-screen bg-white backdrop-blur-sm transition-all duration-500', {
                        'right-[0%]': isOpen === true,
                        'right-[-100%]': isOpen === false
                    })}>
                        <button onClick={handleMenuClick}>
                            <IoClose size={35} />
                        </button>
                        <ul className='space-y-4 mt-4 w-full'>
                            <li className='w-full bg-black/10 p-4 rounded-md text-[18px] text-dark font-inter'>Home</li>
                            <li className='w-full bg-black/10 p-4 rounded-md text-[18px] text-dark font-inter'>Courses</li>
                            <li className='w-full bg-black/10 p-4 rounded-md text-[18px] text-dark font-inter'>Partners</li>
                            <li className='w-full bg-black/10 p-4 rounded-md text-[18px] text-dark font-inter'>Blog</li>
                            <li className='w-full bg-black/10 p-4 rounded-md text-[18px] text-dark font-inter'>Contact</li>
                            <li className='w-full bg-black/10 p-4 rounded-md text-[18px] text-dark font-inter'>Join as student</li>
                            <li className='w-full bg-black/10 p-4 rounded-md text-[18px] text-dark font-inter'>Join as instructor</li>
                        </ul>
                    </div>
                </nav>
                <div className='relative p-8 md:p-14 border-[6px] border-primary/30 rounded-[43px] mt-12'>
                    <h1 className='mx-auto max-w-[700px] text-dark font-caladea text-[40px] md:text-[70px] text-center font-bold'>Learn how small changes can lead to <span className='text-[#EF670D]'>big</span> <span className='text-[#A7C07B]'>impacts</span></h1>
                    <p className='font-inter text-light text-center text-[16px] md:text-[20px] mt-4'>Provides you with the latest online learning system and material that help your</p>
                    <div className='absolute top-[-5%] right-[-5%] hidden xl:block'><Icon type={'half-ellipse'} /></div>
                    <div className='absolute top-1/2 right-[20%] hidden xl:block'><Icon type={'curved-arrow'} /></div>
                    <div className='hidden lg:flex gap-x-24 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2'>
                        <Button title={'Join as instructor'} className='scale-[1.2] border-8 !h-[60px] border-[#FBFBFF] bg-[#EF670D]' />
                        <Button title={'Join as student'} className='scale-[1.2] border-8 !h-[60px] border-[#FBFBFF]' />
                    </div>
                </div>
            </header>
            <section className='mt-24 bg-[#EBEBF5] rounded-[54px]'>
                <div className='container mx-auto px-4 py-20'>
                    <h2 className='font-caladea text-[40px] text-dark font-semibold'>Our Most <span className='text-primary'>Popular Courses</span></h2>
                    <p className='text-[18px] mb-20 font-inter text-light'>Let’s join our best classes with our famous instructor and institutes</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <Card userName={'Mia Mottley'} image={'/images/courses/course-1.png'} course={'Beautiful Green Climate Change'} color={'bg-[#24D198]'} description={'The Fundamentals – ice cap reduction, glacial melt, sea level change.'} />
                        <Card userName={'Nemonte Nenquimo'} image={'/images/courses/course-2.png'} course={'Gradient Climate Change'} color={'bg-[#00C1FF]'} description={'Intrenching Inequality - climate change in the developing world'} />
                        <Card userName={'Antonio Guterres'} image={'/images/courses/course-3.png'} course={'Beautiful Green Climate Change'} color={'bg-[#F15568]'} description={'The Future of Everyday Life – weather events, natural disasters, and ecological surprises'} />
                        <Card userName={'Bill McKibben'} image={'/images/courses/course-4.png'} course={'Gradient Climate Change'} color={'bg-[#7F56D9]'} description={'Climate Finance – valuing nature and action'} />
                        <Card userName={'Anne Hidalgo'} image={'/images/courses/course-5.png'} course={'Beautiful Green Climate Change'} color={'bg-[#FF6905]'} description={'Motivating Solidarity – global movements, local framings'} />
                        <Card userName={'Anthony Nyong'} image={'/images/courses/course-6.png'} course={'Gradient Climate Change'} color={'bg-[#4883FF]'} description={'Biomes and Biozones – considering eco-framings of space'} />
                    </div>
                </div>
            </section>
            /
            <section className='my-24 bg-[#EBEBF5] rounded-[54px] text-center'>
                <div className='container mx-auto px-4 py-10 md:py-20'>
                    <h2 className='font-caladea text-[40px] text-dark font-semibold'>Testimonials</h2>
                    <p className='text-[18px] mb-10 sm:mb-20 font-inter text-light'>What our student say about us</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        <TestimonialCard name={'Ronald Richards'} image={'/images/courses/user-1.png'} />
                        <TestimonialCard name={'Wade Warren'} image={'/images/courses/user-2.png'} />
                        <TestimonialCard name={'Jacob Jones'} image={'/images/courses/user-1.png'} />
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-4 my-24'>
                <div className='flex flex-col md:flex-row items-center justify-between flex-wrap gap-12'>
                    <img className='basis-[25%] lg:basis-[10%]' src="/images/hubspot-logo.svg" />
                    <img className='basis-[25%] lg:basis-[10%]' src="/images/gitlab-logo.svg" />
                    <img className='basis-[25%] lg:basis-[10%]' src="/images/loom-logo.svg" />
                    <img className='basis-[25%] lg:basis-[10%]' src="/images/livechat-logo.svg" />
                    <img className='basis-[25%] lg:basis-[10%]' src="/images/ahrefs-logo.svg" />
                </div>
            </section>
            <footer className='bg-primary'>
                <div className='container mx-auto px-4 pt-12'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        <div>
                            <div className='flex items-center gap-x-4'>
                                {/* <img src="/images/logo-white.svg" alt="" /> */}
                                <h2 className='text-[21px] font-inter font-semibold text-white'>dropIt.</h2>
                            </div>
                            <p className='font-inter text-white mt-6 text-[16px]'>Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                        <div>
                            <h4 className='text-[18px] font-inter font-medium text-white'>Contacts</h4>
                            <ul className='text-white font-inter text-[14px] mt-6 space-y-4'>
                                <li>+993 61234355</li>
                                <li>nazar.se7en@gmail.com</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-[18px] font-inter font-medium text-white'>Address</h4>
                            <ul className='text-white font-inter text-[14px] mt-6 space-y-4'>
                                <li>Turkmenistan, Ashgabat</li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-white/30 py-4 mt-8'>
                        <p className='text-[14px] text-[#ffffff] font-inter'>Copyright 2023 | All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
