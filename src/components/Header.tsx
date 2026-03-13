
import logo from '/EINSLogo.png';
import hid from '/HID_Global_logo.svg.png';
import type { HeaderProps } from '../ts/index';

function Header({ isVisible, setVisible, isMobile }: HeaderProps) {
    return (
        <div className={isVisible && !isMobile ? "headerStyle" : "headerStyle-hidden"}>
            <div>
                <i className="bi bi-list bilist" onClick={() => setVisible(!isVisible)}></i>
                <img src={logo} alt='EINS Logo' />
            </div>
            <div>
                <img className="hid-logo" src={hid} alt='HID Logo' />
            </div>
        </div>
    );
}

export default Header;
