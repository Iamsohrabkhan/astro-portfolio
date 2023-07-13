/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		fontFamily:{
			grotesk: ["'Space Grotesk', 'sans-serif'"]
		},
		animation:{
			
			"slow-fade" : "fade 2s both"
		
		}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animated')
	],
}
