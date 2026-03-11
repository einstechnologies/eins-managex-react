import '../../styles/DeviceFeature.css'
import HelpIcon from "../HelpIcon";

export function TimeBasedAntipassback() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <div className="sound-page-header">
                        <div className="sound-page-header-left">
                            <h6>
                                <b> <i className="bi bi-clock-history"></i>  Time Based Antipassback </b>
                            </h6>
                        </div>
                        <div className="sound-page-header-right">
                            <HelpIcon />
                        </div>
                    </div>
                    <div className="spaceBetweencontentdevicefeatr "></div>
                    <div className="row restartdiv spacebottom">
                        <div className='col-lg-3'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Device Name</label>
                                <input id='device' />
                            </fieldset>
                        </div>
                        <div className='col-lg-3'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Antipassback Time (mins.)</label>
                                <input id='antipassback' />
                            </fieldset>
                        </div>
                        <div className='col-lg-2 spacetopmaxdiv'>
                            <div className="no-nc-toggle">
                                <span className="spanmarginbottom rdofontsize">Enable :</span>

                                <div className="form-check form-switch TimebasedAntipass-toggle">
                                    <label className="toggle-switch">
                                        <input
                                            id="rdoenable"
                                            type="checkbox"
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <button className="btn-outline-soft-green spacetop">Save</button>
                        </div>
                        {/* <div className='col-lg-2'>
                            <button className="btn-outline-soft-red spacetop">Clear</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
