import React from 'react';
import renderer from 'react-test-renderer';
import PostCard from '../components/PostCard';

const post = {
  id: 1,
  user_id: 1,
  title: 'Test Post',
  body: 'This is a test post body.',
};

describe('<PostCard />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PostCard post={post} onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
