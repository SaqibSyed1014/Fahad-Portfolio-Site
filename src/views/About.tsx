import AboutImages from "../components/page/AboutImages";
import CoreValues from "../components/page/CoreValues";
import Team from "../components/page/Team";
import ContactUsBanner from "../components/page/ContactUsBanner";
import ImportantDates from "../components/page/ImportantDates";

export default function About() {
    return (
        <div className="about-page mt-10 md:mt-20">
            <AboutImages />
            <CoreValues />
            <Team />
            <ImportantDates />
            <ContactUsBanner />
        </div>
    )
}
