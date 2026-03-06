import { BiColor } from "react-icons/bi";

export function DeliberateEmergency() {
    return (
        <>
            <div className="col-lg-12">
                <h6>
                    <b>Deliberate Emergency</b>
                </h6>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="col-12 restartdiv">
                    <div className='col-lg-4' style={{ color: "blue" }}>
                        <label htmlFor="device">Communaction Mode : Default</label>
                    </div>
                </div>
                <div className="col-12 restartdiv"></div>
                <div className="col-12 restartdiv spacebottom">
                    <div className='col-lg-1'>
                        <label htmlFor="device">Exception Mode</label>
                    </div>
                    <div className='col-lg-1'>
                        <input
                            type="radio"
                            id="Normal"
                            name="status"
                            style={{ marginRight: "10px" }}
                        />
                        <label htmlFor="Normal">Normal</label>
                    </div>
                    <div className='col-lg-1'>
                        <input
                            type="radio"
                            id="lockdown"
                            name="status"
                            style={{ marginRight: "10px" }}
                        />
                        <label htmlFor="lockdown">Lock Down</label>
                    </div>
                    <div className='col-lg-2'>
                        <input
                            type="radio"
                            id="emergency"
                            name="status"
                            style={{ marginRight: "10px" }}
                        />
                        <label htmlFor="emergency">Emergency (Always Open)</label>
                    </div>
                    <div className='col-lg-1'>
                        <button className="btn-outline-soft-green" style={{ width: "100%" }}>Save</button>
                    </div>
                </div>
            </div >
        </>
    );
}
