<script lang=ts>
	import type { ClassType } from "$components/_types";
	import type { Snippet } from "svelte";
	import Button from "./Button.svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface Props extends HTMLButtonAttributes {
        className?: ClassType;
        href?: string;
        children?: Snippet;
    }

    let { 
        className, 
        href,
        children,
        ...rest
    }: Props = $props();
</script>

<Button {...rest} {className} {href} props={{ variant: "text" }}>
    {@render children?.()}
</Button>