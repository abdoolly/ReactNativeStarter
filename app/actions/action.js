import Constants from "../utils/Constants";



export function fetchPeopleFromAPI() {
    return (dispatch) => {
        dispatch(getPeople());
        fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then(json => dispatch(getPeopleSuccess(json.results)))
            .catch(err => dispatch(getPeopleFailure(err)))
    };
}

function getPeople() {
    return {
        type: Constants.FETCHING_PEOPLE
    };
}

function getPeopleSuccess(data) {
    return {
        type: Constants.FETCHING_PEOPLE_SUCC,
        data
    };
}

function getPeopleFailure() {
    return {
        type: Constants.FETCHING_PEOPLE_FAIL
    };
}


