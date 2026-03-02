import React from "react";
import "../styles/CustomModal.css";
interface CustomModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  show,
  onClose,
  title,
  children,
}) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h5>{title}</h5>
          <button onClick={onClose}> <i
    className={
      
        "bi bi-x-circle-fill"
    }
  ></i></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;