/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false,
	theme: {
		fontFamily: {
			Eulyoo1945: ['Eulyoo1945']
		},
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['garden']
	}
};
