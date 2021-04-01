import { render } from '@testing-library/react';
import React from 'react';

import Button from '../../components/Button';

describe('Button', () => {
  it('should be able to render the default Button', () => {
    const { getByText } = render(<Button>test</Button>);

    expect(getByText('test')).toBeTruthy();
  });

  it('should be able to render a outlined Button', () => {
    const { getByText } = render(<Button outlined>test</Button>);

    expect(getByText('test')).toHaveStyle('background: transparent');
  });
});
