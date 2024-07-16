import gsap from "gsap";
import {useRef} from "react";
import { useGSAP } from "@gsap/react";

export default function ProcessSteps() {
    const StepsSection = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.from('.section-header-text', {
            opacity: 0,
            scrollTrigger: {
                trigger: StepsSection.current,
                start: 'top center'
            },
            delay: .5
        });

    })

    return (
        <section>
            <div className="container text-center">
                <div className="section-header-text">
                    <h2 className="section-header-subtitle">
                        HOW WE CREATE
                    </h2>
                    <h3 className="section-header-main-heading">
                        Modern and intuitive
                        digital solutions
                    </h3>
                </div>

                <div className="flex justify-center items-center max-md:flex-col gap-5 mt-10 md:mt-20 text-base md:text-lg font-medium">
                    <p>Product Strategy</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z" fill="currentColor"></path></svg>
                    <p>UX & UI Design</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z" fill="currentColor"></path></svg>
                    <p>Development</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z" fill="currentColor"></path></svg>
                    <p>Conversion</p>
                </div>
            </div>
        </section>
    )
}
