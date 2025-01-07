import React from 'react';

interface FloatingPanelProps {
  title: string;
  content: string;
}

const FloatingPanel: React.FC<FloatingPanelProps> = ({ title, content }) => {
  return (
    <div className="floating-panel">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default FloatingPanel;
