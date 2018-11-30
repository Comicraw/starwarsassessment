import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class FormComponent implements OnInit {

  dropdown = new FormControl('')
  input = new FormControl('')

  results: Object

  constructor(private data: DataService) { }

  fetchData() {
    this.data.getData(this.dropdown.value, this.input.value).subscribe(data => {
      this.results = JSON.stringify(data)
    })
  }

  ngOnInit() {

  }
}