import '../../styles/DeviceFeature.css'
import HelpIcon from "../HelpIcon";

export function RestartDevice() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <div className="sound-page-header headerbottomspce">
                        <div className="sound-page-header-left">
                            <h6>
                                <b> <i className="bi bi-arrow-clockwise"></i>  Restart Device</b>
                            </h6>
                        </div>
                        <div className="sound-page-header-right">
                            <HelpIcon />
                        </div>
                    </div>
                    <div className="spaceBetweencontentdevicefeatr"></div>
                    <div className="row restartdiv">
                        <div className='col-lg-3'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Device Name</label>
                                <input id='device' />
                            </fieldset>
                        </div>

                        <div className='col-lg-2'>
                            <button className="btn-outline-soft-green spacetop">Restart</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
