import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { expect } from 'chai';
import React from 'react';
import Button from './index';

describe('<Button>', () => {
  it('renders button', async () => {
    const { getByText } = render(<Button>Click me</Button>);

    const clickButton = getByText(/Click me/i);

    expect(document.body.contains(clickButton));
  });
});
