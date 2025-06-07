import type { HttpContext } from '@adonisjs/core/http'
import Especialista from '#models/especialista'
import { schema, rules } from '@adonisjs/validator'

export default class EspecialistasController {
  // Obtener todos los especialistas
  async index({ response }: HttpContext) {
    const especialistas = await Especialista.all()
    return response.ok(especialistas)
  }

  // Crear un nuevo especialista
  async store({ request, response }: HttpContext) {
    const especialistaSchema = schema.create({
      nombre_completo: schema.string({ trim: true }, [rules.maxLength(255)]),
      especialidad: schema.string({ trim: true }, [rules.maxLength(255)]),
      registro_profesional: schema.string({ trim: true }, [rules.maxLength(50)]),
      horarios_atencion: schema.object.optional().anyMembers(),
      activo: schema.boolean.optional(),
    })

    const payload = await request.validate({ schema: especialistaSchema })

    const existe = await Especialista.findBy('registro_profesional', payload.registro_profesional)
    if (existe) {
      return response.badRequest({ message: 'El registro profesional ya existe' })
    }

    const especialista = await Especialista.create(payload)
    return response.created(especialista)
  }

  // Mostrar un especialista por ID
  async show({ params, response }: HttpContext) {
    const especialista = await Especialista.find(params.id)
    if (!especialista) {
      return response.notFound({ message: 'Especialista no encontrado' })
    }
    return response.ok(especialista)
  }

  // Actualizar un especialista
  async update({ params, request, response }: HttpContext) {
    const especialista = await Especialista.find(params.id)
    if (!especialista) {
      return response.notFound({ message: 'Especialista no encontrado' })
    }

    const updateSchema = schema.create({
      nombre_completo: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
      especialidad: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
      registro_profesional: schema.string.optional({ trim: true }, [
        rules.maxLength(50),
        rules.unique({
          table: 'especialistas',
          column: 'registro_profesional',
          whereNot: { id: params.id },
        }),
      ]),
      horarios_atencion: schema.object.optional().anyMembers(),
      activo: schema.boolean.optional(),
    })

    const data = await request.validate({ schema: updateSchema })
    especialista.merge(data)
    await especialista.save()

    return response.ok(especialista)
  }

  // Eliminar un especialista
  async destroy({ params, response }: HttpContext) {
    const especialista = await Especialista.find(params.id)
    if (!especialista) {
      return response.notFound({ message: 'Especialista no encontrado' })
    }

    await especialista.delete()
    return response.ok({ message: 'Especialista eliminado correctamente' })
  }
}
