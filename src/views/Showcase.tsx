import ProjectsList from "../components/page/ProjectsList";
import Testimonials from "../components/page/Testimonials";
import ContactUsBanner from "../components/page/ContactUsBanner";
import {useState} from "react";

export default function Showcase() {
    let [compoKey, setKey] = useState(0);
    function updateKey() {
        setKey(Math.random());
    }

    return (
       <>
           <ProjectsList filtersUpdated={updateKey} />
           <Testimonials key={compoKey} />
           <ContactUsBanner />
       </>
    )
}
