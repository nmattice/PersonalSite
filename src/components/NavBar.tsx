import { useState } from "react";
import { NavLink } from "./NavLink";
import { NAV_ITEMS } from "../config/navigation";
import { DragHandle, Close } from "@mui/icons-material";
// import RoundOverlayImage from "./RoundOverlayImage";
// import selfImg from '../assets/nathan.JPEG';

export const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50 w-full bg-background/86 backdrop-blur-sm border-b border-fall-brown/20 text-shadow shadow-md'>
            <div className={`max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 ${isMobileMenuOpen ? '' : ''}`}>
                <div className="flex justify-end md:justify-center items-center h-16">

                    {/* <div className="flex-shrink-0 font-bold text-xl">
                        <RoundOverlayImage
                            imageUrl={selfImg}
                            imageAlt="Nathan"
                            size="sm"
                            className=""
                        />
                    </div> */}

                    <div className="hidden md:flex space-x-8">
                        {NAV_ITEMS.map((item) => (
                        <NavLink key={item.href} to={item.href}>
                            {item.label}
                        </NavLink>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 focus:outline-none relative w-6 h-6 [perspective:1000px]"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        >
                        <DragHandle className={`absolute inset-0 transition-all duration-800 ${isMobileMenuOpen ? 'opacity-0 rotate-y-180' : 'rotate-x-0'}`} />
                        <Close className={`absolute inset-0 transition-all duration-800 ${isMobileMenuOpen ? 'rotate-0' : 'opacity-0 -rotate-90'}`} />
                        </button>
                    </div>
                </div>
            </div>

      {/* 4. Mobile Menu Overlay (Conditional Render) */}
      {isMobileMenuOpen && (
        <div className="md:hidden z-99999 absolute top-0 w-full min-h-screen bg-fall-orange border-b shadow-lg animate-in slide-in-from-top-8000 flex-col">
            <div>
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 focus:outline-none relative w-6 h-6 [perspective:1000px]"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        >
                        <DragHandle className={`absolute inset-0 transition-all duration-800 ${isMobileMenuOpen ? 'opacity-0 rotate-y-180' : 'rotate-x-0'}`} />
                        <Close className={`absolute inset-0 transition-all duration-800 ${isMobileMenuOpen ? 'rotate-0' : 'opacity-0 -rotate-90'}`} />
                    </button>
                </div>
            </div>
            <div className="flex after:absolute after:bottom-40 after:h-0.5 after:w-full after:bg-fall-brown after:opacity-20">
                <div className="flex ml-8 flex-col space-y-4">
                    {NAV_ITEMS.map((item) => (
                    <NavLink 
                        key={item.href} 
                        to={item.href} 
                        mobile 
                        onClick={() => setMobileMenuOpen(false)}>
                        {item.label}
                    </NavLink>
                    ))}
                </div>

            </div>
        </div>
      )}
    </nav>
  );
};