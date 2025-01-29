"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/logo/logo";
import { logOut } from "../actions/auth-actions";
import CustomMap from "@/app/dashboard/_map/map";
import { LoadingSpinner } from "@/components/spinner/spinner";
import AddMarkerForm from "@/app/dashboard/_markers/add-map-marker";
import "../../styles//dashboard.css";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="dashboard flex flex-col">
      <div className="flex flex-row justify-between items-center p-5">
        <Logo />
        <button
          className="btn w-40 px-8 py-3 mt-5 rounded-full font-semibold text-white"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <main className="flex flex-row gap-7 w-full">
          <div className="map w-2/3 ms-5">
            <CustomMap />
          </div>
          <div className="details rounded-2xl w-1/3 mt-24 me-5">
            <AddMarkerForm />
          </div>
        </main>
      )}
    </div>
  );
};

export default Dashboard;
