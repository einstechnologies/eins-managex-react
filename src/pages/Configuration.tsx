import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/configuration.css";
import "../styles/CustomModal.css";
import {  useNavigate } from "react-router-dom";
import ConfigureDeviceModal from "../components/ConfigureDeviceModal";

import { useState } from "react";

const HidConfiguration = () => {

  // ✅ Hooks MUST be inside component
 const [showDeviceModal, setShowDeviceModal] = useState(false);
 const navigate=useNavigate();
  return (
    <div className="container-fluid hid-container">

      {/* Top Icon Navigation */}
      <div className="hid-nav container-fluid">
        <div className="row text-center">

          <div className="col-4 col-md" onClick={() => setShowDeviceModal(true)}>
            <div className="nav-item">
          <i className="bi bi-gear-fill nav-icon"></i>
            <p>Configure</p>
            </div>
           
          </div>

         <div className="col-4 col-md" onClick={() => navigate("../User")}>
          <div className="nav-item">
          <i className="bi bi-person-fill nav-icon"></i>
        <p>User</p>
        </div>
        </div>

          <div className="col-4 col-md">
            <div className="nav-item">
            <i className="bi bi-cpu-fill nav-icon"></i>
            <p>Device Feature</p>
            </div>
          </div>

          <div className="col-4 col-md ">
            <div className="nav-item">
            <i className="bi bi-tools nav-icon"></i>
            <p>Setting</p>
            </div>
          </div>

          <div className="col-4 col-md ">
            <div className="nav-item">
            <i className="bi bi-info-circle-fill nav-icon"></i>
            <p>Info</p>
            </div>
          </div>

          <div className="col-4 col-md">
            <div className="nav-item">
            <i className="bi bi-calendar-date-fill nav-icon"></i>
            <p>DateTime</p>
          </div>
          </div>
          <div className="col-4 col-md">
            <div className="nav-item">
            <i className="bi bi-globe2 nav-icon"></i>
            <p>Time Zone</p>
            </div>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="row mt-3 g-3">

        {/* LEFT */}
        <div className="col-xl-4 col-lg-5">

          <div className="card hid-card">
            <h6>
              Current State :{" "}
              <span className="text-danger">Disconnected</span>
            </h6>

            <div className="d-flex justify-content-between align-items-start mt-3">
              <div>
                <p><strong>Device Name:</strong> HID Amico VL35LF</p>
                <p><strong>IP Address:</strong> 192.168.1.152</p>
                <p><strong>Terminal ID:</strong> 7013664414500244</p>
                <p><strong>Status:</strong> <span className="text-success">Online</span></p>
              </div>

              <div className="connect-section text-center">
                <img
                  src="./connected.png"
                  alt="Connect"
                  className="connect-img"
                />
                <p className="connect-text">Connect</p>
              </div>
            </div>

            <div className="device-footer mt-3">
              Total Devices : <span className="badge bg-primary">1</span>
              <span className="float-end text-primary">Show Devices</span>
            </div>
          </div>

          <div className="card hid-card mt-3">
            <h6>Connected Device Information</h6>
            <div className="device-info mt-2">
              <p>Company : NA</p>
              <p>Location : NA</p>
              <p>IP Address : NA</p>
              <p>Device Name : NA</p>
              <p>Door Name : NA</p>
              <p>Terminal ID : NA</p>
              <p>Model : NA</p>
              <p>Application Mode : NA</p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
     <div className="col-xl-8 col-lg-7">
  <div className="card hid-card">
    <div className="row align-items-center">

      {/* LEFT SIDE - TEXT */}
      <div className="col-md-7">
        <h6 className="text-danger">Steps to Configure the New Device</h6>
        <p><strong>Step 1 :</strong> Click on Configure to configure new device.</p>
        <p><strong>Step 2 :</strong> Fill all details and click Finish.</p>

        <h6 className="text-danger mt-3">Steps to Configure Additional Settings</h6>
        <p><strong>Step 1 :</strong> Click on Setting tab.</p>

        <h6 className="text-danger mt-3">Steps to Configure Existing Device</h6>
        <p><strong>Step 1 :</strong> Click Connect.</p>
        <p><strong>Step 2 :</strong> Click Disconnect.</p>

        <h6 className="text-danger mt-3">Steps to Delete Device</h6>
        <p><strong>Step 1 :</strong> Click Show Devices.</p>
        <p><strong>Step 2 :</strong> Click Delete.</p>
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

      </div>

      {/* //modal to be here  */}

     
<ConfigureDeviceModal
   show={showDeviceModal}
   onClose={() => setShowDeviceModal(false)}
/>

    </div>
  );
};

export default HidConfiguration;