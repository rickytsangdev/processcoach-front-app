import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Directive({
  selector: '[appRoleBackground]',
  standalone: true,
})
export class RoleBackgroundDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    const isAdmin = await this.authService.isAdmin();
    const className = isAdmin ? 'bg-[#DB8F33]' : 'bg-green-gradient';
    this.renderer.addClass(this.el.nativeElement, className);
  }
}
