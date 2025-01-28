import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const CustomMap = () => {
  const center = {
    lat: -27.41967,
    lng: 153.0473996,
  };

  const defaultStyle = {
    width: "65vw",
    height: "100vh",
    borderRadius: "20px",
    overflow: "hidden",
  };

  const defaultMapZoom = 9;

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        mapId={process.env.NEXT_PUBLIC_MAPS_ID as string}
        style={defaultStyle}
        defaultCenter={center}
        defaultZoom={defaultMapZoom}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
        streetViewControl={false}
      >
        <Marker
          position={{ lat: -27.8619933, lng: 153.2631347 }}
          icon={{
            url: "/tree-marker.svg",
            scale: 0.075,
          }}
        />
      </Map>
    </APIProvider>
  );
};

export default CustomMap;
