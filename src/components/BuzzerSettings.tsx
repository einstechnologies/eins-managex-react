export function BuzzerSettings() {
    return (
        <>
            <div className="col-lg-12">
                <h6>
                    <b>Buzzer Settings</b>
                </h6>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="spaceBetweencontentdevicefeatr"></div>
                <div className="col-12 restartdiv">
                    <div className='col-lg-4' style={{ color: "blue" }}>
                        <label htmlFor="device">Buzzer</label>
                    </div>
                </div>
                <div className="col-12 restartdiv"></div>
                <div className="col-12 restartdiv ">

                    <div className='col-lg-1'>
                        <input
                            type="radio"
                            id="Normal"
                            name="status"
                            style={{ marginRight: "10px" }}
                        />
                        <label htmlFor="Active">Active</label>
                    </div>

                </div>
                <div className="col-12 restartdiv">
                    <div className='col-lg-4' style={{ color: "blue" }}>
                        <label htmlFor="device">Maximum Activation Time</label>
                    </div>
                </div>
                <div className="col-12 restartdiv"></div>
                <div className="col-12 restartdiv spacebottom">

                    <div className='col-lg-2'>
                        <input
                            type="radio"
                            id="Normal"
                            name="status"
                            style={{ marginRight: "10px" }}
                        />
                        <label htmlFor="Active">Active</label>
                    </div>

                    <div className='col-lg-2'>
                        <fieldset className='text-input-group' style={{ width: "100%" }}>
                            <label htmlFor="device">Active Time (ms)</label>
                            <input id='antipassback' value='0' />
                        </fieldset>

                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-1'>
                        <button className="btn-outline-soft-green" style={{ width: "100%" }}>Save</button>
                    </div>
                </div>
            </div >
        </>
    );
}
