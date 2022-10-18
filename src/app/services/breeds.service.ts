import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  breedsListURL: string = "https://dog.ceo/api/breeds/list/all"
  imageFromBreedURL: string = "https://dog.ceo/api/breed/Affenpinscher/images/random"
  constructor(private http: HttpClient) { }
  private actuallyBreedBehaviour = new BehaviorSubject<string>('');
  actuallyBreed = this.actuallyBreedBehaviour.asObservable();
  setActuallyBreed (actuallyBreed: string) {
    this.actuallyBreedBehaviour.next(actuallyBreed)
  }

  getAllBreeds() {
    return this.http.get(this.breedsListURL)
  }

  getImageFromBreed(breed: string) {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`)
  }
}
