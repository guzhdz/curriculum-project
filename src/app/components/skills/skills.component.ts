import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: any[] = [
    {
      title: "Knowledge in:",
      lists: [
        [
          "JavaScript",
          "Css",
          "HTML",
          "TypeScript",
          "C/C++",
          "MySQL",
          "Data structures",
          "AI Bases"
        ],
        [
          "Angular",
          "React",
          "Vue",
          "Ionic",
          "Java",
          "Data bases",
          "OOP"
        ]
      ]
    },
    {
      title: "Technologies:",
      lists: [
        [
          "Word",
          "Excel",
          "PowerPoint",
          "Figma",
          "Git",
          "Firebase",
          "AWS",
          "Google Cloud"
        ],
        [
          "PostgreSQL",
          "XAMPP",
          "VSCode"
        ]
      ]
    },
    {
      title: "Languages:",
      lists: [
        [
          "Spanish (Native)",
          "English (Intermediate/ B2)"
        ]
      ]
    }
  ];
}
