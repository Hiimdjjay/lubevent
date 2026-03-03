/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgButton: 'rgb(255 255 255 / <alpha-value>)'
			}
		}
	},
	plugins: []
};
