import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCreative} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-creative';
import type {SwiperProps} from "swiper/swiper-react";
import {projects} from "../../assets/utils/constants";
import {Link} from "react-router-dom";


export default function OurWork() {
    const swiperRef = useRef<SwiperProps>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    function moveToSlide(index :number) {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    }
    function slideChanged($event :any) {
        setActiveSlide($event.activeIndex);
    }

    const autoPlayTime = 4000;

    return (
        <section className="py-14 md:py-20 lg:py-40">
            <div className="container">
                <div className="flex justify-between items-center pb-10 md:pb-20">
                    <div className="flex flex-col">
                        <h2 className="section-header-subtitle">
                            Our Work
                        </h2>
                        <h3 className="section-header-heading">
                            Recent Projects
                        </h3>
                    </div>

                    <Link to="showcase" className="primary-btn">View all projects</Link>
                </div>

                <div>
                    <div className="flex lg:hidden">
                    </div>

                    <div className="hidden lg:grid grid-cols-12 h-[520px]">
                        <div className="col-span-7 lg:order-2 lg:pl-5">
                            <Swiper
                                ref={swiperRef}
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}
                                modules={[Autoplay, EffectCreative]}
                                autoplay={{
                                    delay: autoPlayTime,
                                    disableOnInteraction: true
                                }}
                                onSlideChange={slideChanged}
                                className=" overflow-hidden h-[520px] !min-h-full"
                            >
                                {projects.slice(0, 4).map(project => {
                                    return (
                                        <SwiperSlide style={{backgroundColor: project.color}}
                                                     className="overflow-hidden  ">
                                            <img src={project.images[0]} alt=""
                                                 className="w-full h-full object-contain"/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div className="lg:col-span-5 lg:order-1 lg:pr-5">
                            <div className="flex flex-col">
                                {projects.slice(0, 4).map((project, index) => {
                                    return (
                                        <button type="button" onClick={() => moveToSlide(index)} className={`relative py-6 px-5 font-medium border-b border-[#242b31] text-left cursor-pointer ${activeSlide === index ? 'bg-[#363B3F]/20' : '' }`}>
                                           <div className={`bg-primary absolute top-0 left-0 h-px ${activeSlide === index ? 'animate-bar':''}`}></div>
                                            <h4 className="text-gray-text text-base mb-1 md:mb-2">
                                                {project.subtitle}
                                            </h4>
                                            <h5 className="text-xl md:text-2xl">
                                                {project.title}
                                            </h5>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}
