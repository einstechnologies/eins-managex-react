import "bootstrap-icons/font/bootstrap-icons.css";

import "../styles/CustomModal.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import ConfigurationHome from "../components/ConfigurationHome";
import HIDFeature from "../components/HIDDeviceFeature";
import HIDSetting from "./HIDSetting";
import DeviceInformation from "../components/DeviceInformation";
import TimeZone from "../components/TimeZone";
import DateTime from "../components/DateTime";
import TemplateTransfer from "./TemplateTransfer";

const HidConfiguration = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();
  return (
    <div className="user-content-screen hid-container">
      <div className="header-title">
        <span>DEVICE CONFIGURATION</span>

        <span className="header-title-navigate-section">
          <span
            className="link"
            onClick={() => navigate("/EINS_ManageX/Home")}
          ></span>
        </span>
      </div>
      {/* Top Icon Navigation */}
      {/* <div className="hid-nav container-fluid">
        <div className="row text-center">

          <div className="col-4 col-md">
            <div
              className={`nav-item ${activeSection === "home" ? "active-nav" : ""}`}
              onClick={() => setActiveSection("home")}
            >
              <i className="bi bi-plus-square nav-icon"></i>
              <p>Configured</p>
            </div>
          </div>

          <div className="col-4 col-md" onClick={() => navigate("/EINS_ManageX/User/UserRegistration")}>
            <div className="nav-item">
              <i className="bi bi-person-fill nav-icon"></i>
              <p>User</p>
            </div>
          </div>

          <div className="col-4 col-md" onClick={() => setActiveSection("feature")} >
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
              <p>Date/Time</p>
            </div>
          </div>
          <div className="col-4 col-md">
            <div className="nav-item">
              <i className="bi bi-globe2 nav-icon"></i>
              <p>Time Zone</p>
            </div>
          </div>

        </div>
      </div> */}

      <div className="hid-nav hid-tabs">
        {[
          { key: "home", label: "Configured", icon: "bi-plus-square" },
          {
            key: "user",
            label: "User",
            icon: "bi-person-fill",
          },
          { key: "feature", label: "Device Feature", icon: "bi-cpu-fill" },
          { key: "setting", label: "Setting", icon: "bi-tools" },
          { key: "info", label: "Info", icon: "bi-info-circle-fill" },
          {
            key: "datetime",
            label: "Date/Time",
            icon: "bi-calendar-date-fill",
          },
          { key: "timezone", label: "Time Zone", icon: "bi-globe2" },
        ].map((item) => (
          <div
            key={item.key}
            className={`hid-tab-item ${
              activeSection === item.key ? "active-tab" : ""
            }`}
            onClick={() => {
              // if (item.route) {
              //   navigate(item.route);
              // } else {
              //   setActiveSection(item.key);
              // }
              setActiveSection(item.key);
            }}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {activeSection === "home" && <ConfigurationHome />}
      {activeSection === "user" && <TemplateTransfer />}
      {activeSection === "feature" && <HIDFeature />}
      {activeSection === "setting" && <HIDSetting />}
      {activeSection === "info" && <DeviceInformation />}
      {activeSection === "timezone" && <TimeZone />}
      {activeSection === "datetime" && <DateTime />}
    </div>
  );
};

export default HidConfiguration;
