import "bootstrap-icons/font/bootstrap-icons.css";



import "../styles/CustomModal.css";
import ConfigureDeviceModal from "../components/ConfigureDeviceModal";

import { DeviceConfigureCard } from "../components/DeviceConfiguredCard";

import { useState } from "react";

const ConfigurationHome = () => {
    // ✅ Hooks MUST be inside component
    const [showDeviceModal, setShowDeviceModal] = useState(false);
    return (

        <>
            <div className="row mt-3 g-3">

                {/* LEFT */}
                <div className="col-xl-6 col-lg-5">


                    <div className="card hid-card ">
                        <div className="alignP">
                            <h6 className="configuredev" >Configured Device List</h6>
                            <h6 className="configuredev" >No.of Devices : 6</h6>
                        </div>
                        <DeviceConfigureCard />
                    </div>


                    <div className="card hid-card classmargin">
                        <div className="alignP">
                            <h6 className="configuredev">
                                Current State : {" "}
                                <span className="text-danger">Disconnected</span>

                            </h6>

                            <button className="btn btn-primary btnconfigurenew" onClick={() => setShowDeviceModal(true)}>Configure New</button>
                        </div>



                        <div className="d-flex justify-content-between align-items-start mt-3">
                            <div>
                                <p className="para"><strong>Device Name : </strong> HID Amico VL35LF</p>
                                <p className="para"><strong>IP Address : </strong> 192.168.1.152</p>
                                <p className="para"><strong>Terminal ID : </strong> 7013664414500244</p>
                                <p className="para"><strong>Status : </strong> <span className="text-success">Online</span></p>
                            </div>

                            <div className="connect-section text-center">
                                <img
                                    src="./link.png"
                                    alt="Connect"
                                    className="connect-img"
                                />
                                <p className="connect-text">Connect</p>

                                {/* <button className='btn-outline-soft-green'>Connect</button> */}
                            </div>
                        </div>


                    </div>



                </div>

                {/* RIGHT */}
                <div className="col-xl-6 col-lg-7 classLeftMargin" >
                    <div className="card hid-card">
                        <div className="row align-items-center">

                            {/* LEFT SIDE - TEXT */}
                            <div className="col-md-7">
                                <h6 className="text-danger fw">Steps to Configure the New Device</h6>
                                <p className="para"><strong>Step 1 :</strong>Click on <b>Configure New</b> to configure new device.</p>
                                <p className="para"><strong>Step 2 :</strong> Fill all details and enter the <b>UserName</b> and <b>Password</b> which you use for Login the device from the browser .</p>
                                <p className="para"><strong>Step 3 :</strong> click <b>Finish</b></p>

                                <h6 className="text-danger fw mt-3">Steps to Configure Additional Settings</h6>
                                <p className="para"><strong>Step 1 :</strong> Click on <b>User tab</b> to register new User.</p>
                                <p className="para"><strong>Step 2 :</strong> Click on <b>Device Feature</b> to configure features in device</p>
                                <p className="para"><strong>Step 3 :</strong> Click on <b>Setting</b> to do any settings for the device </p>
                                <p className="para"><strong>Step 4 :</strong> Click on <b>Info</b> to get the device information</p>
                                <p className="para"><strong>Step 5 :</strong> Click on <b>Date/Time</b> to set the Device's Date-time</p>
                                <p className="para"><strong>Step 6 :</strong> Click on <b>Timezone</b> to set the timezone on the device.</p>

                                <h6 className="text-danger fw mt-3">Steps to Configure Existing Device</h6>
                                <p className="para"><strong>Step 1 :</strong> Click <b>Connect</b> to connect the Device and do the further process or settings you want to do on the device.</p>
                                <p className="para"><strong>Step 2 :</strong> Click <b>Disconnect</b> to disconnect the device.</p>

                                <h6 className="text-danger fw mt-3">Steps to Delete Device</h6>
                                <p className="para"><strong>Step 1 :</strong> Click <b>Delete</b> to delete the device from configured device list.</p>

                            </div>

                            {/* RIGHT SIDE - IMAGE */}
                            <div className="col-md-5 text-center">
                                <div className="device-wrapper">
                                    <img
                                        src="./HIDAMICO3.png"
                                        alt="Device Illustration"
                                        className="img-fluid device-image "
                                    />
                                    <p className="device-label mt-2">HID Amico VL35LF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ConfigureDeviceModal
                    show={showDeviceModal}
                    onClose={() => setShowDeviceModal(false)}
                />
            </div>


        </>

    );
};

export default ConfigurationHome;