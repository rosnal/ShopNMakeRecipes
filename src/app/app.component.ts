import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _headerType;
  onHeaderClick(headerType : string){
    this._headerType = headerType;
  }
  isValid(type :string){
    return type === this._headerType;
  }
}
