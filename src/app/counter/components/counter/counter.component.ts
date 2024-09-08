import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
            <h1>Contador: {{counter}}</h1>
            <button (click)="changeCounter(+1)">+1</button>
            <button (click)="reset()">Reset</button>
            <button (click)="changeCounter(-1)">-1</button>
            `,
})

export class CounterComponent {
  public counter : number = 10;

  public changeCounter(value:number):void{
    this.counter += value;
  }

  public reset():void {this.counter = 10;}

}
