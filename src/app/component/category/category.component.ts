import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category1 = { categoryId: 1, categoryName: 'Mutfak' };
  category2 = { categoryId: 2, categoryName: 'Dvd' };
  category3 = { categoryId: 3, categoryName: 'Cd' };
  category4 = { categoryId: 4, categoryName: 'ne bileyim' };

  categories = [this.category1, this.category2, this.category3, this.category4];

  constructor() { }

  ngOnInit(): void { }
}
