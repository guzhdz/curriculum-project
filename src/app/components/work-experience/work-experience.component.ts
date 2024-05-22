import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  works: any[] = [
    {
      title: "UNIVERSIDAD AUTÓNOMA DE GUADALAJARA",
      time: "Summer school (Jul-Aug 2018 y Jul-Aug 2019)",
      position: "Administration Assistant",
      functions: "Control, management, transport and setting up of the needed event material, entry and exit guests control, reception of the guests (English/Spanish), administrative support in event activities."
    },
    {
      title: "Social and Business Events Coordination and Logistics",
      position: "Administration Assistant",
      functions: "Control, management, transport and setting up of the needed event material, entry and exit guests control, reception of the guests (English/Spanish), administrative support in event activities."
    }
  ];
}
