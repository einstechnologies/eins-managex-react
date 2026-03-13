import HelpIcon from "../HelpIcon";
export function AlarmsSettings() {
    return (
        <>


            <div className="row">
                <div className="col-lg-12">
                    <div className="card hid-card">
                        <div className="row">
                            <div className="sound-page-header">
                                <div className="sound-page-header-left">
                                    <h6>
                                        <b> <i className="bi bi-door-open"></i> Door Held Open</b>
                                    </h6>
                                </div>
                                <div className="sound-page-header-right">
                                    <HelpIcon />
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-12 restartdiv">

                                <div className='col-lg-1 spacetopmaxdiv'>
                                    <div className="no-nc-toggle">
                                        <span className="spanmarginbottom rdofontsize">Active</span>

                                        <div className="form-check form-switch">
                                            <label className="toggle-switch">
                                                <input
                                                    id="rdodoorheld"
                                                    type="checkbox"
                                                />
                                                <span className="toggle-slider"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <fieldset className='text-input-group commonwidth'>
                                        <label htmlFor="det">Detection Time After Relay Closure (s)</label>
                                        <input id='detctn' value='0' />
                                    </fieldset>

                                </div>
                                <div className='col-lg-3'>
                                    <fieldset className='text-input-group commonwidth'>
                                        <label htmlFor="delay">Delay (s)</label>
                                        <input id='delay' value='0' />
                                    </fieldset>

                                </div>


                                <div className='col-lg-1'></div>
                                <div className='col-lg-2 spacetop'>
                                    <button className="btn-outline-soft-green">Save</button>
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className='col-lg-2'>
                                <h6>
                                    <b><i className="bi bi-exclamation-triangle-fill"></i> Door Forced Open</b>
                                </h6></div>
                        </div>

                        <div className="row">
                            <div className="col-12 restartdiv">

                                <div className='col-lg-1 spacetopmaxdiv'>
                                    <div className="no-nc-toggle">
                                        <span className="spanmarginbottom rdofontsize">Active</span>

                                        <div className="form-check form-switch">
                                            <label className="toggle-switch">
                                                <input
                                                    id="rdodoorfrc"
                                                    type="checkbox"
                                                />
                                                <span className="toggle-slider"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <fieldset className='text-input-group commonwidth'>
                                        <label htmlFor="debounce">Detection debounce (ms)</label>
                                        <input id='debounce' />
                                    </fieldset>

                                </div>
                                <div className='col-lg-3'>
                                </div>


                                <div className='col-lg-1'></div>
                                <div className='col-lg-2 spacetop'>
                                    <button className="btn-outline-soft-green">Save</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

