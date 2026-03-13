import "../styles/UserCardTable.css";
import type { GetDeviceDetailsResponse } from "../ts/api/eins/device/device_details/get_deviceDetails_response";

interface DeviceTableProps {
  devices: GetDeviceDetailsResponse[];
  onDelete: (id: number) => void;
  onView: (id: number) => void;
  onConnect: (id: number) => void;
}

export function DeviceCardTable({
  devices,
  onConnect,
  onView,
  onDelete,
}: DeviceTableProps) {
  return (
    <div className="user-card-table-tableWrapper">
      <table id="tbConfiguredDevice">
        <thead className="tableHead">
          <tr>
            <th>#</th>
            <th>Device Name</th>
            <th>IP Address</th>
            <th>Terminal ID</th>
            <th>Port No</th>
            <th>Select</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="tableBody">
          {devices.length === 0 ? (
            <tr className="emptyRow">
              <td colSpan={8}>No Devices configured yet</td>
            </tr>
          ) : (
            devices.map((device, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{device.deviceName ?? "NA"}</td>
                <td>{device.ipAddress ?? "NA"}</td>
                <td>{device.terminalID ?? "NA"}</td>
                <td>{device.portNo ?? "NA"}</td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => onConnect(device.deviceId)}
                    title="Select"
                  >
                    <i className="bi bi-card-checklist"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => onView(device.deviceId)}
                    title="View"
                  >
                    <i className="bi bi-eye"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => onDelete(device.deviceId)}
                    title="Delete"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
