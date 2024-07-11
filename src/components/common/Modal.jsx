import ReactDom from "react-dom";
import { X } from "lucide-react";
const Modal = ({ children, showModal, setShowModal }) => {
  if (!showModal) return null;
  return ReactDom.createPortal(
    <div className="fixed inset-0 z-50 bg-[#00000066] min-w-screen min-h-screen flex items-center justify-center">
      <div className="bg-white text-black p-8 min-w-96 min-h-96 rounded-lg shadow-lg flex flex-col justify-between">
        <div className="top">
          <button
            onClick={() => setShowModal(false)}
            className="w-full flex justify-end pr-3 cursor-pointer"
          >
            <X />
          </button>
        </div>
        {children}
      </div>
      </div>,
      











      
    document.getElementById("modal")
  );
};

export default Modal;
