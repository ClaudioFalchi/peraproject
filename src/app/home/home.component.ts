import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  images=[4]
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
