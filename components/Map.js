import * as React from "react";
import ReactMapGL from "react-map-gl";

const map_token = process.env.MAPBOX_TOKEN;

export default function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={map_token}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}
