import { useState } from "react";
import HelpIcon from "../HelpIcon";

const Cardsettings = () => {
  const [selectedCardFormat, setselectedCardFormat] = useState("PACS Only");
  const [selectedCSNFormat, setselectedCSNFormat] = useState("LSB");
  const [selectedPACSFormat, setselectedPACSFormat] = useState("Wiegand");
  return (
    <>
      <div className="hid-card">
        <div className="sound-page-header">
          <div className="sound-page-header-left">
            <h5 className="sound-page-title">
              <i className="bi bi-credit-card-2-back-fill iconsize20 me-2"></i>
              Card Setting
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
            <i className="bi bi-credit-card-2-back-fill iconsize20 me-2"></i>
            Select Card Setting to use multiple cards
          </div>
          <div className="sound-card-body p-0">
            <div className="border-bottom">
              <div className="audio-row-card">
                <div className="audio-row-left">
                  <span className="audio-row-title">Reading format</span>
                </div>
                <div className="audio-row-center">
                  {["PACS Only", "CSN Only", "CSN for Mifare"].map((opt) => (
                    <label
                      key={opt}
                      className={`radio-pill ${selectedCardFormat === opt ? "active" : ""}`}
                    >
                      <input
                        type="radio"
                        name="rdoCardFormat"
                        value={opt}
                        checked={selectedCardFormat === opt}
                        onChange={() => setselectedCardFormat(opt)}
                        className="display-none"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-bottom">
              <div className="audio-row-card">
                <div className="audio-row-left">
                  <span className="audio-row-title">CSN Format</span>
                </div>
                <div className="audio-row-center">
                  {["MSB", "LSB"].map((opt) => (
                    <label
                      key={opt}
                      className={`radio-pill ${selectedCSNFormat === opt ? "active" : ""}`}
                    >
                      <input
                        className="display-none"
                        type="radio"
                        name="rdoCSNFomrat"
                        value={opt}
                        checked={selectedCardFormat === opt}
                        onChange={() => setselectedCSNFormat(opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-bottom">
              <div className="audio-row-card">
                <div className="audio-row-left">
                  <span className="audio-row-title">PACS Format </span>
                </div>
                <div className="audio-row-center">
                  {["RAW", "Wiegand", "ABA TRACK"].map((opt) => (
                    <label
                      key={opt}
                      className={`radio-pill ${selectedPACSFormat === opt ? "active" : ""}`}
                    >
                      <input
                        type="radio"
                        name="rdoPACSFomrat"
                        value={opt}
                        checked={selectedCardFormat === opt}
                        onChange={() => setselectedPACSFormat(opt)}
                        className="display-none"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cardsettings;
