import { ajax } from 'rxjs/observable/dom/ajax';
import * as actionTypes from '../constants/actionTypes';
import { fetchStationsReceive, fetchStationsError } from '../actions';

export function fetchStations(action$) {
    return action$.ofType(actionTypes.FETCH_STATIONS_REQUEST)
        .mergeMap(action => {
            return ajax.getJSON(`/data_test/stations.json`)
                .map(res => res.results)
                .map(fetchStationsReceive);
        });
}