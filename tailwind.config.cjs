/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-9deg)' },
					'50%': { transform: 'rotate(9deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
