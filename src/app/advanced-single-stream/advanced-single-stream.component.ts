import { Component } from '@angular/core';
import { interval, take, of, delay, repeat, mergeMap, switchMap, exhaustMap, filter, concatMap } from 'rxjs';

@Component({
  selector: 'app-advanced-single-stream',
  templateUrl: './advanced-single-stream.component.html',
  styleUrls: ['./advanced-single-stream.component.css']
})
export class AdvancedSingleStreamComponent {
  run1(): void {
    const numbers = interval(1000).pipe(take(20));
    const repeatedNumbers = numbers.pipe(
      switchMap(x => of(x).pipe(delay(200), repeat(1000)))
    );
    const subscribe = repeatedNumbers.subscribe(x => console.log(x));
  }

  run2(): void {
    const numbers = interval(1000).pipe(take(20)); 
    const repeatedNumbers = numbers.pipe(
      concatMap(x => interval(100).pipe(take(10)))
    );
    const subscribe = repeatedNumbers.subscribe(x => console.log(x));
  }

  run3(): void {
    const numbers = interval(1000).pipe(take(20));
    const repeatedNumbers = numbers.pipe(
      filter(x => x % 2 == 0),
      exhaustMap(x => of(x).pipe(delay(400), repeat(5)))
    );
    const subscribe = repeatedNumbers.subscribe(x => console.log(x));
  }

  run4(): void {
    const numbers = interval(1000).pipe(take(20));
    const repeatedNumbers = numbers.pipe(
      mergeMap(x => of(x).pipe(delay(300), repeat(5)))
    );
    const subscribe = repeatedNumbers.subscribe(x => console.log(x));
  }
}
