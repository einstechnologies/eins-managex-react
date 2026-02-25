import '../styles/Configuration.css';
import HidAmicoLf35 from '/HIDAmicoVL35LF.png';
import HidAmicoLf70 from '/HIDAmicoVL70F.png';
import  { useState } from "react";
import ReactDOM from "react-dom";
import Filepng from '/Files.png' ;
import DeviceCard from '../components/DeviceCard';
import Usermanual from '../assets/PdfFiles/UserManualHID.pdf';
import broucher from '../assets/PdfFiles/BroucherHID.pdf';
import InstallationGuide from '../assets/PdfFiles/InstallationGuideHID.pdf';


function DeviceList() {
  const [openHID35, setOpen] = useState(false);
  const [openHID70, setOpen1] = useState(false);
  const modalRoot = document.getElementById("modal-root");
  
  return (
    <>
 <div id="modal-root"></div>
      <div className='container' >
        <div className="col-lg-12 ">

        </div>
        <div id='ConfigCards' className="col-lg-12 ">
     <DeviceCard
  title="HID Amico VL35LF"
  image={HidAmicoLf35}
  onQuickInfo={() => setOpen(true)}
   IsDeviceImage="HidDevice35"
   IsVisible="col-lg-12 margin1 " 
/>
     <DeviceCard
  title="HID Amico VL70F"
  image={HidAmicoLf70}
  onQuickInfo={() => setOpen1(true)}
   IsDeviceImage="HidDevice70"
   IsVisible="col-lg-12 margin1 DivVisibility" 
/>


       
        </div>
      </div>




      {openHID35 && modalRoot &&
        ReactDOM.createPortal(
          <div className="modal-overlay" onClick={() => setOpen(false)}>
            <div
              className="custom-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                HID Amico VL35LF
              </div>

              <div className="modal-body   ">

             
                <div className='col-lg-12'>
                  <div className='col-lg-6 col-md-6 col-sm-12 '>
                    <div className='col-lg-12'>
                      
                         <img
                  src={HidAmicoLf35}
                  alt="HID Amico VL35LF"
                  className="device-img"
                />
                       </div>
                       <div className='col-lg-12'>
 


               
 

                       </div>
                   
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='col-lg-12'>
                      <div id='Wiring' className='col-lg-5 col-md-3 col-sm-1 col-xs-12 alignright '>
                        <img
                          src={Filepng}
                          alt="HID Amico VL35LF"
                          className="BroucherImage"
                        />
                      </div>
                      <div id='Wiring' className='col-lg-7 col-md-9 col-sm-2 col-xs-12  margin1  alignleft '>

                        <a href={Usermanual}   target="_blank" className='download-link'> User Manual</a>
                      </div>
                      <div className='col-lg-12 col-md-12 col-sm-0 col-xs-12'></div>
                      <div id='Wiring' className='col-lg-5 col-md-3 col-sm-1 col-xs-12 alignright '>
                        <img
                          src={Filepng}
                          alt="HID Amico VL35LF"
                          className="BroucherImage"
                        />
                      </div>
                      <div id='Wiring' className='col-lg-7 col-md-9 col-sm-2 col-xs-12  margin1  alignleft '>

                        <a href={broucher}   target="_blank" className='download-link'>Brochure</a>
                      </div>
                      <div className='col-lg-12 col-md-12 col-sm-0 col-xs-12'></div>
                      <div id='Wiring' className='col-lg-5 col-md-3 col-sm-1 col-xs-12 alignright '>
                        <img
                          src={Filepng}
                          alt="HID Amico VL35LF"
                          className="BroucherImage"
                        />
                      </div>
                      <div id='Wiring' className='col-lg-7 col-md-9 col-sm-2 col-xs-12  margin1  alignleft'>

                        <a href={InstallationGuide}   target="_blank" className='download-link'> Installation Guide</a>
                      </div>
                       <div className='col-lg-12 col-md-12 col-sm-0 col-xs-12'></div>
                      <div id='Wiring' className='col-lg-5 col-md-3 col-sm-1 col-xs-12 alignright '>
 <img
                          src={Filepng}
                          alt="HID Amico VL35LF"
                          className="BroucherImage"
                        />
                      </div>
                      <div id='Wiring' className='col-lg-7 col-md-9 col-sm-2 col-xs-12  margin1  alignleft '>
<a className='download-link'> Wiring Diagram</a>

                      </div>
                    </div>

                  </div>
                  <div col-lg-12 col-md-12 col-sm-12 col-xs-12>
    <ul className="feature-list">
                      <li>
                        The device uses AI-based facial recognition with liveness
                        detection for secure, touchless identity verification.
                      </li>
                     
                      <li>
                        It can handle up to 200,000 users and store 10,000 face templates
                        and 200,000 event logs efficiently.
                      </li>
                      <li>
                        It integrates easily with existing systems using OSDP, Wiegand,
                        and PoE.
                      </li>
                      <li>
                        Built-in illuminators enable reliable facial recognition in
                        low-light conditions.
                      </li>
                    </ul>

                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  aligncenter'>
                     <button className="close-btn" onClick={() => setOpen(false)}>
                  Close
                </button>
                  </div>
                </div>

              </div>

              
            </div>
          </div>,
          modalRoot
        )
      }




      {/* HID Device 2  openHID70*/}

      {openHID70 && modalRoot &&
        ReactDOM.createPortal(
          <div className="modal-overlay" onClick={() => setOpen1(false)}>
            <div
              className="custom-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                HID Amico VL70F
              </div>

              <div className="modal-body">
               
<div className='col-lg-12'>
  <div className='col-lg-6  col-md-6 col-sm-12'>
    <img
                  src={HidAmicoLf70}
                  alt="HID Amico VL70F"
                  className="device-img"
                />
  </div>
   <div  className='col-lg-6 col-md-6 col-sm-12'>
                    <div id='BrouchersandSetting' className='col-lg-12 MarginTop'>
                      <div id='Wiring' className='col-lg-5 col-md-3 col-sm-1 col-xs-12 alignright  '>
                        <img
                          src={Filepng}
                          alt="HID Amico VL70LF"
                          className="BroucherImage"
                        />
                      </div>
                      <div id='Wiring' className='col-lg-7 col-md-9 col-sm-2 col-xs-12 margin1 alignleft  '>

                        <a href={Usermanual}   target="_blank" className='download-link'> User Manual</a>
                      </div>

                     <div className='col-lg-12 col-md-12 col-sm-0 col-xs-12'></div>
                      <div id='Wiring' className='col-lg-5 col-md-3 col-sm-1 col-xs-12 alignright '>
                        <img
                          src={Filepng}
                          alt="HID Amico VL35LF"
                          className="BroucherImage"
                        />
                      </div>
                      <div id='Wiring' className='col-lg-7 col-md-9 col-sm-2 col-xs-12 margin1  alignleft  '>

                        <a href={broucher}   target="_blank" className='download-link'>Brochure</a>
                      </div>
                     <div className='col-lg-12 col-md-12 col-sm-0 col-xs-12'></div>
                      <div id='Wiring' className='col-lg-5 col-md-3 col-sm-1 col-xs-12 alignright '>
                        <img
                          src={Filepng}
                          alt="HID Amico VL35LF"
                          className="BroucherImage"
                        />
                      </div>
                      <div id='Wiring' className='col-lg-7 col-md-9 col-sm-2 col-xs-12 margin1  alignleft '>

                        <a href={InstallationGuide}   target="_blank" className='download-link'> Installation Guide</a>
                      </div>
                      <div className='col-lg-12 col-md-12 col-sm-0 col-xs-12'></div>
                     <div id='Wiring' className='col-lg-5 col-md-3 col-sm-1 col-xs-12 alignright '>
 <img
                          src={Filepng}
                          alt="HID Amico VL70F"
                          className="BroucherImage"
                        />
                      </div>
                      <div id='Wiring' className='col-lg-7 col-md-9 col-sm-2 col-xs-12  margin1  alignleft '>
<a className='download-link'> Wiring Diagram</a>

                      </div>
                    </div>
                  </div>
                  
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
 <ul className="feature-list">

                  <li>The device uses AI-powered facial recognition for fast, contactless, and secure authentication in under one second.</li>
                  <li>It supports multiple authentication methods, including facial recognition, RFID cards, mobile credentials, QR codes, and PINs.</li>
                  <li>Recognition remains accurate and reliable even in low-light conditions or when users are wearing masks.</li>
                  <li>It integrates seamlessly with existing access control systems and supports large user databases for scalable deployment.</li>
                  <li>Designed with a durable and modern build, it suits both indoor and semi-outdoor high-traffic environments.</li>

                </ul>

              </div>
</div>
            
              </div>
              
  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  aligncenter'>
                     <button className="close-btn" onClick={() => setOpen1(false)}>
                  Close
                </button>
                  </div>
              <div className="modal-footer">
                
              </div>
            </div>
          </div>,
          modalRoot
        )
      }



    </>
  );
}

export default DeviceList;