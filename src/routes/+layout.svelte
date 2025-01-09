<script lang=ts>
    import { Header, Footer } from "$components/layout";
    import { getFlash } from "sveltekit-flash-message/client";
    import { page } from "$app/stores";
    import { Toaster, toast } from 'svelte-sonner'
    import type { Snippet } from "svelte";
    import "iconify-icon";
    import "../app.css";

    const flash = getFlash(page);

    $effect(() => {
        switch ($flash?.type) {
            case "success":
                toast.success($flash.message);
                break;
            case "error":
                toast.error($flash.message);
                break;
            case "loading":
                toast.loading($flash.message);
                break;
        }
    })

    $inspect($flash?.type)
    
    let { 
        children 
    }: { children?: Snippet } = $props();
</script>

<Toaster position="top-center" richColors  />

<div class="flex flex-col gap-16 pt-8 max-w-[120rem] m-auto lg:pt-4">
    <Header></Header>
    {@render children?.()}
    <Footer></Footer>
</div>
