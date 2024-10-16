<script lang=ts>
    import { TextBase } from "$components/shared/text";
	import { ButtonPrimary } from "$components/shared/buttons";
	import { Icon } from "$components/shared/other";
    import { Dark, Light } from "$images/logo/index";
    import { links } from "./config";
</script>

{#snippet link(href: string, name: string)}
    <a href={href}>
        <TextBase>{name}</TextBase>
    </a>
{/snippet}

<header class="wrapper flex items-center justify-between h-14">
    <div class="flex items-center gap-16">
        <img class="hidden lg:block" src={Light} alt="logo"/>
        <img class="block lg:hidden" src={Dark} alt="logo"/>
        <ul class="flex gap-8 xl:hidden">
            {#each links as l}
                <li>{@render link(l.href, l.name)}</li>
            {/each}
        </ul>
    </div>
    
    <ButtonPrimary className="xl:hidden">
        <TextBase>Sign In</TextBase>
    </ButtonPrimary>

    <div class="hidden xl:flex">
        <Icon className="!text-heading lg:text-light-text-secondary" icon="lucide:menu"></Icon>
    </div>
</header>