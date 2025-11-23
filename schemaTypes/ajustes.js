import { defineField, defineType } from 'sanity'

// --- LISTAS PREDEFINIDAS (Para que el dueño solo haga clic) ---
const tiempos = [
  '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30',
  '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45', '22:00', '22:15', '22:30'
];

const capacidades = [
  '1 Persona', '2 Personas', '3 Personas', '4 Personas', '5 Personas', '6 Personas',
  '7-8 Personas', '8-10 Personas', '10+ (Grupo)', 'Eventos Privados'
];

const zonasLocal = [
  'Salón Principal', 'Terraza', 'Barra', 'Patio Interior', 'Zona VIP', 'Ventana (Vistas)'
];

export default defineType({
  name: 'ajustes',
  title: 'Configuración de la Web',
  type: 'document',
  fields: [

    // --- 1. DATOS LEGALES (Obligatorios para Europa) ---
    defineField({
      name: 'razonSocial',
      title: 'Razón Social (Nombre Legal)',
      type: 'string',
      description: 'El nombre oficial para las facturas. Ej: Mario Rossi S.L.'
    }),
    defineField({
      name: 'dominioWeb',
      title: 'Dominio de la Web',
      type: 'string',
      description: 'La dirección web sin https. Ej: pizzeriamario.com'
    }),
    defineField({
      name: 'cif',
      title: 'CIF / NIF',
      type: 'string',
      description: 'Identificación fiscal. Ej: B-12345678'
    }),

    // --- 2. DATOS DE CONTACTO PÚBLICOS ---
    defineField({ name: 'nombreRestaurante', title: 'Nombre Comercial', type: 'string' }),
    defineField({ name: 'telefono', title: 'Teléfono de Reservas', type: 'string' }),
    defineField({ name: 'email', title: 'Email de Contacto', type: 'string' }),
    defineField({ name: 'direccion', title: 'Dirección Física', type: 'text', rows: 2 }),
    defineField({
      name: 'logo',
      title: 'Logo de la Web',
      type: 'image',
      options: { hotspot: true }
    }),

    // --- 3. PORTADA HOME (HERO) ---
    defineField({
      name: 'tituloHero',
      title: 'Título Principal (Home)',
      type: 'string',
      description: 'Ej: Bienvenido a La Goleta'
    }),
    defineField({
      name: 'descripcionHero',
      title: 'Subtítulo de Bienvenida',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'imagenHero',
      title: 'Imagen de Fondo (Home)',
      type: 'image',
      options: { hotspot: true }
    }),

    // --- 4. MOTOR DE RESERVAS INTELIGENTE ---
    defineField({
      name: 'configReservas',
      title: '⚙️ Configuración del Formulario de Reservas',
      type: 'object',
      description: 'Define aquí qué opciones aparecen en los desplegables de la web.',
      fields: [
        defineField({
          name: 'opcionesComensales',
          title: 'Capacidades Aceptadas',
          description: 'Selecciona los tamaños de mesa que aceptas.',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: capacidades.map(cap => ({ title: cap, value: cap }))
          }
        }),
        defineField({
          name: 'horarios',
          title: 'Horarios Disponibles (Turnos)',
          description: 'Selecciona las horas exactas de entrada.',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: tiempos.map(t => ({ title: t, value: t }))
          }
        }),
        defineField({
          name: 'zonas',
          title: 'Zonas del Restaurante',
          description: '¿Dónde se puede sentar el cliente?',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: zonasLocal.map(z => ({ title: z, value: z }))
          }
        })
      ]
    }),

    // --- 5. SISTEMA DE DISEÑO (PERSONALIZACIÓN VISUAL) ---
    defineField({
      name: 'design',
      title: '🎨 Personalización Visual',
      type: 'object',
      description: 'Personaliza los colores y tipografía del sitio web.',
      fields: [
        defineField({
          name: 'colorBrand',
          title: 'Color Principal (Marca)',
          type: 'string',
          initialValue: '#c2410c'
        }),
        defineField({
          name: 'colorDark',
          title: 'Color Oscuro (Textos/Fondos)',
          type: 'string',
          initialValue: '#0f172a'
        }),
        defineField({
          name: 'colorSurface',
          title: 'Color de Fondo Suave',
          type: 'string',
          initialValue: '#fafaf9'
        }),
        defineField({
          name: 'fontPreset',
          title: 'Estilo de Tipografía',
          type: 'string',
          initialValue: 'serif',
          options: {
            list: [
              { title: 'Elegante (Playfair)', value: 'serif' },
              { title: 'Moderno (Inter)', value: 'sans' },
              { title: 'Minimalista (Montserrat)', value: 'mono' }
            ],
            layout: 'radio'
          }
        })
      ]
    })
  ],
})