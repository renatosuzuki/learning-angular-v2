import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Images } from '../models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  images: any;
  erro: any;

  constructor(private crudService: CrudService) {
    this.getter()
  }

  ngOnInit(): void {}

  getter() {
    this.crudService.getPhotos().subscribe(data => {
      this.images = data
      console.log(this.images)
    },error => {
      this.erro = error
      console.log(error)
    })
  }
}
