const ADD_MARKER = 'ADD_MARKER';
const REMOVE_MARKER = 'REMOVE_MARKER';
const SET_MARKER_DATA = 'SET_MARKER_DATA';

let initialState = {
    markers: [],
    editMode: false,
    viewport: {center: [-705,1366], zoom: 0}
};

const mapReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MARKER:
            return {
                ...state,
                markers: [
                    ...state.markers,
                    {
                        id: state.markers.length+1,
                        position:{
                            lat:action.marker.lat,
                            lng:action.marker.lng
                        },
                        angle: 0,
                        range: 25,
                        direction: 'north'
                    }
                        ]
            };
        case SET_MARKER_DATA:
            return {
                ...state,
                markers: state.markers.map(marker => {
                    if (marker.id === action.id) {
                        return {...marker, range: action.range}
                    }
                    return marker;
                })



            };
        case REMOVE_MARKER:
            return {
                ...state,
                markers: state.markers.filter(marker=> marker.id != action.id)
            };

        default:
            return state;
    }
};

export const setMarker = (marker) => ({type:ADD_MARKER,marker});
export const setMarkerData = (id,range) => ({type:SET_MARKER_DATA, id, range});
export const removeMarker = (id) => ({type:REMOVE_MARKER,id});
export const changeViewport = (viewport) => ({type:REMOVE_MARKER,viewport})

export default mapReducer;