import { useState, useEffect } from 'react';


interface UseSidebarOptions {
    breakpoint?: number;
    transitionDelay?: number;
}

export function useSidebar(options: UseSidebarOptions = {}) {
    const { breakpoint = 700, transitionDelay = 80 } = options;

    const [isVisible, setIsVisible] = useState(window.innerWidth > breakpoint);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
    const [enableTransition, setEnableTransition] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState("Default");

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
        activeMenuItem
    };
}
