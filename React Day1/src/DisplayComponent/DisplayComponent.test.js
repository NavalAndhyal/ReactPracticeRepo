import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayComponent from './DisplayComponent';

describe('<DisplayComponent />', () => {
  test('it should mount', () => {
    render(<DisplayComponent />);
    
    const displayComponent = screen.getByTestId('DisplayComponent');

    expect(displayComponent).toBeInTheDocument();
  });
});