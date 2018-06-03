import {greeter} from '../src/greeter';

test('test greeter', () => {
  expect(greeter({firstName: 'Jane', lastName: 'User'}))
      .toBe('Hello Jane User');
});
