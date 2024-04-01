'use client';
import { NavLink } from "@/lib/definitions"
import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container } from "@radix-ui/themes"
import { useEffect, useState } from "react";

// Nav links
const links: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Contact', href: '/contact' },
]

export default function NavBar() {

    // Handle mobile navigation toggling
    const [isOpen, setIsOpen] = useState(false);

    // Handle navigation white background after scrolling
    const [isScrolled, setIsScrolled] = useState(false);

    // Add white background after scrolling
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0); // Adjust the value based on your desired scroll threshold
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle opening and closing of Nav bar
    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className={`py-2 sm:py-5 p-sm-inline sm:p-inline fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                <Container>
                    {/* Desktop view navigation */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">

                            {/* Logo */}
                            <Link href={"/"} className="relative block font-bold text-2xl mt-5">
                                <span className={`absolute top-[-28px] left-[-30px] -rotate-[30deg] text-pry`}>
                                    <GraduationCapIcon w={"40"} h={"40"} />
                                </span>
                                <span>Eazy School</span>
                            </Link>

                            {/* Navlinks */}
                            <div className="hidden md:block">
                                <NavLinks />
                            </div>

                            {/* Hamburger button */}
                            <div className="-mr-2 flex md:hidden">
                                <HamburgerButton toggleNav={toggleNav} isOpen={isOpen} />
                            </div>
                        </div>
                    </div>

                    {/* Moble view navigation */}
                    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
                        <NavLinks mobile />
                    </div>
                </Container>
            </nav>
        </>
    )
}


const NavLinks = ({ mobile }: { mobile?: boolean }) => {

    // Get current pathname for active states
    const pathname = usePathname();

    if (mobile) {
        return (
            <>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {links.map((link: NavLink, index: number) => {
                        return (
                            <li key={index}
                                className={classNames({
                                    'text-pry': pathname === link.href,
                                    'text-black': pathname !== link.href,
                                    'hover:text-pry transition-colors text-md block px-3 py-2 rounded-md text-base font-medium': true
                                })}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <>
            <ul className="flex gap-x-6" >
                {links.map((link: NavLink, index: number) => {
                    return (
                        <li key={index}
                            className={classNames({
                                'text-pry': pathname === link.href,
                                'text-black': pathname !== link.href,
                                'hover:text-pry transition-colors font-bold text-md': true
                            })}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

// graduaction cap used at logo
const GraduationCapIcon = ({ w = "18", h = "18" }: { w?: string, h?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
        </svg>
    )
}


// Hamburger button for opeining anc closing mene
const HamburgerButton = ({ toggleNav, isOpen }: { toggleNav: () => void; isOpen: boolean }) => {
    return (
        <>
            <button
                onClick={toggleNav}
                type="button"
                className="bg-pry inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </button>
        </>
    )
}