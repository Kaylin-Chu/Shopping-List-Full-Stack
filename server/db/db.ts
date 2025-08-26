import {ShoppingList} from '../../models/shoppingList.ts';
import db from './connection.js';

export async function getStore(): Promise<ShoppingList[]> {
  return db('store')
  .select(
    'id',
    'item_name as itemName',
    'price',
    'stock_quantity as stockQuantity');
}