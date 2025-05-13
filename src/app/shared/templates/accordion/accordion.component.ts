import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() name: string = 'accordion-group';
  @Input() checked: boolean = false;
}
