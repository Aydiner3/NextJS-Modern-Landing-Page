/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'text-color' : '#718096',
        'navbar-bg' : '#F7FAFC',
        'blue-text'    : '#03A9F4',
        'black-text'  : '#1A202C',
        'cta-bg' : '#E6F6FE',
        'menu-item' : '#2D3748',
        'text-color2' : '#718094',
        'cta-blue' : '#03A9F4'
      }
      
    },
  },
  plugins: [],
}
