import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { Call } from "@angular/compiler";


@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule {}
