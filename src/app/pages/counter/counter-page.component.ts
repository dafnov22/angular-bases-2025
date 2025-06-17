import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  // template: `
  //   <h1>Counter: {{counter}}</h1>
  //   <button (click)="increaseBy(1, $event)">+1</button>
  //   <button (click)="resetCounter()">Reset</button>
  //   <button (click)="increaseBy(-1, $event)">-1</button>
  // `,
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      margin: 5px 10px;
      padding: 10px;
      width: 75px;
      font-size: 16px;
      cursor: pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  // constructor() {
  //   setInterval(() => {
  //     this.counter += 1;
  //     this.counterSignal.update((current) => current + 1);
  //     console.log('Counter updated:', this.counter);
  //     // console.log('Counter signal updated:', this.counterSignal());
  //   }, 2000); // Update every second
  // }

  increaseBy(value: number, event: MouseEvent) {
    this.counter += value;
    this.counterSignal.update((current) => current + value); // => significa return implícito
    // console.log('Counter increased by 1');
    // console.log('Event:', event);
    // console.log('Current counter value:', this.counter);
    // You can also prevent default behavior if needed
    // event.preventDefault();
    // event.stopPropagation();
    // console.log('Event propagation stopped');
    // // You can also log the event target if needed
    // console.log('Event target:', event.target);
    // // You can also log the event type if needed
    // console.log('Event type:', event.type);
    // // You can also log the current timestamp if needed
    // console.log('Current timestamp:', new Date().toISOString());
    // // You can also log the current URL if needed
    // console.log('Current URL:', window.location.href);
    // // You can also log the current user agent if needed
    // console.log('User agent:', navigator.userAgent);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
