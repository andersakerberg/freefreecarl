import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('evidence', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.string('type').notNullable();
    table.string('source').notNullable();
    table.timestamp('date_added').notNullable();
    table.string('file_path');
    table.text('notes');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('evidence');
} 