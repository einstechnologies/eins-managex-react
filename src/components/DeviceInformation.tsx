import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/DeviceInformation.css'
import ConnectedDevice from "../components/ConnectedDevice";
function DeviceInfo() {
  return (
    <>
      <ConnectedDevice
        Name="Main Door"
        IP="192.168.1.201"
        mac="00:18:9E:6A:B8:35"
        terminalid="5382314504545"
      />
      <div className="row  g-3">

        <div className="col-12 mt-3 g-3">
          <div className="card device-user-card device-information">
            <h6>
              <b>Device Information</b>
            </h6>

            <div className="d-flex align-items-start gap-3 mt-4 flex-wrap">

              <div className="col-12 col-md-3">
                <fieldset className="device-information dev-info-text-input-group">
                  <label htmlFor="devicename">Device Name</label>
                  <input id="devicename" className="form-control" />
                </fieldset>
              </div>

              <div className="d-flex gap-2">
                <button className="btn-outline-soft-green">Get Info</button>
                <button className="btn-outline-soft-red">&nbsp;Clear&nbsp;</button>
              </div>

              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Device Name</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Module Name</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Device Id</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Serial No.</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Time</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Mac</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Memory</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Lisence</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Network</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Version</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label device-information">Secbox Version</span>
                    <span className="device-information-colon device-information">:</span>
                    <span className="device-information-value device-information">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label">iDCloud Code</span>
                    <span className="device-information-colon">:</span>
                    <span className="device-information-value">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <span className="device-information-label">Online</span>
                    <span className="device-information-colon">:</span>
                    <span className="device-information-value">NA</span>
                  </div>
                </div>

                <div className="col-12 col-md-6 dev-if-mt device-information">
                  <div className="d-flex">
                    <span className="device-information-label">Online Available</span>
                    <span className="device-information-colon">:</span>
                    <span className="device-information-value">NA</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  );
}

export default DeviceInfo;