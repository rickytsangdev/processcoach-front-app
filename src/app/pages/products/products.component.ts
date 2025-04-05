import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchBarComponent } from "../../shared/molecules/search-bar/search-bar.component";
import { ButtonComponent } from '../../shared/atoms/button/button.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products  = [
    {
      title: 'Atelier de gestion du temps',
      subtitle: 'Apprenez à mieux gérer votre temps',
      description:
        'Découvrez des techniques pratiques pour organiser votre emploi du temps et atteindre vos objectifs.',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      buttonText: 'Découvrir',
    },
    {
      title: 'Cours de communication efficace',
      subtitle: 'Améliorez vos compétences en communication',
      description:
        'Apprenez à vous exprimer clairement et à écouter activement pour mieux interagir avec les autres.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      buttonText: 'Commencer',
    },
    {
      title: 'Développement personnel pour adolescents',
      subtitle: 'Construisez votre confiance en vous',
      description:
        'Explorez des stratégies pour renforcer votre estime de soi et développer une mentalité positive.',
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      buttonText: 'En savoir plus',
    },
  ];
}
