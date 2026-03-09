import { useState } from "react";
import HelpIcon from "../HelpIcon";

const IdentificationMode = () => {
  const [selected, setSelected] = useState("1:N Identification");

  return (
    <>
      <div className="hid-card">
        <div className="sound-page-header">
          <div className="sound-page-header-left">
            <h5 className="sound-page-title">
              <i className="bi bi-person-vcard iconsize20 me-2"></i>
              Identification Mode
            </h5>
          </div>
          <div className="sound-page-header-right">
            <HelpIcon />
          </div>
        </div>
        <div className="row col-lg-12 mt-neg-20">
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4 d-flex justify-content-end align-items-center gap-2">
            <button className="btn-outline-soft-green">Save</button>
            <button className="btn-outline-soft-red">Cancel</button>
          </div>
        </div>
        <div className="sound-card mb-4">
          <div className="sound-card-header">
            <i className="bi bi-person-vcard iconsize20 me-2"></i>
            Select Identification Mode
          </div>
          <div className="sound-card-body p-0">
            <div className="border-bottom">
              <div className="audio-row-card">
                <div className="col-lg-12">
                  <div className="audio-row-center">
                    {[
                      "1:N Identification",
                      "1:1 Identification",
                      "Template On Card",
                    ].map((opt) => (
                      <label
                        key={opt}
                        className={`radio-pill ${selected === opt ? "active" : ""}`}
                      >
                        <input
                          type="radio"
                          name="identificationMode"
                          value={opt}
                          checked={selected === opt}
                          onChange={() => setSelected(opt)}
                          style={{ display: "none" }}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="audio-row-center">
                    {selected !== "1:N Identification" && (
                      <div className="d-flex align-items-center gap-2">
                        <input type="checkbox" id="singleFactor" />
                        <label htmlFor="singleFactor" className="mb-0">
                          Single factor access via Wiegand
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IdentificationMode;
