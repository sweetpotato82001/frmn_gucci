import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-cell-renderer',
  templateUrl: './button-cell-renderer.component.html',
  styleUrls: ['./button-cell-renderer.component.css']
 
})
export class ButtonCellRendererComponent implements OnInit {
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
