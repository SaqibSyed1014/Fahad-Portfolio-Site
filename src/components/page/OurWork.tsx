import {projects} from "../../assets/utils/constants";

export default function OurWork() {

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

                    <button className="primary-btn">View all projects</button>
                </div>

                <div>
                    <div className="flex lg:hidden">

                    </div>

                    <div className="hidden lg:grid grid-cols-12">
                        <div className="lg:col-span-7 lg:order-2">

                        </div>
                        <div className="lg:col-span-5 lg:order-1">
                            <div className="flex flex-col">
                                {projects.slice(0, 4).map(project => {
                                    return (
                                        <div className="py-6 px-5 font-medium border-b border-[#242b31] bg-[#363B3F]/20">
                                            <h4 className="text-gray-text text-base mb-1 md:mb-2">
                                                {project.subtitle}
                                            </h4>
                                            <h5 className="text-xl md:text-2xl">
                                                {project.title}
                                            </h5>
                                        </div>
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
