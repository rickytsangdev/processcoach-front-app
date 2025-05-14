import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  stats = {
    coursesStarted: 18,
    coursesCompleted: 9,
    totalTime: '13h',
    certificates: 3,
    lastCourse: {
      title: 'Développement Web 3',
      lastAccess: 'il y a 4 jours',
    },
  };
}
