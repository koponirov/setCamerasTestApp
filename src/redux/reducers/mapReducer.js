const ADD_MARKER = 'ADD_MARKER';
const REMOVE_MARKER = 'REMOVE_MARKER';

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
        case REMOVE_MARKER:
            return {
                ...state,

            };

        default:
            return state;
    }
};

export const setMarker = (marker) => ({type:ADD_MARKER,marker})
export const deleteMarker = (id) => ({type:REMOVE_MARKER,id})
export const changeViewport = (viewport) => ({type:REMOVE_MARKER,viewport})

export default mapReducer;