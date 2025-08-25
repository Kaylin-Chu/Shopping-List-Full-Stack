/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('shopping_list').del()
  await knex('shopping_list').insert([
    {item_name: 'Apples', quantity: 5, purchased: false},
    {item_name: 'Milk',  quantity: 2, purchased: true},
    {item_name: 'Bread',  quantity: 1, purchased: false}
  ]);
};
