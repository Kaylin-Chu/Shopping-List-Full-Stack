/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('shopping_list', (table) => {
    table.string('item_name').references('store.item_name')
    //.notNullable();
    table.integer('quantity')
    //.notNullable().defaultTo(1);
    table.boolean('purchased')
    //.notNullable().defaultTo(false);
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('shopping_list')
}
