import React from 'react';

interface SidebarProps {
  items: string[];
  title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, title }) => (
  <aside className="sidebar">
    {title && <h2>{title}</h2>}
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
