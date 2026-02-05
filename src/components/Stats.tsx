import React from 'react';
import type { Item } from '../types/item';

interface StatsProps {
  items: Item[];
}

export const Stats: React.FC<StatsProps> = ({ items }) => {
  const totalItems = items.length;
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="stats">
      <p>Total de itens: <strong>{totalItems}</strong></p>
      <p>Quantidade total: <strong>{totalQuantity}</strong></p>
    </div>
  );
};