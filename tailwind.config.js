/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#323D4A',
          primaryDark: '#283442',
          secondary: '#84A3A7',
          sand: '#E8C991',
          eggShell: '#F3E9D9'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'walking-paws': 'url("/paw-bg.png")',
        'walking-paws-light': 'url("/paw-bg-light.png")',
        'walking-paws-light-top': 'url("/paws-bg-light-top.png")',
        'walking-paws-light-scattered': 'url("/paws-bg-light-scattered.png")',
      },
    },
  },
  plugins: [],
}
