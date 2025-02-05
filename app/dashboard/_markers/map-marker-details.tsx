import Image from "next/image";
import Rock from "../../../public/IvyRock.webp";
import Ivy from "../../../public/Ivy.webp";

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
    <div className="details-container flex flex-col items-center justify-center h-54 rounded-2xl drop-shadow-xl">
      <div className="flex flex-col mt-10">
        <h1 className="text-3xl capitalize text-green-900 font-bold p-2 mb-5">
          {marker?.name}
        </h1>
        <h1 className="text-base text-black p-2 mb-5">
          Location: {marker?.location}
        </h1>
        <h1 className="text-base max-h-36 overflow-y-auto text-black p-2 mb-5">
          Note: {marker?.note}
        </h1>
        <h1 className="text-base text-black p-2 mb-10">
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
