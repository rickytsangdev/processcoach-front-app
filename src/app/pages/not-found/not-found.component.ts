import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  not_found_img: string = '../../../assets/rocket-not-found.png';
  error = signal('404 Page Not Found');
}
