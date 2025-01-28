import { APIProvider } from "@vis.gl/react-google-maps";
import FileUploadForm from "../_file-upload/upload";
import { AddressAutoComplete } from "../_map/address-autocomplete";
import { useActionState } from "react";
import { addMarker } from "@/app/actions/add-marker-actions";
import "../../../styles/dashboard.css";

const AddMarkerForm = () => {
  const [state, action, pending] = useActionState(addMarker, undefined);

  return (
    <div className="form flex flex-col items-center justify-center h-full">
      <form action="action" className="flex flex-col w-1/2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full text-gray-400 p-3 mb-3 border rounded"
        />

        <div className="mt-2">
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
          >
            <AddressAutoComplete />
          </APIProvider>
        </div>

        <input
          className="w-full text-gray-400 p-3 mb-3 border rounded"
          name="date"
          type="date"
          placeholder="Date"
        />
        <textarea
          name="note"
          placeholder="Write notes here"
          className="w-full text-gray-400 p-3 mb-3 border rounded"
        />
        <FileUploadForm></FileUploadForm>
        <button
          type="submit"
          className="secondary-btn self-end px-8 py-3 mt-5 rounded-full font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMarkerForm;
