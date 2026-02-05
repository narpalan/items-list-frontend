import React from 'react';
import type { Item } from '../types/item';

interface ItemListProps {
  items: Item[];
  loading: boolean;
  onEdit: (item: Item) => void;
  onDelete: (id: number) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ 
  items, 
  loading, 
  onEdit, 
  onDelete 
}) => {
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhum item cadastrado. Adicione seu primeiro item!</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <span className={`quantidade ${item.quantity === 0 ? 'zero' : ''}`}>
                  {item.quantity}
                </span>
              </td>
              <td className="actions">
                <button 
                  className="btn btn-sm btn-edit"
                  onClick={() => onEdit(item)}
                >
                  Editar
                </button>
                <button 
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(item.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};