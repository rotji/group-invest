// HomePage.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage'; // Adjust the path if necessary

describe('HomePage', () => {
  test('renders welcome message and description', () => {
    render(<HomePage />);
    
    // Check if the main title is rendered
    const titleElement = screen.getByText(/welcome to the group investing platform/i);
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const paragraphElement = screen.getByText(/join groups to invest in stocks, betting, currencies, commodities and more/i);
    expect(paragraphElement).toBeInTheDocument();

    // Check if the additional content is rendered
    const additionalTextElement = screen.getByText(/the opportunity to invest smartly as a community is a game-changer/i);
    expect(additionalTextElement).toBeInTheDocument();
  });
});
