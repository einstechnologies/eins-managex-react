import "../styles/UserTab.css";
import "../styles/DeviceFeature.css";
import "../styles/UserProfile.css";
import { useState } from "react";
import HelpIcon from "../components/HelpIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {

    interface Transaction {
        UserName: string;
        UserType: string;
        AddedOn: string;
        Activeusers: string;
    }

    const transactions: Transaction[] = [
        { UserName: "Hemangi", UserType: "Admin", AddedOn: "04/03/2026", Activeusers: "Active" },
        { UserName: "Tanaya", UserType: "Operator", AddedOn: "04/03/2026", Activeusers: "Active" },
        { UserName: "Vishal", UserType: "Admin", AddedOn: "04/03/2026", Activeusers: "Inactive" },
    ];

    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(null);

    const handleExportClick = () => {
        setShowModal(true);
    };

    // Close first modal
    const handleCloseFirstModal = () => {
        setShowModal(false);
    };


    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="user-content-screen">

            {/* Header */}
            <div className='header-title headcol user-margin-bottom d-flex flex-wrap align-items-center mb-3'>

                <div className="col-md-4 col-12 d-flex align-items-center">
                    <span>PROFILE</span>
                </div>

                {/* Total Users */}
                <div className="col-md-4 col-12 headerbottomspace">
                    <div className="card shadow-sm border-0 text-center">
                        <div className="card-body py-1">
                            <div className="row text-center align-items-center">

                                {/* Valid Transactions */}
                                <div className="col-6 border-end">
                                    <h6 className="mb-1 text-success">
                                        Total Users
                                        <span className="badge bg-success fs-6 px-3 py-1 ms-2 mt-2">
                                            3
                                            {/* {validCount} */}
                                        </span>
                                    </h6>
                                </div>

                                {/* Invalid Transactions */}
                                <div className="col-6">
                                    <h6 className="mb-1 text-danger">
                                        Max.Users
                                        <span className="badge bg-danger fs-6 px-3 py-1 ms-2 mt-2">
                                            5
                                            {/* {invalidCount} */}
                                        </span>
                                    </h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Export Button */}
                <div className="col-md-4 col-12 d-flex justify-content-md-end mt-2 mt-md-0 headerbottomspace">
                    <button
                        type="button"
                        className="btn btn-warning custom-print-btn export-right-margin"
                        onClick={handleExportClick}
                    >
                        🖨 Export
                    </button>
                    <div className="sound-page-header-right">
                        <HelpIcon />
                    </div>
                </div>

            </div>

            {/* Create User Card */}
            <div className="container-fluid hid-fullscreen p-0">
                <div className="card hid-card h-100 spacebottom">

                    <div className='tabbgcolor h-100 spacebottomwhitediv'>
                        {/* <div className="card hid-card"> */}

                        <div className="sound-page-header px-1 mb-1">
                            <div className="sound-page-header-left">
                                <h6><b>Create User</b></h6>
                            </div>

                        </div>
                        {/* <div className="row px-2 mb-3 d-flex justify-content-center">
                            Password should contain atleast :<br />
                            1. One capital letter<br />
                            2. One small letter<br />
                            3. One special character<br />
                            4. One Numerical character<br />
                            5. Minimum 7 Characters Long
                        </div> */}

                        <div className="row px-1 mt-1 mb-1">

                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label>User Name <span>*</span></label>
                                    <input />
                                </fieldset>
                            </div>

                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label>User Type <span>*</span></label>
                                    <select>
                                        <option value="">Select Type</option>
                                        <option value="SuperAdmin">Super Admin</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Operator">Operator</option>
                                    </select>
                                </fieldset>
                            </div>

                            {/* Password */}
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label>
                                        Password <span>*</span>
                                        <span className="tooltip-containerprofile">
                                            <i className="bi bi-info-circle info-iconprofile"></i>
                                            <span className="custom-tooltipprofile">Password should contain atleast<br />
                                                1. One capital letter<br />
                                                2. One small letter<br />
                                                3. One special character<br />
                                                4. One Numerical character<br />
                                                5. Minimum 7 Characters Long</span>
                                        </span>
                                    </label>

                                    <div style={{ position: "relative" }}>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                        />
                                        <i
                                            className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} toggle-password-icon`}
                                            style={{ position: "absolute", right: 10, top: -10, cursor: "pointer" }}
                                            onClick={togglePassword}
                                        ></i>
                                    </div>
                                </fieldset>
                            </div>
                            {/* Confirm Password */}
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label>Confirm Password <span>*</span>  <span className="tooltip-containerprofile">
                                        <i className="bi bi-info-circle info-iconprofile"></i>
                                        <span className="custom-tooltipprofile">Password should contain atleast<br />
                                            1. One capital letter<br />
                                            2. One small letter<br />
                                            3. One special character<br />
                                            4. One Numerical character<br />
                                            5. Minimum 7 Characters Long</span>
                                    </span></label>
                                    <div style={{ position: "relative" }}>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                        />
                                        <i
                                            className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} toggle-password-icon`}
                                            style={{ position: "absolute", right: 10, top: -10, cursor: "pointer" }}
                                            onClick={togglePassword}
                                        ></i>
                                    </div>
                                </fieldset>
                            </div>

                        </div>

                        <hr className="mt-1 mb-1" />
                        <div className="row px-1 mb-1">
                            <div className='col-lg-4'>
                                <h6>
                                    <b>Security Questions</b>
                                </h6></div>
                        </div>
                        <div className="row px-1">

                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label htmlFor="username">Question : 1</label>
                                    <select
                                        id='qstn1'
                                    // value={gender}
                                    // onChange={(data) => setGender(data.target.value)}
                                    >
                                        <option value="">Select Question</option>
                                        <option value="Qtn1">What is your mother's maiden name?</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label htmlFor="username">Answer :</label>
                                    <input
                                        id='username'
                                    // value={userFirstName}
                                    // onChange={(data) => setUserName(data.target.value)}
                                    />
                                </fieldset>
                            </div>
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label htmlFor="username">Question : 2</label>
                                    <select
                                        id='qstn1'
                                    // value={gender}
                                    // onChange={(data) => setGender(data.target.value)}
                                    >
                                        <option value="">Select Question</option>
                                        <option value="Qtn1">What was the name of your first pet?</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label htmlFor="username">Answer :</label>
                                    <input
                                        id='username'
                                    // value={userFirstName}
                                    // onChange={(data) => setUserName(data.target.value)}
                                    />
                                </fieldset>
                            </div>
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label htmlFor="username">Question : 3</label>
                                    <select
                                        id='qstn1'
                                    // value={gender}
                                    // onChange={(data) => setGender(data.target.value)}
                                    >
                                        <option value="">Select Question</option>
                                        <option value="Qtn1">What is your mother's maiden name?</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label htmlFor="username">Answer :</label>
                                    <input
                                        id='username'
                                    // value={userFirstName}
                                    // onChange={(data) => setUserName(data.target.value)}
                                    />
                                </fieldset>
                            </div>
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label htmlFor="username">Question : 4</label>
                                    <select
                                        id='qstn1'
                                    // value={gender}
                                    // onChange={(data) => setGender(data.target.value)}
                                    >
                                        <option value="">Select Question</option>
                                        <option value="Qtn1">What was the name of your first pet?</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className='col-12 col-md-3'>
                                <fieldset className='text-input-group'>
                                    <label htmlFor="username">Answer :</label>
                                    <input
                                        id='username'
                                    // value={userFirstName}
                                    // onChange={(data) => setUserName(data.target.value)}
                                    />
                                </fieldset>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="row px-2 d-flex justify-content-end">

                            <div className='col-12 col-md-2 d-flex justify-content-end'>
                                <button className='btn-outline-soft-green'>
                                    Save
                                </button>
                            </div>

                            <div className='col-12 col-md-2'>
                                <button className='btn-outline-soft-red'>
                                    Clear
                                </button>
                            </div>

                        </div>

                        {/* </div> */}
                    </div>
                </div>

                <div className="card hid-card">
                    <div className="col-12">
                        <div className="Template-transfer-table templateTransfer ">

                            <table>
                                <thead className="tableHead">
                                    <tr>

                                        <th className="hidden-col template-transfer">#</th>

                                        <th>User Name</th>
                                        <th>User Type</th>
                                        <th>Added On</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody className="tableBody">

                                    {
                                        transactions.length === 0 ? (
                                            <tr className="emptyRow">
                                                <td colSpan={6}>No users available</td>
                                            </tr>
                                        ) : (

                                            transactions.map((tx, index) => (
                                                <tr key={index}>
                                                    <td className="hidden-col template-transfer">
                                                        {index + 1}
                                                    </td>

                                                    <td>{tx.UserName ?? "-"}</td>

                                                    <td>{tx.UserType ?? "-"}</td>

                                                    <td>{tx.AddedOn}</td>

                                                    <td>
                                                        <span
                                                            className={`btn btn-sm rounded-pill ${tx.Activeusers === "Active"
                                                                ? "btn-outline-success"
                                                                : tx.Activeusers === "Inactive"
                                                                    ? "btn-outline-danger"
                                                                    : "btn-outline-info"
                                                                }`}
                                                        >
                                                            {tx.Activeusers}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        )
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------- Modal -------------------- */}
            {
                showModal && (
                    <div
                        className="modal fade show"
                        style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                        tabIndex={-1}
                    >
                        <div className="modal-dialog modal-dialog-centered custom-modal" >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title headcol">Export</h5>
                                    <button
                                        type="button"
                                        className="bi bi-x-circle-fill"
                                        onClick={handleCloseFirstModal}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className='row'>
                                        <div className='col-12 col-md-6'>
                                            <fieldset className='text-input-group'>
                                                <div className='dateRow'>
                                                    <div>
                                                        <label htmlFor="fromdate">From Date</label>
                                                        <DatePicker
                                                            selected={date}
                                                            // onChange={(d: Date | null) => setDate(d)}
                                                            dateFormat="dd/MM/yyyy" // <-- guaranteed format
                                                            placeholderText="dd/mm/yyyy"
                                                        />
                                                        <i className="bi bi-calendar-date" style={{ position: "absolute", right: 10, top: 8 }}></i>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>

                                        <div className='col-12 col-md-6'>
                                            <fieldset className='text-input-group'>
                                                <div className='dateRow'>
                                                    <div>
                                                        <label htmlFor="todate">To Date</label>
                                                        <DatePicker
                                                            selected={date}
                                                            // onChange={(d: Date | null) => setDate(d)}
                                                            dateFormat="dd/MM/yyyy" // <-- guaranteed format
                                                            placeholderText="dd/mm/yyyy"
                                                        />
                                                        <i className="bi bi-calendar-date" style={{ position: "absolute", right: 10, top: 8 }}></i>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 col-md-6'>
                                            <fieldset className='text-input-group'>
                                                <label>User Type</label>
                                                <select>
                                                    <option value="">Select Type</option>
                                                    <option value="SuperAdmin">Super Admin</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Operator">Operator</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <fieldset className='text-input-group'>
                                                <label htmlFor="employeename">User Name</label>
                                                <input id='employeename' />
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer justify-content-start">

                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    // onClick={handleConfirmExport}
                                    >
                                        Excel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    // onClick={handleConfirmExport}
                                    >
                                        Pdf
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handleCloseFirstModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default Profile;