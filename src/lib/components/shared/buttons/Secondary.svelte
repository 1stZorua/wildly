<script lang=ts>
	import type { ClassType } from "$components/_types";
	import type { Snippet } from "svelte";
	import Button from "./Button.svelte";

    let { 
        className, 
        children 
    }: { className?: ClassType, children?: Snippet } = $props();
</script>

<Button
    {className}
    props={{ variant: 'secondary' }}
>
    {@render children?.()}
</Button>