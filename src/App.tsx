import React, { useState, useEffect } from 'react';
import type { Item, ItemFormData } from './types/item';
import { itemService } from './services/api';
import { Header } from './components/Header';
import { Alert } from './components/Alert';
import { ItemForm } from './components/ItemForm';
import { ItemList } from './components/ItemList';
import { Stats } from './components/Stats';
import './App.css';

function App() {
  const [itens, setItens] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ItemFormData>({ name: '', quantity: 0 });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  
  const loadItens = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await itemService.listAll();
      setItens(data);
    } catch (err) {
      setError('Erro ao carregar itens');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItens();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    if (name === 'quantity') {    
      const numValue = value === '' ? 0 : parseInt(value);
      setFormData(prev => ({
        ...prev,
        [name]: isNaN(numValue) ? 0 : numValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      if(editingId) {
        const newEditingItem = await itemService.refresh(editingId, formData);
        setItens(prev => prev.map(item =>
          item.id === editingId ? newEditingItem : item
        ));
        setEditingId(null);
      } else {
        const newItem = await itemService.create(formData);
        setItens(prev => [...prev, newItem]);
      }

      setFormData({ name: '', quantity: 0 });
      setShowForm(false);
      setError(null);
    } catch (err) {
      setError('Erro ao salvar item');
      console.log(err);
    }
  };

  const handleEdit = (item: Item) => {
    setFormData({ name: item.name, quantity: item.quantity});
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if(!window.confirm('Tem certeza que deseja excluir este item?')) return;

    try {
      await itemService.delete(id);
      setItens(prev => prev.filter(item => item.id !== id));
      setError(null);
    } catch (err) {
      setError('Erro ao excluir item');
      console.log(err);
    }
  };

  const handleEditCancel = () => {
    setFormData({ name: '', quantity: 0 });
    setEditingId(null);
    setShowForm(false);
  };

return (
    <div className="app">
      <Header/>      

      <main className="main">
        {error && (
          <Alert
            message={error}
            type='error'
            onClose={() => setError(null)}
          />
        )}

        <div className="controls">
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
            disabled={showForm && !editingId}
          >
            + Novo Item
          </button>
        </div>

       <ItemForm
          formData={formData}
          editingId={editingId}
          showForm={showForm}
          onSubmit={handleSubmit}
          onInputChange={handleInputChange}
          onCancel={handleEditCancel}
        />

        <div className="card">
          <h2>📋 Lista de Itens</h2>
          
          <ItemList
            items={itens}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          
          <Stats items={itens} />
        </div>
      </main>
    </div>
  );
}

export default App;
