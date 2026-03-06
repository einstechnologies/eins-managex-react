import '../styles/DeviceFeature.css'

export function RestartDevice() {
    return (
        <>
            <div className="col-lg-12">
                <h6>
                    <b>Restart Device</b>
                </h6>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="col-12 restartdiv">
                    <div className='col-lg-4'></div>
                    <div className='col-lg-3'>
                        <fieldset className='text-input-group' style={{ width: "100%" }}>
                            <label htmlFor="device">Device Name</label>
                            <select id='device'>
                                <option value="">Select Device</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className='col-lg-1'>
                        <button className="btn-outline-soft-green" style={{ width: "100%" }}>Restart</button>
                    </div>
                    <div className='col-lg-4'></div>
                </div>

            </div>
        </>
    );
}
