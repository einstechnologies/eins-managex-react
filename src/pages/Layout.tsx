import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import { useSidebar } from '../hooks/useSidebar';
import '../styles/Sidebar.css';
import '../styles/Header.css';
import '../styles/Footer.css';
import type { MenuItem } from '../ts/index';
import { Outlet, useNavigate } from 'react-router-dom';


function LayoutPage() {
    const { isVisible, setIsVisible, isMobile, enableTransition, activeMenuItem,setActiveMenuItem } = useSidebar();
     const navigate = useNavigate();

    const menuItems: MenuItem[] = [
        { id: "DASHBOARD", icon: "bi bi-grid", label: "DASHBOARD", path: "/EINS_ManageX/Dashboard"},
        { id: "USER REGISTRATION", icon: "bi bi-person-add", label: "MANAGE USERS", path: "/EINS_ManageX/User"},
        { id: "CONFIGURATION", icon: "bi bi-gear-wide-connected", label: "CONFIGURATION",path: "/EINS_ManageX/Configuration"},
        { id: "TEMPLATE TRANSFER", icon: "bi bi-shuffle", label: "TEMPLATES",path: "/EINS_ManageX/TemplateTransfer" },
        { id: "TRANSACTION",icon: "bi bi-send", label: "TRANSACTION",path: "/EINS_ManageX/Transaction"  },
        { id: "PROFILE", icon: "bi bi-person-circle", label: "PROFILE",path: "/EINS_ManageX/Profile" },
        { id: "HELP", icon: "bi bi-patch-question", label: "HELP",path: "/EINS_ManageX/Help" }
    ];

    const handleMenuClick = (menuId: string) => {
         setActiveMenuItem(menuId);   
        const item = menuItems.find(m => m.id === menuId);
        if (item?.path) {
      navigate(item.path);   // ABSOLUTE path → no duplication
    }  
        if (isMobile) {
            setIsVisible(false);
        }
    };

    return (
        <>
            {isMobile && isVisible && (
                <div className="drawer-overlay" onClick={() => setIsVisible(false)} />
            )}

            <nav>
                <Header isVisible={isVisible} setVisible={setIsVisible} isMobile={isMobile} />
            </nav>

            <aside>
                <Sidebar
                    isVisible={isVisible}
                    isMobile={isMobile}
                    enableTransition={enableTransition}
                    onMenuItemClick={handleMenuClick}
                    customMenuItems={menuItems}
                    activeMenuItem={activeMenuItem}
                />
            </aside>

            <main>
                <MainContent isVisible={isVisible} isMobile={isMobile}>
                  <Outlet />
                </MainContent>
            </main>

            <footer>
                <Footer isVisible={isVisible} isMobile={isMobile} />
            </footer>
        </>
    );
}

export default LayoutPage;
