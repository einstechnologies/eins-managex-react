
// Menu items configuration - easily customizable
import type { MenuItem, SidebarProps } from '../ts/index';

// const menuItems: MenuItem[] = [
//     { id: "DASHBOARD", icon: "bi bi-grid", label: "DASHBOARD" },
//     { id: "USER REGISTRATION", icon: "bi bi-person-add", label: "USER REGISTRATION" },
//     { id: "CONFIGURATION", icon: "bi bi-gear-wide-connected", label: "CONFIGURATION" },
//     { id: "TEMPLATE TRANSFER", icon: "bi bi-shuffle", label: "TEMPLATE TRANSFER" },
//     { id: "TRANSACTION", icon: "bi bi-send", label: "TRANSACTION" },
//     { id: "PROFILE", icon: "bi bi-person-circle", label: "PROFILE" },
//     { id: "HELP", icon: "bi bi-patch-question", label: "HELP" }
// ];



interface SidebarComponentProps extends SidebarProps {
    onMenuItemClick?: (menuId: string) => void;
    customMenuItems: MenuItem[];
    activeMenuItem: string;
}

function Sidebar({
    isVisible,
    isMobile,
    enableTransition,
    onMenuItemClick,
    customMenuItems,
    activeMenuItem
}: SidebarComponentProps) {
    const sidebarClass = isMobile
        ? `sidebar sidebar-mobile ${!isVisible ? 'sidebar-hidden' : ''} ${!enableTransition ? 'no-transition' : ''}`
        : `sidebar ${!isVisible ? 'sidebar-hidden' : ''} ${!enableTransition ? 'no-transition' : ''}`;

    const items = customMenuItems;

    const handleMenuClick = (item: MenuItem) => {
        if (item.onClick) {
            item.onClick();
        } else if (onMenuItemClick) {
            onMenuItemClick(item.id);
        }
    };

    return (
        <div className={sidebarClass}>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() => handleMenuClick(item)} className={activeMenuItem === item.id ? 'active' : ''}>

                        <i className={`${item.icon}`}></i>

                        <span className='Poppins-Regular'>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
