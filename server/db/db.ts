import { Store, StoreData } from '../../models/shoppingList.ts';
import db from './connection.js';

export async function getStore(): Promise<Store[]> {
  return db('store')
  .select(
    'id',
    'item_name as itemName',
    'price',
    'stock_quantity as stockQuantity');
}

export async function addStock(newStock: StoreData): Promise<Store[]> {
  return db('store')
  .insert({
    item_name: newStock.itemName,
    price: newStock.price,
    stock_quantity: newStock.stockQuantity
})
  .returning(['*'])
}

export async function deleteStock(id: number) {
  return db('store').where({ id }).del()
}