import { SignUp } from "./form-sign-up";


const ModalResposive = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black h-full w-full ">
      <div className="bg-[#181C20] rounded-lg p-4 h-full w-full ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Sign-Up</h2>
          <button onClick={onClose} className="text-white">
            &times;
          </button>
        </div>
        <div>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default ModalResposive;