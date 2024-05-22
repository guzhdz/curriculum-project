import { Component } from '@angular/core';

@Component({
  selector: 'app-academic-background',
  templateUrl: './academic-background.component.html',
  styleUrl: './academic-background.component.css'
})
export class AcademicBackgroundComponent {
  academics: any[] = [
    {
      title: "Computer Engineer",
      school: "Universidad de Guadalajara (Finishing)",
      time: "Aug 2020 - Jun 2024",
      description: `I learned the Software Development bases, as well as all the right processes to develop a high quality software through different methodologies.
      I learned the teamwork importance and operation, also I learned to be attached to development agendas. 
      Finally I learned the AI/Machine Learning Bases.`
    },
    {
      title: "Software Development Technologist (Degree)",
      school: "Centro de Enseñanza Tecnológica e Industrial (CETI Colomos)",
      time: "Aug 2016 to Jun 2020",
      description: `I learned the programming bases, as well as how to use it’s logic that makes possible to use different languages and learn new ones.
      I learned the database operation and importance, as well as data structures.
      Graduated for academic excellence with a grade score of 93.04`
    }
  ];
}
