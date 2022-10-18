import { Component, OnInit } from '@angular/core';
import {BreedsService} from "../../services/breeds.service";
import {readDataFromObject} from "../../models/global-interfaces";


@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.css']
})
export class BreedsListComponent implements OnInit {
  actuallyBreed: string = 'Open this select menu';
  breedsList: any = [];
  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.breedsService.getAllBreeds().subscribe((res: readDataFromObject) => {
      this.breedsList = Object.keys(res['message'])
    })
    console.log(this.breedsList)
  }

  setActuallyBreed(){
    if(this.actuallyBreed === "Open this select menu"){
      return
    }
    this.breedsService.setActuallyBreed(this.actuallyBreed)
  }

}
