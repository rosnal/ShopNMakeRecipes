import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerselect = new EventEmitter<string>();
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
  onHeaderClick(text : string){
    this.headerselect.emit(text);
  }
}
