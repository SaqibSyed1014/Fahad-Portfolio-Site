import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

export default function ProductStrategy() {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.product-strategy-section',
                start: 'top top',
                end: `bottom+=500 top`,
                pin: true,
                scrub: true
            },
        })
        tl.to('.strategy-content', { opacity: 0, duration: 0.5 });
        tl.fromTo('.client-message-1', {
            xPercent: 12,
            yPercent: -51
        }, {
            xPercent: -219,
            yPercent: -44
        })
        tl.fromTo('.concealed-message-1', {
            xPercent: 46,
            yPercent: -3
        }, {
            xPercent: -106,
            yPercent: -44
        })
        tl.fromTo('.client-message-2', {
            xPercent: 79,
            yPercent: -80
        }, {
            xPercent: 6.5,
            yPercent: -44
        })
        tl.fromTo('.concealed-message-2', {
            xPercent: 119,
            yPercent: -45
        }, {
            xPercent: 119,
            yPercent: -45
        })
        tl.from('.section-arrow', {
            opacity: 0
        })

    })
    return (
        <section className="product-strategy-section">
            <div className="container py-40">
                <div className="grid grid-cols-12 relative">
                    <div className="col-span-12 md:col-span-5">
                        <div className="strategy-content">
                            <h2 className="process-title">Product Strategy</h2>
                            <p className="process-desc">
                                Each collaboration starts with a thorough investigation of the product’s business,
                                analysis of its key features and definition of the optimal strategy for developing it.
                            </p>
                        </div>

                        <div className="block md:hidden">
                            <div className="mt-10">
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 hidden md:block md:ml-[8.9%]">
                        <div className="product-strategy-conversation">
                            <div className="product-strategy-message client-message-1">
                                <p>
                                    I have an idea: it’s a new product in this business that will revolutionize its user’s lives.
                                </p>
                                <small className="mt-4">Client</small>
                            </div>
                            <div className="product-strategy-message concealed-message-1">
                                <p>
                                    That solution sounds incredible! We looked into the possible competitors and we suggest this strategy.
                                </p>
                                <small className="mt-4">Concealed</small>
                            </div>
                            <div className="product-strategy-message client-message-2">
                                <p>
                                    Loved the detailed plan, let’s start working on it as soon as possible!
                                </p>
                                <small className="mt-4">Client</small>
                            </div>
                            <div className="product-strategy-message concealed-message-2">
                                <p>
                                    Perfect, we’ll set up the communication channels and kickstart the project immediately.
                                </p>
                                <small className="mt-4">Concealed</small>
                            </div>

                                <div className="section-arrow hidden overflow-hidden md:block absolute w-[298px] md:top-1/2 md:left-1/2 translate-y-[-190px] translate-x-[-165%]">
                                    <svg fill="none" height="58" viewBox="0 0 178 58" width="178" xmlns="http://www.w3.org/2000/svg"><path d="M1 32C9.23 16.869 39.642-9.551 95.443 5.816c55.8 15.367 76.571 43.407 79.138 51.668m0 0l2.505-7.551m-2.505 7.551l-7.118-1.96" opacity="0.9" stroke="#fcfcfa" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>


                                <div className="section-arrow hidden overflow-hidden xl:block xl:absolute xl:left-[40%] xl:bottom-[-60px]">
                                    <svg fill="none" height="46" viewBox="0 0 177 46" width="177" xmlns="http://www.w3.org/2000/svg"><path d="M.782.914c4.882 14.84 28.996 44.52 86.403 44.52 57.406 0 83.376-19.038 87.574-25.482m0 0l.879 7.03m-.879-7.03h-7.322" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>                        </div>

                                <div className="section-arrow hidden overflow-hidden md:block absolute md:top-1/2 md:left-1/2 translate-y-[-190px] translate-x-[150%]">
                                    <svg fill="none" height="58" viewBox="0 0 178 58" width="178" xmlns="http://www.w3.org/2000/svg"><path d="M1 32C9.23 16.869 39.642-9.551 95.443 5.816c55.8 15.367 76.571 43.407 79.138 51.668m0 0l2.505-7.551m-2.505 7.551l-7.118-1.96" opacity="0.9" stroke="#fcfcfa" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
