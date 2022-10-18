import { Component, OnInit } from '@angular/core';
import {BreedsService} from "../../services/breeds.service";
import {readDataFromObject} from "../../models/global-interfaces";
import {Router} from "@angular/router";


@Component({
  selector: 'app-breed-info',
  templateUrl: './breed-info.component.html',
  styleUrls: ['./breed-info.component.css']
})
export class BreedInfoComponent implements OnInit {
  imageSrc: string = "https://www.dogstrust.ie/sponsor/_media/mystery-dog/133330dog-gallery.dog-profile-mobile-mystery-1.jpg";
  breedName: string = "????????";
  disabledBreedButton: boolean = true;

  constructor(private breedsService: BreedsService, private router: Router) { }

  ngOnInit(): void {
    this.breedsService.actuallyBreed.subscribe((res) => {
      if(res){
        this.disabledBreedButton = false
        this.breedName = res
        this.breedsService.getImageFromBreed(res).subscribe((res: readDataFromObject) => {this.imageSrc = res['message']})
      }
    })
  }

  openInfoAboutBreed() {
    let url = 'https://en.wikipedia.org/wiki/' + this.breedName;
    if(!this.disabledBreedButton){
      window.open(url, '_blank');
    }
  }
}
