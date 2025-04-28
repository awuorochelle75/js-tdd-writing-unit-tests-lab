// Your tests here
// src/__tests__/utils.test.js
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  it('returns true for a normal palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('mom')).toBe(true);
  });

  it('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
    expect(isPalindrome('hello')).toBe(false);
  });

  it('returns true for palindrome with mixed case', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('Mom')).toBe(true);
  });

  it('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  it('throws an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar!')).toThrow("Input must contain only alphabetic characters");
    expect(() => isPalindrome('123')).toThrow("Input must contain only alphabetic characters");
  });

  it('throws an error if input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
    expect(() => isPalindrome(undefined)).toThrow("Input must be a string");
  });
});
