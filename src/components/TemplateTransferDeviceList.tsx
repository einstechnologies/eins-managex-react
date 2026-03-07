export type Device = {
    id: number;
    deviceName: string;
    ipAddress: string;
    TerminalId: string;
};

type DeviceTableProps = {
    devices: Device[];
    selectedDevices: number[];
    onSelect: (id: number) => void;

};

export function DeviceTable({
    devices,
    selectedDevices,
    onSelect,

}: DeviceTableProps) {
    return (
        <div className="Template-transfer-table templateTransfer ">
            <table >
                <thead className="tableHead">
                    <tr>
                        <th>Select</th>
                        <th className="hidden-col template-transfer">#</th>
                        <th>Terminal Id</th>
                        <th>Device Name</th>
                        <th>IP Address</th>

                    </tr>
                </thead>

                <tbody className="tableBody">

                    {

                        devices.length === 0 ? (
                            <tr className="emptyRow">
                                <td colSpan={3}>No cards registered yet</td>
                            </tr>
                        ) : (

                            devices.map((device, index) => (
                                <tr key={device.id}>
                                    <td>
                                        <input type="hidden" value={device.id} />

                                        <input
                                            type="checkbox"
                                            checked={selectedDevices.includes(device.id)}
                                            onChange={() => onSelect(device.id)}
                                        />
                                    </td>

                                    <td className="hidden-col template-transfer">{index + 1}</td>
                                    <td>{device.TerminalId}</td>
                                    <td>{device.deviceName}</td>
                                    <td>{device.ipAddress}</td>


                                </tr>
                            )))}
                </tbody>
            </table>
        </div>
    );
}