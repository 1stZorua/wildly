<script lang=ts>
	import { ButtonPrimary } from "$components/shared/buttons";
    import { TextBase } from "$components/shared/text";
    import { links } from "./config";
    import logo from "$lib/images/logo.svg";
</script>

{#snippet link(href: string, name: string)}
    <a href={href}>
        <TextBase>{name}</TextBase>
    </a>
{/snippet}

<header 
    class="
        flex
        items-center
        justify-between
">
    <div class="
        flex
        items-center
        gap-16
    ">
        <img 
            src={logo} 
            alt="logo"
        />
        <ul
            class="
                flex
                gap-8
        ">
            {#each links as l}
                <li>
                    {@render link(l.href, l.name)}
                </li>
            {/each}
        </ul>
    </div>
    
    <ButtonPrimary>
        <TextBase>Sign In</TextBase>
    </ButtonPrimary>
</header>