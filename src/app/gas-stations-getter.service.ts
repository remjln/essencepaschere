import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GasStationData} from "./gas-station-data";
import {HttpClient} from "@angular/common/http";
import {GeoCoordinates} from "./geo-coordinates";
const FUEL_BASE_URL:string = 'https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&rows=-1&refine.carburants_disponibles={0}&geofilter.distance={1},{2},{3}';
const ADDR_BASE_URL:string = 'https://nominatim.openstreetmap.org/search?q={0}&format=json';

@Injectable()
export class GasStationsGetterService {
    constructor(private http: HttpClient) {}

    requestAddressData(address: string): Observable<any> {
        return this.http.get(ADDR_BASE_URL.replace('{0}', address));
    }

    formatAddressData(data: any): GeoCoordinates {
        const boundingbox = data[0].boundingbox;
        const latitude = boundingbox[0];
        const longitude = boundingbox[2];
        return {longitude, latitude};
    }

    requestStationData(gasType: string, position: GeoCoordinates, distance:number): Observable<any> {
        let url = FUEL_BASE_URL
            .replace('{0}', gasType)
            .replace('{1}', position.latitude.toString())
            .replace('{2}', position.longitude.toString())
            .replace('{3}', distance.toString());
        console.log(url)

        return this.http.get(url);
    }

    formatStationData(data: any, fuel: string): GasStationData[] {
        const fuel_lower = fuel.toLowerCase();
        const records = data.records;
        let res : GasStationData[] = [];

        for (const r of records) {
            let latitude:number = r.fields.geom[0];
            let longitude:number = r.fields.geom[1];

            // The unary operator + converts a string to a number
            let distance:number = +r.fields.dist;
            let price:number = +r.fields[fuel_lower + "_prix"];
            res.push({longitude, latitude, distance, price});
        }
        return res;
    }
}
