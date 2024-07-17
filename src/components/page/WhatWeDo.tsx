import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Service {
    label: string;
    text: string;
    icon: JSX.Element;
}

export default function WhatWeDo() {
    const services :Service[] = [
        {
            label: 'Product Strategy',
            text: 'Thorough research and an optimized strategy are the foundation for the best product development.',
            icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="clippy"><path fill="#3D43D8" fillOpacity="0.8" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" d="M7 7h32v32H7z"></path><path d="M15 7h16l-2.5 6h-11L15 7z" fill="#040B10" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path><path className="group-hover:[stroke-opacity:0] group-hover:[stroke-dashoffset:0] svg-transition" d="M15 23h8M15 29h4" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
        },
        {
            label: 'UX & UI Design',
            text: 'UX allows for the best user experience/UI displays the most interesting visuals.',
            icon: <svg overflow="visible" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="pencil"><path fill="none" d="M0 0h46v46H0z"></path><g filter="url(#filter0_d_12_623)"><path fillRule="evenodd" clipRule="evenodd" d="M-.128 31.462a.5.5 0 01.344-.48l22.641-7.457a.5.5 0 01.315 0l22.613 7.544a.5.5 0 01-.011.952l-22.64 6.957a.5.5 0 01-.296 0L.223 31.935a.5.5 0 01-.35-.473zm2.139-.018l20.976 6.533 21.001-6.454-20.975-6.996L2.01 31.444z" fill="#FCFCFA" fillOpacity="0.6" shapeRendering="crispEdges"></path></g><g className="group-hover:[transform:matrix(1,0,0,1,8,0)] svg-transition" stroke="#F9F6F1" strokeOpacity="0.6" strokeLinecap="round" data-svg-origin="19.392000198364258 5.679998397827148" transform="matrix(1,0,0,1,0,0)"><path d="M36.546 5.682l8.126 8.126-17.62 17.155h-7.66V23.3l17.154-17.62z" fill="#3238B0"></path><path d="M36.546 5.682l8.126 8.126-3.18 2.934-4.228-4.35-3.611-3.53 2.893-3.18z" fill="#3238B0"></path><path d="M33.714 8.965l7.661 7.661M20.581 22.098l7.661 7.661" strokeLinejoin="round"></path></g></g><defs><clipPath id="clip0_12_623"><path fill="#fff" d="M0 0h46v46H0z"></path></clipPath><filter id="filter0_d_12_623" x="-7.128" y="20.5" width="60.255" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_623"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_623" result="shape"></feBlend></filter></defs></svg>
        },
        {
            label: 'Development',
            text: 'Websites, desktop apps, mobile apps, the works — You name it: we code it.',
            icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="development" clipPath="url(#clip0_12_604)"><path fill="none" d="M0 0h46v46H0z"></path><g className="group-hover:[transform:matrix(1,0,0,1,0,-6)] svg-transition" filter="url(#filter0_d_12_604)" shapeRendering="crispEdges" data-svg-origin="0.37299999594688416 24.5" transform="matrix(1,0,0,1,0,0)"><path d="M.373 32L23 24.5 45.627 32 23 39 .373 32z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 32L23 24.5 45.627 32 23 39 .373 32z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g><g filter="url(#filter1_d_12_604)" shapeRendering="crispEdges"><path d="M.373 23L23 15.5 45.627 23 23 30 .373 23z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 23L23 15.5 45.627 23 23 30 .373 23z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g><g className="group-hover:[transform:matrix(1,0,0,1,0,6)] svg-transition" filter="url(#filter2_d_12_604)" shapeRendering="crispEdges" data-svg-origin="0.37299999594688416 6.5" transform="matrix(1,0,0,1,0,0)"><path d="M.373 14L23 6.5 45.627 14 23 21 .373 14z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 14L23 6.5 45.627 14 23 21 .373 14z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g></g><defs><filter id="filter0_d_12_604" x="-7.127" y="21" width="60.255" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><filter id="filter1_d_12_604" x="-7.127" y="12" width="60.255" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><filter id="filter2_d_12_604" x="-7.127" y="3" width="60.255" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><clipPath id="clip0_12_604"><path fill="#fff" d="M0 0h46v46H0z"></path></clipPath></defs></svg>
        },
        {
            label: 'Conversion',
            text: 'We make your product work for your business.',
            icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-30deg] group-hover:rotate-[-180deg] svg-transition"><g data-svg-origin="23 23" transform="matrix(1,0,0,1,0,0)"><path fill="none" d="M0 0h46v46H0z"></path><circle cx="23" cy="23" r="16" fill="#3D43D8" fillOpacity="0.8"></circle><circle cx="23" cy="23" r="15.5" stroke="#FCFCFA" strokeOpacity="0.6"></circle><circle cx="23" cy="23" r="7" fill="#040B10"></circle><path opacity="0.9" d="M42.846 29.994l-4.276-5.649-6.341 3.661M2.155 20.414l5.592 4.35 5.177-5.178" stroke="#FCFCFA" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
        }
    ]

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
            const mm = gsap.matchMedia();
            mm.add({
                small: '(max-width: 767px)',
                large: '(min-width: 768px)',
            }, (ctx) => {
                const { small, large } = ctx.conditions ?? {};
                if (large) {
                    gsap.from('.box', {
                        opacity: 0,
                        stagger: 0.7,
                        scrollTrigger: {
                            trigger: container.current,
                            start: 'top center'
                        }
                    });
                    gsap.from('.section-arrow', {
                        width: 0,
                        stagger: 0.7,
                        scrollTrigger: {
                            trigger: container.current,
                            start: 'top center'
                        }
                    });
                }
                else if (small) {
                    gsap.utils.toArray('.box').forEach((box :any) => {
                        gsap.fromTo(
                            box,
                            { opacity: 0 },
                            {
                                opacity: 1,
                                duration: 0.8,
                                ease: 'power2.out',
                                scrollTrigger: {
                                    trigger: box,
                                    start: 'top center+=100',
                                    end: 'bottom center',
                                    scrub: true,
                                    toggleActions: 'play none none reverse', // Play on enter, do nothing on other events
                                },
                            }
                        );
                    })
                }
            });
        },
        { scope: container }
    );

    return (
        <section className="what-we-do-section py-14 md:py-20 xl:py-40">
            <div className="container" ref={container}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-0 relative">
                    {services.map((service :Service, index :number) => {
                        return (
                            <div key={index} className="group xl:px-5 box">
                                {service.icon}
                                <h3 className="lg:text-lg lg:mt-5 lg:mb-2 xl:text-2xl font-medium">{service.label}</h3>
                                <p className="text-gray-text text-base xl:text-lg">{service.text}</p>
                            </div>
                        )
                    })}
                    <div className="hidden xl:block">
                        <div className="section-arrow hidden overflow-hidden xl:block xl:absolute xl:left-[10%] xl:top-[-40px] [transform:matrix(0.97,0.23,0.23,-0.97,0,0)]">
                            <svg fill="none" height="46" viewBox="0 0 177 46" width="177" xmlns="http://www.w3.org/2000/svg"><path d="M.782.914c4.882 14.84 28.996 44.52 86.403 44.52 57.406 0 83.376-19.038 87.574-25.482m0 0l.879 7.03m-.879-7.03h-7.322" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>

                        <div className="section-arrow hidden overflow-hidden xl:block xl:absolute xl:left-[40%] xl:bottom-[-60px]">
                            <svg fill="none" height="46" viewBox="0 0 177 46" width="177" xmlns="http://www.w3.org/2000/svg"><path d="M.782.914c4.882 14.84 28.996 44.52 86.403 44.52 57.406 0 83.376-19.038 87.574-25.482m0 0l.879 7.03m-.879-7.03h-7.322" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>                        </div>

                        <div className="section-arrow hidden overflow-hidden xl:block xl:absolute xl:left-[60%] xl:top-[-40px] [transform:matrix(0.97,0.23,0.23,-0.97,0,0)]">
                            <svg fill="none" height="46" viewBox="0 0 177 46" width="177" xmlns="http://www.w3.org/2000/svg"><path d="M.782.914c4.882 14.84 28.996 44.52 86.403 44.52 57.406 0 83.376-19.038 87.574-25.482m0 0l.879 7.03m-.879-7.03h-7.322" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
