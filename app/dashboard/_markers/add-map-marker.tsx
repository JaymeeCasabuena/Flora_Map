import Image from "next/image";
import Rock from "../../../public/IvyRock.webp";
import Grass from "../../../public/grass.webp";
import Ivy from "../../../public/Ivy.webp";
import { APIProvider } from "@vis.gl/react-google-maps";
import FileUploadForm from "../_file-upload/upload";
import { AddressAutoComplete } from "../_map/address-autocomplete";
import { useActionState } from "react";
import { addMarker } from "@/app/actions/add-marker-actions";
import Alert from "@/components/alert";
import "../../../styles/dashboard.css";

const AddMarkerForm = () => {
  const [state, action, pending] = useActionState(addMarker, undefined);

  return (
    <div className="form flex flex-col items-center justify-center h-54 py-10">
      <form
        action={action}
        className="flex flex-col relative w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 pt-48"
      >
        <Image
          className="absolute left-0 top-0 w-full rounded-2xl"
          src={Grass}
          alt="Leaf"
        />
        <Image
          className="absolute -top-28 right-8 h-68 transform translate-x-1/2 rotate-[15deg]"
          src={Ivy}
          alt="Leaf"
        />
        {state?.message && <Alert>{state.message}</Alert>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full text-gray-400 p-3 mb-3 border rounded shadow-lg z-10"
        />
        <div className="mt-2 z-10">
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
          >
            <AddressAutoComplete />
          </APIProvider>
        </div>
        <input
          className="w-full text-gray-400 p-3 mb-3 border shadow-lg rounded"
          name="date"
          type="date"
          placeholder="Date"
        />
        <textarea
          name="note"
          placeholder="Write notes here"
          className="w-full text-gray-400 p-3 mb-3 border shadow-lg rounded"
        />
        <FileUploadForm></FileUploadForm>
        <button
          type="submit"
          className="btn self-end px-8 py-3 mt-5 rounded-full font-semibold text-white"
        >
          Submit
        </button>
        <Image className="absolute -left-10 -bottom-24" src={Rock} alt="Rock" />
      </form>
    </div>
  );
};

export default AddMarkerForm;
