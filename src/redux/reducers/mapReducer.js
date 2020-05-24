const ADD_MARKER = 'ADD_MARKER';
const REMOVE_MARKER = 'REMOVE_MARKER';
const SET_MARKER_DATA = 'SET_MARKER_DATA';
const SET_CURRENT_MARKER = 'SET_CURRENT_MARKER';

let initialState = {
    markers: [],
    currentMarker: null,
    editMode: false,
};

const mapReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MARKER:
            return {
                ...state,
                markers: [
                    ...state.markers,
                    {
                        id: state.markers.length + 1,
                        position: [action.marker.lat, action.marker.lng],
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
                markers: state.markers.filter(marker => marker.id != action.id)
            };
        case SET_CURRENT_MARKER:
            return {
                ...state,
                currentMarker: {...action.marker}
            };

        default:
            return state;
    }
};

export const setMarker = (marker) => ({type: ADD_MARKER, marker});
export const setMarkerData = (id, range) => ({type: SET_MARKER_DATA, id, range});
export const setCurrentMarker = (marker) => ({type: SET_CURRENT_MARKER, marker});
export const removeMarker = (id) => ({type: REMOVE_MARKER, id});


export default mapReducer;