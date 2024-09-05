import Skills from "../components/page/Skills";
import Tools from "../components/page/Tools";
import ContactUsBanner from "../components/page/ContactUsBanner";
import ImportantDates from "../components/page/ImportantDates";

export default function About() {
    return (
        <div className="about-page mt-10 md:mt-20">
            <Skills />
            <Tools />
            {/*<ImportantDates />*/}
            <ContactUsBanner />
        </div>
    )
}
