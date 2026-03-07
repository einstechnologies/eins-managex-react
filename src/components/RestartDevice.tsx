import '../styles/DeviceFeature.css'

export function RestartDevice() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <h6>
                        <b>Restart Device</b>
                    </h6>
                    <div className="spaceBetweencontentdevicefeatr"></div>
                    <div className="row restartdiv">
                        <div className='col-lg-3'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Device Name</label>
                                <input id='device' />
                            </fieldset>
                        </div>

                        <div className='col-lg-1'>
                            <button className="btn-outline-soft-green spacetop commonwidth">Restart</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
