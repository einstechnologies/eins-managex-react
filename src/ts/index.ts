// Common types used across components

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
    path:string
    onClick?: () => void;
}

// types.ts
export interface Transaction {
  status: "Paid" | "Pending" | "in Process";
  date: string;
  type: "Deposit" | "Withdrawal" | "Referral";
  amount: string;
  currency: string;
  tokens: string;
  details: string;
  icon?: string;
}

export interface DeviceCardDgProp
{
    IsDeviceImage:string;
    IsVisible:string
    
} 