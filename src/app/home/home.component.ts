import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  images=[4]
  items = [
  { img: 'assets/images/Peraphone1.png', title: 'Modello 1', desc: 'Descrizione 1' },
  { img: 'assets/images/Peraphone2.png', title: 'Modello 2', desc: 'Descrizione 2' },
  { img: 'assets/images/Peraphone3.png', title: 'Modello 3', desc: 'Descrizione 3' },
  { img: 'assets/images/Caricatore.png', title: 'Modello 4', desc: 'Descrizione 4' },
  { img: 'assets/images/Perabuds.png', title: 'Modello 5', desc: 'Descrizione 5' },
  { img: 'assets/images/Perawatch.png', title: 'Modello 6', desc: 'Descrizione 6' },
  { img: 'assets/images/Peraphones.png', title: 'Modello 7', desc: 'Descrizione 7' }
];
}
export class ShopComponent {
  prodotti = [
    {
      nome: "Peraphone Ultra X",
      produttore: "Peraphone Inc.",
      immagine: "https://www.dropbox.com/scl/fi/cpwcdkh62qweit0zicwov/Immagine-WhatsApp-2025-06-20-ore-14.36.24_e9a74c0d.jpg?rlkey=ms3krct43b4atw3wfsm4o3sht&raw=1",
      costo: 1299,
      quantitaInStock: 25,
      descrizione: `Prestazioni da top di gamma, IA adattiva, design premium in vetro e alluminio, 
      fotocamera da 200MP con tecnologia LightSense Pro, schermo AMOLED HDR a 144Hz, 
      audio surround 3D e batteria a lunga durata. Il futuro è qui.`
    }
  ];
}
