import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: "Projects I have worked:",
      list: [
        "Finey (Final Technologist degree project)",
        "CleverTrip (Final Engineer Project)",
        "SGResident (Final project of Software Engineering class)",
        "Mini compiler (Final project of Language Translators 2 class)"
      ]
    }
  ];
}
