import { tools } from "../../assets/utils/constants";

export default function Tools() {
    return (
        <section className="mt-32">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-header-subtitle">
                        Tools
                    </h2>
                    <h3 className="section-header-heading max-w-[620px] mx-auto">
                        I use a wide range of tools for Coding:
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 mt-24 relative z-20">
                    {tools.map((value, index) => {
                            return (<div className="flex flex-col text-center" key={index}>
                                    <div className="size-12 mx-auto">
                                        <img src={value.image} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <h4 className="text-lg lg:mt-5 mb-2 xl:text-2xl font-medium">{value.name}</h4>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    )
}
