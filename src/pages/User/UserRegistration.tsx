import "../../styles/UserRegistration.css";
import { useNavigate } from "react-router-dom";
import { Tabs } from "../../components/TabShadowcn";
import { UserFace } from "../../components/UserFace";
import { UserCard } from "../../components/UserCard";
import { UserPin } from "../../components/UserPin";
import { useState, useRef, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useUserRegister } from "../../hooks/eins/user/useUserRegister";
import { useUploadUserImage } from "../../hooks/eins/user/useUploadUserImage";
import Webcam from "react-webcam";
import { base64ToFile } from "../../ts/base64toFile";

const MySwal = withReactContent(Swal);

function UserRegistration() {
  const myTabs = [
    { id: "face", label: "Face", content: <UserFace /> },
    { id: "card", label: "Card", content: <UserCard /> },
    { id: "pin", label: "PIN", content: <UserPin /> },
  ];

  const navigate = useNavigate();

  // Input Text Field related work
  const [userid, setUserId] = useState<string>("");
  const [userFirstName, setUserName] = useState<string>("");
  const [userLastName, setuserLastName] = useState<string>("");
  const [emailId, setEmailId] = useState<string>("");
  const [mobileNo, setMobileNo] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [userTypeDr, setUserType] = useState<string>("");
  const [activationDateStr, setActivationDate] = useState<string>("");
  const [expiryDateStr, setExpiryDate] = useState<string>("");

  // Save User General details related API call

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { mutateAsync: registerUser } = useUserRegister();

  const { mutateAsync: uploadImage } = useUploadUserImage();

  //const { mutate, isPending } = useUserRegister();

  const onSaveEvent = async () => {
    setIsSubmitting(true);
    if (
      !userid &&
      !userFirstName &&
      !userTypeDr &&
      !activationDateStr &&
      !expiryDateStr &&
      !userLastName
    ) {
      MySwal.fire({
        icon: "warning",
        text: "UserID, User Name, User Type, Activation Date and Expiry Date is required!",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
      return;
    } else if (!userFirstName) {
      MySwal.fire({
        text: "User First Name is required!",
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
      return;
    } else if (!userLastName) {
      MySwal.fire({
        text: "User Last Name is required!",
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
      return;
    } else if (!userid) {
      MySwal.fire({
        text: "User Id is required",
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
      return;
    } else if (!userTypeDr) {
      MySwal.fire({
        text: "User Type is required!",
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
      return;
    } else if (!activationDateStr) {
      MySwal.fire({
        text: "Activation Date is required",
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
      return;
    } else if (!expiryDateStr) {
      MySwal.fire({
        text: "Expiry Date is required!",
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
      return;
    }
    try {
      const bioUserID = Number(userid);

      const addedBy = Number(localStorage.getItem("loginUserId")) ?? 1;
      const pin = "";
      const activationDate = new Date(activationDateStr).toJSON();
      const expiryDate = new Date(expiryDateStr).toJSON();
      const userType = userTypeDr == "0" ? false : true;
      const saveUser = await registerUser({
        bioUserID,
        userFirstName,
        userLastName,
        emailId,
        addedBy,
        pin,
        activationDate,
        expiryDate,
        mobileNo,
        gender,
        userType,
      });

      await new Promise((resolve) => setTimeout(resolve, 900));

      if (selectedFile) {
        const userId = saveUser.userId.toString();
        const image = selectedFile;
        await uploadImage({
          userId,
          image,
        });
      }

      MySwal.fire({
        icon: "success",
        text: "User registered successfully!",
        buttonsStyling: false,
        customClass: { confirmButton: "swal-mygradient" },
        confirmButtonText: "OK",
      });
    } catch (error: any) {
      const resData = error?.response?.data;
      const errors: string[] = resData?.errors || [];

      if (resData?.message == "Unauthorized") {
        navigate("/EINS_ManageX/", { replace: true });
        return;
      }
      const isImageError = error?.config?.url?.includes("save-user-image"); // here we can check for specific endpoint error

      const html = (() => {
        if (isImageError) {
          return "User registered but profile image upload failed. Please try uploading the image again.";
        }

        if (errors.length === 0) {
          // ✅ handles null, undefined, and empty string ""
          return resData?.message?.trim()
            ? resData.message
            : "Something went wrong. Please try again.";
        }

        if (errors.length === 1) return errors[0];

        return `<ul style="text-align:left; margin:0 auto; padding-left:1.2rem; max-width:300px;">
      ${errors.map((e: string) => `<li>${e}</li>`).join("")}
    </ul>`;
      })();

      MySwal.fire({
        html,
        icon: isImageError ? "warning" : "error", // ✅ warning for image, error for register
        buttonsStyling: false,
        customClass: { confirmButton: "swal-mygradient" },
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const onSaveEvent = () => {
  //
  //     const bioUserID = Number(userid);

  //     const addedBy = Number(localStorage.getItem('loginUserId')) ?? 1;
  //     const pin = "";
  //     const activationDate = new Date(activationDateStr).toJSON();
  //     const expiryDate = new Date(expiryDateStr).toJSON();

  //     mutate({
  //         bioUserID,
  //         userName,
  //         emailId,
  //         addedBy,
  //         pin,
  //         activationDate,
  //         expiryDate,
  //         mobileNo,
  //         gender
  //     }, {
  //         onError: (error: any) => {
  //             const resData = error?.response?.data;
  //             const errors: string[] = resData?.errors || [];
  //             console.log(resData?.message);
  //             if (resData?.message) {
  //                 if (resData.message == 'Unauthorized') {
  //                     navigate("/EINS_ManageX/", { replace: true });
  //                     return;
  //                 }
  //             }
  //             const html = (() => {
  //                 if (errors.length === 0) return "";

  //                 if (errors.length === 1) {
  //                     // Single error - just show as plain text (no list)
  //                     return errors[0];
  //                 }

  //                 // Multiple errors - show as bulleted list
  //                 return `<ul style="text-align:left; margin:0 auto; padding-left:1.2rem; max-width:300px;">
  //         ${errors.map((e) => `<li>${e}</li>`).join("")}
  //       </ul>`;
  //             })();

  //             MySwal.fire({
  //                 html,
  //                 icon: "error",
  //                 buttonsStyling: false,
  //                 customClass: { confirmButton: "swal-mygradient" },
  //                 confirmButtonText: "OK",
  //             });
  //         },
  //         onSuccess: () => {

  //             MySwal.fire({
  //                 icon: "success",
  //                 text: "User registered successfully!",
  //                 buttonsStyling: false,
  //                 customClass: { confirmButton: "swal-mygradient" },
  //                 confirmButtonText: "OK",
  //             });
  //         },
  //     });

  // }
  // Save User General details end here

  // Image upload work started
  const [previewSource, setPreviewSource] = useState<
    "upload" | "webcam" | null
  >(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showWebcam, setShowWebcam] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    if (!selectedFile) {
      if (previewSource === "upload") {
        setPreview(null);
        setPreviewSource(null);
      }
      return;
    }

    // Only create blob URL for uploaded files, not webcam
    if (previewSource === "webcam") return;

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    setPreviewSource("upload");

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewSource("upload");
      setSelectedFile(file);
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreview(null);
    setPreviewSource(null);
    if (inputRef.current !== null) {
      (inputRef.current as HTMLInputElement).value = "";
    }
  };

  const handleCapture = useCallback(() => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (screenshot) {
      const imageFile = base64ToFile(screenshot, "webcam-capture-user.jpg");
      setPreviewSource("webcam");
      setPreview(screenshot);
      setSelectedFile(imageFile);
      setShowWebcam(false);
    } else {
      console.log("Screenshot is null");
    }
  }, [webcamRef]);

  const handleCameraError = (err: string | DOMException) => {
    setCameraError("Camera unavailable. Please check permissions.");
    console.error(err);
  };

  // Image upload work end here

  return (
    <>
      <div className="user-content-screen">
        {/* Loading Overlay */}
        {isSubmitting && (
          <div className="loading-overlay">
            <div className="spinner-wrapper">
              <div className="spinner"></div>
              <span>Please wait...</span>
            </div>
          </div>
        )}
        {/* Header */}
        <div className="header-title">
          <span>USER REGISTRATION</span>
          {/* <span className='vertical-divider'></span>
                    <span className='header-title-navigate-section'>
                        <span
                            className='link'
                            onClick={() => navigate("/EINS_ManageX/Home")}
                        >
                            HOME
                        </span> - User Registration
                    </span> */}
        </div>

        <div className="col-12">
          <div className="row">
            {/* General Details Card */}
            <div className="col-12 col-md-12 col-lg-8">
              <div className="card user-card">
                <span className="card-title">General Details</span>
                <hr />
                <div className="row g-0 gy-3">
                  {/* Photo Section */}
                  <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center">
                    <input
                      type="file"
                      accept="image/*"
                      ref={inputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />

                    <div className="photoMainDiv">
                      {/* ── Webcam Modal Overlay ── */}
                      {showWebcam && (
                        <div className="webcamOverlay">
                          {cameraError ? (
                            <p>{cameraError}</p>
                          ) : (
                            <Webcam
                              ref={webcamRef}
                              audio={false}
                              screenshotFormat="image/jpeg"
                              videoConstraints={{ facingMode: "user" }}
                              onUserMediaError={handleCameraError}
                              className="webcamCircle"
                            />
                          )}
                          <div
                            className="checkRow"
                            style={{ marginTop: "10px" }}
                          >
                            <button
                              className="btn-outline-soft-red"
                              onClick={handleCapture}
                            >
                              Click Photo
                            </button>
                            <button
                              className="btn-outline-soft-red"
                              onClick={() => {
                                setShowWebcam(false);
                                setCameraError(null);
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}

                      {/* ── Preview Circle ── */}
                      {!showWebcam && (
                        <>
                          {preview ? (
                            <div className="removePicture">
                              <div
                                className="biggerCircle"
                                onClick={() => inputRef.current?.click()}
                              >
                                <div className="photoCircle">
                                  <img src={preview} alt="Preview" />
                                </div>
                              </div>
                              <button onClick={handleRemove}>Remove</button>
                            </div>
                          ) : (
                            <div
                              className="biggerCircle"
                              onClick={() => inputRef.current?.click()}
                            >
                              <div className="photoCircle">
                                <i className="bi bi-person"></i>
                              </div>
                            </div>
                          )}

                          {/* ── Upload / Capture Buttons ── */}
                          <div className="checkRow">
                            <button
                              className="btn-outline-soft-red"
                              onClick={() => inputRef.current?.click()}
                            >
                              Upload
                            </button>
                            <button
                              className="btn-outline-soft-red"
                              onClick={() => {
                                setShowWebcam(true);
                                setCameraError(null);
                              }}
                            >
                              Capture
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="row gy-2">
                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <label htmlFor="biouserid">
                            User Id <span>*</span>
                          </label>
                          <input
                            id="biouserid"
                            type="text"
                            value={userid}
                            onKeyDown={(e) => {
                              const allowed = [
                                "Backspace",
                                "Delete",
                                "ArrowLeft",
                                "ArrowRight",
                                "Tab",
                              ];
                              if (
                                !/[0-9]/.test(e.key) &&
                                !allowed.includes(e.key)
                              ) {
                                e.preventDefault();
                              }
                            }}
                            onChange={(e) => setUserId(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <label htmlFor="emailid">Email ID</label>
                          <input
                            type="email"
                            id="emailid"
                            value={emailId}
                            onChange={(data) => setEmailId(data.target.value)}
                          />
                        </fieldset>
                      </div>

                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <label htmlFor="username">
                            First Name <span>*</span>
                          </label>
                          <input
                            id="username"
                            value={userFirstName}
                            onChange={(data) => setUserName(data.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <label htmlFor="lastname">
                            Last Name <span>*</span>
                          </label>
                          <input
                            id="lastname"
                            value={userLastName}
                            onChange={(data) =>
                              setuserLastName(data.target.value)
                            }
                          />
                        </fieldset>
                      </div>
                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <label htmlFor="mobileNo">Mobile No.</label>
                          <input
                            id="mobileNo"
                            value={mobileNo}
                            onChange={(data) => setMobileNo(data.target.value)}
                          />
                        </fieldset>
                      </div>

                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <label htmlFor="gender">Gender</label>
                          <select
                            id="gender"
                            value={gender}
                            onChange={(data) => setGender(data.target.value)}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </fieldset>
                      </div>

                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <div className="dateRow">
                            <div>
                              <label htmlFor="activationdate">
                                Activation Date <span>*</span>
                              </label>
                              <input
                                type="date"
                                id="activationdate"
                                value={activationDateStr}
                                onChange={(data) =>
                                  setActivationDate(data.target.value)
                                }
                              />
                            </div>
                            <i className="bi bi-calendar-date"></i>
                          </div>
                        </fieldset>
                      </div>

                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <div className="dateRow">
                            <div>
                              <label htmlFor="expirydate">
                                Expiry Date <span>*</span>
                              </label>
                              <input
                                type="date"
                                id="expirydate"
                                value={expiryDateStr}
                                onChange={(data) =>
                                  setExpiryDate(data.target.value)
                                }
                              />
                            </div>
                            <i className="bi bi-calendar-date"></i>
                          </div>
                        </fieldset>
                      </div>
                      <div className="col-12 col-md-6">
                        <fieldset className="text-input-group">
                          <label htmlFor="usertype">
                            User Type <span>*</span>
                          </label>
                          <select
                            id="usertype"
                            value={userTypeDr}
                            onChange={(data) => setUserType(data.target.value)}
                          >
                            <option value="">Select User Type</option>
                            <option value="0">Normal User</option>
                            <option value="1">Admin</option>
                          </select>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card user-card">
                <span className="card-title">Credentials</span>
                <hr />
                <div className="col-12">
                  <div className="deviceRow">
                    {/* Dropdown */}
                    <div className="deviceDropdown">
                      <fieldset className="text-input-group">
                        <label>Enrollment Device</label>
                        <select>
                          <option value="">Select Enrollment Device</option>
                          <option value="1">HID</option>
                          <option value="0">Admin</option>
                        </select>
                      </fieldset>
                    </div>

                    {/* Button */}
                    <div className="deviceButton">
                      <button className="btn-outline-soft-blue">Connect</button>
                    </div>
                  </div>
                </div>
                <div className="spaceBetweencontent"></div>
                <div className="col-12">
                  <Tabs tabs={myTabs} />
                </div>
              </div>
            </div>
          </div>

          {/* Save / Cancel */}
          <div className="savebuttonDiv">
            <button className="btn-outline-soft-green" onClick={onSaveEvent}>
              Save
            </button>
            <button className="btn-outline-soft-red">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
