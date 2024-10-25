<script lang=ts>
    import type { ClassType } from "$components/_types";
	import { merge } from "$lib/utils/merge";
	import type { Snippet } from "svelte";

    let { 
        className, 
        animate = true,
        children
    }: { className?: ClassType, animate?: boolean, children?: Snippet } = $props();
</script>

<div class={merge(`${animate ? 'bg-skeleton animate-loading bg-[length:200%_100%]' : 'bg-light-background-primary-light'}`, className)}>
    <div class="invisible">{@render children?.()}</div>
</div>