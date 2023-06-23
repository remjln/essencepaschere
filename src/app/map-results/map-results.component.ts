import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import {Map, latLng, MapOptions, tileLayer, marker, LatLng, circle} from "leaflet";

@Component({
  selector: 'app-map-results',
  templateUrl: 'map-results.component.html',
  styleUrls: ['map-results.component.css']
})
export class MapResultsComponent implements AfterViewInit {
  // @ts-ignore
  private map: Map;

  @ViewChild('map')
  // @ts-ignore
  private mapContainer: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.createMap(0, 0);
  }

  createMap(lat: number, lng: number, zoom: number = 13, radius? : number) {
    const options: MapOptions = {
      layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true
      })],
      zoom: zoom,
      center: latLng(lat, lng)
    };
    this.map = new Map(this.mapContainer.nativeElement, options);
    if (radius) {
      this.map.addLayer(circle([lat, lng], {radius: radius}))
    }
  }

  setView(lat: number, lng: number, zoom: number = 13) {
    this.map.setView(latLng(lat, lng), zoom);
  }

  addMarker(lat: number, lng: number, title: string) {
    const newMarker = marker([lat, lng], {title: title});
    newMarker.addTo(this.map);
  }
}
