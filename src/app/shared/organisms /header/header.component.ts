import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  document!: any;

  goToUrl(): void {
    this.document.location.href = 'https://processcoach.fr';
  }
}
