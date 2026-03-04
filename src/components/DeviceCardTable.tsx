import "../styles/UserCardTable.css";

interface DeviceEntry {
    id: number;
    DeviceName: string;
    IPAddress: string;
    TerminalID: string;
    PortNo: string;
}

interface DeviceTableProps {
    devices: DeviceEntry[];
    onDelete: (id: number) => void;
    onView: (id: number) => void;
    onConnect: (id: number) => void;
}

export function DeviceCardTable({ devices, onConnect, onView, onDelete }: DeviceTableProps) {
    return (
        <div className="user-card-table-tableWrapper">
            <table>

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
                            <tr key={device.id}>
                                <td>{index + 1}</td>
                                <td>{device.DeviceName}</td>
                                <td>{device.IPAddress}</td>
                                <td>{device.TerminalID}</td>
                                <td>{device.PortNo}</td>
                                <td>
                                    <button
                                        className="deleteBtn"
                                        onClick={() => onConnect(device.id)}
                                        title="Select"
                                    >
                                        <i className="bi bi-card-checklist"></i>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="deleteBtn"
                                        onClick={() => onView(device.id)}
                                        title="View"
                                    >
                                        <i className="bi bi-eye"></i>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="deleteBtn"
                                        onClick={() => onDelete(device.id)}
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