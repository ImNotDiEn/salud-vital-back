import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Especialista extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public nombre_completo!: string

  @column()
  public especialidad!: string

  @column()
  public registro_profesional!: string

  @column()
  public horarios_atencion!: object

  @column()
  public activo!: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}
