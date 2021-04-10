import React from 'react';
import renderer from 'react-test-renderer';
import FormikTest from './FormikTest';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <FormikTest />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});