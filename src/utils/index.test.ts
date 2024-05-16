import { combineFirstAndLastCharacters } from '.';

describe('combineFirstAndLastCharacters', () => {
  test('returns the first and last characters of a string', () => {
    expect(combineFirstAndLastCharacters('hello')).toBe('ho');
  });

  describe('if the argument is less than 2 characters long', () => {
    test('throw an error with "Argument must be at least 2 characters long"', () => {
      expect(() => combineFirstAndLastCharacters('a')).toThrow(
        'Argument must be at least 2 characters long',
      );
    });
  });
});
