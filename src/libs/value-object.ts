export class ValueObject<T extends number | string | Date, U extends string> {
  private valueObjectBrand!: U;

  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  equals(that: ValueObject<T, U>): boolean {
    return this.value.valueOf() === that.value.valueOf();
  }
}
