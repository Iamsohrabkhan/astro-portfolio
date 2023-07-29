/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				dark:"#20232A"
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
			"spin-slow": "spin 10s linear infinite",
			gradient: 'animatedgradient 6s ease infinite alternate',	
		},
		backgroundSize: {
			'300%': '300%',
		  },
		  backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  }
		},

	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animated')
	],
}
