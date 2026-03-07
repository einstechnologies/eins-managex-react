import "../styles/DeviceSettings.css";
import DragDropUpload from "../components/DragDropUpload ";
import { useState } from "react";

// ─── Reusable Audio Event Row ─────────────────────────────────────────────────
interface AudioEventRowProps {
  legend: string;
  name: string;
  badge?: string;
  badgeColor?: string;
}

const AudioEventRow = ({ legend, name, badge }: AudioEventRowProps) => {
  const [selected, setSelected] = useState("Default");

  return (
    <div className="audio-row-card">
      <div className="audio-row-left">
        <span className="audio-row-title">
          {legend} {badge}
        </span>
      </div>

      <div className="audio-row-center">
        {["Default", "Deactivated", "Custom"].map((opt) => (
          <label
            key={opt}
            className={`radio-pill ${selected === opt ? "active" : ""}`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
              style={{ display: "none" }}
            />
            {opt}
          </label>
        ))}
      </div>

      {selected === "Custom" && (
        <div className="audio-row-file">
          <select id={`listAudioFile_${name}`} className="modern-select">
            <option value="">Select Audio File</option>
          </select>
        </div>
      )}

      <div className="audio-row-actions">
        <button className="mb-0 btn-outline-soft-green mx-1">Save</button>
        <button className="mb-0 btn-outline-soft-red mx-1">Cancel</button>
      </div>
    </div>
  );
};

// ─── Main Sound Component ─────────────────────────────────────────────────────
const Sound = () => {
  const [volume, setVolume] = useState("Normal");

  const audioEvents = [
    {
      legend: "Not Identified",
      name: "notIdf",
      badge: "Event",
      badgeColor: "#ef4444",
    },
    {
      legend: "Authorised",
      name: "auth",
      badge: "Event",
      badgeColor: "#10b981",
    },
    {
      legend: "Not Authorised",
      name: "notauth",
      badge: "Event",
      badgeColor: "#f59e0b",
    },
    {
      legend: "Wear Mask",
      name: "wearmask",
      badge: "Event",
      badgeColor: "#6366f1",
    },
  ];

  return (
    <>
      <div className="hid-card">
        {/* ── Header ── */}
        <div className="sound-page-header">
          <h5 className="sound-page-title">🔊 Sound Settings</h5>
          <p className="sound-page-subtitle">
            Configure audio messages and volume for device events
          </p>
        </div>

        {/* ── Device Name ── */}
        <div className="sound-section-card mb-4">
          <div className="sound-section-label">
            <span></span> Select Device
          </div>
          <div className="col-lg-4">
            <fieldset className="text-input-group">
              <label htmlFor="listdevice">Device Name</label>
              <select id="listdevice">
                <option value="">Select Device</option>
              </select>
            </fieldset>
          </div>
        </div>

        {/* ── Create Audio + Upload ── */}
        <div className="row g-3 mb-4">
          {/* Create Custom Audio */}
          <div className="col-lg-6">
            <div className="sound-card h-100">
              <div className="sound-card-header">
                <span>🎙️</span> Create Custom Audio
              </div>
              <div className="sound-card-body">
                <div className="row g-2">
                  <div className="col-lg-7">
                    <fieldset className="text-input-group">
                      <label htmlFor="audiotxt">Create Text to Audio</label>
                      <input type="text" id="audiotxt" />
                    </fieldset>
                  </div>
                  <div className="col-lg-5">
                    <fieldset className="text-input-group">
                      <label htmlFor="drpGender">Voice Gender</label>
                      <select id="drpGender">
                        <option value="0">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset className="text-input-group">
                      <label htmlFor="txtvoicespeed">Speed</label>
                      <input
                        type="number"
                        id="txtvoicespeed"
                        defaultValue={0}
                        min={-20}
                        max={20}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-8">
                    <fieldset className="text-input-group">
                      <label htmlFor="txtfilename">File Name</label>
                      <input id="txtfilename" />
                    </fieldset>
                  </div>
                  <div className="col-12 d-flex gap-2 mt-1">
                    <button className="mb-0 btn-outline-soft-yellow mx-1">
                      Create
                    </button>
                    <button className="mb-0 btn-outline-soft-red mx-1">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Audio File */}
          <div className="col-lg-6">
            <div className="sound-card h-100">
              <div className="sound-card-header">
                <span>📂</span> Upload Audio File
              </div>
              <div className="sound-card-body">
                <DragDropUpload accept="audio/wav" />
                <div className="d-flex gap-2 mt-3">
                  <button className="mb-0 btn-outline-soft-blue mx-1">
                    Upload
                  </button>
                  <button className="mb-0 btn-outline-soft-red mx-1">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Audio Event Rows ── */}
        <div className="sound-card mb-4">
          <div className="sound-card-header">
            <span>🎚️</span> Audio Messages per Event
          </div>
          <div className="sound-card-body p-0">
            {audioEvents.map((ev, i) => (
              <div
                key={ev.name}
                className={i !== audioEvents.length - 1 ? "border-bottom" : ""}
              >
                <AudioEventRow
                  legend={ev.legend}
                  name={ev.name}
                  badge={ev.badge}
                  badgeColor={ev.badgeColor}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Volume Setting ── */}
        <div className="sound-card">
          <div className="sound-card-header">
            <span>🔉</span> Volume Setting
          </div>
          <div className="sound-card-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="d-flex gap-2">
                {["Normal", "Medium", "High"].map((opt) => (
                  <label
                    key={opt}
                    className={`radio-pill ${volume === opt ? "active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="vol"
                      value={opt}
                      checked={volume === opt}
                      onChange={() => setVolume(opt)}
                      style={{ display: "none" }}
                    />
                    {opt === "Normal" ? "🔈" : opt === "Medium" ? "🔉" : "🔊"}{" "}
                    {opt}
                  </label>
                ))}
              </div>
              <div className="d-flex gap-2">
                <button className="mb-0 btn-outline-soft-green mx-1">
                  Save
                </button>
                <button className="mb-0 btn-outline-soft-red mx-1">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sound;
