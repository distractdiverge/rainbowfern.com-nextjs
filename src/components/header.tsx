import React from 'react';
import Link from 'next/link';
import rainbowFernLogo from '../../public/fern-colors-web.svg';

const HeaderComponent : React.FC = () => {

    const navigationLinks = [
        {
            title: "About",
            to: "/",
        },
        {
            title: "Projects",
            to: "/projects",
        },
        {
            title: "Experience",
            to: "/experience",
        },
        {
            title: "Background",
            to: "/background",
        },
    ];

    const DesktopNav = ({ links, className }: { links: {title: string, to: string}[], className: string }) => 
        <nav className={`flex ${className}`}>
            {links.map(({title, to}, index) => (
                <Link key={index} className="text-xs md:text-base block px-1 py-3 md:px-2 hover:text-gray-400 hover:underline" href={to}>{title}</Link>
            ))}
            <Link key={links.length} className="text-xs md:text-base block m-3 mt-2 p-1 px-2 rounded-md bg-gray-800 text-white mx-auto hover:text-black hover:bg-gray-400" href="/contact">Contact</Link>
        </nav>;

    const MobileNav = ({ links, className }: { links: {title: string, to: string}[], className: string }) =>
        <div className="relative">
            <button className="md:hidden z-50 relative mt-2 mr-2 w-6 h-6 flex flex-col justify-between">
                <span className={`h-1 block w-full bg-gray-800 transform transition-all duration-300 origin-center ${false ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`h-1 block w-full bg-gray-800 transform transition-all duration-300 ${false ? "opacity-0" : ""}`}></span>
                <span className={`h-1 blockw-full bg-gray-800 transform transition-all duration-300 origin-center ${false ? "-rotate-45 -translate-y-3" : ""}`}></span>
            </button>
            <nav 
            className={`
                fixed top-0 left-0 w-full h-screen bg-white opacity-90 backdrop-blur-md z-40
                transform transition-transform duration-300 ease-in-out
                ${false ? "translate-x-0" : "translate-x-full"}
                md:hidden flex flex-col items-center justify-center space-y-6
                ${className}
            `}>
                {links.map(({title, to}, index) => (
                    <Link key={index} className="text-2xl md:text-base block px-1 py-3 md:px-2 hover:text-gray-400 hover:underline" 
                    href={to}>{title}</Link>
                ))}
                <Link key={links.length} className="text-2xl md:text-base block px-1 py-3 md:px-2 hover:text-gray-400 hover:underline" 
                href="/contact">Contact</Link>
            </nav>
        </div> ;

    return (
        <header className="bg-white flex justify-between p-1 md:p-4">
            <Link href="/" className="flex">
                <img src={rainbowFernLogo.src} alt="Rainbowfern logo" 
                    className="block mt-2 ml-1 mr-2 md:mt-0 md:ml-0 max-w-[20px] max-h-[20px] md:max-w-[32px] md:max-h-[32px]"
                    /> 
                <h1 className="block mt-2 mr-2 text-s md:text-base">
                    Rainbowfern.com
                </h1>
            </Link>
            <div>
                <MobileNav className="" links={navigationLinks} />
            </div>
            <DesktopNav className="hidden md:flex" links={navigationLinks} />
        </header>
    );
};

export default HeaderComponent;