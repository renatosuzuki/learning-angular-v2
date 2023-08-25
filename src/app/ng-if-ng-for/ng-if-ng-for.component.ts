import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.css'],
})
export class NgIfNgForComponent implements OnInit {
  numero: any;
  arrNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {}

  getValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
