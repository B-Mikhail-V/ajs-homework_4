import health from '../src/health';

test.each([
  [{ name: 'Ann', health: 51 }, 'healthy'],
  [{ name: 'Nick', health: 50 }, 'wounded'],
  [{ name: 'Nick', health: 15 }, 'wounded'],
  [{ name: 'John', health: 14 }, 'critical'],
])('testing health for %o status should be %s', (person, healthStatus) => {
  const result = health(person);
  expect(result).toBe(healthStatus);
});
