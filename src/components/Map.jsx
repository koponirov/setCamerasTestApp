import React from 'react';
import {ImageOverlay, Map, Marker, Popup} from "react-leaflet";
import {CRS, Icon} from 'leaflet';
import {connect} from "react-redux";
import {changeViewport, setMarker} from "../redux/reducers/mapReducer";
import camera from '../assets/camera.svg'
import '../App.css'
import {toggleVisible} from "../redux/reducers/drawerReducer";


const MapComponent = ({markers, setMarker, width, height, toggleVisible}) => {

    const addMarker = (e) => {
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;
        setMarker({lat, lng});
        console.log(markers)
    };

    const cameraIcon = new Icon({
        iconUrl: camera,
        iconSize: [18, 18]
    });

    return (
        <Map
            center={[0, 0]}
            zoom={0}
            minZoom={0}
            maxZoom={2}
            maxBounds={[[0, 0], [-height, width]]}
            crs={CRS.Simple}
            onClick={addMarker}
            doubleClickZoom={false}
            dragging={true}
            onViewportChanged={(viewport) => {
                console.log(viewport)
            }}
        >

            <button onClick={toggleVisible} className='btn'><b>&lt;</b></button>

            <ImageOverlay
                url={'https://static.tildacdn.com/tild3965-6139-4564-b262-303737393665/_8.jpg'}
                bounds={[[0, 0], [-height, width]]}
            />


            {markers.map(m => (
                <Marker
                    position={[m.position.lat, m.position.lng]}
                    rotationAngle={45}
                    radius={3}
                    key={m.id}
                    onClick={(e) => {
                        if (e.latlng.lat == markers[1].position[0]) {
                            console.log('eeee')
                        } else {
                            console.log('no')
                        }

                    }}
                    icon={cameraIcon}
                >
                    <Popup>{`camera ${m.id}`}</Popup>
                </Marker>
            ))}
        </Map>
    );
};

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers
    }
};

export default connect(mapStateToProps, {setMarker, changeViewport, toggleVisible})(MapComponent);

