import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: "CleverTrip (Final Engineer Project)",
      description: "Web application that provides a tourist places search system, an artificial intelligence recommendation system, and a trip planner.",
      usedTech: "Angular (Typescript, Javascript, CSS, HTML), Firebase, Google Apis, Google Cloud, AWS (Lambda, Api Gateway), Node.js, GitHub, Figma.",
      link: "https://github.com/guzhdz/CleverTrip"
    },
    {
      title: "SGResident (Final project of Software Engineering)",
      description: "Web application that provides a resident manager system. It allows to save, search, modify and eliminate residents and payments data.",
      usedTech: "Angular (Typescript, Javascript, SCSS, HTML), PostgreSQL, Node.js, GitHub, Figma.",
      link: "https://github.com/guzhdz/SGResident"
    },
    {
      title: "Mini compiler (Final project of Language Translators 2)",
      description: "Web application that allows to insert base C (programming language) code, it analyses and detects errors, and then compiles the code. Also generates a file with the equivalent assembly code.",
      usedTech: "Angular (Typescript, Javascript, SCSS, HTML), GitHub, OOP.",
      link: "https://github.com/guzhdz/minicompilador"
    },
    {
      title: "Finey (Final Technologist degree project)",
      description: "Mobile application focused on money saving based on costs.",
      usedTech: "Ionic, Angular(Typescript, Javascript, SCSS, HTML), Firebase.",
      link: "https://github.com/guzhdz21/Finey-1"
    }
  ];
}
