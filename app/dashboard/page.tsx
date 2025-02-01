"use client";

import { useState } from "react";
import Nav from "@/components/navbars/nav";
import CustomMap from "@/app/dashboard/_map/map";
import AddMarkerForm from "@/app/dashboard/_markers/add-map-marker";
import MapMarkerDetails from "./_markers/map-marker-details";
import "../../styles//dashboard.css";

type MarkerType = {
  location: string | null;
  id: string;
  name: string;
  note: string | null;
  coord: string | null;
  date: Date | null;
  authorId: string | null;
};

const Dashboard = () => {
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  const handleMarkerClick = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };
  return (
    <div className="dashboard flex flex-col">
      <Nav withLogout={true} />
      <main className="flex flex-row gap-7 w-full">
        <div className="map w-2/3 ms-5">
          <CustomMap onMarkerClick={handleMarkerClick} />
        </div>
        <div className="details rounded-2xl w-1/3 mt-16 me-5">
          {!selectedMarker ? (
            <AddMarkerForm />
          ) : (
            <MapMarkerDetails marker={selectedMarker} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
