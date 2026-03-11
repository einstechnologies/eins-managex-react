import '../styles/Default.css';
import { useEffect } from "react";

function Default() {

    useEffect(() => {
        const HOME = "/EINS_ManageX/Home";

        // Overwrite current + push a blocker on top
        window.history.replaceState(null, "", HOME);
        window.history.pushState(null, "", HOME);

        const handlePopState = () => {
            window.history.pushState(null, "", HOME);
        };

        window.addEventListener("popstate", handlePopState);

        return () => window.removeEventListener("popstate", handlePopState);
    }, []);
    return (
        <>
            <div className="Productheader">
                <h1 className='engraved-text'>EINS Manage<span className="highlight-x">X</span></h1>
                <hr />
                <h1 className='engraved-text-para'>HID Amico Face Recognition Devices</h1>
            </div>
        </>
    );
}

export default Default;