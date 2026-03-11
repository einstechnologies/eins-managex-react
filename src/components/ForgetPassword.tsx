import { useState } from "react";
import CustomModal from "../components/CustomModal";
import "../styles/ForgetPassword.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface ForgetPasswordProps {
  show: boolean;
  onClose: () => void;
}

const MySwal = withReactContent(Swal);
const onButtonEvent = () => {
  MySwal.fire({
    icon: "success",
    text: 'Your Password Has Been Changed Successfully.',
    buttonsStyling: false,
    customClass: {
      confirmButton: 'swal-mygradient'
    },
    confirmButtonText: 'OK',
  });
  return;

}

const ForgetPassword = ({ show, onClose }: ForgetPasswordProps) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);


  return (
    <CustomModal show={show}  onClose={() => {setStep(1); onClose(); }} title="Forget Password">

      {step === 1 && (
                <>
          <h6>STEP 1: ENTER LOGIN ID</h6>
          <fieldset className='forget-password fp-text-input-group'>
            <label htmlFor="UsrID">LOGIN ID</label>
            <input id='UsrID' />
          </fieldset>
          <button className="btn btn-primary" onClick={() => setStep(2)}>
            VERIFY
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h6>STEP 2: SECURITY QUESTION</h6>
                  <div className="Passrow">

                                        {/* Dropdown */}
                                        <div className="forget-content-screen fp-deviceDropdown">
                                            <fieldset className="forget-content-screen forget-password fp-text-input-group">
                                                <label>Security Question</label>
                                                <select>
                                                    <option value="">Select Security Question</option>
                                                    <option value="1">HID</option>
                                                    <option value="0">Admin</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                    </div>
                                     <fieldset className='forget-password fp-text-input-group mt-2'>
            <label htmlFor="Answer">Answer</label>
            <input id='Answer' />
          </fieldset>
           <button className="btn btn-primary mt-0" onClick={() => setStep(3)}>   
            VERIFY 
          </button>

        </>
      )}
      {step === 3 && (
        <>
          <h6>STEP 3: RESET PASSWORD </h6>
<fieldset className='forget-password fp-text-input-group'>
  <label htmlFor="frdnewpass">New Password</label>

  <div className="frp forgetpass">
    <input
      id="frdnewpass"
      type={showNewPassword ? "text" : "password"}
    />

    <span
      className="eye-icon"
      onClick={() => setShowNewPassword(prev => !prev)}
    >
      <i
        className={
          showNewPassword
            ? "bi bi-eye-fill"
            : "bi bi-eye-slash-fill"
        }
      ></i>
    </span>
  </div>
</fieldset>

<fieldset className='forget-password fp-text-input-group'>
  <label htmlFor="frdpass">Confirm Password</label>

  <div className="frp forgetpass">
    <input
      id="frdpass"
      type={showConfirmPassword ? "text" : "password"}
    />

    <span
      className="eye-icon"
      onClick={() => setShowConfirmPassword(prev => !prev)}
    >
      <i
        className={
          showConfirmPassword
            ? "bi bi-eye-fill"
            : "bi bi-eye-slash-fill"
        }
      ></i>
    </span>
  </div>
</fieldset>
          <button className="btn btn-success" onClick={() => {
            onButtonEvent()
            onClose()

            setStep(1)
          }}>SUBMIT</button>
        </>
      )}

    </CustomModal>
  );
};

export default ForgetPassword;
