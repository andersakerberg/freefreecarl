import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('case_details', (table) => {
    table.increments('id').primary();
    table.string('case_number').notNullable();
    table.string('plaintiff').notNullable();
    table.string('defendant').notNullable();
    table.text('description').notNullable();
    table.string('status').notNullable();
    table.timestamp('start_date').notNullable();
    table.timestamp('end_date');
    table.text('notes');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('case_details');
} 