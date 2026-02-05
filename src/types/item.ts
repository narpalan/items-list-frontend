export type Item = {
    id: number;
    name: string;
    quantity: number;
}

export type ItemFormData = Omit<Item, 'id'>;