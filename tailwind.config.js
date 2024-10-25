/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				loading: 'loading 1s linear infinite'
			},
			keyframes: {
				loading: {
					'0%': { backgroundPosition: '100% 0' },
					'100%': { backgroundPosition: '-100% 0' }
				}
			},
			backgroundImage: {
				skeleton: 'linear-gradient(90deg, #D1E9F3 25%, #B0D4E1 50%, #D1E9F3 75%);'
			},
			borderRadius: {
				md: '1rem',
				lg: '1.25rem',
				xl: '2.5rem'
			},
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
						action: {
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
						white: {
							light: '#FFFFFF',
							dark: '#000000'
						},
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
						},
						quaternary: {
							light: '#F2EEE3',
							dark: ''
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
			xs: 'clamp(0.25rem, 3vw, 0.5rem)',
			sm: 'clamp(0.75rem, 3vw, 1rem)',
			base: 'clamp(1rem, 3vw, 1.25rem)',
			md: 'clamp(1.125rem, 3vw, 1.5rem)',
			lg: 'clamp(1.125rem, 4vw, 2rem)',
			xl: 'clamp(1.5rem, 4vw, 2.25rem)',
			heading: 'clamp(1.75rem, 4vw, 4rem)',
			hero: 'clamp(2rem, 5vw, 6rem)',
			mega: 'clamp(12rem, 30vw, 25rem)'
		},
		screens: {
			sm: { max: '576px' },
			md: { max: '768px' },
			lg: { max: '1024px' },
			xl: { max: '1280px' },
			'2xl': { max: '1440px' },
			'3xl': { max: '1600px' }
		}
	},
	plugins: []
};