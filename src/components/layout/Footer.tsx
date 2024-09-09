import { Link, NavLink } from "react-router-dom";
import { navigationLinks, socialLinks } from "../../assets/utils/constants";

export default function Footer() {
    return (
        <footer className="py-24">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-6 md:col-span-3 xl:col-span-2 md:order-1">
                        <ul className="flex flex-col gap-6 md:px-10">
                            {navigationLinks.map((link, index) => (
                                <li key={index} className="footer-link">
                                    <NavLink
                                        to={link.path}
                                        className="styled-link"
                                        target={link.isInternalLink ? '_self' : '_blank'}
                                    >{link.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3 xl:col-span-3 md:order-2">
                        <ul className="flex flex-col gap-6 md:px-10">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="styled-link"
                                    >{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 xl:col-span-7">
                        <div className="mt-20 md:mt-0">
                            <a href="tel:+92394080410" className="text-2xl font-medium mb-8 mt-6 block">
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
