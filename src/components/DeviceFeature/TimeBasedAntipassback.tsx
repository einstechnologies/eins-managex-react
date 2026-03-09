import '../../styles/DeviceFeature.css'

export function TimeBasedAntipassback() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card hid-card">
                    <h6>
                        <b>Time Based Antipassback </b>
                    </h6>
                    <div className="spaceBetweencontentdevicefeatr "></div>
                    <div className="row restartdiv spacebottom">
                        <div className='col-lg-3'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Device Name</label>
                                <input id='device' />
                            </fieldset>
                        </div>
                        <div className='col-lg-3'>
                            <fieldset className='text-input-group commonwidth'>
                                <label htmlFor="device">Antipassback Time (mins.)</label>
                                <input id='antipassback' />
                            </fieldset>
                        </div>
                        <div className='col-lg-2 spacetopmaxdiv'>
                            <div className="no-nc-toggle">
                                <span className="spanmarginbottom">Enable :</span>

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
                        <div className='col-lg-1'>
                            <button className="btn-outline-soft-green commonwidth spacetop">Save</button>
                        </div>
                        <div className='col-lg-1'>
                            <button className="btn-outline-soft-red commonwidth spacetop">Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
