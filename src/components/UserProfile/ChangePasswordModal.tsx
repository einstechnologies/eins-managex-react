import { useState } from 'react';
import '../../styles/UserRegistration.css';
import { useNavigate } from "react-router-dom";

interface Props {
    show: boolean;
    onClose: () => void;
}

const ChangePasswordModal: React.FC<Props> = ({ show, onClose }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');


    const navigate = useNavigate(); // ✅ must be inside component
    const handleChangePassword = () => {
        // your API call can go here later

        navigate("/EINS_ManageX/Home"); // redirect page
    };
    if (!show) return null;

    return (
        <div className="user-content-screen">
            <div
                className="modal fade show"
                style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered custom-modal divchangepwd" >
                    <div className="modal-content">
                        <div className="modal-header">

                            <h5 className="modal-title headcol">    <i className="bi bi-key"></i> Change Password</h5>
                            {/* <button
                                type="button"
                                className="bi bi-x-circle-fill"
                                onClick={onClose}
                            ></button> */}
                        </div>
                        <div className="modal-body">
                            <div className="row mb-1">
                                <div className="col-12 col-md-12 mb-4">
                                    <div className="shadow-sm p-3 rounded bg-light">
                                        For security reasons, please enter a new password to continue.
                                        Make sure your password is strong and not used previously.
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className='col-12 col-md-12'>
                                    <fieldset className='text-input-group'>
                                        <div className='dateRow'>
                                            <div>
                                                <label htmlFor="newpwd">New Password</label>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    id='newPassword'
                                                    className="form-control"
                                                // value={confirmPassword}
                                                // onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                                {/* Eye icon */}
                                                <i
                                                    className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} toggle-password-icon toggle-eye-usrprofile`}
                                                // onClick={togglePassword}
                                                ></i>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className='col-12 col-md-12'>
                                    <fieldset className='text-input-group'>
                                        <label>Confirm Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id='confirmPassword'
                                            className="form-control"
                                        // value={confirmPassword}
                                        // onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <i
                                            className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} toggle-password-icon toggle-eye-usrprofile`}
                                        // onClick={togglePassword}
                                        ></i>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer justify-content-start">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleChangePassword}
                            >
                                Change Password
                            </button>
                            {/* <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Cancel
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordModal;