import { render } from '@testing-library/react';
import React from 'react';

import List from '../../components/List';

describe('List', () => {
  it('should be able to render a List passing some props', () => {
    const { getByText, getByTestId } = render(
      <List
        elements={[
          <>
            <p data-testid="test">test</p>
          </>,
        ]}
        title="Title"
      />,
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByTestId('test')).toBeInTheDocument();
  });
});
