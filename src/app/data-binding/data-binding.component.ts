import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  texto: string


  constructor() {
    this.texto = ""
   }

  ngOnInit(): void {
  }

  getValue(event: Event) {
    return (event.target as HTMLInputElement).value
  }

}
