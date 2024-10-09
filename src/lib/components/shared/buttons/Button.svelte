<script lang=ts>
    import type { Snippet } from "svelte";
	import { merge } from "$lib/utils/merge";
	import type { ClassType } from "$components/_types";
    import { type ButtonProps, buttonVariants } from './index';

    let { 
        className,
        props,
        children,
    }: { className?: ClassType, props?: ButtonProps, children?: Snippet } = $props();
</script>

<button
    class={merge(buttonVariants({ ...props }), className)}
>
    {#if children}
        {@render children()}
    {/if}
</button>