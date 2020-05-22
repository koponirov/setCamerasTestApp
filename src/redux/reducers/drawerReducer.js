const TOGGLE_VISIBLE = 'TOGGLE_VISIBLE';

let initialState = {
    visible: false
};

const drawerReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_VISIBLE:
            return {
                ...state,
                visible: !state.visible
            };

        default:
            return state;
    }
};

export const toggleVisible = () => ({type:TOGGLE_VISIBLE})

export default drawerReducer;