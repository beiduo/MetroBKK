import { combineEpics } from 'redux-observable';
import { fetchStations } from './stations';

export default combineEpics(
    fetchStations
);