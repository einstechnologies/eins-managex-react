
import type { MainContentProps } from '../ts/index';
interface MainContentComponentProps extends MainContentProps {
    children?: React.ReactNode;
    title?: string;
}

function MainContent({
    isVisible,
    isMobile,
    children,
    title = "EINS ManageX"
}: MainContentComponentProps) {
    return (
        <div className={isVisible && !isMobile ? 'mainContent' : 'mainContent-expanded'}>
            {children || <h1 className='engraved-text'>{title}</h1>}
        </div>
    );
}

export default MainContent;
