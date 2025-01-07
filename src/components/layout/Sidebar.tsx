import React from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  items: string[];
  position: 'left' | 'right';
  className?: string;
}

export default function Sidebar({ items, position, className = '' }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${styles[`sidebar-${position}`]} ${className}`.trim()}>
      <nav>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
