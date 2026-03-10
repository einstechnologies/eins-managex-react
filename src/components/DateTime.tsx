import '../styles/DateTime.css'
import { useState } from "react";
import ConnectedDevice from "../components/ConnectedDevice";
import HelpIcon from "./HelpIcon";

function DateTime() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleGetDateTime = () => {
        const now = new Date();

        const currentDate =
            String(now.getMonth() + 1).padStart(2, '0') + "/" +
            String(now.getDate()).padStart(2, '0') + "/" +
            now.getFullYear();

        const currentTime =
            String(now.getHours()).padStart(2, '0') + ":" +
            String(now.getMinutes()).padStart(2, '0') + ":" +
            String(now.getSeconds()).padStart(2, '0');

        setDate(currentDate);
        setTime(currentTime);
    };

    return (
        <>
            <ConnectedDevice
                Name="Main Door"
                IP="192.168.1.201"
                mac="00:18:9E:6A:B8:35"
                terminalid="5382314504545"
            />
            <div className="row  g-3">

                <div className="col-12 mt-3 g-3 date-time dt-bottom">
                    <div className="card dt-user-card date-time">
                        <h6 className="d-flex justify-content-between">
                            <b>Date/Time</b>
                            <div>
                                <HelpIcon />
                            </div>
                        </h6>

                        <div className="row mt-4">
                            <div className="col-12 col-md-3">
                                <fieldset className="date-time dt-info-text-input-group">
                                    <label htmlFor="currentdate">Current Date (MM/DD/YYYY)</label>
                                    <input id="currentdate" className="form-control" value={date} readOnly />
                                </fieldset>
                            </div>
                            <div className="col-12 col-md-3">
                                <fieldset className="date-time dt-info-text-input-group">
                                    <label htmlFor="currenttime">Current Time (HH:MM:SS)</label>
                                    <input id="currenttime" className="form-control" value={time} readOnly />
                                </fieldset>
                            </div>
                        </div>

                        <div className="date-time btn-datetime mt-3">
                            <button className="date-time dt-btn-outline-soft-blue" onClick={handleGetDateTime}>Get Current Date Time</button>
                            <button className="date-time dt-btn-outline-soft-green ms-2">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DateTime;