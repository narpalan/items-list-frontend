import React from 'react';
import type { ItemFormData } from '../types/item';

interface ItemFormProps {
  formData: ItemFormData;
  editingId: number | null;
  showForm: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
}

export const ItemForm: React.FC<ItemFormProps> = ({
  formData,
  editingId,
  showForm,
  onSubmit,
  onInputChange,
  onCancel
}) => {
  if (!showForm) return null;

  return (
    <div className="form-card">
      <h2>{editingId ? '✏️ Editar Item' : '➕ Novo Item'}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
            placeholder="Digite o nome do item"
            autoFocus
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={onInputChange}
            required
            min="0"
            step="1"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingId ? 'Atualizar' : 'Salvar'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};