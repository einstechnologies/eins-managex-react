import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import { useSidebar } from '../hooks/useSidebar';
import '../styles/Sidebar.css';
import '../styles/Header.css';
import '../styles/Footer.css';
import type { MenuItem } from '../ts/index';
import DASHBOARD from './Dashboard';
import USER_REGISTRATION from './UserRegistration';
import Default from './Default';


function LayoutPage() {
    const { isVisible, setIsVisible, isMobile, enableTransition, setActiveMenuItem, activeMenuItem } = useSidebar();

    const menuItems: MenuItem[] = [
        { id: "DASHBOARD", icon: "bi bi-grid", label: "DASHBOARD", component: DASHBOARD },
        { id: "USER REGISTRATION", icon: "bi bi-person-add", label: "MANAGE USERS", component: USER_REGISTRATION },
        { id: "CONFIGURATION", icon: "bi bi-gear-wide-connected", label: "CONFIGURATION", component: Default },
        { id: "TEMPLATE TRANSFER", icon: "bi bi-shuffle", label: "TEMPLATES", component: Default },
        { id: "TRANSACTION", icon: "bi bi-send", label: "TRANSACTION", component: Default },
        { id: "PROFILE", icon: "bi bi-person-circle", label: "PROFILE", component: Default },
        { id: "HELP", icon: "bi bi-patch-question", label: "HELP", component: Default }
    ];

    const handleMenuClick = (menuId: string) => {
        console.log(`Navigating to: ${menuId}`);

        setActiveMenuItem(menuId);

        if (isMobile) {
            setIsVisible(false);
        }
        // Add your routing logic
    };

    const ActiveComponent = menuItems.find(item => item.id === activeMenuItem)?.component || Default;

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
                    <ActiveComponent />
                </MainContent>
            </main>

            <footer>
                <Footer isVisible={isVisible} isMobile={isMobile} />
            </footer>
        </>
    );
}

export default LayoutPage;
