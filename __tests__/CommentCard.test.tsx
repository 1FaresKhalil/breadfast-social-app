import React from 'react';
import renderer from 'react-test-renderer';
import CommentCard from '../components/CommentCard';

describe('<CommentCard />', () => {
  it('renders correctly', () => {
    const comment = {
      id: 1,
      post_id: 1,
      name: 'Test User',
      body: 'This is a test comment.',
    };
    const tree = renderer.create(<CommentCard comment={comment} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
