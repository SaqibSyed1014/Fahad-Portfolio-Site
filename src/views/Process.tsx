import ContactBanner from "../components/page/ContactBanner";
import ProcessSteps from "../components/page/ProcessSteps";
import ProductStrategy from "../components/page/ProductStrategy";
import UIUXDesign from "../components/page/UIUXDesign";
import Development from "../components/page/Development";
import Conversion from "../components/page/Conversion";
import Testimonials from "../components/page/Testimonials";

export default function Process() {
    return (
        <div className="process-page mt-10 md:mt-20">
            <ProcessSteps />
            <ProductStrategy />
            <UIUXDesign />
            <Development />
            <Conversion />
            <Testimonials />
            <ContactBanner />
        </div>
    )
}
