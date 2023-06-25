import {
  AfterViewInit,
  Component,
  ElementRef, Input, OnChanges, SimpleChanges,
  ViewChild
} from '@angular/core';
import {
  Map,
  latLng,
  MapOptions,
  tileLayer,
  marker,
  Icon,
  icon,
  Marker,
  featureGroup,
  FeatureGroup, Layer, LayerGroup, layerGroup
} from "leaflet";

@Component({
  selector: 'app-map-results',
  templateUrl: 'map-results.component.html',
  styleUrls: ['map-results.component.css']
})
export class MapResultsComponent implements OnChanges, AfterViewInit {
  // @ts-ignore
  private map: Map;
  @Input() results: any;

  @ViewChild('map')
  // @ts-ignore
  private mapContainer: ElementRef<HTMLElement>;
  private markersGroup: LayerGroup<any>;

  ngAfterViewInit() {
    this.createMap(0, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('results' in changes && this.results.length > 0) {
      this.updateMarkers();
    }
  }

  updateMarkers() {
    this.markersGroup.clearLayers();
    let markers = []
    for (const gasResult of this.results)
      markers.push(this.addMarker(gasResult.latitude, gasResult.longitude, gasResult.address));
    this.map.fitBounds(featureGroup(markers).getBounds());
  }


  createMap(lat: number, lng: number, zoom: number = 13) {
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
    this.markersGroup = layerGroup().addTo(this.map);
  }

  setView(lat: number, lng: number, zoom: number = 13) {
    this.map.setView(latLng(lat, lng), zoom);
  }

  addMarker(lat: number, lng: number, title: string) {
    const newMarker = marker([lat, lng], {
      title: title,
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    });
    return newMarker.addTo(this.markersGroup);
  }
}
