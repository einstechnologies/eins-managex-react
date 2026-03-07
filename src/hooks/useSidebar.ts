import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


interface UseSidebarOptions {
    breakpoint?: number;
    transitionDelay?: number;
}

export function useSidebar(options: UseSidebarOptions = {}) {
      const location = useLocation();
    const { breakpoint = 700, transitionDelay = 80 } = options;

    const [isVisible, setIsVisible] = useState(window.innerWidth > breakpoint);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
    const [enableTransition, setEnableTransition] = useState(false);
   const [activeMenuItem, setActiveMenuItem] = useState(() => {
    return localStorage.getItem('activeMenuItem') || 'Default';
  });
    const saveActiveItem = (menuId: string) => {
    localStorage.setItem('activeMenuItem', menuId);
    setActiveMenuItem(menuId);
  };
  // 3. BACK/FORWARD: sync with URL
  useEffect(() => {
    const pathname = location.pathname;
    
    if (pathname.includes('Dashboard')) setActiveMenuItem('DASHBOARD');
    else if (pathname.includes('User')) setActiveMenuItem('USER REGISTRATION');
    else if (pathname.includes('Configuration')) setActiveMenuItem('CONFIGURATION');
    else if (pathname.includes('TemplateTransfer')) setActiveMenuItem('TEMPLATE TRANSFER');
    else if (pathname.includes('Transaction')) setActiveMenuItem('TRANSACTION');
    else if (pathname.includes('Profile')) setActiveMenuItem('PROFILE');
    else if (pathname.includes('Help')) setActiveMenuItem('HELP');
    else setActiveMenuItem('Default');
  }, [location.pathname]);


    useEffect(() => {
        let resizeTimer: number;

        const handleResize = () => {
            const mobile = window.innerWidth <= breakpoint;

            if (mobile && !isMobile) {
                setEnableTransition(false);
                setIsMobile(true);
                setIsVisible(false);
                setTimeout(() => setEnableTransition(true), transitionDelay);
            } else if (!mobile && isMobile) {
                setEnableTransition(false);
                setIsMobile(false);
                setIsVisible(true);
                setTimeout(() => setEnableTransition(true), transitionDelay);
            }

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setIsMobile(mobile);
                setIsVisible(!mobile);
            }, 50);
        };

        setTimeout(() => setEnableTransition(true), 100);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, [isMobile, breakpoint, transitionDelay]);

    return {
        isVisible,
        setIsVisible,
        isMobile,
        enableTransition,
        setActiveMenuItem,
        activeMenuItem,
        saveActiveItem
    };
}
