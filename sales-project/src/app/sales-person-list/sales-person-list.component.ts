import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  // create an array of person objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Laura', 'Luo', 'kdsfhglkd@gamil.com', 235435),
    new SalesPerson('Laura', 'Luo', 'kdsfhglkd@gamil.com', 235435),
    new SalesPerson('Laura', 'Luo', 'kdsfhglkd@gamil.com', 235435),
    new SalesPerson('Laura', 'Luo', 'kdsfhglkd@gamil.com', 235435),
  ];

  constructor() {}

  ngOnInit(): void {}
}
