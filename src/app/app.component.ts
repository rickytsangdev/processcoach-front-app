import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './shared/organisms /header/header.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    console.log(this.route.snapshot);
  }
  title = 'training.processcoach-front';

  shouldShowHeader(): boolean {
    return this.router.url !== '/login';
  }
}
