import { MyCustomDatePipe } from './my-custom-date.pipe';

describe('MyCustomDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCustomDatePipe();
    expect(pipe).toBeTruthy();
  });
});
