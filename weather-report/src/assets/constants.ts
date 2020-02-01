import {
  ColumnProp
} from '../app/models/column-prop.model';


export const WEATHER_COLUMNS: ColumnProp[] = [{
  headerName: 'Name',
  prop: 'name'
}, {
  headerName: 'Average Temperature',
  prop: 'avgTemp'
}, {
  headerName: 'Wind Strength',
  prop: 'windStrength'
}];

export const HOURLY_WEATHER_COLUMNS: ColumnProp[] = [{
  headerName: 'Time Stamp',
  prop: 'timeStamp'
}, {
  headerName: 'Average Temperature',
  prop: 'avgTemp'
}, {
  headerName: 'Wind Strength',
  prop: 'windStrength'
}];

export const CITY_NAMES = ['London', 'Amsterdam', 'Berlin', 'Paris', 'Rome'];
