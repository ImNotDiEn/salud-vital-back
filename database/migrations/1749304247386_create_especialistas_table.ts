import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Especialistas extends BaseSchema {
  protected tableName = 'especialistas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre_completo', 255).notNullable()
      table.string('especialidad', 255).notNullable()
      table.string('registro_profesional', 50).notNullable().unique()
      table.json('horarios_atencion').nullable()
      table.boolean('activo').defaultTo(true)
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
