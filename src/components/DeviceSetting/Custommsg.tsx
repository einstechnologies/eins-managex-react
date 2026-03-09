import { useState } from "react";
import HelpIcon from "../HelpIcon";

interface CustomMsgRowProps {
  label: string;
  inputId: string;
}

const CustomMsgRow = ({ label, inputId }: CustomMsgRowProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="row align-items-center border-bottom audio-row-card">
      <div className="col-lg-2 margin1">
        <span className="audio-row-title">{label}</span>
      </div>

      <div className="col-lg-1 margin1">
        <label className="toggle-switch">
          <input
            id={inputId}
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>

      {isEnabled && (
        <div className="col-lg-6 margin1 d-flex">
          <input
            type="text"
            className="osdp-input"
            id={`txt${inputId}`}
            placeholder={`Enter ${label} message...`}
          />
        </div>
      )}
    </div>
  );
};

const Custommsg = () => {
  const events = [
    { label: "Not Identified", inputId: "NotIdentified" },
    { label: "Authorised", inputId: "Authorised" },
    { label: "Not Authorised", inputId: "NotAuthorised" },
    { label: "Wear Mask", inputId: "WearMask" },
  ];

  return (
    <>
      <div className="hid-card">
        <div className="sound-page-header">
          <div className="sound-page-header-left">
            <h5 className="sound-page-title">
              <i className="bi bi-chat-left-text iconsize20 me-2"></i>
              Custom Messages
            </h5>
            <p className="sound-page-subtitle">
              Create Custom messages for each event
            </p>
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
            <i className="bi bi-chat-left-text iconsize20 me-2"></i>
            Custom Message per Event
          </div>
          <div className="sound-card-body p-0">
            {events.map((ev) => (
              <CustomMsgRow
                key={ev.inputId}
                label={ev.label}
                inputId={ev.inputId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Custommsg;
