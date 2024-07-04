import {Outlet} from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

export default function DefaultLayout() {
    return (
        <div className="flex flex-col bg-dark text-light font-inter">
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
