import { Component } from '@angular/core';
import { fromEvent, interval } from 'rxjs';

// const secondsCounter = interval(2000);
// Subscribe to begin publishing values
// const subscription = secondsCounter.subscribe((n) =>
//   console.log(`It's been ${n + 1} seconds since subscribing!`)
// );
// console.log(subscription);

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent {}
