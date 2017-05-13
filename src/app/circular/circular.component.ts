import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

    public happyText = "Menager on Vecation....";

    public myTodos = ['my first item',
        'my second item',
        'my third item',
        'my fourth item'
    ];

  constructor() { }

  ngOnInit() {
      this.happyText = "Manager is sike";
  }

  makeHappyer() {
      this.happyText = "Manager got fired...";
  }

}
