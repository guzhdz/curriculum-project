import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = "guzhdz28@gmail.com";

  goTo(path: string) {
    window.open(path, '_blank');
  }

}
