import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa',null) mapa;

  constructor() { }

  ngOnInit() {
   const latLng = this.coords.split(',');
   const lat = Number(latLng[0]);
   const lng = Number(latLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoidmExMDAxNiIsImEiOiJjanlhbHRpdWUwZ2E0M2NsaGJpanlseDBwIn0.XcEbWu67Ewpi957HAZWbzA';
    const map = new mapboxgl.Map({
        container: this.mapa.nativeElement,// se podria mandar el id de mi div pero genera el error ya que ese div se repite por cada post que se pinta
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 15
    });

    const marker = new mapboxgl.Marker()
        .setLngLat([lng,lat])
        .addTo(map);

  }

}
