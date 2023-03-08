import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit, OnDestroy {
  private subject = new Subject<string>();
  private behaviorSubject = new BehaviorSubject<string>("behaviorSubject: 1");
  private replaySubject = new ReplaySubject<string>();
  private asyncSubject = new AsyncSubject<string>();

  private subscriptions: Subscription[] = []

  public subjectValue: string = "";
  public behaviorSubjectValue: string = "";
  public replaySubjectValue: string = "";
  public asyncSubjectValue: string = "";

  ngOnInit(): void {
    this.subscriptions.push(
      this.subject.subscribe(x => console.log(x)),
      this.behaviorSubject.subscribe(x => console.log(x)),
      this.replaySubject.subscribe(x => console.log(x)),
      this.asyncSubject.subscribe(x => console.log(x)),
    );
  }

  addValue(subjectType: number): void {
    switch (subjectType) {
      case 1:
        this.subject.next(`subject: ${this.subjectValue}`);
        break;
      case 2:
        this.behaviorSubject.next(`behaviorSubject: ${this.behaviorSubjectValue}`);
        break;
      case 3:
        this.replaySubject.next(`replaySubject: ${this.replaySubjectValue}`);
        break;
      case 4:
        this.asyncSubject.next(`asyncSubject: ${this.asyncSubjectValue}`);
        break;
      default:
        break;
    }
  }

  complete(subjectType: number): void {
    switch (subjectType) {
      case 1:
        this.subject.complete();
        break;
      case 2:
        this.behaviorSubject.complete();
        break;
      case 3:
        this.replaySubject.complete();
        break;
      case 4:
        this.asyncSubject.complete();
        break;
      default:
        break;
    }
  }

  getCurrentValue(): void {
    const currentValue = this.behaviorSubject.getValue();
    console.log(currentValue);
  }

  addSubscriber(): void {
    this.subscriptions.push(
      this.replaySubject.subscribe(x => console.log(x))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
