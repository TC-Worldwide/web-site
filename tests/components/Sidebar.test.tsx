import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from './Sidebar';

const items = ['Item 1', 'Item 2', 'Item 3'];

describe('Sidebar component', () => {
  it('renders all items', () => {
    const { getByText } = render(<Sidebar items={items} />);
    items.forEach(item => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it('applies the correct styles', () => {
    const { container } = render(<Sidebar items={items} />);
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('sidebar');
  });

  it('renders a title', () => {
    const title = 'Sidebar Title';
    const { getByText } = render(<Sidebar items={items} title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });
});
