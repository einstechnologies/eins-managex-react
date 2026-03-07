import '../styles/DeviceFeature.css'

export function TimeBasedAntipassback() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <h6>
                        <b>Time Based Antipassback </b>
                    </h6>
                    <div className="spaceBetweencontentdevicefeatr"></div>
                    <div className="row restartdiv">
                        <div className='col-lg-4'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Device Name</label>
                                <input id='device' />
                            </fieldset>
                        </div>
                        <div className='col-lg-4'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Antipassback Time (mins.)</label>
                                <input id='antipassback' />
                            </fieldset>
                        </div>

                    </div>

                    <div className="row restartdiv spacebottom">
                        <div className='col-lg-4'>
                            <input
                                type="checkbox"
                                id="Enable"
                                className='checkboxmarginRight' // optional spacing
                            />  <label htmlFor="Enable">Enable</label>
                        </div>
                        <div className='col-lg-1'>
                            <button className="btn-outline-soft-green commonwidth">Save</button>
                        </div>
                        <div className='col-lg-1'>
                            <button className="btn-outline-soft-red commonwidth">Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
