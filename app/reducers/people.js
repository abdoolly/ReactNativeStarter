import Constants from '../utils/Constants';



const initialState = {
    people: [],
    isFetching: false,
    error: false
};

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.FETCHING_PEOPLE:
            return {
                ...state,
                isFetching: true,
                people: []
            };

        case Constants.FETCHING_PEOPLE_SUCC:
            return {
                ...state,
                isFetching: false,
                people: action.data
            };

        case Constants.FETCHING_PEOPLE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true
            };

        default:
            return state;
    };
}



