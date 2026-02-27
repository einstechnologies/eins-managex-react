import '../styles/UserRegistration.css'
import { useNavigate } from "react-router-dom";
import { Tabs } from '../components/TabShadowcn';
import { UserFace } from '../components/UserFace';
import { UserCard } from '../components/UserCard';
import { UserPin } from '../components/UserPin';

function UserRegistration() {
    const myTabs = [
        { id: "face", label: "Face", content: <UserFace /> },
        { id: "card", label: "Card", content: <UserCard /> },
        { id: "pin", label: "PIN", content: <UserPin /> },
    ];

    const navigate = useNavigate();

    return (
        <>
            <div className="user-content-screen">
                {/* Header */}
                <div className='header-title'>
                    <span>USER REGISTRATION</span>
                    <span className='vertical-divider'></span>
                    <span className='header-title-navigate-section'>
                        <span
                            className='link'
                            onClick={() => navigate("/EINS_ManageX/Home")}
                        >
                            HOME
                        </span> - User Registration
                    </span>
                </div>

                <div className='col-12'>
                    <div className='row'>

                        {/* General Details Card */}
                        <div className='col-12 col-md-12 col-lg-8'>
                            <div className='card user-card'>
                                <span className='card-title'>General Details</span>
                                <hr />
                                <div className='row g-0 gy-3'>

                                    {/* Photo Section */}
                                    <div className='col-12 col-md-12 col-lg-4 d-flex justify-content-center'>
                                        <div className='photoMainDiv'>
                                            <div className='biggerCircle'>
                                                <div className='photoCircle'>
                                                    <i className="bi bi-person"></i>
                                                </div>
                                            </div>
                                            <div className='checkRow'>
                                                <button className='btn-outline-soft-red'>Upload</button>
                                                <button className='btn-outline-soft-red'>Capture</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Input Fields */}
                                    <div className='col-12 col-md-12 col-lg-8'>
                                        <div className='row gy-2'>

                                            <div className='col-12 col-md-6'>
                                                <fieldset className='text-input-group'>
                                                    <label htmlFor="biouserid">User Id</label>
                                                    <input id='biouserid' />
                                                </fieldset>
                                            </div>

                                            <div className='col-12 col-md-6'>
                                                <fieldset className='text-input-group'>
                                                    <label htmlFor="employeename">User Name</label>
                                                    <input id='employeename' />
                                                </fieldset>
                                            </div>

                                            <div className='col-12 col-md-6'>
                                                <fieldset className='text-input-group'>
                                                    <label htmlFor="emailid">Email ID</label>
                                                    <input type='email' id='emailid' />
                                                </fieldset>
                                            </div>

                                            <div className='col-12 col-md-6'>
                                                <fieldset className='text-input-group'>
                                                    <label htmlFor="mobileNo">Mobile No.</label>
                                                    <input id='mobileNo' />
                                                </fieldset>
                                            </div>

                                            <div className='col-12 col-md-6'>
                                                <fieldset className='text-input-group'>
                                                    <label htmlFor="gender">Gender</label>
                                                    <select id='gender'>
                                                        <option value="">Select Gender</option>
                                                        <option value="1">Male</option>
                                                        <option value="0">Female</option>
                                                    </select>
                                                </fieldset>
                                            </div>

                                            <div className='col-12 col-md-6'>
                                                <fieldset className='text-input-group'>
                                                    <label htmlFor="usertype">User Type</label>
                                                    <select id='usertype'>
                                                        <option value="">Select User Type</option>
                                                        <option value="1">Normal User</option>
                                                        <option value="0">Admin</option>
                                                    </select>
                                                </fieldset>
                                            </div>

                                            <div className='col-12 col-md-6'>
                                                <fieldset className='text-input-group'>
                                                    <div className='dateRow'>
                                                        <div>
                                                            <label htmlFor="fromdate">Activation Date</label>
                                                            <input type='date' id='fromdate' />
                                                        </div>
                                                        <i className="bi bi-calendar-date"></i>
                                                    </div>
                                                </fieldset>
                                            </div>

                                            <div className='col-12 col-md-6'>
                                                <fieldset className='text-input-group'>
                                                    <div className='dateRow'>
                                                        <div>
                                                            <label htmlFor="todate">Expiry Date</label>
                                                            <input type='date' id='todate' />
                                                        </div>
                                                        <i className="bi bi-calendar-date"></i>
                                                    </div>
                                                </fieldset>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Credentials Card */}
                        <div className='col-12 col-md-12 col-lg-4'>
                            <div className='card user-card'>
                                <span className='card-title'>Credentials</span>
                                <hr />
                                <div className="col-12">
                                    <div className="deviceRow">

                                        {/* Dropdown */}
                                        <div className="deviceDropdown">
                                            <fieldset className="text-input-group">
                                                <label>Enrollment Device</label>
                                                <select>
                                                    <option value="">Select Enrollment Device</option>
                                                    <option value="1">HID</option>
                                                    <option value="0">Admin</option>
                                                </select>
                                            </fieldset>
                                        </div>

                                        {/* Button */}
                                        <div className="deviceButton">
                                            <button className="btn-outline-soft-blue">Connect</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="spaceBetweencontent"></div>
                                <div className='col-12'>
                                    <Tabs tabs={myTabs} />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Save / Cancel */}
                    <div className='savebuttonDiv'>
                        <button className='btn-outline-soft-green'>Save</button>
                        <button className='btn-outline-soft-red'>Cancel</button>
                    </div>
                </div>

            </div>
        </>
    );
}



export default UserRegistration;
