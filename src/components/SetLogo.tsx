
export function SetLogo() {
    return (
        <>
            <div className="col-lg-12">
                <h6>
                    <b>Set Logo</b>
                </h6>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="col-12 restartdiv spacebottom">

                    <div className='col-lg-4'>
                        {/* Photo Section */}

                        <div className='photoMainDiv'>
                            <div className='biggerCircle'>
                                <div className='photoCircle'>
                                    <i className="bi bi-image"></i>
                                </div>
                            </div>
                            <div className='checkRow'>
                                <button className='btn-outline-soft-red'>Upload</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <fieldset className='text-input-group' style={{ width: "100%" }}>
                            <label htmlFor="device">Device Name</label>
                            <select id='device'>
                                <option value="">Select Device</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-1'>
                        <button className="btn-outline-soft-green" style={{ width: "100%" }}>Save</button>
                    </div>

                    <div className='col-lg-1'>
                        <button className="btn-outline-soft-red" style={{ width: "100%" }}>Clear</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 restartdiv"></div>
        </>
    );
}