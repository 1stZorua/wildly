<script lang=ts>
	import type { ClassType } from "$components/_types";
	import type { Snippet } from "svelte";
	import Text from "./Text.svelte";

    let { 
        className, 
        children 
    }: { className?: ClassType, children?: Snippet } = $props();
</script>

<Text
    {className}
>
    {@render children?.()}
</Text>