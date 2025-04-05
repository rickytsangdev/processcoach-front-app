import { Component, input } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  buttonText =  input<string>;

}
