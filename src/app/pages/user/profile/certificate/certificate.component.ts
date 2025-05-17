import { Component, Input } from '@angular/core';
import { RoleBackgroundDirective } from '../../../../shared/directives/role-background.directive';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [RoleBackgroundDirective],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss',
})
export class CertificateComponent {
  @Input() fileName_1 = 'attestation-entree-de-formation.pdf';
  @Input() fileName_2 = 'attestation-fin-de-formation.pdf';
  @Input() downloadUrl = '';
}
