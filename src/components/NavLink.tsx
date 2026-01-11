import { NavLink as RouterNavLink } from 'react-router-dom';

type NavLinkProps = {
    to: string;
    children: React.ReactNode;
    mobile?: boolean;
    onClick?: () => void;
};

export const NavLink = ({to, children, mobile = false, onClick}: NavLinkProps) => {
    const baseClass = 'transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 md:hover:after:w-full md:hover:text-brand-mist';
    const mobileClass = mobile ? 'block py-3 text-lg' : '';

    return (
        <RouterNavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) => {
                const activeClass = isActive 
                  ? "text-brand-cream font-bold" 
                  : "text-brand-cream";
                  
                return `${baseClass} ${activeClass} ${mobileClass} flex items-center gap-1`;
              }}
        >
        {children}
        </RouterNavLink>
    );
};
