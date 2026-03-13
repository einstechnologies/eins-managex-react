import "../styles/Configuration.css";
import HidAmicoLf35 from "/HIDAmicoVL35LF.png";
import HidAmicoLf70 from "/HIDAmicoVL70F.png";
import { useState } from "react";
import ReactDOM from "react-dom";
import Filepng from "/Files.png";
import DeviceCard from "../components/DeviceCard";
import Usermanual from "../assets/PdfFiles/UserManualHID.pdf";
import broucher from "../assets/PdfFiles/BroucherHID.pdf";
import InstallationGuide from "../assets/PdfFiles/InstallationGuideHID.pdf";

function DeviceList() {
  const [openHID35, setOpen] = useState(false);
  const [openHID70, setOpen1] = useState(false);
  const modalRoot = document.getElementById("modal-root");

  return (
    <>
      <div id="modal-root"></div>
      <div className="container device-list">
        <div className="col-lg-12 "></div>
        <div id="ConfigCards" className="col-lg-12 row">
          <DeviceCard
            title="HID Amico VL35LF"
            image={HidAmicoLf35}
            deviceModel="HID Amico VL35LF"
            onQuickInfo={() => setOpen(true)}
            IsDeviceImage="HidDevice35 device-list"
            IsVisible="col-lg-12 m-1  "
          />
          <DeviceCard
            title="HID Amico VL70F"
            image={HidAmicoLf70}
            deviceModel="HID Amico VL70F"
            onQuickInfo={() => setOpen1(true)}
            IsDeviceImage="HidDevice70 device-list"
            IsVisible="col-lg-12 m-1 DivVisibility device-list"
          />
        </div>
      </div>
      {openHID35 &&
        modalRoot &&
        ReactDOM.createPortal(
          <div
            className="modal-overlay device-list"
            onClick={() => setOpen(false)}
          >
            <div
              className="custom-modal device-list"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header device-list">HID Amico VL35LF</div>

              <div className="modal-body device-list  ">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                      <div className="col-lg-12  ">
                        <img
                          src={HidAmicoLf35}
                          alt="HID Amico VL35LF"
                          className="device-img  device-list"
                        />
                      </div>
                      <div className="col-lg-12  "></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                        <div
                          id="DetailsImagelink"
                          className="col-lg-5 col-md-5 col-sm-1 col-xs-12  "
                        >
                          <img
                            src={Filepng}
                            alt="HID Amico VL35LF"
                            className="BroucherImage  device-list"
                          />
                        </div>
                        <div
                          id="DetailsImagelink"
                          className="col-lg-7 col-md-7 col-sm-2 col-xs-12  row-image-link   "
                        >
                          <a
                            href={Usermanual}
                            target="_blank"
                            className="download-link device-list"
                          >
                            {" "}
                            User Manual
                          </a>
                        </div>

                        <div
                          id="DetailsImagelink"
                          className="col-lg-5 col-md-5 col-sm-1 col-xs-12  "
                        >
                          <img
                            src={Filepng}
                            alt="HID Amico VL35LF"
                            className="BroucherImage  device-list"
                          />
                        </div>
                        <div
                          id="DetailsImagelink"
                          className="col-lg-7 col-md-7 col-sm-2 col-xs-12  row-image-link    "
                        >
                          <a
                            href={broucher}
                            target="_blank"
                            className="download-link device-list"
                          >
                            Brochure
                          </a>
                        </div>

                        <div
                          id="DetailsImagelink"
                          className="col-lg-5 col-md-5 col-sm-1 col-xs-12   "
                        >
                          <img
                            src={Filepng}
                            alt="HID Amico VL35LF"
                            className="BroucherImage device-list"
                          />
                        </div>
                        <div
                          id="DetailsImagelink"
                          className="col-lg-7 col-md-7 col-sm-2 col-xs-12  row-image-link   "
                        >
                          <a
                            href={InstallationGuide}
                            target="_blank"
                            className="download-link device-list"
                          >
                            {" "}
                            Installation Guide
                          </a>
                        </div>

                        <div
                          id="DetailsImagelink"
                          className="col-lg-5 col-md-5 col-sm-1 col-xs-12  "
                        >
                          <img
                            src={Filepng}
                            alt="HID Amico VL35LF"
                            className="BroucherImage device-list"
                          />
                        </div>
                        <div
                          id="DetailsImagelink"
                          className="col-lg-7 col-md-7 col-sm-2 col-xs-12   row-image-link "
                        >
                          <a className="download-link  device-list">
                            {" "}
                            Wiring Diagram
                          </a>
                        </div>
                      </div>
                    </div>
                    <div col-lg-12 col-md-12 col-sm-12 col-xs-12>
                      <ul className="feature-list device-list">
                        <li>
                          The device uses AI-based facial recognition with
                          liveness detection for secure, touchless identity
                          verification.
                        </li>
                        <li>
                          It can handle up to 200,000 users and store 10,000
                          face templates and 200,000 event logs efficiently.
                        </li>
                        <li>
                          It integrates easily with existing systems using OSDP,
                          Wiegand, and PoE.
                        </li>
                        <li>
                          Built-in illuminators enable reliable facial
                          recognition in low-light conditions.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <button
                        className="close-btn device-list"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          modalRoot,
        )}
      {/* HID Device 2  openHID70*/}
      {openHID70 &&
        modalRoot &&
        ReactDOM.createPortal(
          <div
            className="modal-overlay  device-list"
            onClick={() => setOpen1(false)}
          >
            <div
              className="custom-modal  device-list"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header  device-list">HID Amico VL70F</div>

              <div className="modal-body  device-list">
                <div className="col-lg-12 row">
                  <div className="col-lg-6  col-md-6 col-sm-12">
                    <img
                      src={HidAmicoLf70}
                      alt="HID Amico VL70F"
                      className="device-img  device-list"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div
                      id="BrouchersandSetting"
                      className="col-lg-12 MarginTop row "
                    >
                      <div
                        id="DetailsImagelink"
                        className="col-lg-5 col-md-5 col-sm-1 col-xs-12   "
                      >
                        <img
                          src={Filepng}
                          alt="HID Amico VL70LF"
                          className="BroucherImage  device-list"
                        />
                      </div>
                      <div
                        id="DetailsImagelink"
                        className="col-lg-7 col-md-7 col-sm-2 col-xs-12 row-image-link   "
                      >
                        <a
                          href={Usermanual}
                          target="_blank"
                          className="download-link  device-list"
                        >
                          {" "}
                          User Manual
                        </a>
                      </div>

                      <div
                        id="DetailsImagelink"
                        className="col-lg-5 col-md-5 col-sm-1 col-xs-12  "
                      >
                        <img
                          src={Filepng}
                          alt="HID Amico VL35LF"
                          className="BroucherImage  device-list"
                        />
                      </div>
                      <div
                        id="DetailsImagelink"
                        className="col-lg-7 col-md-7 col-sm-2 col-xs-12  row-image-link   "
                      >
                        <a
                          href={broucher}
                          target="_blank"
                          className="download-link  device-list"
                        >
                          Brochure
                        </a>
                      </div>
                      <div
                        id="DetailsImagelink"
                        className="col-lg-5 col-md-5 col-sm-1 col-xs-12  "
                      >
                        <img
                          src={Filepng}
                          alt="HID Amico VL35LF"
                          className="BroucherImage  device-list"
                        />
                      </div>
                      <div
                        id="DetailsImagelink"
                        className="col-lg-7 col-md-7 col-sm-2 col-xs-12  row-image-link  "
                      >
                        <a
                          href={InstallationGuide}
                          target="_blank"
                          className="download-link  device-list"
                        >
                          {" "}
                          Installation Guide
                        </a>
                      </div>
                      <div
                        id="DetailsImagelink"
                        className="col-lg-5 col-md-5 col-sm-1 col-xs-12  "
                      >
                        <img
                          src={Filepng}
                          alt="HID Amico VL70F"
                          className="BroucherImage  device-list"
                        />
                      </div>
                      <div
                        id="DetailsImagelink"
                        className="col-lg-7 col-md-7 col-sm-2 col-xs-12  row-image-link   "
                      >
                        <a className="download-link  device-list">
                          {" "}
                          Wiring Diagram
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ul className="feature-list  device-list">
                      <li>
                        The device uses AI-powered facial recognition for fast,
                        contactless, and secure authentication in under one
                        second.
                      </li>
                      <li>
                        It supports multiple authentication methods, including
                        facial recognition, RFID cards, mobile credentials, QR
                        codes, and PINs.
                      </li>
                      <li>
                        Recognition remains accurate and reliable even in
                        low-light conditions or when users are wearing masks.
                      </li>
                      <li>
                        It integrates seamlessly with existing access control
                        systems and supports large user databases for scalable
                        deployment.
                      </li>
                      <li>
                        Designed with a durable and modern build, it suits both
                        indoor and semi-outdoor high-traffic environments.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  ">
                    <button
                      className="close-btn  device-list"
                      onClick={() => setOpen1(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-footer  device-list"></div>
            </div>
          </div>,
          modalRoot,
        )}
    </>
  );
}

export default DeviceList;
