import Image from "next/image";
import Rock from "../../../public/IvyRock.webp";
import Grass from "../../../public/grass.webp";
import Ivy from "../../../public/Ivy.webp";
import Seedling from "../../../public/seedling.png";

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
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex flex-col relative w-full max-w-lg bg-white rounded-2xl drop-shadow-xl p-6 pt-48">
        <Image
          className="absolute -left-16 -top-12 w-52 h-48 rotate-[15deg] z-10"
          src={Seedling}
          alt="Shovel"
        />
        <Image
          className="absolute left-0 top-0 w-full rounded-2xl"
          src={Grass}
          alt="Grass"
        />
        <Image
          className="absolute -top-20 right-8 h-80 w-72 transform translate-x-1/2"
          src={Ivy}
          alt="Ivy"
        />

        <div className="flex flex-col ">
          <h1 className="text-4xl capitalize text-yellow-500 font-bold p-2 mb-5">
            {marker?.name}
          </h1>
          <h1 className="text-base text-green-950 font-bold p-2 mb-5">
            Location: {marker?.location}
          </h1>
          <h1 className="text-base max-h-36 overflow-y-auto text-green-950 font-bold p-2 mb-5">
            Note: {marker?.note}
          </h1>
          <h1 className="text-base text-green-950 font-bold p-2 mb-10">
            Date:{" "}
            {marker && marker.date
              ? new Date(marker.date).toDateString().split("T")[0]
              : ""}
          </h1>
          <button
            onClick={() => buttonClick()}
            className="btn self-end px-8 py-3 mt-5 rounded-full font-semibold text-white"
          >
            Switch to form
          </button>
        </div>

        <Image className="absolute -left-10 -bottom-24" src={Rock} alt="Rock" />
      </div>
    </div>
  );
};

export default MapMarkerDetails;
