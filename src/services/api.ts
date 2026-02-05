import axios from 'axios';
import { Item, ItemFormData } from '../types/item';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const itemService = {
    async listAll(): Promise<Item[]> {
        const res = await api.get<Item[]>('/itens');
        return res.data;
    },

    async search(id: number): Promise<Item> {
        const res = await api.get<Item>(`/itens/${id}`);
        return res.data;
    },

    async create(data: ItemFormData): Promise<Item> {
        const res = await api.post<Item>('/itens', data);
        return res.data;
    },
    
    async refresh(id: number, data: Partial<ItemFormData>): Promise<Item> {
        const res = await api.put<Item>(`/itens/${id}`, data);
        return res.data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/itens/${id}`);
    }
};