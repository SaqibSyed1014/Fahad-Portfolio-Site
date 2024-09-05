import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const followerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!headingRef.current) return;

            const headingRect = headingRef.current.getBoundingClientRect();

            // Check if mouse is within heading bounds
            if (
                event.clientX >= headingRect.left &&
                event.clientX <= headingRect.right &&
                event.clientY >= headingRect.top &&
                event.clientY <= headingRect.bottom
            ) {
                // Calculate position relative to heading, clamped within bounds
                const x = Math.round(event.clientX - headingRect.left);
                const y = Math.round(event.clientY - headingRect.top);

                setMousePosition({ x, y });
                setIsHovering(true);
            } else setIsHovering(false);
        };

        const handleMouseLeave = () => setIsHovering(false);

        if (headingRef.current) {
            headingRef.current.addEventListener('mousemove', function (event) {
                handleMouseMove(event);
            })
            headingRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (headingRef.current) {
                headingRef.current.removeEventListener('mousemove', handleMouseMove);
                headingRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    useEffect(() => {
        if (followerRef.current && headingRef.current) {
            if (isHovering) {
                followerRef.current.style.left = `${mousePosition.x}px`;
                followerRef.current.style.top = `${mousePosition.y}px`;
            } else {
                // Default position
                followerRef.current.style.left = `15%`;
                followerRef.current.style.top = `75%`;
            }
        }
    }, [mousePosition, isHovering]);

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.hero-text', {
            opacity: 0,
            translateY: 50,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center'
            },
            delay: .5
        });
        gsap.from('.site-name', {
            opacity: 0,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center'
            },
        });
        gsap.from('.heading-text-piece', {
            opacity: 0,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center'
            },
            delay: .5
        });
    });

    return (
        <div className="home-view mt-10 md:mt-20 lg:pr-10">
            <div className="container" ref={container}>
                <div className="flex">
                    <div className="w-full lg:w-10/12 mx-auto xl:px-5">
                        <h1 ref={headingRef} className="hero-heading">
                            <span className="heading-text-piece">I'm</span><br/>
                            <div>
                                <span className="site-name">Fahad</span>&nbsp;
                                <span className="heading-text-piece">Ibrahim.</span>
                            </div>
                            <div ref={followerRef} className="heading-overlay max-md:hidden"></div>
                        </h1>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-full 2xl:w-8/12 lg:ml-[8.3%] xl:px-5">
                        <h2 className="hero-text">
                            I have 8 years of experience as a full-stack developer, specializing in Mobile And Web Applications. On the frontend, I'm skilled in React-Native, Java, Kotlin, Swift, Next.js, Vue.js and React.js. For backend development, I'm adept in Node.js, Express, Next.js and have experience working with both NoSQL databases like MongoDB and SQL databases like PostgresSql.                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
