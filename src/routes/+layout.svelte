<script lang=ts>
    import Header from '$components/layout/Header/Header.svelte';
    import type { Snippet } from 'svelte';
    import '../app.css';
    
    let { 
        children 
    }: { children: Snippet } = $props();
</script>

<div class="
    px-16 py-8
">
    <Header></Header>
    {#if children}
        {@render children()}
    {/if}
</div>