import { useRef, useEffect, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

export const AddressAutoComplete = () => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const latRef = useRef<HTMLInputElement>(null);
  const lngRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const autocomplete = new places.Autocomplete(inputRef.current);
    setPlaceAutocomplete(autocomplete);
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      const place = placeAutocomplete.getPlace();

      setSelectedPlace(place);

      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        if (latRef.current) latRef.current.value = lat.toString();
        if (lngRef.current) lngRef.current.value = lng.toString();
      }
    });
  }, [placeAutocomplete]);

  return (
    <div className="autocomplete-container">
      <input
        name="location"
        className="w-full text-gray-400 p-3 mb-3 border rounded"
        ref={inputRef}
        placeholder="Search for a place"
      />
      {/* Hidden inputs for latitude and longitude */}
      <input type="hidden" name="lat" ref={latRef} />
      <input type="hidden" name="lng" ref={lngRef} />
    </div>
  );
};
