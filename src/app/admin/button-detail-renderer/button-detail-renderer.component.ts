import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-detail-renderer',
  templateUrl: './button-detail-renderer.component.html',
  styleUrls: ['./button-detail-renderer.component.css']
})
export class ButtonDetailRendererComponent implements OnInit {
  private params: any;
  constructor() { }
  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler1() {
    //this.params.clicked(this.params.value);
    console.log("im detail!!!!");
  }
  ngOnInit(): void {
  }

}
