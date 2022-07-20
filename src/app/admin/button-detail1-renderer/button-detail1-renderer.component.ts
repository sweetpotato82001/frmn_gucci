import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-detail1-renderer',
  templateUrl: './button-detail1-renderer.component.html',
  styleUrls: ['./button-detail1-renderer.component.css']
})
export class ButtonDetail1RendererComponent implements OnInit {
  private params: any;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler1() {
    //this.params.clicked(this.params.value);
    console.log("im edit!!!!");
  }
  btnClickedHandler2() {
    //this.params.clicked(this.params.value);
    console.log("im delete!!!!");
  }

  ngOnInit(): void {
  }
}
