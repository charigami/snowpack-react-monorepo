import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { expect } from 'chai';
import React from 'react';
import App from './App';

describe('<App>', () => {
  it('renders learn react link', async () => {
    const { getByText } = render(<App />);

    await waitForElementToBeRemoved(() => getByText(/Loading/i));
    const clickButton = getByText(/Click me/i);

    expect(document.body.contains(clickButton));
  });
});
