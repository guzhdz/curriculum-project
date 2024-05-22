import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }

  downloadResume() {
    const download = document.createElement('a');
    download.href = "assets/Resume-Gustavo.pdf";
    download.download = "Resume-Gustavo.pdf";
    download.click();
  }
}
