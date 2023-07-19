/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				dark:"rgb(30 41 59)"
			},
		fontFamily:{
			grotesk: ["'Space Grotesk', 'sans-serif'"]
		},
		keyframes: {
			animatedgradient: {
			  '0%': { backgroundPosition: '0% 50%' },
			  '50%': { backgroundPosition: '100% 50%' },
			  '100%': { backgroundPosition: '0% 50%' },
			},
		  },

		animation:{			
			"slow-fade" : "fade 2s both",	
			gradient: 'animatedgradient 6s ease infinite alternate',	
		},
		backgroundSize: {
			'300%': '300%',
		  },
	


		},

	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animated')
	],
}
