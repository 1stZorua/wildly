<script lang=ts>
    import type { ClassType } from "$components/_types";
	import { merge } from "$lib/utils/merge";

    let { 
        className, 
        src,
        alt = "Avatar",
        size = "100%"
    }: { className?: ClassType, src: string, alt?: string, size?: string } = $props();
</script>

<div class={merge("object-cover rounded-full overflow-hidden", className)} style={`width: ${size}; height: ${size};`}>
    <img {src} {alt} />
</div>