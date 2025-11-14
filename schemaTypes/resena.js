import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resena',
  title: 'Reseñas de Clientes',
  type: 'document',
  fields: [
    defineField({
      name: 'autor',
      title: 'Nombre del Cliente',
      type: 'string',
      description: 'Ej: María García'
    }),
    defineField({
      name: 'texto',
      title: 'Opinión',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'puntuacion',
      title: 'Estrellas (1-5)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    }),
    defineField({
      name: 'plataforma',
      title: 'Fuente',
      type: 'string',
      options: {
        list: [
            {title: 'Google Maps', value: 'Google'},
            {title: 'TripAdvisor', value: 'TripAdvisor'},
            {title: 'Directo', value: 'Directo'}
        ],
        layout: 'radio'
      }
    })
  ],
  preview: {
    select: {
      title: 'autor',
      subtitle: 'puntuacion'
    }
  }
})