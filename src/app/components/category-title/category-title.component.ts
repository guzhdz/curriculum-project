import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-title',
  templateUrl: './category-title.component.html',
  styleUrl: './category-title.component.css'
})
export class CategoryTitleComponent {
  @Input() title: string = "";
}
