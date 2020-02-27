function soma(a, b) {
  return a+b;
}

test('sum of two number', () => {
  const result = soma(4,5);
  expect(result).toBe(9); 
});