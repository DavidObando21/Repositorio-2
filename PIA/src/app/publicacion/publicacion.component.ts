import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  //BD
  publicaciones = [ {
    "usuario": "@RamonDog",
    "imagen": "../assets/imagenes/playa.jpg",
    "caption": "Disfrutando la playa...",
    "comentario": "", 
    "id": "3"
  },
  {
    "usuario": "@RamonDog",
    "imagen": "../assets/imagenes/verano.jpg",
    "caption": "Llego el verano ohoh",
    "comentario": "", 
    "id": "2"
  },
  {
    "usuario": "@RamonDog",
    "imagen": "../assets/imagenes/verano3.jpg",
    "caption": "Calorcito necesario...",
    "comentario": "", 
    "id": "1"
  }
  ];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }


}
