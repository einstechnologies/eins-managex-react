
// Menu items configuration - easily customizable
import type { MenuItem, SidebarProps } from '../ts/index';
import { useState } from 'react';


 

interface SidebarComponentProps extends SidebarProps {
    onMenuItemClick?: (menuId: string) => void; 
  onHoverItem?: ((hoverData:
     {id: string; 
       index?: number;
      children?: any[]; 
      boundingRect: DOMRect} | null) => void);
    customMenuItems: MenuItem[];
    activeMenuItem: string;
     hoveredId?: string | null;  
}

function Sidebar({
    isVisible,
    isMobile,
    enableTransition,
    onMenuItemClick,
    customMenuItems,
    activeMenuItem,
    onHoverItem, 
    hoveredId,     
}: SidebarComponentProps) {
    const sidebarClass = isMobile
        ? `sidebar sidebar-mobile ${!isVisible ? 'sidebar-hidden' : ''} ${!enableTransition ? 'no-transition' : ''}`
        : `sidebar ${!isVisible ? 'sidebar-hidden' : ''} ${!enableTransition ? 'no-transition' : ''}`;
 const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
    const items = customMenuItems;
 const visibleItems = items.filter(item => item.id !== "Default");
    const handleMenuClick = (item: MenuItem) => {
        if (isMobile && item.children?.length) {
            setOpenMobileMenu(prev => prev === item.id ? null : item.id);
            return;
        }
        if (item.onClick) {
            item.onClick();
        } else if (onMenuItemClick) {
            onMenuItemClick(item.id);
        }
    };

    return (
        <div className={sidebarClass} onMouseLeave={() =>{   console.log('SIDEBAR LEFT'); onHoverItem?.(null)}} >
            <ul>
               {visibleItems.map((item) => (  // ← use visibleItems
       <li key={item.id} 
  onMouseEnter={(e) => {
      if (isMobile) return;
    console.log('LI ENTER:', item.id);
    const rect = e.currentTarget.getBoundingClientRect();
    onHoverItem?.({
      id: item.id,
      children: item.children || [],
      boundingRect: rect
    } as any);
  }}
  onClick={() => handleMenuClick(item)}
  className={`${activeMenuItem === item.id ? 'active' : ''} ${item.children ? 'has-children' : ''} ${hoveredId === item.id ? 'hovered' : ''} `}
>
  <div className="menu-item-main">
    <i className={item.icon}></i>
    <span className='Poppins-Regular'>{item.label}</span>
    {isMobile && item.children?.length ? (
                                <i className={`bi ${openMobileMenu === item.id
                                    ? 'bi-chevron-up'
                                    : 'bi-chevron-down'} mobile-arrow`}
                                />
                            ) : null}
  </div>
  {isMobile && openMobileMenu === item.id && item.children?.length ? (
                            <ul className="mobile-submenu">
                                {item.children.map((child: any) => (
                                    <li
                                        key={child.id}
                                        className="mobile-submenu-item"
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            onMenuItemClick?.(child.id);
                                            setOpenMobileMenu(null); 
                                        }}
                                    >
                                        <span>{child.label}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
</li>
      ))}
            </ul>
        </div>
    );
}

export default Sidebar;
