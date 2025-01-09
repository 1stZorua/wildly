<script lang=ts>
	import { slide } from "svelte/transition";
    import { TextBase, TextMedium, TextLarge, TextHeading } from "$components/shared/text";
    import { ButtonText } from "$components/shared/buttons";
	import { Icon } from "$components/shared/other";
    import { sections } from "./config";

    let activeSectionIndex = $state(0);
    let activeQuestionIndex = $state(0);
</script>

<section class="wrapper flex flex-col gap-10 h-full md:gap-0">
    <TextHeading className="self-center md:self-start">Woof you like to know?</TextHeading>
    <div class="flex gap-[5%] md:flex-col">
        <div class="flex flex-col gap-4 py-10 md:flex-row">
            {#each {length: sections.length} as _, i}
                <ButtonText 
                    className={`flex items-center gap-6 p-6 rounded-lg transition-colors hover:text-light-text-accent hover:bg-light-background-primary-light ${activeSectionIndex == i ? "text-light-text-accent bg-light-background-primary-light" : ""}`} 
                    onclick={() => {
                        activeSectionIndex = i;
                        activeQuestionIndex = 0;
                    }}
                >
                    <Icon icon={sections[i].icon}></Icon>
                    <TextLarge className="lg:hidden">{sections[i].title}</TextLarge>
                </ButtonText>
            {/each}
        </div>
        <div class="bg-light-separator w-1 rounded-full md:w-full md:h-1"></div>
        <div class="flex flex-col gap-6 w-full py-10 md:pb-0">
            {#each sections[activeSectionIndex].questions as element, i}
                <div class="flex flex-col">
                    <div class="flex justify-between">
                        <TextMedium className={activeQuestionIndex == i ? "text-light-text-accent" : ""}>{element.question}</TextMedium>
                        <ButtonText className="flex" onclick={() => activeQuestionIndex = activeQuestionIndex == i ? -1 : i}>
                            <Icon icon={activeQuestionIndex == i ? "lucide:chevron-up" : "lucide:chevron-down"}></Icon>
                        </ButtonText>
                    </div>
                    {#if activeQuestionIndex == i}
                        <div class="mt-1" transition:slide>
                            <TextBase className="text-light-text-gray-dark">{element.answer}</TextBase>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>