import "../../styles/globals.css";

type ModalProp = {
  message: string;
  isSuccess: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ message, isSuccess, isOpen, onClose }: ModalProp) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`modal ${
        isSuccess ? "green" : "red"
      } absolute w-1/3 h-56 z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white`}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl mt-3 mb-1">
          {isSuccess ? "Success" : "Error"}
        </h1>
        {isSuccess ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
        <h1>{message}</h1>
        <button
          onClick={onClose}
          className="btn self-end px-8 py-3 mt-3 rounded-full font-semibold text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
