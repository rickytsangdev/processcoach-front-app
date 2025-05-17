import { Component } from '@angular/core';
import { AccordionComponent } from "../../../shared/templates/accordion/accordion.component";
import { RoleBackgroundDirective } from '../../../shared/directives/role-background.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionComponent, RoleBackgroundDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
