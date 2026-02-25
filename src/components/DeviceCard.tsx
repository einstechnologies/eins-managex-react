
import type { DeviceCardDgProp } from "../ts";


interface DeviceCardProps extends DeviceCardDgProp {
  title?: string;
  image?: string;
  onQuickInfo?: () => void;
 
}
function DeviceCardfunc({
    title
    ,image
    ,onQuickInfo
,IsDeviceImage
,IsVisible}:DeviceCardProps
){
  return (
    <div className="col-lg-6">
      <div className="card">
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
            <button className="cssbuttons-io-button1">
              Configure
              <div className="icon">
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
              className="config-link"
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

// const DeviceCard: React.FC<DeviceCardProps> = ({
//   title,
//   image,
//   onQuickInfo,
// }) => {
//   return (
//     <div className="col-lg-6">
//       <div className="card">
//         <div className="col-lg-12">

//           <div className="col-lg-12 aligncenter">
//             <h2>{title}</h2>
//           </div>

//           <div className="col-lg-12 aligncenter">
//             <img alt={title} className="HidDeviceImg" src={image} />
//           </div>

//           <div className="col-lg-12 aligncenter margin1">
//             <button className="cssbuttons-io-button1">
//               Configure
//               <div className="icon">
//                 <svg height="24" width="24" viewBox="0 0 24 24">
//                   <path d="M0 0h24v24H0z" fill="none" />
//                   <path
//                     d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </div>
//             </button>
//           </div>

//           <div className="col-lg-12 aligncenter margin1">
//             <button
//               className="config-link"
//               onClick={onQuickInfo}
//             >
//               Quick Info
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

export default DeviceCardfunc;