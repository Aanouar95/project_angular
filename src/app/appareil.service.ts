import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  private items = [
    {
        "name":"iphone x",
        "category":"Smartphones",
        "price":400,
        "imgSrc":".././assets/img1.jpg",
        "nbrArticles":"20"

    },     
    {
        "name": "iphone xs",
        "category": "Smartphones",
        "price":    500,
        "imgSrc":".././assets/img2.jpg",
        "nbrArticles":"20"



    },
    {
        "name":"Tv Samsung LED",
        "category":"TV",
        "price":700,
        "imgSrc":".././assets/img3.jpg",
        "nbrArticles":"2"


    },
    {
        "name":"TV LG QLED",
        "category":"TV",
        "price":120,
        "imgSrc":".././assets/img4.jpg",
        "nbrArticles":"0"


    },
    {
        "name":"TV LG QLED",
        "category":"TV",
        "price":120,
        "imgSrc":".././assets/img5.jpg",
        "nbrArticles":"12"


    },
    {
        "name":"TV LG QLED",
        "category":"TV",
        "price":120,
        "imgSrc":".././assets/img6.jpg",
        "nbrArticles":"0"


    },
    {
        "name":"TV LG QLED",
        "category":"TV",
        "price":120,
        "imgSrc":".././assets/img6.jpg",
        "nbrArticles":"0"


    },
    {
        "name":"TV LG QLED",
        "category":"TV",
        "price":120,
        "imgSrc":".././assets/img6.jpg",
        "nbrArticles":"5"


    },
    {
        "name":"TV LG QLED",
        "category":"TV",
        "price":120,
        "imgSrc":".././assets/img6.jpg",
        "nbrArticles":"2"


    },
    {
        "name":"TV LG QLED",
        "category":"TV",
        "price":120,
        "imgSrc":".././assets/iphoneX.jpg"

        

    }
]


  constructor() { }

  getItems(){
    return this.items;
  }
}
