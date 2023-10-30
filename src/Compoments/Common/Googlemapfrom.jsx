import React from "react";
import GoogleMapReact from 'google-map-react';


const Googlemapfrom = () => {
    const defaultProps = {
        center: {
            lat: 29.14043,
            lng: 75.558
        },
        zoom: 16,
    };
    return (
        <>
            <div className="w-100 googleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>
            </div>
        </>
    )
}

export default Googlemapfrom

