<script lang=ts>
    import type { ClassType } from "$components/_types";
	import { merge } from "$lib/utils/merge";

    let { 
        className, 
        icon
    }: { className?: ClassType, icon: string } = $props();
</script>

<iconify-icon class={merge("text-xl", className)} {icon}></iconify-icon>