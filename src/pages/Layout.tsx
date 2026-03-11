import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { useSidebar } from "../hooks/useSidebar";
import "../styles/Sidebar.css";
import "../styles/Header.css";
import "../styles/Footer.css";
import type { MenuItem } from "../ts/index";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function LayoutPage() {
  const ObjSwal = withReactContent(Swal);
  const {
    isVisible,
    setIsVisible,
    isMobile,
    enableTransition,
    activeMenuItem,
    setActiveMenuItem,
  } = useSidebar();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [menuRect, setMenuRect] = useState<DOMRect | null>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: "DASHBOARD",
      icon: "bi bi-grid",
      label: "DASHBOARD",
      path: "/EINS_ManageX/Dashboard",
    },
    {
      id: "USER REGISTRATION",
      icon: "bi bi-person-add",
      label: "MANAGE USERS",
      path: "/EINS_ManageX/User/UserRegistration",
      children: [
        // { id: "User_Registration", label: "User Registration", path: "/EINS_ManageX/User/UserRegistration" },
        // { id: "User_Search", label: "User Search", path: "/EINS_ManageX/User/UserSearch" },],
      ],
    },
    {
      id: "CONFIGURATION",
      icon: "bi bi-gear-wide-connected",
      label: "CONFIGURATION",
      path: "/EINS_ManageX/Configuration",
    },
    {
      id: "TEMPLATE TRANSFER",
      icon: "bi bi-shuffle",
      label: "INTEGRATION",
      path: "/EINS_ManageX/TemplateTransfer",
    },
    {
      id: "TRANSACTION",
      icon: "bi bi-send",
      label: "TRANSACTION",
      path: "/EINS_ManageX/Transaction",
    },
    {
      id: "PROFILE",
      icon: "bi bi-person-circle",
      label: "PROFILE",
      path: "/EINS_ManageX/Profile",
    },
    {
      id: "LOGOUT",
      icon: "bi bi-box-arrow-right",
      label: "LOGOUT",
      path: "/EINS_ManageX/",
    },
  ];

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSidebarHover = (data: any) => {
    if (!isMounted.current) return;
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (data?.id) {
      const idx = menuItems.findIndex((m) => m.id === data.id);
      setHoveredIndex(idx);
      setHoveredId(data.id);
      setMenuRect(data.boundingRect);
    } else {
      hideTimeout.current = setTimeout(() => {
        setHoveredIndex(null);
        setHoveredId(null);
        setMenuRect(null);
      }, 150);
    }
  };

  const handleSubmenuEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current); //  cancel hide
  };
  const handleSubmenuLeave = () => {
    hideTimeout.current = setTimeout(() => {
      //  delay hide
      setHoveredIndex(null);
      setHoveredId(null);
      setMenuRect(null);
    }, 150);
  };

  const handleMenuClick = (menuId: string) => {
    setActiveMenuItem(menuId);
    const item = menuItems.find((m) => m.id === menuId);

    if (item?.path) {
      if (item?.id == "LOGOUT") {
        ObjSwal.fire({
          title: "Are you sure?",
          text: "Do you really want to logout?",
          icon: "warning",
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonText: "Yes, logout",
          cancelButtonText: "Cancel",
          customClass: {
            confirmButton: "btnconfirm",
            cancelButton: "btncancle",
            actions: "btnAction",
          },
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(item.path);
          }
        });
      } else {
        navigate(item.path); //
      }
    }
    if (!item) {
      menuItems.forEach((parent) => {
        const child = parent.children?.find((c: any) => c.id === menuId);
        if (child?.path) navigate(child.path);
      });
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
        <Header
          isVisible={isVisible}
          setVisible={setIsVisible}
          isMobile={isMobile}
        />
      </nav>

      <aside>
        <Sidebar
          hoveredId={hoveredId}
          isVisible={isVisible}
          isMobile={isMobile}
          enableTransition={enableTransition}
          onMenuItemClick={handleMenuClick}
          customMenuItems={menuItems}
          activeMenuItem={activeMenuItem}
          onHoverItem={handleSidebarHover}
        />
      </aside>

      {hoveredIndex !== null &&
        menuItems[hoveredIndex]?.children &&
        menuItems[hoveredIndex].children!.length > 0 && (
          <div
            className="global-submenu"
            style={{ top: `${menuRect?.top ?? 200}px` }}
            onMouseEnter={handleSubmenuEnter} //  cancel hide
            onMouseLeave={handleSubmenuLeave} // delay hide
          >
            {menuItems[hoveredIndex].children!.map((child: any) => (
              <button
                key={child.id}
                className="submenu-btn"
                onClick={() => {
                  navigate(child.path);
                  setHoveredIndex(null); //  correct state
                }}
              >
                {child.label}
              </button>
            ))}
          </div>
        )}
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
