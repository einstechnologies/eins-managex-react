
interface FooterProps {
    isVisible: boolean;
    isMobile?: boolean;
}

interface FooterComponentProps extends FooterProps {
    copyrightText?: string;
    contactText?: string;
    onContactClick?: () => void;
}

function Footer({
    isVisible,
    isMobile,
    copyrightText = "© 2026 EINS, All rights reserved. All others trademarks held by their respective owners.",
    contactText = "Contact us",
    onContactClick
}: FooterComponentProps) {
    return (
        <div className={isVisible && !isMobile ? 'footer' : 'footer-expanded'}>
            <div>
                <span>{copyrightText}</span>
            </div>
            <div>
                <span
                    className='footer-contact'
                    onClick={onContactClick}
                    style={{ cursor: onContactClick ? 'pointer' : 'default' }}
                >
                    {contactText}
                </span>
            </div>
        </div>
    );
}

export default Footer;
