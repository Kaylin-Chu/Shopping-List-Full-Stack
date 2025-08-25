/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('store').del()
  await knex('store').insert([
    {id: 1, item_name: 'Apples', price: 0.50, stock_quantity: 100},
    {id: 2, item_name: 'Bread', price: 1.50, stock_quantity: 50},
    {id: 3, item_name: 'Milk', price: 1.00, stock_quantity: 75}
  ]);
};
