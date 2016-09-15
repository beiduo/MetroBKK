import * as actionTypes from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    lastUpdated: null,
    items: []
}

function fetchStationsRequest(state, action) {
    return Object.assign({}, state, {
        isFetching: true
    });
}

function fetchStationsReceive(state, action) {
    return Object.assign({}, state, {
        isFetching: false,
        items: action.data.map(station => {
            let obj = {};
            station.line
                .split('; ')
                .forEach(function(item) {
                    obj[item.toLowerCase().split(' ').join('-')] = item;
                }, this);
            return Object.assign({}, station, {
                lineAlias: obj
            })
        })
    });
}

function fetchStationsError(state, action) {
    return state;
}

function stations(state=initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_STATIONS_REQUEST:
            return fetchStationsRequest(state, action);
        case actionTypes.FETCH_STATIONS_RECEIVE:
            return fetchStationsReceive(state, action);
        case actionTypes.FETCH_STATIONS_ERROR:
            return fetchStationsError(state, action);
        default:
            return state;
    }
}

export default stations;