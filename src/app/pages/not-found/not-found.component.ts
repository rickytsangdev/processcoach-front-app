import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  error = signal('404 Page Not Found');

  image404 = signal("assets/rocket-not-found.png")

  getName(){
    return this.error().toUpperCase();
  }
}
