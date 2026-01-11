export type NavItem = {
    label: string;
    href: string;
    children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'My Story', href: '/my-story' },
    { label: 'Learning', href: '/interests' },
    { label: 'Resume', href: '/contact' },
    // { label: 'ToDo', href: '/todo' },
];