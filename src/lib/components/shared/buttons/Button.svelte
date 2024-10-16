<script lang=ts>
    import type { Snippet } from "svelte";
	import { merge } from "$lib/utils/merge";
	import type { ClassType } from "$components/_types";
    import { type ButtonProps, buttonVariants } from "./index";
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface Props extends HTMLButtonAttributes {
        className?: ClassType;
        props?: ButtonProps;
        children?: Snippet;
    }

    let { 
        className,
        props,
        children,
        ...rest
    }: Props = $props();
</script>

<button {...rest} class={merge(buttonVariants({ ...props }), className)}>
    {@render children?.()}
</button>