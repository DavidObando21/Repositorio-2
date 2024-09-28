import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galeria = true;

  mostrarGaleria(mostrarSiNo:  boolean) {
    this.galeria = mostrarSiNo;
  }

  usuario = {
    "nombre":"Pug",
    "alias": "@RamonDog",
    "fotoPerfil": "../assets/imagenes/perrito.jpeg",
    "seguidores": 200,
    "seguidos": 20,
    "bio": "Soy un perro feliz", 
    publicaciones : [ {
      "usuario": "@Blacky",
      "imagen": "../assets/imagenes/playa.jpg",
      "caption": "Aqui en Cancun...",
      "comentario": "", 
      "id": "3"
    },
    {
      "usuario": "@WillWhitte",
      "imagen": "../assets/imagenes/verano.jpg",
      "caption": "Verano de aventuras..",
      "comentario": "", 
      "id": "2"
    },
    {
      "usuario": "@JohnSmith",
      "imagen": "../assets/imagenes/verano3.jpg",
      "caption": "Verano relajante... ",
      "comentario": "", 
      "id": "1"
    }
    ]
  }

}
