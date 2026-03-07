export function AlarmsSettings() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card hid-card">

                        <h6>
                            <b>Door Held Open</b>
                        </h6>
                        <div className="spaceBetweencontentdevicefeatr"></div>
                        <div className="col-12 restartdiv spaceBetweencontentdevicefeatr">
                            <div className='col-lg-5'>
                                <fieldset className='text-input-group commonwidth'>
                                    <label htmlFor="device">Detection Time After Relay Closure (s)</label>
                                    <input id='antipassback' value='0' />
                                </fieldset>

                            </div>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-5 spacetopmax'>
                                <input
                                    type="radio"
                                    id="Normal"
                                    name="status"
                                    className="radioActive"
                                />
                                <label htmlFor="Active">Active</label>
                            </div>

                        </div>
                        <div className="col-12 restartdiv spaceBetweencontentdevicefeatr">
                            <div className='col-lg-5'>
                                <fieldset className='text-input-group commonwidth'>
                                    <label htmlFor="device">Delay (s)</label>
                                    <input id='antipassback' value='0' />
                                </fieldset>

                            </div>

                            <div className='col-lg-1'></div>
                            <div className='col-lg-5'>
                                <div className='col-lg-5'>
                                    <button className="btn-outline-soft-green commonwidth">Save</button>
                                </div>
                            </div>

                        </div>
                    </div >
                </div>
                <div className="col-lg-6">
                    <div className="card hid-card">
                        <h6>
                            <b>Door Forced Open</b>
                        </h6>
                        <div className="spaceBetweencontentdevicefeatr"></div>
                        <div className="col-12 restartdiv spacebottom">

                            <div className='col-lg-5'>
                                <fieldset className='text-input-group commonwidth'>
                                    <label htmlFor="device">Detection debounce (ms)</label>
                                    <input id='antipassback' />
                                </fieldset>

                            </div>
                            <div className='col-lg-1'></div>

                            <div className='col-lg-5 spacetopmax'>
                                <input
                                    type="radio"
                                    id="Normal"
                                    name="status"
                                    className="radioActive"
                                />
                                <label htmlFor="Active">Active</label>
                            </div>

                        </div>
                        <div className="col-12 restartdiv spacebottom">

                            <div className='col-lg-5'></div>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-5'>
                                <div className='col-lg-5'>
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

