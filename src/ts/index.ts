// Common types used across components

import DASHBOARD from '../pages/Dashboard';


export interface SidebarProps {
    isVisible: boolean;
    isMobile: boolean;
    enableTransition: boolean;
    activeMenuItem: string;
}

export interface HeaderProps {
    isVisible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isMobile: boolean;
}

export interface MainContentProps {
    isVisible: boolean;
    isMobile?: boolean;
}

export interface FooterProps {
    isVisible: boolean;
    isMobile?: boolean;
}

export interface MenuItem {
    id: string;
    icon: string;
    label: string;
    component: typeof DASHBOARD;
    onClick?: () => void;
}
