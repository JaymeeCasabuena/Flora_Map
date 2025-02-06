"use client";

import { useState } from "react";
import Nav from "@/components/navbars/nav";
import CustomMap from "@/app/dashboard/_map/map";
import AddMarkerForm from "@/app/dashboard/_markers/add-map-marker";
import MapMarkerDetails from "./_markers/map-marker-details";
import Search from "./_search/search";
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

  const switchToForm = () => {
    setSelectedMarker(null);
  };
  return (
    <div className="dashboard flex flex-col justify-center pb-10">
      <Nav withLogout={true} />
      <main className="flex flex-row gap-7 w-2/3 self-center">
        <div className="map ms-5">
          <CustomMap onMarkerClick={handleMarkerClick} />
        </div>
        <div className="flex flex-col w-1/4">
          {!selectedMarker ? (
            <AddMarkerForm />
          ) : (
            <MapMarkerDetails
              marker={selectedMarker}
              buttonClick={switchToForm}
            />
          )}
          <Search />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
