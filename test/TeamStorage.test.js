import Team from "../src/TeamStorage.js";

test('True add and toArray', () => {
  const team = new Team();
  team.add('2');
  expect(team.toArray()).toEqual(['2']);
});

test('Error add', () => {
  const team = new Team();
  team.add('2');
  expect(() => team.add('2')).toThrow(new Error('Character already exists in the team'));
});

test('True addAll', () => {
  const team = new Team();
  team.addAll('2', '3', '1', '3');
  expect(team.toArray()).toEqual(['2', '3', '1']);
});
