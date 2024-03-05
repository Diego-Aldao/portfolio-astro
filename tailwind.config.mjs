/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"main-black": "#101010",
				"main-white": "#f2f2f2",
				"secondary-white": "#afafaf",
			}
		},
	},
	plugins: [],
}
