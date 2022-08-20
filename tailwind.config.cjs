/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false,
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: false
	}
};
