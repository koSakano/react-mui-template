import { add } from '../sample';

test('数値同士の足し算を行うことができる', () => {
  const expected = 3;

  const result = add(1, 2);

  expect(result).toBe(expected);
});
