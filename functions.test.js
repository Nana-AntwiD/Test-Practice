// functions.test.js
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions';

test('capitalize function', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('')).toBe('');
  expect(capitalize('a')).toBe('A');
});

test('reverseString function', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('')).toBe('');
  expect(reverseString('a')).toBe('a');
});

test('calculator functions', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.multiply(2, 4)).toBe(8);
});

test('caesarCipher function', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyzeArray function', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
