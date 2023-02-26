import { Component } from '@angular/core';
import { interval, take, map, filter, of, delay, repeat, takeUntil, skipUntil, last } from 'rxjs';

@Component({
  selector: 'app-advanced-single-stream',
  templateUrl: './advanced-single-stream.component.html',
  styleUrls: ['./advanced-single-stream.component.css']
})
export class AdvancedSingleStreamComponent {
  run1(): void {
    const numbers = interval(1000).pipe(take(20));
    const subscribe = numbers.subscribe(x => 
      of(x)
        .pipe(delay(200), repeat(1000), takeUntil(numbers))
      .subscribe(x => console.log(x)));
  }

  run2(): void {
    const numbers = interval(100).pipe(take(10));
    const repeatedNumbers = numbers.pipe(repeat());
    const subscribe = repeatedNumbers.subscribe(x => console.log(x));
  }

  run3(): void {
    const numbers = interval(1000).pipe(take(20));
    const even = numbers.pipe(
      filter(x => x % 2 == 0)
    );
    const subscribe = even.subscribe(x => {
      const repeated = of(x).pipe(delay(200), repeat(1000));

      

      repeated.subscribe(x => console.log(x))
    });
  }

  run4(): void {
    const numbers = interval(1000).pipe(take(20));
    const subscribe = numbers.subscribe(x => 
      of(x)
        .pipe(delay(400), repeat(5))
      .subscribe(x => console.log(x)));
  }
}
