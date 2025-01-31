"use client";

import Nav from "@/components/navbars/nav";
import CustomMap from "@/app/dashboard/_map/map";
import AddMarkerForm from "@/app/dashboard/_markers/add-map-marker";
import "../../styles//dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard flex flex-col">
      <Nav withLogout={true} />
      <main className="flex flex-row gap-7 w-full">
        <div className="map w-2/3 ms-5">
          <CustomMap />
        </div>
        <div className="details rounded-2xl w-1/3 mt-16 me-5">
          <AddMarkerForm />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
