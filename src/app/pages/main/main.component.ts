import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit{
  @ViewChild('profile') profile!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('studies') studies!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.profile.nativeElement)
  }

  categorySelect($event: string) {
    switch($event) {
      case '1':
        this.profile.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;

      case '2':
        this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      
      case '3':
        this.skills.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;

      case '4':
        this.projects.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;

      case '5':
        this.studies.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
    }
  }
}
