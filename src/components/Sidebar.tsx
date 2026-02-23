
// Menu items configuration - easily customizable
import type { MenuItem, SidebarProps } from '../ts/index';

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
 const visibleItems = items.filter(item => item.id !== "Default");
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
               {visibleItems.map((item) => (  // ← use visibleItems
        <li key={item.id} onClick={() => handleMenuClick(item)} className={activeMenuItem === item.id ? 'active' : ''}>
          <i className={item.icon}></i>
          <span className='Poppins-Regular'>{item.label}</span>
        </li>
      ))}
            </ul>
        </div>
    );
}

export default Sidebar;
