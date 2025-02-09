import Image from "next/image";
import Pin from "../../../public/pin.png";

type MarkerDetailsProps = {
  marker: {
    location: string | null;
    id: string;
    name: string;
    note: string | null;
    coord: string | null;
    date: Date | null;
    authorId: string | null;
  } | null;
  buttonClick: () => void;
};

const MapMarkerDetails = ({ marker, buttonClick }: MarkerDetailsProps) => {
  return (
    <div className="form flex flex-col relative items-center justify-center h-54 rounded-2xl shadow-xl">
      <Image
        className="absolute -top-2 right-8 w-20 transform translate-x-1/2"
        src={Pin}
        alt="Pin"
      />
      <div className="flex flex-col mt-7">
        <h1 className="max-w-64 break-words text-lg capitalize text-green-900 font-bold p-2 mb-3">
          {marker?.name}
        </h1>
        <h1 className="text-sm text-black p-2 mb-5">
          Location: {marker?.location}
        </h1>
        <h1 className="text-sm max-h-36 overflow-y-auto text-black bg-white rounded-2xl p-4 mb-5">
          Note: {marker?.note}
        </h1>
        <h1 className="text-sm text-black p-2 mb-10">
          Date:{" "}
          {marker && marker.date
            ? new Date(marker.date).toDateString().split("T")[0]
            : ""}
        </h1>
        <button
          onClick={() => buttonClick()}
          className="btn self-end px-8 py-3 mt-5 rounded-full font-semibold text-white mb-10"
        >
          Switch to form
        </button>
      </div>
    </div>
  );
};

export default MapMarkerDetails;
