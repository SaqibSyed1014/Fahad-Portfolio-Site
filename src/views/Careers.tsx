import ContactUsBanner from "../components/page/ContactUsBanner";
import JoinOurTeam from "../components/page/JoinOurTeam";
import Perks from "../components/page/Perks";
import OpenPositions from "../components/page/OpenPositions";

export default function Careers() {
    return (
       <>
           <JoinOurTeam />
           <Perks />
           <OpenPositions />
           <section className="hidden lg:block md:40 xl:mt-60">
               <div className="container">
                   <img
                       src="https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteambuilding.e365751a.png&w=3840&q=100"
                       alt=""
                   />
               </div>
           </section>
           <ContactUsBanner />
       </>
    )
}
