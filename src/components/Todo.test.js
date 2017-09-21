import React from 'react';
import renderer from 'react-test-renderer'
import Todo from './Todo'

it('renders without crashing', () => {
  const div = renderer.create(<Todo todo={{text: "test", id: 1, done: false}}/>).toJSON();
  expect(div).toMatchSnapshot();
});
