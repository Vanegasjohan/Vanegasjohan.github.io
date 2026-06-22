/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['media'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "520px",
				xl: "620px"
			},
			padding: '2rem',
		},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			colors: {
				// Light mode colors
				'light-theme': '#F1F5F9',
				'primary-light': '#2563EB',
				'primary-hover-light': '#3B82F6',

				// Dark mode colors
				'dark-theme': '#0B1120',
				'primary-dark': '#2563EB',
				'primary-hover-dark': '#3B82F6',

				// Accent
				'accent': '#06B6D4',
				'accent-hover': '#22D3EE',

				// Secondary
				'secondary': '#1E3A8A',

				// Neutrals
				'n200': '#CBD5E1',
				'n900': '#0B1120',
				'n700': '#1E293B',
				'n500': '#64748B',
			},
    	}
    },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
