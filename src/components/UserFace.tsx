export function UserFace() {
    return (
        <>
            <div className="col-lg-12">
                <h6>
                    <b>Face Registration</b>
                </h6>
                <span>Scan the user's face from Biometric device </span>
                <div className="spaceBetweencontent"></div>
                <div className="col-lg-12 facescan">
                    <div className="iconCircle">
                        <i className="bi bi-check"></i>
                    </div>
                    <div className="spaceBetweencontent"></div>
                    <div className="spaceBetweencontent"></div>
                    <p>Face Scanned</p>

                </div>

                <div className="col-lg-12">
                    <button className="btn-outline-soft-blue" style={{ width: "100%" }}>Scan</button>
                </div>
            </div>
        </>
    );
}

