export interface ShoppingList {
  itemName: string;
  quantity: number;
  isPurchased: boolean
}

export interface Store{
  id: number;
  itemName: string;
  price: number;
  stockQuantity: number;
}