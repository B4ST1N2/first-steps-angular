import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames:string[] = ['Spiderman','Ironman','Thor','Batman'];
    public heroDelete?:string;


    public removeLastHero():void{
      this.heroDelete = this.heroNames.pop();

    }
}
