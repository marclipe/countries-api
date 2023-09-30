/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('country', function(table) {
    table.increments('id').primary();
    table.string("name").notNullable();
    table.string("population").notNullable(); 
    table.string("flag").notNullable();
    // table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("countries")
};
