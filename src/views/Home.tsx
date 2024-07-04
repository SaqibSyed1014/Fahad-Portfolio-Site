import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
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
                } else {
                    setIsHovering(false);
                }
            };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

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
                followerRef.current.style.left = `33%`;
                followerRef.current.style.top = `54%`;
            }
        }
    }, [mousePosition, isHovering]);

    return (
        <div className="home-view mt-20">
            <div className="container">
                <div className="flex">
                    <div className="w-full lg:w-10/12 mx-auto px-5">
                        <h1 ref={headingRef} className="hero-heading">
                            <span>Everything</span>
                            <span>Concealed will</span>
                            <span>be revealed</span>
                            <div ref={followerRef} className="heading-overlay"></div>
                        </h1>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-full sm:w-10/12 md:w-11/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 lg:ml-[8.3%] px-5">
                        <h2 className="hero-text">
                            Concealed is a creative digital agency that designs and builds thoughtful digital experiences
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
