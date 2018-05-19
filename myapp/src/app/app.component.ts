import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private a:string ="10";
  private b:string="20";
  private c:number;

  add()
  {
    alert("hii");
    this.c=parseInt(this.a)+parseInt(this.b);
  }
  
}


