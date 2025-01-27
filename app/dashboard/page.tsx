"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/logo/logo";
import { logOut } from "../actions/auth-actions";
import CustomMap from "@/components/custom-map/map";
import { LoadingSpinner } from "@/components/spinner/spinner";
import AddMarkerForm from "@/components/map-marker/add-map-marker";

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
    <div className="flex flex-col">
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
        <main className="border-2 flex flex-row w-full">
          <div className="map w-1/2">
            <CustomMap />
          </div>
          <div className="details w-1/2">
            <AddMarkerForm />
          </div>
        </main>
      )}
    </div>
  );
};

export default Dashboard;
