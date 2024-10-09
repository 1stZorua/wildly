<script lang=ts>
    import type { Snippet } from "svelte";
	import { merge } from "$lib/utils/merge";
	import type { ClassType } from "$components/_types";
    import { type TextProps, textVariants } from './index';

    let { 
        className,
        props,
        children,
    }: { className?: ClassType, props?: TextProps, children?: Snippet } = $props();
</script>

<span
    class={merge(textVariants({ ...props }), className)}
>
    {@render children?.()}
</span>