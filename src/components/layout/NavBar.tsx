import {Link, NavLink} from "react-router-dom";
import SiteLogo from "../common/SiteLogo";

export default function NavBar() {
    const menuLinks = [
        { label: 'Showcase', path: '/showcase' },
        { label: 'Process', path: '/process' },
        { label: 'About', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: <>Say Hello <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_base-button__icon__EYMfV styles_base-button__icon--no-margin-right__rJm3b
              "><path fillRule="evenodd" clipRule="evenodd" d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z" fill="currentColor"></path></svg></>,
            path: '/contact-us' }
    ]

    return (
        <nav className="py-10">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link to="/">
                       <SiteLogo />
                    </Link>

                    <ul className="flex gap-7 text-light font-inter">
                        {menuLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink to={link.path} className={`styled-link ${index === menuLinks.length - 1 ? 'last-link' : ''}`}>{link.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </nav>
    )
};
