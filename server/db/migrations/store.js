/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('store', (table) => {
    table.increments('id').primary();
    table.string('item_name')
    //.notNullable().unique();
    // 10 digits in total, 2 of which are after the decimal point
    table.decimal('price', 10, 2)
    //.notNullable();
    table.integer('stock_quantity')
    //.notNullable().defaultTo(0);
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('store');
};
