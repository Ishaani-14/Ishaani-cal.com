// components/Map.js
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fuaml0bWFwYm94IiwiYSI6ImNsMjFqbHhmbzA1dTUzYm8xeTBwcTlrbnMifQ.60o_vri1H53dE81kflAj5w';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [89.1913, 23.1667], // Jashore, Bangladesh
      zoom: 9,
    });

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ width: '300px', height: '200px',marginTop:"20px" }} />;
};

export default Map;
