import { tv, type VariantProps } from "tailwind-variants";

const textVariants = tv({
    base: "leading-tight",
    variants: {
        weight: {
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        size: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            md: "text-md",
            lg: "text-lg",
            xl: "text-xl",
            heading: "text-heading",
            hero: "text-hero"
        },
        family: {
            primary: "font-primary",
            secondary: "font-secondary",
            tertiary: "font-tertiary"
        }
    },
    defaultVariants: {
        weight: "medium",
        size: "base",
        family: "primary"
    }
})

type TextVariants = VariantProps<typeof textVariants>;

export {
    textVariants,
    type TextVariants as TextProps
}

export { default as Text } from "./Text.svelte";
export { default as TextSmall } from "./Small.svelte";
export { default as TextBase } from "./Regular.svelte";
export { default as TextMedium } from "./Medium.svelte";
export { default as TextLarge } from "./Large.svelte";
export { default as TextHeading } from "./Heading.svelte";
export { default as TextHero } from "./Hero.svelte";