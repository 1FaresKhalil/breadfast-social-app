import React from 'react';
import renderer from 'react-test-renderer';
import UserAvatar from '../components/UserAvatar';

describe('<UserAvatar />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<UserAvatar userId={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
