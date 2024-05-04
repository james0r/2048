/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'dark-beige': 'var(--color-dark-beige)',
        'light-beige': 'var(--color-light-beige)',
        'flint': 'var(--color-flint)',
        'bush': 'var(--color-bush)',
        'aths-special': 'var(--color-aths-special)',
        'yellow': 'var(--color-yellow)',
        'orange': 'var(--color-orange)',
      },
    },
	},
	plugins: [],
}
