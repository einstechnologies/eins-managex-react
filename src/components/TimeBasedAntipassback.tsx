import '../styles/DeviceFeature.css'

export function TimeBasedAntipassback() {
    return (
        <>
            <div className="col-lg-12">
                <h6>
                    <b>Time Based Antipassback </b>
                </h6>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="col-12 restartdiv">
                    <div className='col-lg-2'></div>
                    <div className='col-lg-4'>
                        <fieldset className='text-input-group' style={{ width: "100%" }}>
                            <label htmlFor="device">Device Name</label>
                            <select id='device'>
                                <option value="">Select Device</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-lg-4'>
                        <fieldset className='text-input-group' style={{ width: "100%" }}>
                            <label htmlFor="device">Antipassback Time (mins.)</label>
                            <input id='antipassback' />
                        </fieldset>
                    </div>
                    <div className='col-lg-1' style={{ marginTop: "10px" }} >
                        <input
                            type="checkbox"
                            id="Enable"
                            style={{ marginRight: "10px" }} // optional spacing
                        />  <label htmlFor="Enable">Enable</label>
                    </div>
                    <div className='col-lg-1'></div>

                </div>
            </div>
            <div className="col-lg-12 restartdiv"></div>
            <div className="col-lg-12 restartdiv spacebottom">
                <div className='col-lg-1'>
                    <button className="btn-outline-soft-green" style={{ width: "100%" }}>Save</button>
                </div>

                <div className='col-lg-1'>
                    <button className="btn-outline-soft-red" style={{ width: "100%" }}>Clear</button>
                </div>
                <div className='col-lg-5'>
                </div>
            </div>
        </>
    );
}
