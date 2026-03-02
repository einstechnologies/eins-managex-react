
import type { DeviceCardDgProp } from "../ts";
import {useNavigate} from 'react-router-dom';

interface DeviceCardProps extends DeviceCardDgProp {
  title?: string;
  image?: string;
  onQuickInfo?: () => void;

}
function DeviceCardfunc({
  title
  , image
  , onQuickInfo
  , IsDeviceImage
  , IsVisible }: DeviceCardProps
) {

   const navigate=useNavigate();
  return (
    <div className="col-lg-6">
      <div className="card card-list">
        <div className="col-lg-12">

          <div className="col-lg-12 aligncenter">
            <h2>{title}</h2>
          </div>
          <div className={IsVisible}>
          </div>

          <div className="col-lg-12 aligncenter">
            <img alt={title} className={IsDeviceImage} src={image} />
          </div>
          {/* <div className={IsVisible}>
        </div> */}
          <div className={IsVisible}>
          </div>

          <div className="col-lg-12  aligncenter margin1">
            <button className="cssbuttons-io-buttonConfi device-list" onClick={() => navigate("/EINS_ManageX/ConfigurationPage")} > 
               
              Configure 
              <div className="icon device-list">
                <svg height="24" width="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div className="col-lg-12 aligncenter margin1">
            <button
              className="config-link  device-list"
              onClick={onQuickInfo}
            >
              Quick Info
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};



export default DeviceCardfunc;