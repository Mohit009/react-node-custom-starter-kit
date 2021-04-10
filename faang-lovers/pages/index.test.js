import React from 'react';
import renderer from 'react-test-renderer';
import ComponentUnderTest from './index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <ComponentUnderTest />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});