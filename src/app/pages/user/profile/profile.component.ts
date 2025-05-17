import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoleBackgroundDirective } from '../../../shared/directives/role-background.directive';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, RoleBackgroundDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
    this.currentUrl = this.router.url;
  }
}
