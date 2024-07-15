import React, {useRef, useState} from "react";
import {clientsFeedback} from "../../assets/utils/constants";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperProps} from "swiper/swiper-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Testimonials() {
    const swiperRef = useRef<SwiperProps>(null);

    const [activeSlide, setActiveSlide] = useState(1);

    function slideChanged(event :SwiperProps) {
        setActiveSlide(event.activeIndex)
    }

    const TestimonialsSection = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const animations = [
            { target: '.testimonial-card-1', endY: -19, speed: 1.095 },
            { target: '.testimonial-card-2', endY: -100, speed: 0.5 },
            { target: '.testimonial-card-3', endY: 60, speed: 0.7 },
        ];

        animations.forEach(({ target, endY, speed }) => {
            gsap.fromTo(
                target,
                { yPercent: 0 },
                {
                    yPercent: endY,
                    scrollTrigger: {
                        trigger: TestimonialsSection.current,
                        start: 'top center',
                        end: 'bottom top',
                        scrub: speed
                    },
                }
            );
        });
    });

    return (
        <section className="pt-24 pb-14 md:pt-40 md:pb-10" ref={TestimonialsSection}>
            <div className="container">
                <div className="hidden lg:grid grid-cols-12 gap-10">
                    <div className="md:col-span-4 md:mt-20">
                        <div className="flex flex-col border border-[#363b3f] p-6 testimonial-card-1">
                            <blockquote className="lg:text-lg xl:text-xl">
                                {clientsFeedback[1].briefFeedback}
                            </blockquote>
                            <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                {clientsFeedback[1].name}, {clientsFeedback[1].designation}, {clientsFeedback[1].companyName}
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-4 md:mt-36">
                        <div className="flex flex-col border border-[#363b3f] p-6 testimonial-card-2">
                            <blockquote className="lg:text-lg xl:text-xl">
                                {clientsFeedback[0].briefFeedback}
                            </blockquote>
                            <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                {clientsFeedback[0].name}, {clientsFeedback[0].designation}, {clientsFeedback[0].companyName}
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <div className="flex flex-col border border-[#363b3f] p-6 testimonial-card-3">
                            <blockquote className="lg:text-lg xl:text-xl">
                                {clientsFeedback[3].briefFeedback}
                            </blockquote>
                            <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                {clientsFeedback[3].name}, {clientsFeedback[3].designation}, {clientsFeedback[3].companyName}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden">
                    <Swiper
                        ref={swiperRef}
                        slides-per-view={1}
                        spaceBetween={30}
                        onSlideChange={slideChanged}
                        className="testimonials-mobile-slider !overflow-visible"
                    >
                        <SwiperSlide className="testimonials-mobile-slide">
                            <div className="grid gap-3 border border-[#363b3f] h-full p-6">
                                <blockquote className="text-lg xl:text-xl">
                                    {clientsFeedback[1].briefFeedback}
                                </blockquote>
                                <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                    {clientsFeedback[1].name}, {clientsFeedback[1].designation}, {clientsFeedback[1].companyName}
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonials-mobile-slide">
                            <div className="grid gap-3 border border-[#363b3f] h-full p-6">
                                <blockquote className="text-lg xl:text-xl">
                                    {clientsFeedback[0].briefFeedback}
                                </blockquote>
                                <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                    {clientsFeedback[0].name}, {clientsFeedback[0].designation}, {clientsFeedback[0].companyName}
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonials-mobile-slide">
                            <div className="grid gap-3 border border-[#363b3f] h-full p-6">
                                <blockquote className="text-lg xl:text-xl">
                                    {clientsFeedback[3].briefFeedback}
                                </blockquote>
                                <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                    {clientsFeedback[3].name}, {clientsFeedback[3].designation}, {clientsFeedback[3].companyName}
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex items-center justify-between gap-5 mt-5">
                        <div className="flex items-center flex-1 gap-2">
                            {[1, 2, 3].map((item, index) => (
                                <div key={index} className={`h-px w-full ${activeSlide === index ? 'bg-primary' : 'bg-light'}`} />
                            ))}
                        </div>
                        <div className="shrink-0">{activeSlide+1} of 3</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
