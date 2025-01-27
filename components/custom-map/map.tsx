import { APIProvider, Map } from "@vis.gl/react-google-maps";

const CustomMap = () => {
  console.log("HELLO", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string);
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        mapId={process.env.NEXT_PUBLIC_MAPS_ID as string}
        style={{ width: "50vw", height: "100vh" }}
        defaultCenter={{ lat: -27.41967, lng: 153.0473996 }}
        defaultZoom={9}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      ></Map>
    </APIProvider>
  );
};

export default CustomMap;
