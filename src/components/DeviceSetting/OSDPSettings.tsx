import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const OSDPSetting = () => {
  const rdoOSDPChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      MySwal.fire({
        icon: "warning",
        titleText: "Attention",
        text: "When enabling OSDP, communication with the EAM will not work and the equipment will act as a Peripheral Device (PD) according to the OSDP interface.",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
    }
  };
  const MySwal = withReactContent(Swal);

  return (
    <>
      <div className="hid-card">
        <div className="sound-page-header">
          <h5 className="sound-page-title">OSDP Settings</h5>
          <p className="sound-page-subtitle">Configure OSDP(RS-485) settings</p>
        </div>
        {/* ── Device Name ── */}

        <div className="sound-section-card mb-4">
          <div className="row col-lg-12 align-items-center">
            <div className="col-lg-2 alignleft text-nowrap">
              <div className="sound-section-label">
                <span></span> Select Device
              </div>
            </div>
            <div className="col-lg-6">
              <fieldset className="text-input-group">
                <label htmlFor="listdevice">Device Name</label>
                <select id="listdevice">
                  <option value="">Select Device</option>
                </select>
              </fieldset>
            </div>
            <div className="col-lg-4 d-flex alignleft">
              <button className="mb-2 btn-outline-soft-green mx-1">Save</button>
              <button className="mb-2 btn-outline-soft-red mx-1">Cancel</button>
            </div>
          </div>
        </div>
        <div className="sound-section-card mb-4">
          <div className="osdp-grid margin1">
            {/* ── LEFT COLUMN ── */}
            <div className="osdp-col">
              {/* OSDP Toggle */}
              <div className="osdp-row">
                <label>OSDP :</label>
                <label className="toggle-switch">
                  <input
                    id="rdoOSDP"
                    type="checkbox"
                    onChange={rdoOSDPChnage}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Module Address */}
              <div className="osdp-row">
                <label>Module Address :</label>
                <input type="number" className="osdp-input" min={0} max={126} />
              </div>

              {/* Enforce Secure Channel */}
              <div className="osdp-row">
                <label>Enforce Secure Channel :</label>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Enable Special Function Keys */}
              <div className="osdp-row">
                <label>Enable Special Function Keys :</label>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Auto Enable Keypad */}
              <div className="osdp-row">
                <label>Automatically Enable Keypad after Card Swipe :</label>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Card Read Report Format */}
              <div className="osdp-row">
                <label>Card Read Report Format :</label>
                <select className="osdp-select">
                  <option value="Raw">Raw (Default)</option>
                  <option value="Wiegand">Wiegand</option>
                  <option value="ASCII">ASCII</option>
                </select>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="osdp-col">
              {/* Output Mode */}
              <div className="osdp-row">
                <label>Output Mode :</label>
                <div className="osdp-radio-group">
                  {["ID", "Authorized Card", "Any Card /QR Code/PIN"].map(
                    (opt) => (
                      <label key={opt} className="osdp-radio-label">
                        <input type="radio" name="outputMode" value={opt} />
                        <label>{opt}</label>
                      </label>
                    ),
                  )}
                </div>
              </div>

              {/* Baud Rate */}
              <div className="osdp-row">
                <label>Baud Rate :</label>
                <select className="osdp-select">
                  <option selected value="1">
                    9600
                  </option>
                  <option value="2">19200</option>
                  <option value="3">38400</option>
                  <option value="4">57600</option>
                  <option value="5">115200</option>
                  <option value="6">230400</option>
                </select>
              </div>

              {/* Installation Mode */}
              <div className="osdp-row">
                <label>Installation Mode :</label>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Automatic Keypad Timeout */}
              <div className="osdp-row">
                <label>Automatic Keypad Timeout :</label>
                <input type="number" min={0} max={126} className="osdp-input" />
              </div>

              {/* Wiegand Size */}
              <div className="osdp-row">
                <label>Wiegand Size :</label>
                <select className="osdp-select">
                  <option selected value="1">
                    Manual
                  </option>
                  <option value="2">W26</option>
                  <option value="3">W32</option>
                  <option value="4">W34</option>
                  <option value="5">C1K (35 bits)</option>
                  <option value="6">W37 (H10302)</option>
                  <option value="7">W37 (H10304)</option>
                  <option value="8">W40</option>
                  <option value="9">W42</option>
                  <option value="10">C1K (48 bits)</option>
                  <option value="11">W56</option>
                  <option value="12">W64</option>
                  <option value="13">W66</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OSDPSetting;
