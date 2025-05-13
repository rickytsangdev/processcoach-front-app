import { Component } from '@angular/core';
import { AccordionComponent } from "../../../shared/templates/accordion/accordion.component";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
