interface ConnectedDeviceProps {
  Name?: string;
  IP?: string;
  mac?: string;
  terminalid?: string;
}

const ConnectedDevice = ({
  Name,
  IP,
  mac,
  terminalid,
}: ConnectedDeviceProps) => {
  return (
    <div className="connected-device-card">
      <div className="connected-device-grid">
        <div className="device-info-item">
          <span className="device-info-label">
            <i className="bi bi-phone"></i> Device Name :
          </span>
          <span className="device-info-value">{Name || "—"}</span>
        </div>

        <div className="device-info-divider" />

        <div className="device-info-item">
          <span className="device-info-label">
            <i className="bi bi-globe2"></i> IP Address :
          </span>
          <span className="device-info-value">{IP || "—"}</span>
        </div>

        <div className="device-info-divider" />

        <div className="device-info-item">
          <span className="device-info-label"># Terminal ID : </span>
          <span className="device-info-value">{terminalid || "—"}</span>
        </div>

        <div className="device-info-divider" />

        <div className="device-info-item">
          <span className="device-info-label">
            <i className="bi bi-cpu"></i> MAC Address :
          </span>
          <span className="device-info-value">{mac || "—"}</span>
        </div>
      </div>
    </div>
  );
};

export default ConnectedDevice;
