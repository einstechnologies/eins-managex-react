import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";
import "../styles/CustomModal.css";
import ConfigureDeviceModal from "../components/ConfigureDeviceModal";
import { DeviceConfigureCard } from "../components/DeviceConfiguredCard";
import FullScreenLoader from "../components/FullScreenLoader";
import { useState } from "react";
import HidAmicoLf35 from "/HIDAmicoVL35LF.png";
import HidAmicoLf70 from "/HIDAmicoVL70F.png";
import Connectpng from "/link.png";

const slugToImageMap: Record<string, { image: string; label: string }> = {
  "hid-amico-vlf": { image: HidAmicoLf35, label: "HID Amico VL35LF" },
  "hid-amico-vl70f": { image: HidAmicoLf70, label: "HID Amico VL70F" },
};
const defaultDevice = { image: HidAmicoLf35, label: "HID Amico VL35LF" };

const ConfigurationHome = () => {
  const { deviceModel } = useParams();
  const deviceDisplay = slugToImageMap[deviceModel ?? ""] ?? defaultDevice;
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [deviceCount, setDeviceCount] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isDeviceLoading, setIsDeviceLoading] = useState(true);

  return (
    <>
      <FullScreenLoader show={loading} />
      <div className="row mt-3 g-3">
        {/* LEFT */}
        <div className="col-xl-6 col-lg-5">
          <div className="card hid-card ">
            <div className="alignP">
              <h6 className="configuredev">Configured Device List</h6>
              <h6 className="configuredev">
                No.of Devices :{" "}
                {isDeviceLoading ? (
                  <span
                    className="skeleton skeleton-sm"
                    style={{
                      width: "24px",
                      height: "14px",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  ></span>
                ) : (
                  deviceCount
                )}
              </h6>
            </div>
            <DeviceConfigureCard
              onSelectDevice={setSelectedDevice}
              ConfiguredDeviceCount={(count) => setDeviceCount(count)}
              onLoadingChange={(loading) => setIsDeviceLoading(loading)}
            />
          </div>

          <div className="card hid-card classmargin">
            <div className="alignP">
              <h6 className="configuredev">
                Current State :{" "}
                <span className="text-danger">Disconnected</span>
              </h6>

              <button
                className="btn btn-primary btnconfigurenew"
                onClick={() => setShowDeviceModal(true)}
              >
                Configure New
              </button>
            </div>

            <div className="d-flex justify-content-between align-items-start mt-3">
              <div>
                <p className="para">
                  <strong>Device Name : </strong>{" "}
                  {selectedDevice?.deviceName ?? "NA"}
                </p>
                <p className="para">
                  <strong>IP Address : </strong>{" "}
                  {selectedDevice?.ipAddress ?? "NA"}
                </p>
                <p className="para">
                  <strong>Terminal ID : </strong>{" "}
                  {selectedDevice?.terminalID ?? "NA"}
                </p>
                <p className="para">
                  <strong>Status : </strong>{" "}
                  <span className="text-success">Online</span>
                </p>
              </div>

              <div className="connect-section text-center">
                <img src={Connectpng} alt="Connect" className="connect-img" />

                <p className="connect-text" style={{ cursor: "pointer" }}>
                  Connect
                </p>

                {/* <button className='btn-outline-soft-green'>Connect</button> */}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-xl-6 col-lg-7 classLeftMargin">
          <div className="card hid-card">
            <div className="row align-items-center">
              {/* LEFT SIDE - TEXT */}
              <div className="col-md-8">
                <h6 className="text-danger fw">
                  Steps to Configure the New Device
                </h6>
                <p className="para">
                  <strong>Step 1 :</strong> Click on <b>Configure New</b> to
                  configure new device.
                </p>
                <p className="para">
                  <strong>Step 2 :</strong> Fill all details and enter the
                  credentials of device.
                </p>
                <p className="para">
                  <strong>Step 3 :</strong> click <b>Finish</b>
                </p>

                <h6 className="text-danger fw mt-3">
                  Steps to Configure Additional Settings
                </h6>
                <p className="para">
                  <strong>Step 1 :</strong> Click on <b>User tab</b> to register
                  new User.
                </p>
                <p className="para">
                  <strong>Step 2 :</strong> Click on <b>Device Feature</b> to
                  configure features in device
                </p>
                <p className="para">
                  <strong>Step 3 :</strong> Click on <b>Setting</b> to do any
                  settings for the device{" "}
                </p>
                <p className="para">
                  <strong>Step 4 :</strong> Click on <b>Info</b> to get the
                  device information
                </p>
                <p className="para">
                  <strong>Step 5 :</strong> Click on <b>Date/Time</b> to set the
                  Device's Date-time
                </p>
                <p className="para">
                  <strong>Step 6 :</strong> Click on <b>Timezone</b> to set the
                  timezone on the device.
                </p>

                <h6 className="text-danger fw mt-3">
                  Steps to Configure Existing Device
                </h6>
                <p className="para">
                  <strong>Step 1 :</strong> Click <b>Connect</b> to connect the
                  Device and do the further process .
                </p>

                <h6 className="text-danger fw mt-3">Steps to Delete Device</h6>
                <p className="para">
                  <strong>Step 1 :</strong> Click <b>Delete</b> to delete the
                  device from configured device list.
                </p>
              </div>

              {/* RIGHT SIDE - IMAGE */}
              <div className="col-md-4 text-center">
                <div className="device-wrapper">
                  <img
                    src={deviceDisplay.image}
                    alt={deviceDisplay.label}
                    className="img-fluid device-image "
                  />
                  <p className="device-label mt-2">{deviceDisplay.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConfigureDeviceModal
          show={showDeviceModal}
          onClose={() => setShowDeviceModal(false)}
          setLoading={setLoading}
        />
      </div>
    </>
  );
};

export default ConfigurationHome;
