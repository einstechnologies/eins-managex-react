export function DoorSensorSettings() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <h6>
                        <b>Door Sensor Settings</b>
                    </h6>

                    <div className="spaceBetweencontentdevicefeatr"></div>

                    <div className="row restartdiv">

                        {/* Active */}
                        <div className='col-12 col-md-12 col-lg-2 spacetopmaxdiv'>
                            <div className="no-nc-toggle spaceBetweencontentdevicefeatr">
                                <span className="spanmarginbottom">Active :</span>

                                <div className="form-check form-switch spanmargin-left">
                                    <label className="toggle-switch">
                                        <input
                                            id="rdoOSDP"
                                            type="checkbox"
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="no-nc-toggle spaceBetweencontentdevicefeatr spacetopmax ">
                                <span className="spanmarginbottom">Smart Closure :</span>

                                <div className="form-check form-switch TimebasedAntipass-toggle">
                                    <label className="toggle-switch">
                                        <input
                                            id="rdoSmartClosure"
                                            type="checkbox"
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="no-nc-toggle spaceBetweencontentdevicefeatr spacetopmax">

                                <span className="spanmarginbottom">
                                    NO :
                                    <span className="tooltip-containerDoor">
                                        <i className="bi bi-info-circle info-iconDoor"></i>
                                        <span className="custom-tooltipDoor">Normal Open</span>
                                    </span>
                                </span>

                                <div className="form-check form-switch spanmargin-left">
                                    <label className="toggle-switch">
                                        <input id="rdoNO" type="checkbox" />
                                        <span className="toggle-slider spanmarginbottom"></span>
                                    </label>
                                </div>

                                <span className="spanmargin-left">
                                    NC :
                                    <span className="tooltip-containerDoor">
                                        <i className="bi bi-info-circle info-iconDoor"></i>
                                        <span className="custom-tooltipDoor">Normal Close</span>
                                    </span>
                                </span>

                            </div>

                        </div>

                        {/* Active Time */}
                        <div className='col-12 col-md-12 col-lg-3'>
                            <fieldset className="text-input-group commonwidth">
                                <label htmlFor="device">Active time (ms)</label>
                                <input id="Activetime" defaultValue="3000" />
                            </fieldset>
                        </div>

                        {/* Save Button */}
                        <div className='col-12 col-md-12 col-lg-3 spacetop'>
                            <button className="btn-outline-soft-green commonwidth">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}