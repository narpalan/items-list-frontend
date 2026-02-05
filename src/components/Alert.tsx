import React from 'react';

interface AlertProps {
  message: string;
  type?: 'error' | 'success' | 'warning';
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ message, type = 'error', onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span>⚠️ {message}</span>
      {onClose && <button onClick={onClose}>×</button>}
    </div>
  );
};