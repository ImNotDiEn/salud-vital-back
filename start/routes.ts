/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| Define aquí todas las rutas HTTP de la aplicación. Puedes agruparlas,
| aplicar middlewares y establecer prefijos fácilmente.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router.get('/especialistas', '#controllers/especialistas_controller.index')
    router.get('/especialistas/inactivos', '#controllers/especialistas_controller.inactivos')
    router.post('/especialistas', '#controllers/especialistas_controller.store')
    router.get('/especialistas/:id', '#controllers/especialistas_controller.show')
    router.put('/especialistas/:id', '#controllers/especialistas_controller.update')
    router.delete('/especialistas/:id', '#controllers/especialistas_controller.destroy')
    router.post('/especialistas/:id/restaurar', '#controllers/especialistas_controller.restore')
    router.delete('/especialistas/:id/eliminar', '#controllers/especialistas_controller.delete')
  })
  .prefix('/api')
