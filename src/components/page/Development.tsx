import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Development() {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({
            small: '(max-width: 767px)',
            large: '(min-width: 768px)',
        }, (ctx) => {
            const { small, large} = ctx.conditions ?? {};
            if (large) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.development-step',
                        start: 'top top',
                        end: `bottom+=1200 top`,
                        pin: true,
                        scrub: true
                    },
                })
                tl.to('.development-content', { opacity: 0 });
                tl.fromTo('.code-mockup', {
                    xPercent: -20,
                    yPercent: -50,
                    scale: .53
                }, {
                    xPercent: -72,
                    yPercent: -44.7,
                    scale: .53
                });
                tl.fromTo('.developed-site', {
                    xPercent: 70,
                    yPercent: 20,
                }, {
                    xPercent: 5,
                    yPercent: -42,
                }, '<');
            }
        })
    })

    return (
        <section className="development-step overflow-hidden mt-32 md:mt-48 md:py-20 lg:py-48 relative">
            <div className="container">
                <div className="flex max-md:flex-col">
                        <div className="development-content max-w-[440px]">
                            <h2 className="process-title">Development</h2>
                            <p className="process-desc">
                                We translate design into digital apps and websites by following the best code practices,
                                using modularity as the foundation for any project and applying a thorough 2-step QA
                                process to our already consistent coding process. The combination of these rules allows
                                us to deliver the best solution for each challenge, every time.
                            </p>
                        </div>

                    <div className="hidden md:block">
                        <div>
                            <img className="code-mockup" src="https://www.concealed.pt/_next/static/media/development-left.aa1d6bbd.jpg" alt=""/>
                            <img className="developed-site" src="https://www.concealed.pt/_next/static/media/development-right-mobile.1b3c82ea.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
