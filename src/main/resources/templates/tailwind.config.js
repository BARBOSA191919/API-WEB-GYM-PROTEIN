/** @type {import('tailwindcss').Config} */
module.exports = {
  // Especifica los archivos que Tailwind CSS debe analizar para generar las clases de estilo.

  content: [
    "./src/**/*.{html,ts}",
  ],
  //darkMode: 'class',
  // Configuración para el tema de Tailwind CSS.
  theme: {
    extend: {
      // Extiende o añade colores personalizados al tema.
      colors: {
        // Define un color primario con diferentes tonos.
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      }
    },
    // Define las fuentes personalizadas para el tema.
    fontFamily: {
      // Define una fuente llamada 'body' que se utilizará para el cuerpo del texto.
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        // Lista de fuentes preferidas, se usarán en orden de preferencia.
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  // Lista de plugins que Tailwind CSS utilizará.
  plugins: [],
}

