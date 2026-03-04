import { useState } from "react";
import { DeviceCardTable } from '../components/DeviceCardTable';

export function DeviceConfigureCard() {
    const [device, setdevice] = useState([
        { id: 1, DeviceName: "HID Amico VL35LF", IPAddress: "192.168.1.54", TerminalID: "756565454", PortNo: "3001" },
        { id: 2, DeviceName: "HID Amico VL70LF", IPAddress: "192.168.1.54", TerminalID: "7656464", PortNo: "3001" },
        { id: 3, DeviceName: "HID Amico VL35LF", IPAddress: "192.168.1.54", TerminalID: "75005454", PortNo: "3001" },
        { id: 4, DeviceName: "HID Amico VL70LF", IPAddress: "192.168.1.54", TerminalID: "765652564", PortNo: "3001" },
        { id: 5, DeviceName: "HID Amico VL35LF", IPAddress: "192.168.1.54", TerminalID: "756565454", PortNo: "3001" },
        { id: 6, DeviceName: "HID Amico VL35LF", IPAddress: "192.168.1.54", TerminalID: "756565454", PortNo: "3001" },
        { id: 7, DeviceName: "HID Amico VL35LF", IPAddress: "192.168.1.54", TerminalID: "756565454", PortNo: "3001" },
        { id: 8, DeviceName: "HID Amico VL35LF", IPAddress: "192.168.1.54", TerminalID: "756565454", PortNo: "3001" },
        { id: 9, DeviceName: "HID Amico VL35LF", IPAddress: "192.168.1.54", TerminalID: "756565454", PortNo: "3001" },


    ]);

    const handleSelect = (id: number) => {
        setdevice((prev) => prev.filter((c) => c.id !== id));
    };
    const handleView = (id: number) => {
        setdevice((prev) => prev.filter((c) => c.id !== id));
    };
    const handleDelete = (id: number) => {
        setdevice((prev) => prev.filter((c) => c.id !== id));
    };
    return (
        <>
            <div className="col-12">


                <div className="spaceBetweencontent"></div>
                <div>
                    <DeviceCardTable
                        devices={device}
                        onConnect={handleSelect}
                        onView={handleView}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </>
    );
}




