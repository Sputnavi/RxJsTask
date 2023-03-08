import { Component } from '@angular/core';
import { interval, take, map, filter, combineAll, zip, combineLatest, last, forkJoin } from 'rxjs';

@Component({
  selector: 'app-multiple-streams',
  templateUrl: './multiple-streams.component.html',
  styleUrls: ['./multiple-streams.component.css']
})
export class MultipleStreamsComponent {
  run1(): void {
    const source1 = interval(200).pipe(take(10),map((val) => 'source1 val = ' + val));
    const source2 = interval(300).pipe(take(10),map((val) => 'source2 val = ' + val));
    const source3 = interval(400).pipe(take(10),map((val) => 'source3 val = ' + val));

    const combined = combineLatest([source1, source2, source3]);

    const subscribe = combined.subscribe(([x1, x2, x3]) => console.log(x1, x2, x3));
  }

  run2(): void {
    const source1 = interval(200).pipe(take(10),map((val) => 'source1 val = ' + val));
    const source2 = interval(300).pipe(take(10),map((val) => 'source2 val = ' + val));
    const source3 = interval(400).pipe(take(10),map((val) => 'source3 val = ' + val));

    const subscribe = forkJoin([source1, source2, source3])
      .subscribe(([x1, x2, x3]) => console.log(x1, x2, x3));
  }

  run3(): void {
    const source1 = interval(200).pipe(take(10),map((val) => 'source1 val = ' + val));
    const source2 = interval(300).pipe(take(10),map((val) => 'source2 val = ' + val));
    const source3 = interval(400).pipe(take(10),map((val) => 'source3 val = ' + val));

    const combined = zip(source1, source2, source3);

    const subscribe = combined.subscribe(x => console.log(x));
  }
}
