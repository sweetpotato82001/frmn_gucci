import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-detail2-renderer',
  templateUrl: './button-detail2-renderer.component.html',
  styleUrls: ['./button-detail2-renderer.component.css']
})
export class ButtonDetail2RendererComponent implements OnInit {

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
