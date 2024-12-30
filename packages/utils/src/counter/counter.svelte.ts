export class Counter {
  count = $state<number>(0);

  constructor(initial = 0) {
    this.count = initial;
  }

  increment() {
    this.count = this.count + 1;
  }
}
