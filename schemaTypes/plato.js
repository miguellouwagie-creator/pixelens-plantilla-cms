import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'plato',
  title: 'Platos del Menú',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Nombre del Plato',
      type: 'string',
      validation: rule => rule.required() // Obligatorio
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'precio',
      title: 'Precio (ej: 12.50€)',
      type: 'string',
    }),
    defineField({
      name: 'imagen',
      title: 'Foto del Plato',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar el centro de interés de la foto
      },
    }),
    defineField({
        name: 'categoria',
        title: 'Categoría',
        type: 'string',
        options: {
            list: [
                {title: 'Entrantes', value: 'entrantes'},
                {title: 'Principales', value: 'principales'},
                {title: 'Postres', value: 'postres'},
                {title: 'Bebidas', value: 'bebidas'}
            ],
            layout: 'radio' // Botones redondos para elegir
        }
    })
  ],
})