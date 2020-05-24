import React from 'react';
import {ImageOverlay, Map, Marker, Polygon, Circle} from "react-leaflet";
import {CRS, Icon} from 'leaflet';
import {connect} from "react-redux";
import {changeViewport, setMarker} from "../redux/reducers/mapReducer";
import camera from '../assets/camera.svg';
import arrow from '../assets/up-arrow.svg';
import '../App.css'
import {toggleVisible} from "../redux/reducers/drawerReducer";
import RotatedMarker from "./RotatedMarker";


const MapComponent = ({markers, setMarker, width, height, toggleVisible}) => {
    const addMarker = (e) => {
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;
        setMarker({lat, lng});
        console.log(markers)
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
            onViewportChanged={(viewport) => {
                console.log(viewport)
            }}
        >

            <button onClick={toggleVisible} className='btn'><b>&lt;</b></button>

            <ImageOverlay
                url={'https://static.tildacdn.com/tild3965-6139-4564-b262-303737393665/_8.jpg'}
                bounds={[[-10, 100], [-400, 650]]}
            >

                {markers.map(m => (
                    <Circle
                        center={[m.position.lat, m.position.lng]}
                        radius={2}
                        key={m.id}
                        onClick={(e) => {
                            if (e.latlng.lat == m.position.lat && e.latlng.lng == m.position.lng) {
                                console.log(m);
                                toggleVisible()
                            } else {
                                console.log('no')
                            }

                        }}
                        icon={cameraIcon}
                    >
                        <Polygon
                            positions={[[m.position.lat, m.position.lng], [m.position.lat + m.range, m.position.lng - 3], [m.position.lat + m.range, m.position.lng + 3]]}/>
                    </Circle>

                ))}


            </ImageOverlay>


        </Map>
    );
};

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers
    }
};

export default connect(mapStateToProps, {setMarker, changeViewport, toggleVisible})(MapComponent);

