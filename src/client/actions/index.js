import * as actionTypes from '../constants/actionTypes';

export function fetchStationsRequest(data) {
    return {
        type: actionTypes.FETCH_STATIONS_REQUEST
    };
}

export function fetchStationsReceive(data) {
    return {
        type: actionTypes.FETCH_STATIONS_RECEIVE,
        data
    };
}

export function fetchStationsError() {
    return {
        type: actionTypes.FETCH_STATIONS_ERROR
    };
}