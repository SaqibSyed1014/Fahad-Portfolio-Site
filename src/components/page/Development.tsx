import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Development() {
    const textContainerRef = useRef<HTMLDivElement>(null);
    const demoTextContainerRef = useRef<HTMLDivElement>(null);

    const text = [
        {
            text: '<Description>',
            class: 'animation-text-tag'
        },
        {
            text: 'Concealed is a creative digital agency',
            class: 'animation-text-line'
        },
        {
            text: 'that designs and builds thoughtful digital',
            class: 'animation-text-line'
        },
        {
            text: 'experiences',
            class: 'animation-text-line'
        },
        {
            text: '</Description>',
            class: 'animation-text-tag'
        },
        {
            text: '</>',
            class: 'animation-text-ending-tag'
        },
        {
            text: ');',
            class: 'text'
        },
        {
            text: 'export default Development;',
            class: 'text-[#908efb]'
        }
    ];
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({
            small: '(max-width: 767px)',
            large: '(min-width: 768px)',
        }, (ctx) => {
            const { small, large} = ctx.conditions ?? {};
            gsap.set('.development-step', {
                padding: () => window.innerWidth >= 1200 ? '240px 0' : '180px 0'
            })
            if (large) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.development-step',
                        start: 'top top',
                        end: `bottom+=3500 top`,
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
                    yPercent: -50,
                    scale: .53,
                    duration: 5
                });
                tl.fromTo('.developed-site', {
                    xPercent: 70,
                    yPercent: 20,
                }, {
                    xPercent: 5,
                    yPercent: -42,
                    duration: 5
                }, '<');


                if (textContainerRef.current?.hasChildNodes()) textContainerRef.current.innerHTML = ''

                text.forEach((item, index) => {
                    const p = document.createElement('p');
                    p.classList.add(item.class);

                    const charSpans = item.text?.split('').map((char) => {
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.style.opacity = '0';
                        if (['<', '>'].includes(char)) span.classList.add('text-light');
                        else if ([')'].includes(char)) span.classList.add('text-[#ffd100]');
                        return span;
                    }) || [];

                    charSpans.forEach((span) => p?.appendChild(span));
                    textContainerRef.current?.appendChild(p);

                    tl.to(charSpans, {
                        opacity: 1,
                        stagger: .3
                    },);
                    if ([1, 2, 3].includes(index)) {
                        tl.to(`.code-output-demo .line-${index}`, {
                            duration: 20,
                            text: item.text,
                        }, '<')
                    }
                })
            }
        })
    })

    return (
        <section className="development-step md:!mb-52 xl:!mb-40">
            <div className="container relative">
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
                            <img className="code-mockup w-full" src="https://www.concealed.pt/_next/static/media/development-left.aa1d6bbd.jpg" alt=""/>
                            <div ref={textContainerRef} className="code-mockup-text absolute top-[50px] left-[20px] xl:top-[125px] xl:left-[45px] scale-[.85] xl:-mt-3 xl:-mb-1 w-[500px] z-20"></div>
                            <img className="developed-site w-full" src="https://www.concealed.pt/_next/static/media/development-right.7864e028.jpg" alt=""/>
                            <div ref={demoTextContainerRef} className="code-output-demo">
                                <p className="line-1"></p>
                                <p className="line-2"></p>
                                <p className="line-3"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
