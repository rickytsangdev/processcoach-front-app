import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './shared/organisms /header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute) {


}

ngOnInit(): void {
  console.log(this.route.snapshot);
  
}
title = 'training.processcoach-front';
}