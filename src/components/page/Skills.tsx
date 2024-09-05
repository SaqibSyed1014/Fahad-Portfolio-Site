import { skills } from "../../assets/utils/constants";

export default function Skills() {
    return (
        <section className="mt">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-header-subtitle">
                        Skills
                    </h2>
                    <h3 className="section-header-heading max-w-[620px] mx-auto">
                        I posses a variety of skills including:
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 mt-24 relative z-20">
                    {skills.map((value, index) => {
                            return (<div className="flex flex-col group max-md:text-center" key={index}>
                                    <div className="size-12">
                                        <img src={value.icon} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <h4 className="text-lg lg:mt-5 mb-2 xl:text-2xl font-medium">{value.title}</h4>
                                    <p className="text-gray-text text-base xl:text-lg">{value.description}</p>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex-1 h-2 bg-white rounded-lg">
                                            <div className="bg-primary rounded-lg h-full" style={{ width: `${value.rating}%` }}></div>
                                        </div>
                                        <div>{value.rating}%</div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    )
}
