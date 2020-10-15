import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
    items;

  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
      this.items = this.appareilService.getItems();
  }
  
}
