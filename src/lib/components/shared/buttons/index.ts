import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
    base: 'px-9 py-3',
    variants: {
        variant: {
            primary: 'border-2 border-light-btn-primary-color rounded-full',
            secondary: '',
            disabled: 'bg-red-500',
        },
        size: {
            default: '',
            sm: '',
            lg: '',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default',
    }
})

type ButtonVariants = VariantProps<typeof buttonVariants>;

type Props = {
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
}

export {
    buttonVariants,
    type Props as ButtonProps
}

export { default as Button } from './Button.svelte';
export { default as ButtonPrimary } from './Primary.svelte';
export { default as ButtonSecondary } from './Secondary.svelte';