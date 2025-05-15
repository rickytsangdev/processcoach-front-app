import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgFor, NgClass } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products = [
    {
      title: 'Atelier de gestion du temps',
      subtitle: 'Apprenez à mieux gérer votre temps',
      description:
        'Découvrez des techniques pratiques pour organiser votre emploi du temps et atteindre vos objectifs.',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      buttonText: 'Reprendre',
    },
    {
      title: 'Cours de communication efficace',
      subtitle: 'Améliorez vos compétences en communication',
      description:
        'Apprenez à vous exprimer clairement et à écouter activement pour mieux interagir avec les autres.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      buttonText: 'Accéder',
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
  ];

  isAdmin: boolean = false;
  backgroundClass: string = 'bg-green-gradient';

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.isAdmin = await this.authService.isAdmin();
    this.backgroundClass = this.isAdmin ? 'bg-admin' : 'bg-green-gradient';
    console.log('Is Admin : ', this.isAdmin);
  }
}
