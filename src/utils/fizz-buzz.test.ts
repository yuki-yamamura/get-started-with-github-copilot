import { fizzBuzz } from './fizz-buzz';

describe('fizzBuzz', () => {
  test('returns "fizz" if the argument can be divided by 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
  });

  test('returns "buzz" if the argument can be divided by 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
  });

  test('returns "fizz-buzz" if the argument can be divided by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizz-buzz');
  });

  test('returns the argument itself if the cannot be divided by 3 or 5', () => {
    expect(fizzBuzz(19)).toBe('19');
  });
});
