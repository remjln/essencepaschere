import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GasStationData} from "./gas-station-data";
import {HttpClient} from "@angular/common/http";
import {GeoCoordinates} from "./geo-coordinates";

const FUEL_BASE_URL: string = 'https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&rows=10&sort=-dist&refine.carburants_disponibles={0}&geofilter.distance={1},{2},50000';
const ADDR_BASE_URL: string = 'https://nominatim.openstreetmap.org/search?q={0}&format=json&limit=1';
const STATION_BASE_URL: string = 'https://nominatim.openstreetmap.org/search?q=[fuel]{0},{1}&format=json&limit=1&addressdetails=1&extratags=1&namedetails=1';

@Injectable()
export class GasStationsGetterService {
  constructor(private http: HttpClient) {
  }

  requestAddressData(address: string): Observable<any> {
    return this.http.get(ADDR_BASE_URL.replace('{0}', address));
  }

  requestStationName(position: GeoCoordinates): Observable<any> {
    let url = STATION_BASE_URL
      .replace('{0}', position.latitude.toString())
      .replace('{1}', position.longitude.toString())
    return this.http.get(url);
  }

  formatAddressData(data: any): GeoCoordinates {
    const latitude = data[0].lat;
    const longitude = data[0].lon;
    return {longitude, latitude};
  }

  requestStationData(gasType: string, position: GeoCoordinates): Observable<any> {
    let url = FUEL_BASE_URL
      .replace('{0}', gasType)
      .replace('{1}', position.latitude.toString())
      .replace('{2}', position.longitude.toString())

    return this.http.get(url);
  }

  formatStationData(data: any, fuel: string): GasStationData[] {
    const fuel_lower = fuel.toLowerCase();
    const records = data.records;
    let res: GasStationData[] = [];

    for (const r of records) {
      let latitude: number = r.fields.geom[0];
      let longitude: number = r.fields.geom[1];

      // The unary operator + converts a string to a number
      let distance: number = Math.round((+r.fields.dist) / 10) / 100;
      let price: number = +r.fields[fuel_lower + "_prix"];
      let address: string = r.fields.adresse;
      res.push({longitude, latitude, distance, price, address});
    }

    res.sort((a, b) => a.price - b.price);

    return res;
  }
}
