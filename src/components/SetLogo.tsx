
export function SetLogo() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <h6>
                        <b>Set Logo</b>
                    </h6>
                    <div className="spaceBetweencontentdevicefeatr"></div>
                    <div className="col-12 restartdiv spacebottom">

                        <div className='col-lg-4'>
                            {/* Photo Section */}

                            <div className='photoMainDiv'>
                                <div className='biggerCircle photoradious'>
                                    <div className='photoCircle photoradious'>
                                        <i className="bi bi-image"></i>
                                    </div>
                                </div>
                                <div className='checkRow'>
                                    <button className='btn-outline-soft-red'>Upload</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Device Name</label>
                                <input id='device' />
                            </fieldset>
                            <div className="row">
                                <div className='col-lg-3'>
                                    <button className="btn-outline-soft-green commonwidth">Save</button>
                                </div>

                                <div className='col-lg-3'>
                                    <button className="btn-outline-soft-red commonwidth">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-1'></div>

                    </div>
                </div>
            </div>
            <div className="col-lg-12 restartdiv"></div>
        </>
    );
}