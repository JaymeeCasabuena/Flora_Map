import { useEffect, useState } from "react";
import Image from "next/image";
import Pin from "../../../public/pin.png";
import { APIProvider } from "@vis.gl/react-google-maps";
import FileUploadForm from "../_file-upload/upload";
import { AddressAutoComplete } from "../_map/address-autocomplete";
import { useActionState } from "react";
import { addMarker } from "@/app/actions/add-marker-actions";
import Alert from "@/components/alert";
import { LoadingSpinner } from "@/components/spinner/spinner";
import Modal from "@/components/modals/modal";
import "../../../styles/dashboard.css";

const AddMarkerForm = () => {
  const [state, action, pending] = useActionState(addMarker, undefined);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  useEffect(() => {
    if (state?.success == true) {
      setSuccessModalOpen(true);
    }
    if (state?.success == false) {
      setErrorModalOpen(true);
    }
  }, [state]);
  const modalClose = () => {
    setSuccessModalOpen(false);
    setErrorModalOpen(false);
  };

  return (
    <div className="form flex flex-col items-center justify-center h-54 py-10 shadow-xl">
      {isSuccessModalOpen && (
        <Modal
          message="Map marker added successfully"
          isSuccess={true}
          isOpen={isSuccessModalOpen}
          onClose={modalClose}
        />
      )}
      {isErrorModalOpen && (
        <Modal
          message="There's an error adding new map marker"
          isSuccess={false}
          isOpen={isErrorModalOpen}
          onClose={modalClose}
        />
      )}
      <form
        action={action}
        className="flex flex-col relative w-full max-w-lg rounded-2xl p-6"
      >
        {pending && <LoadingSpinner />}

        <Image
          className="absolute -top-3 right-4 w-20 transform translate-x-1/2"
          src={Pin}
          alt="Pin"
        />
        {state?.errors?.name && <Alert>{state.errors.name}</Alert>}
        {state?.errors?.location && <Alert>{state.errors.location}</Alert>}
        {state?.errors?.date && <Alert>{state.errors.date}</Alert>}
        {state?.errors?.note && <Alert>{state.errors.note}</Alert>}
        <h1 className="text-lg text-black font-bold p-2 mb-5">
          Add a new map marker
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full text-gray-400 p-2 text-sm mb-3 border rounded shadow-lg"
        />
        <div className="mt-2">
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
          >
            <AddressAutoComplete />
          </APIProvider>
        </div>
        <input
          className="w-full text-gray-400 p-2 text-sm mb-3 border shadow-lg rounded"
          name="date"
          type="date"
          placeholder="Date"
        />
        <textarea
          name="note"
          placeholder="Write notes here"
          className="w-full text-gray-400 p-2 text-sm mb-3 border shadow-lg rounded"
        />
        <FileUploadForm></FileUploadForm>
        <button
          type="submit"
          className="btn self-end px-8 py-3 mt-5 rounded-full font-semibold text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMarkerForm;
