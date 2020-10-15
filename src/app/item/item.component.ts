import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemName;
  @Input() itemPrice;
  @Input() itemCategory;
  @Input() itemImgSrc;
  @Input() nbrArticles;
  @Input() id;

  constructor() { }

  ngOnInit(): void {
  }

}
