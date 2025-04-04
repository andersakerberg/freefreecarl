import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('communications', (table) => {
    table.increments('id').primary();
    table.string('type').notNullable();
    table.string('direction').notNullable();
    table.text('content').notNullable();
    table.timestamp('date').notNullable();
    table.string('participants');
    table.text('notes');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('communications');
} 