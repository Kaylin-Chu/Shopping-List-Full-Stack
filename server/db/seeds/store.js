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

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */
// export async function seed(knex) {
//   // Deletes ALL existing entries
//   await knex('shopping_list').del()
//   await knex('shopping_list').insert([
//     {item_name: 'Apples', quantity: 5, purchased: false},
//     {item_name: 'Milk',  quantity: 2, purchased: true},
//     {item_name: 'Bread',  quantity: 1, purchased: false}
//   ]);
// };