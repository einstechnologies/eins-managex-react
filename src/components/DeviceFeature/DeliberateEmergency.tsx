import { BiColor } from "react-icons/bi";
import HelpIcon from "../HelpIcon";

export function DeliberateEmergency() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <div className="row">
                        <div className="sound-page-header">
                            <div className="sound-page-header-left">
                                <div className='col-lg-12'>
                                    <h6>
                                        <b> <i className="bi bi-exclamation-triangle-fill"></i> Deliberate Emergency</b>
                                    </h6></div> <div className='col-lg-12'><label htmlFor="device">Communication Mode : Default</label></div>
                            </div>
                            <div className="sound-page-header-right">
                                <HelpIcon />
                            </div>
                        </div>
                    </div>
                    <div className="spaceBetweencontentdevicefeatrdeleberate"></div>
                    <div className="col-12 restartdiv">
                        <div className='col-lg-4 commonwidth'>

                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className="col-12 restartdiv"></div>

                    <div className="col-12 restartdiv">
                        <div className='col-lg-3'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="ExceptionMode">Exception Mode</label>
                                <select id='ExceptionMode'>
                                    <option value="">Select Mode</option>
                                    <option value="Normal">Normal</option>
                                    <option value="LockDown">Lock Down</option>
                                    <option value="Emergency">Emergency (Always Open)</option>
                                </select>
                            </fieldset>
                        </div>

                        <div className='col-lg-2'>
                            <button className="btn-outline-soft-green spacetop">Save</button>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    {/* <div className="col-12 restartdiv spacebottom">
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
                </div> */}
                </div >
            </div>
        </>
    );
}
