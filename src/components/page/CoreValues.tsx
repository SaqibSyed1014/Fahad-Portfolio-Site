import { coreValues } from "../../assets/utils/constants";

export default function CoreValues() {
    return (
        <section className="mt-32 xl:mt-60">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-header-subtitle">
                        Core Values
                    </h2>
                    <h3 className="section-header-heading max-w-[620px] mx-auto">
                        The principles that guide us
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 mt-24 relative z-20">
                    {coreValues.map((value, index) => {
                            return (<div className="flex flex-col group max-md:text-center" key={index}>
                                    <div className="max-md:mx-auto max-md:scale-50">{value.icon}</div>
                                    <h4 className="text-lg lg:mt-5 mb-2 xl:text-2xl font-medium">{value.title}</h4>
                                    <p className="text-gray-text text-base xl:text-lg">{value.description}</p>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    )
}
