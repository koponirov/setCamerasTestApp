import React from 'react';
import { ImageOverlay, Map, Polygon, Circle } from "react-leaflet";
import { CRS, Icon } from 'leaflet';
import { connect } from "react-redux";
import {setCurrentMarker, setMarker} from "../redux/reducers/mapReducer";
import camera from '../assets/camera.svg';
import arrow from '../assets/up-arrow.svg';
import '../App.css'
import { toggleVisible } from "../redux/reducers/drawerReducer";
import RotatedMarker from "./RotatedMarker";


const MapComponent = ({ markers, setMarker, width, height, toggleVisible, setCurrentMarker }) => {

    const addMarker = (e) => {
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;
        setMarker({lat, lng});
    };

    const cameraIcon = new Icon({
        iconUrl: arrow,
        iconSize: [16, 16]
    });

    return (
        <Map
            center={[0, 0]}
            zoom={1}
            minZoom={-1}
            maxZoom={2}
            maxBounds={[[0, 0], [-height, width]]}
            crs={CRS.Simple}
            onDblclick={addMarker}
            doubleClickZoom={false}
            dragging={true}
        >
            <ImageOverlay
                url={'https://static.tildacdn.com/tild3965-6139-4564-b262-303737393665/_8.jpg'}
                bounds={[[-10, 100], [-400, 650]]}
            >

                {markers.map(m => {

                    const lat = m.position[0];
                    const lng = m.position[1];

                    return (
                    <Circle
                        center={[lat, lng]}
                        radius={2}
                        key={m.id}
                        onClick={(e) => {
                            if (e.latlng.lat == lat && e.latlng.lng == lng) {
                                toggleVisible()
                                setCurrentMarker(m)
                            } else {
                                console.log('no')
                            }

                        }}
                    >
                        <Polygon
                            positions={[[lat, lng], [lat + m.range, lng - 3], [lat + m.range, lng + 3]]}/>
                    </Circle>
                )})}

            </ImageOverlay>
        </Map>
    );
};

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers
    }
};

export default connect(mapStateToProps, {setMarker, setCurrentMarker, toggleVisible})(MapComponent);

