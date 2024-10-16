import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
    base: "md:max-w-full",
    variants: {
        variant: {
            primary: "px-9 py-3 border-2 border-light-btn-primary-color rounded-full",
            secondary: "max-w-fit px-9 py-5 bg-light-btn-secondary-background text-light-btn-secondary-color rounded-full",
            action: "max-h-fit p-4 bg-light-btn-action-background rounded-md",
            circle: "flex items-center justify-center p-12 bg-light-text-secondary rounded-full transition-colors",
            text: "",
            disabled: "bg-red-500",
        },
        size: {
            default: "",
            sm: "",
            lg: "",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "default",
    }
})

type ButtonVariants = VariantProps<typeof buttonVariants>;

type Props = {
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
}

export {
    buttonVariants,
    type Props as ButtonProps
}

export { default as Button } from "./Button.svelte";
export { default as ButtonPrimary } from "./Primary.svelte";
export { default as ButtonSecondary } from "./Secondary.svelte";
export { default as ButtonAction } from "./Action.svelte";
export { default as ButtonCircle } from "./Circle.svelte";
export { default as ButtonText } from "./Text.svelte";