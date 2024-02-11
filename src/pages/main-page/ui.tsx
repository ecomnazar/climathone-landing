import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { TestimonialCard } from '@/shared/ui/card/testimonial-card'
import { Icon } from '@/shared/ui/icon'

export const MainPage = () => {
    return (
        <>
            <header className='container mx-auto px-4'>
                <nav className='py-6 flex items-center justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <img src="/images/logo.svg" alt="" />
                        <h2 className='text-[21px] font-inter font-medium'>Onlinetutor.</h2>
                    </div>
                    <ul className='flex items-center gap-x-6 font-inter text-light'>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Partners</li>
                        <li>Universities</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <div className='flex items-cente gap-x-2'>
                        <Button title={'Sign in'} className='!bg-transparent !text-light hover:!bg-primary/10 ' />
                        <Button title={'Contact us'} />
                    </div>
                </nav>
                <div className='relative p-14 border-[6px] border-primary/30 rounded-[43px] mt-12'>
                    <h1 className='mx-auto max-w-[1000px] text-dark font-caladea text-[70px] text-center font-bold'>Teaching in the Internet age means we must teach <span className='text-[#EF670D]'>tomorrow’s</span> <span className='text-[#7F56D9]'>skills today</span></h1>
                    <p className='font-inter text-light text-center text-[20px] mt-4'>Provides you with the latest online learning system and material that help your</p>
                    <div className='absolute top-[-5%] right-[-5%] hidden xl:block'><Icon type={'half-ellipse'} /></div>
                    <div className='absolute top-1/2 right-[20%] hidden xl:block'><Icon type={'curved-arrow'} /></div>
                    <div className='flex gap-x-24 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2'>
                        <Button title={'Join as instructor'} className='scale-[1.2] border-8 !h-[60px] border-[#ffffff] bg-[#EF670D]' />
                        <Button title={'Join as student'} className='scale-[1.2] border-8 !h-[60px] border-[#ffffff]' />
                    </div>
                </div>
            </header>
            <section className='container mx-auto px-4 mt-24'>
                <div className='flex justify-between items-center'>
                    <img src="/images/hubspot-logo.svg" />
                    <img src="/images/gitlab-logo.svg" />
                    <img src="/images/loom-logo.svg" />
                    <img src="/images/livechat-logo.svg" />
                    <img src="/images/ahrefs-logo.svg" />
                </div>
            </section>
            <section className='mt-24 bg-[#EBEBF5] rounded-[54px]'>
                <div className='container mx-auto px-4 py-20'>
                    <h2 className='font-caladea text-[40px] text-dark font-semibold'>Our Most <span className='text-primary'>Popular Courses</span></h2>
                    <p className='text-[18px] mb-20 font-inter text-light'>Let’s join our best classes with our famous instructor and institutes</p>
                    <div className='grid grid-cols-3 gap-10'>
                        <Card userName={'Wade Warren'} image={'/images/courses/course-1.png'} course={'Python developer'} color={'bg-[#24D198]'} description={'Supervised Machine Learning: Regression and Classification'} />
                        <Card userName={'Wade Warren'} image={'/images/courses/course-2.png'} course={'Python developer'} color={'bg-[#00C1FF]'} description={'Supervised Machine Learning: Regression and Classification'} />
                        <Card userName={'Wade Warren'} image={'/images/courses/course-3.png'} course={'Python developer'} color={'bg-[#F15568]'} description={'Supervised Machine Learning: Regression and Classification'} />
                        <Card userName={'Wade Warren'} image={'/images/courses/course-4.png'} course={'Python developer'} color={'bg-[#7F56D9]'} description={'Supervised Machine Learning: Regression and Classification'} />
                        <Card userName={'Wade Warren'} image={'/images/courses/course-5.png'} course={'Python developer'} color={'bg-[#FF6905]'} description={'Supervised Machine Learning: Regression and Classification'} />
                        <Card userName={'Wade Warren'} image={'/images/courses/course-6.png'} course={'Python developer'} color={'bg-[#4883FF]'} description={'Supervised Machine Learning: Regression and Classification'} />
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-4 mt-24 text-center'>
                <h2 className='font-caladea text-[40px] text-dark font-semibold'>Explore <span className='text-primary'>Top Categories </span></h2>
                <p className='text-[18px] mb-20 font-inter text-light'>Let’s join our best classes with our famous instructor and institutes</p>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='flex flex-col items-center bg-[#F6F6FC] border border-[#DADAF7] rounded-[20px] px-4 py-10'>
                        <div className='w-[60px] h-[60px] bg-gradient-to-br from-[#FFFFFF]/50 via-[#4F9AF8] to-[#1C6ED4] rounded-full p-4  flex items-center justify-center'><Icon type={'art-design'} /></div>
                        <p className='font-inter text-dark font-medium text-[16px] mt-4'>Art & Design</p>
                    </div>
                    <div className='flex flex-col items-center bg-[#F6F6FC] border border-[#DADAF7] rounded-[20px] px-4 py-10'>
                        <div className='w-[60px] h-[60px] bg-gradient-to-br from-[#FFFFFF]/50 via-[#EA833F] to-[#F1B455] rounded-full p-4  flex items-center justify-center'><Icon type={'development'} /></div>
                        <p className='font-inter text-dark font-medium text-[16px] mt-4'>Development</p>
                    </div>
                    <div className='flex flex-col items-center bg-[#F6F6FC] border border-[#DADAF7] rounded-[20px] px-4 py-10'>
                        <div className='w-[60px] h-[60px] bg-gradient-to-br from-[#FFFFFF]/50 via-[#4F9AF8] to-[#1C6ED4] rounded-full p-4  flex items-center justify-center'><Icon type={'art-design'} /></div>
                        <p className='font-inter text-dark font-medium text-[16px] mt-4'>Art & Design</p>
                    </div>
                    <div className='flex flex-col items-center bg-[#F6F6FC] border border-[#DADAF7] rounded-[20px] px-4 py-10'>
                        <div className='w-[60px] h-[60px] bg-gradient-to-br from-[#FFFFFF]/50 via-[#EA833F] to-[#F1B455] rounded-full p-4  flex items-center justify-center'><Icon type={'development'} /></div>
                        <p className='font-inter text-dark font-medium text-[16px] mt-4'>Development</p>
                    </div>
                    <div className='flex flex-col items-center bg-[#F6F6FC] border border-[#DADAF7] rounded-[20px] px-4 py-10'>
                        <div className='w-[60px] h-[60px] bg-gradient-to-br from-[#FFFFFF]/50 via-[#4F9AF8] to-[#1C6ED4] rounded-full p-4  flex items-center justify-center'><Icon type={'art-design'} /></div>
                        <p className='font-inter text-dark font-medium text-[16px] mt-4'>Art & Design</p>
                    </div>
                    <div className='flex flex-col items-center bg-[#F6F6FC] border border-[#DADAF7] rounded-[20px] px-4 py-10'>
                        <div className='w-[60px] h-[60px] bg-gradient-to-br from-[#FFFFFF]/50 via-[#EA833F] to-[#F1B455] rounded-full p-4  flex items-center justify-center'><Icon type={'development'} /></div>
                        <p className='font-inter text-dark font-medium text-[16px] mt-4'>Development</p>
                    </div>
                </div>
            </section>
            <section className='mt-24 bg-[#EBEBF5] rounded-[54px] text-center'>
                <div className='container mx-auto px-4 py-20'>
                    <h2 className='font-caladea text-[40px] text-dark font-semibold'>Testimonials</h2>
                    <p className='text-[18px] mb-20 font-inter text-light'>What our student say about us</p>
                    <div className='grid grid-cols-3 gap-10'>
                        <TestimonialCard name={'Ronald Richards'} image={'/images/courses/user-1.png'} />
                        <TestimonialCard name={'Wade Warren'} image={'/images/courses/user-2.png'} />
                        <TestimonialCard name={'Jacob Jones'} image={'/images/courses/user-1.png'} />
                    </div>
                </div>
            </section>
            <footer className='bg-primary'>
                <div className='container mx-auto px-4 pt-12'>
                    <div className='grid grid-cols-3 gap-10'>
                        <div>
                            <div className='flex items-center gap-x-4'>
                                <img src="/images/logo-white.svg" alt="" />
                                <h2 className='text-[21px] font-inter font-medium text-white'>Onlinetutor.</h2>
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
