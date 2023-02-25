import { Component } from '@angular/core';
import { filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-simple-single-stream',
  templateUrl: './simple-single-stream.component.html',
  styleUrls: ['./simple-single-stream.component.css']
})
export class SimpleSingleStreamComponent {
  run1(): void {
    const numbers = interval(300).pipe(take(20));
    const multipliedNumbers = numbers.pipe(map(x => x * 3));
    const subscribe = multipliedNumbers.subscribe(x => console.log(x));
  }

  run2(): void {
    const numbers = interval(300).pipe(take(20));
    const tookNumbers = numbers.pipe(take(7));
    const subscribe = tookNumbers.subscribe(x => console.log(x));
  }

  run3(): void {
    const numbers = interval(300).pipe(take(20));
    const evenNumbers = numbers.pipe(filter(x => x % 2 == 0));
    const subscribe = evenNumbers.subscribe(x => console.log(x));
  }
}
