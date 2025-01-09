import React from "react";
// Update the import path to the correct location
import styles from "../../src/components/layout/Sidebar.module.css"; // Updated import path

interface SidebarProps {
  items: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
