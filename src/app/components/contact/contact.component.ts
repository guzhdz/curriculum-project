import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = "guzhdz28@gmail.com";

  goToGithub() {
    window.open('https://github.com/guzhdz', '_blank');
  }
}
