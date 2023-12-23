import ErrorRepository from "../src/ErrorStorage.js";

test('Errors true', () => {
  const errorsData = [
    ['444', 'Character already exists in the team'],
  ];
  const errors = new ErrorRepository(errorsData);
  expect(errors.translate('444')).toBe('Character already exists in the team');
});

test('Errors error', () => {
  const errorsData = [
    ['444', 'Character already exists in the team'],
  ];
  const errors = new ErrorRepository(errorsData);
  expect(errors.translate('333')).toEqual('Unknown error');
});