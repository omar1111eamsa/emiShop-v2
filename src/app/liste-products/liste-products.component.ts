import {Component, OnInit} from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-liste-products',
  templateUrl: './liste-products.component.html',
  styleUrls: ['./liste-products.component.css']
})
export class ListeProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'Tablet Android 10" - 128Go - Black',
      price: 189.99,
      description: 'Performante, idéale pour le multimédia.',
      imageUrl: '[Image of 10-inch Tablet]',
    },
    {
      id: 2,
      name: 'Chromebook HP 14" - Celeron',
      price: 249.00,
      description: 'Léger et rapide, parfait pour les études.',
      imageUrl: '[Image of a silver Chromebook laptop]',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23 FE',
      price: 699.50,
      description: 'Le meilleur de Samsung à un prix abordable.',
      imageUrl: '[Image of a Samsung Galaxy smartphone]',
    },
    {
      id: 4,
      name: 'Casque Bose QuietComfort',
      price: 379.00,
      description: 'Réduction de bruit exceptionnelle.',
      imageUrl: '[Image of a silver Chromebook laptop]',
    },
    {
      id: 5,
      name: 'Livre - Le Guide Angular 13',
      price: 29.90,
      description: 'Indispensable pour la programmation.',
      imageUrl: '[Image of a modern game console]',
    },
    {
      id: 6,
      name: 'Console de Jeu emiBox X',
      price: 499.00,
      description: 'Puissance Next-Gen.',
      imageUrl: '[Image of a modern game console]',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addToCart(productName: string): void {
    console.log(`[Panier] Le produit "${productName}" a été ajouté.`);
  }
}
