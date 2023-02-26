import { Component } from '@angular/core';
import { interval, take, map, filter, of, delay, repeat } from 'rxjs';

@Component({
  selector: 'app-advanced-single-stream',
  templateUrl: './advanced-single-stream.component.html',
  styleUrls: ['./advanced-single-stream.component.css']
})
export class AdvancedSingleStreamComponent {
  run1(): void {
    const numbers = interval(1000).pipe(take(20));
    const subscribe = numbers.subscribe(x => of(x).pipe(delay(200),repeat(1000)).subscribe(x => console.log(x)));
  }

  run2(): void {
    const numbers = interval(1000).pipe(take(20));
    const tookNumbers = numbers.pipe(take(7));
    const subscribe = tookNumbers.subscribe(x => console.log(x));
  }

  run3(): void {
    const numbers = interval(1000).pipe(take(20));
    const evenNumbers = numbers.pipe(filter(x => x % 2 == 0));
    const subscribe = evenNumbers.subscribe(x => console.log(x));
  }

  run4(): void {
    const numbers = interval(1000).pipe(take(20));
    const evenNumbers = numbers.pipe(filter(x => x % 2 == 0));
    const subscribe = evenNumbers.subscribe(x => console.log(x));
  }
}
