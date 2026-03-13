import { useState, useEffect } from "react";
import ChangePasswordModal from "../components/UserProfile/ChangePasswordModal";

function ResetPassword() {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true);
    }, []);

    return (
        <>
            <ChangePasswordModal
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
}

export default ResetPassword;