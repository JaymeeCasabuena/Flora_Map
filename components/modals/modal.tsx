import "../../styles/globals.css";

type ModalProp = {
  title: string;
  message: string;
  isSuccess: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ title, message, isSuccess, isOpen, onClose }: ModalProp) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`modal ${
        isSuccess ? "green" : "red"
      } absolute w-1/3 h-56 z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white`}
    >
      <div className="flex flex-col justify-center">
        <h1>{title}</h1>
        <h1>{message}</h1>
        <button
          onClick={onClose}
          className="btn self-end px-8 py-3 mt-5 rounded-full font-semibold text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
