import { useState } from "react";
import CustomModal from "../components/CustomModal";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
interface ConfigureDeviceModalProps {
  show: boolean;
  onClose: () => void;
}
const MySwal = withReactContent(Swal);
const onButtonEvent = () => {

  // alert('Username is required');
  MySwal.fire({
    icon: "success",
    text: 'Configuration done succesfully!',
    buttonsStyling: false,
    customClass: {
      confirmButton: 'swal-mygradient'
    },
    confirmButtonText: 'OK',
  });
  return;

}


const handleIPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const input = e.target;

  // allow only numbers
  input.value = input.value.replace(/\D/g, "");

  if (input.value.length === 3) {
    const inputs = document.querySelectorAll(".ip-input-wrapper input");
    const index = Array.from(inputs).indexOf(input);

    if (index < inputs.length - 1) {
      (inputs[index + 1] as HTMLInputElement).focus();
    }
  }
};


const ConfigureDeviceModal = ({ show, onClose }: ConfigureDeviceModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<number>(1);

  return (
    <CustomModal show={show} onClose={onClose} title="Configure Device">

      {step === 1 && (
        <>
          <h6>Step 1: Device Info</h6>
          <fieldset className='text-input-group'>
            <label htmlFor="devicename">Device Name</label>
            <input id='devicename' />
          </fieldset>
          <button className="btn btn-primary" onClick={() => setStep(2)}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h6>Step 2: Network Settings</h6>
          {/* <input className="form-control mb-3" placeholder="IP Address" /> */}




          <fieldset className="text-input-group">
            <label htmlFor="ip1">IP Address</label>

            <div className="ip-input-wrapper">
              <input id="ip1" maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
            </div>

          </fieldset>

          <fieldset className='text-input-group'>
            <label htmlFor="deviceport">Device Port</label>
            <input id='deviceport' />
          </fieldset>

          <fieldset className="text-input-group">
            <label htmlFor="ip2">Subnet Mask</label>

            <div className="ip-input-wrapper">
              <input id="ip2" maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
            </div>

          </fieldset>

          <fieldset className="text-input-group">
            <label htmlFor="ip3">Gateway</label>

            <div className="ip-input-wrapper">
              <input id="ip3" maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
            </div>

          </fieldset>

          <fieldset className="text-input-group">
            <label htmlFor="ip4">Server IP</label>

            <div className="ip-input-wrapper">
              <input id="ip4" maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
            </div>

          </fieldset>

          <fieldset className="text-input-group">
            <label htmlFor="ip5">Preferred DNS</label>

            <div className="ip-input-wrapper">
              <input id="ip5" maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
              <span>.</span>
              <input maxLength={3} onChange={handleIPChange} />
            </div>

          </fieldset>

          <fieldset className='text-input-group'>
            <label htmlFor="deviceterminal">Terminal ID </label>
            <input id='deviceterminal' />
          </fieldset>

          <fieldset className="cloud-checkbox inside">
            <input type="checkbox" id="isCloud" />
            <label htmlFor="isCloud">Is Cloud</label>
          </fieldset>

          <fieldset className='text-input-group'>
            <label htmlFor="deviceusername">Device UserName</label>
            <input id='deviceusername' />
          </fieldset>

          <fieldset className="text-input-group password-field">
            <label htmlFor="devicepass">Device Password</label>

            <div className="password-wrapper">
              <input
                id="devicepass"
                type={showPassword ? "text" : "password"}
              />


              <span
                className="eye-icon"
                onClick={() => setShowPassword(prev => !prev)}
              >
                <i
                  className={
                    showPassword
                      ? "bi bi-eye-fill"
                      : "bi bi-eye-slash-fill"
                  }
                ></i>
              </span>

            </div>

          </fieldset>



          <button className="btn btn-primary me-2" >
            Connect
          </button>

          <button className="btn btn-secondary me-2" onClick={() => setStep(1)}>
            Back
          </button>
          <button className="btn btn-success" onClick={() => {
            onButtonEvent()
            onClose()

            setStep(1)
          }}>Finish</button>
        </>
      )}

    </CustomModal>
  );
};

export default ConfigureDeviceModal;
