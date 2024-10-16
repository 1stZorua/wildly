<script lang=ts>
    import { Header, Footer } from "$components/layout";
    import type { Snippet } from "svelte";
    import "iconify-icon";
    import "../app.css";
    
    let { 
        children 
    }: { children?: Snippet } = $props();
</script>

<div class="flex flex-col gap-16 pt-8 max-w-[120rem] m-auto lg:pt-4">
    <Header></Header>
    {@render children?.()}
    <Footer></Footer>
</div>