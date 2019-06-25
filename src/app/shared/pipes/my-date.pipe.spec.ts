import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe;
  
  beforeEach(() => {
    pipe = new MyDatePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null when pass invalid date string', () => {
    const input = 'ciasteczko';
    const output = null;
    expect(pipe.transform(input)).toEqual(output)
  });

  it('should return proper date string when passed UTC date string', () => {
    const input = 'Sun Nov 25 2018 01:57:04 GMT+0100 (czas środkowoeuropejski standardowy)';
    const output = '25 listopada 2018, 01:57:04';
    console.log(pipe.transform(input));
    expect(pipe.transform(input)).toEqual(output)
  });

});
