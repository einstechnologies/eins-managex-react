export function BuzzerSettings() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card hid-card">
                        <div className="row">
                            <div className='col-lg-2'>
                                <h6>
                                    <b>Buzzer Settings</b>
                                </h6></div>
                        </div>

                        <div className="row">
                            <div className="col-12 restartdiv">

                                <div className='col-lg-2 spacetopmaxdiv'>
                                    <div className="no-nc-toggle">
                                        <span className="spanmarginbottom">Active :</span>

                                        <div className="form-check form-switch TimebasedAntipass-toggle">
                                            <label className="toggle-switch">
                                                <input
                                                    id="rdoOSDP"
                                                    type="checkbox"
                                                />
                                                <span className="toggle-slider"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className='col-lg-4'> <h6>
                                <b>Maximum Activation Time</b>
                            </h6></div>
                        </div>
                        <div className="row">
                            <div className="col-12 restartdiv">

                                <div className='col-lg-2 spacetopmaxdiv'>
                                    <div className="no-nc-toggle">
                                        <span className="spanmarginbottom">Active :</span>

                                        <div className="form-check form-switch TimebasedAntipass-toggle">
                                            <label className="toggle-switch">
                                                <input
                                                    id="rdoOSDP"
                                                    type="checkbox"
                                                />
                                                <span className="toggle-slider"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-3'>
                                    <fieldset className='text-input-group commonwidth'>
                                        <label htmlFor="device">Active Time (ms)</label>
                                        <input id='antipassback' value='0' />
                                    </fieldset>
                                </div>
                                <div className='col-lg-1'></div>
                                <div className='col-lg-1 spacetop'>
                                    <button className="btn-outline-soft-green commonwidth">Save</button>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}