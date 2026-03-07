export function BuzzerSettings() {
    return (
        <>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card hid-card">

                        <h6>
                            <b>Buzzer Settings</b>
                        </h6>
                        <div className="spaceBetweencontentdevicefeatr"></div>
                        <div className="col-12 restartdiv spaceBetweencontentdevicefeatr">

                            <div className='col-lg-1 spacetopmax'>
                                <input
                                    type="radio"
                                    id="Normal"
                                    name="status"
                                    className="radioActive"
                                />
                                <label htmlFor="Active">Active</label>
                            </div>

                        </div>
                        <div className="col-12 restartdiv"></div>
                        <div className="col-12 restartdiv"></div>
                        <div className="col-12 restartdiv"></div>
                    </div >
                </div>
                <div className="col-lg-6">
                    <div className="card hid-card">
                        <h6>
                            <b>Maximum Activation Time</b>
                        </h6>
                        <div className="spaceBetweencontentdevicefeatr"></div>
                        <div className="col-12 restartdiv spacebottom">

                            <div className='col-lg-4 spacetopmax'>
                                <input
                                    type="radio"
                                    id="Normal"
                                    name="status"
                                    className="radioActive"
                                />
                                <label htmlFor="Active">Active</label>
                            </div>

                            <div className='col-lg-4'>
                                <fieldset className='text-input-group commonwidth'>
                                    <label htmlFor="device">Active Time (ms)</label>
                                    <input id='antipassback' value='0' />
                                </fieldset>

                            </div>

                        </div></div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-end spacetopmax">

                    <div className='col-lg-1'>
                        <button className="btn-outline-soft-green commonwidth">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}
