import SiteLogo from "../common/SiteLogo";
import {Link, NavLink} from "react-router-dom";

export default function Footer() {
    const menuLinks = [
        { label: 'Home', path: '/' },
        { label: 'Showcase', path: '/showcase' },
        // { label: 'Process', path: '/process' },
        { label: 'About', path: '/about' },
        { label: 'Say Hello', path: '/contact-us' }
    ]

    const socialLinks = [
        { label: 'GitHub', path: 'https://github.com/Bilal10Akram' },
        { label: 'Linkedin', path: 'https://www.linkedin.com/in/muhammad-bilal-akram-99b033129/' },
        { label: 'Skype', path: 'https://join.skype.com/invite/yskNEqJVPYwu' },
        { label: 'Stack Overflow', path: 'https://stackoverflow.com/users/22293418/asad-meer?tab=profile' }
    ]

    return (
        <footer className="py-24">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-6 md:col-span-3 xl:col-span-2 md:order-1">
                        <ul className="flex flex-col gap-6 md:px-10">
                            {menuLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={link.path} className="styled-link">{link.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3 xl:col-span-3 md:order-2">
                        <ul className="flex flex-col gap-6 md:px-10">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path} className="styled-link px-1">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 xl:col-span-7">
                        <div className="mt-20 md:mt-0">
                            {/*<SiteLogo />*/}

                            <a href="mailto:+92 339 4080410" className="text-2xl font-medium mb-8 mt-6 block">
                                +92 339 4080410
                            </a>
                            <a href="mailto:fibrahimbutt@gmail.com" className="text-2xl font-medium mb-8 mt-6 block">
                                fibrahimbutt@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};
