// Common types used across components

import type { Users } from "../ts/api/eins/user/get_user_detail/get_user_detail_response";
import type { UserQueryParams } from "./api/eins/user/get_user_detail/get_user_detail_response";

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
    path: string;
    children?: Array<{
        id: string;
        label: string;
        path: string;
    }>;
    onClick?: () => void;
}


export interface DeviceCardDgProp {
    IsDeviceImage: string;
    IsVisible: string

}

export interface UserSearchModalProp {
    showModal: boolean;
    onClose: () => void;
    filters: UserQueryParams;
    setFilters: React.Dispatch<React.SetStateAction<UserQueryParams>>;
    users: Users[] | undefined
    isLoading: boolean;
    isError: boolean;
    handleSearch: () => void;
    editClick: (user: Users) => void;
    handleReset: () => void
}