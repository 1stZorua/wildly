import { tv, type VariantProps } from 'tailwind-variants';

const textVariants = tv({
    variants: {
        weight: {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
        },
        family: {
            primary: 'font-primary',
            secondary: 'font-secondary',
            tertiary: 'font-tertiary'
        }
    },
    defaultVariants: {
        weight: 'medium',
        size: 'base',
        family: 'primary'
    }
})

type TextVariants = VariantProps<typeof textVariants>;

type Props = {
    weight?: TextVariants['weight'];
    size?: TextVariants['size'];
    family?: TextVariants['family'];
}

export {
    textVariants,
    type Props as TextProps
}

export { default as Text } from './Text.svelte';
export { default as TextSmall } from './Small.svelte';
export { default as TextBase } from './Regular.svelte';
export { default as TextLarge } from './Large.svelte';