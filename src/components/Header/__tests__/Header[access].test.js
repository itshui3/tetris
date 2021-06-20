import React from 'react';

import { render, screen } from '@testing-library/react';

import Header from '../Header';

test('header renders', () => {
    render(<Header />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
});