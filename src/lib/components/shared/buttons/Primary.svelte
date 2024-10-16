<script lang=ts>
	import type { ClassType } from "$components/_types";
	import type { Snippet } from "svelte";
	import Button from "./Button.svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface Props extends HTMLButtonAttributes {
        className?: ClassType;
        children?: Snippet;
    }

    let { 
        className, 
        children,
        ...rest
    }: Props = $props();
</script>

<Button {...rest} {className}>
    {@render children?.()}
</Button>