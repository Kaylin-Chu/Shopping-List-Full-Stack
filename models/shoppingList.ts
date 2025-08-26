export interface ShoppingList {
  itemName: string;
  quantity: number;
  isPurchased: boolean
}

export interface Store{
  itemName: string;
  price: number;
  stockQuantity: number;
}

export interface StoreData extends Store{
  id: number
}