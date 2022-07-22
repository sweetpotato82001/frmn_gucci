import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-edit1-renderer',
  templateUrl: './button-edit1-renderer.component.html',
  styleUrls: ['./button-edit1-renderer.component.css']
})
export class ButtonEdit1RendererComponent implements OnInit {

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
