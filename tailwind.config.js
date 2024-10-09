/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				light: {
					btn: {
						primary: {
							color: '#202E3B',
							background: '',
							hover: ''
						},
						secondary: {
							color: '#FFFFFF',
							background: '#204A5A',
							hover: ''
						},
						tertiary: {
							color: '#204A5A',
							background: '#FFFFFF',
							hover: ''
						}
					},
					icon: {
						color: '#204A5A',
						hover: ''
					},
					text: {
						primary: '#202E3B',
						secondary: '#FFFFFF',
						gray: {
							light: '#9E9E9E',
							dark: '#6B6B6B'
						},
						accent: '#204A5A',
						error: ''
					},
					separator: '#F2F2F2',
					background: {
						primary: {
							light: '#D1E9F3',
							dark: ''
						},
						secondary: {
							light: '#86ABB1',
							dark: ''
						},
						tertiary: {
							light: '#2F6073',
							dark: '#204A5A'
						}
					}
				}
			},
			fontFamily: {
				primary: ['Poppins', 'sans-serif'],
				secondary: ['Fredoka', 'sans-serif']
			}
		},
		fontSize: {
			xs: 'clamp(0.25rem, 3.5vw, 0.5rem)',
			sm: 'clamp(0.75rem, 3.5vw, 1rem)',
			base: 'clamp(1rem, 3.5vw, 1.25rem)',
			lg: 'clamp(1.375rem, 4vw, 2.25rem)',
			xl: 'clamp(1.5rem, 4vw, 2.5rem)'
		},
		screens: {
			sm: { max: '576px' },
			md: { max: '768px' },
			lg: { max: '1024px' },
			xl: { max: '1280px' }
		}
	},
	plugins: []
};
