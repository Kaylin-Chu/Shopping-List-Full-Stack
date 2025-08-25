import { ShoppingList } from '../models/store.js';
import db from './connection.js';

export async function getShopping() {
  return db('store')
  .select('*');
}
