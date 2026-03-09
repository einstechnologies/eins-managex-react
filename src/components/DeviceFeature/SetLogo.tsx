import DragDropUpload from "../DragDropUpload ";
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

                        <div className='col-lg-12'>
                            {/* Upload Audio File */}
                            <div className="col-lg-12">
                                <div className="sound-card h-100">
                                    <div className="sound-card-body">
                                        <DragDropUpload accept="image/*" />
                                        <div className="row mt-3">
                                            <div className="col-12 col-md-auto mb-2">
                                                <button className="mb-0 btn-outline-soft-blue mx-1">
                                                    Upload
                                                </button>
                                            </div>
                                            <div className="col-12 col-md-auto mb-2">
                                                <button className="mb-0 btn-outline-soft-green mx-1">
                                                    Save
                                                </button>
                                            </div>
                                            <div className="col-12 col-md-auto mb-2">
                                                <button className="mb-0 btn-outline-soft-red mx-1">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 restartdiv"></div>
        </>
    );
}