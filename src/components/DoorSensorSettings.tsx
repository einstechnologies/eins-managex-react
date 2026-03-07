export function DoorSensorSettings() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <h6>
                        <b>Door Sensor Settings</b>
                    </h6>
                    <div className="spaceBetweencontentdevicefeatr"></div>
                    <div className="col-12 restartdiv">
                        <div className='col-lg-1'>

                            <label className="form-check-label" htmlFor="deviceToggle">
                                Active
                            </label>


                        </div>
                        <div className='col-lg-1 toggle-bottom'>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input togglesize"
                                    type="checkbox"
                                    id="deviceToggle"
                                />
                            </div>
                        </div>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-2'>
                            <div className="no-nc-toggle">
                                <span>NO</span>

                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input togglesize"
                                        type="checkbox"
                                        id="deviceToggle"
                                    />
                                </div>

                                <span>NC</span>
                            </div>
                        </div>
                        <div className='col-lg-2'></div>

                        <div className='col-lg-1'>

                            <label className="form-check-label" htmlFor="deviceToggle">
                                Smart Closure
                            </label>


                        </div>
                        <div className='col-lg-1 toggle-bottom'>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input togglesize"
                                    type="checkbox"
                                    id="deviceToggle"
                                />
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-12"></div>
                    <div className="col-lg-12"></div><div className="col-12"></div>
                    <div className="col-12 restartdiv spacebottom">

                        <div className='col-lg-4'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Active time (ms)</label>
                                <input id='Activetime' value='3000' />
                            </fieldset>
                        </div>
                        <div className='col-lg-1 btnmarginleft'>
                            <button className="btn-outline-soft-green commonwidth">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
