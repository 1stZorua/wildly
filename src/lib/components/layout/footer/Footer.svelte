<script lang=ts>
    import { Text, TextBase, TextHeading } from "$components/shared/text";
    import { ButtonCircle } from "$components/shared/buttons";
	import { Icon } from "$components/shared/other";
    import { Light } from "$images/logo";
    import { Brave } from "$images/dogs";
    import { sections, links } from "./config";
</script>

<section class="wrapper flex bg-light-background-white-dark z-0 3xl:gap-0 3xl:flex-col-reverse 3xl:p-0">
    <div class=" w-full text-light-text-gray-light relative before:absolute before:w-screen before:h-full before:bg-light-background-white-dark before:-translate-x-[50vw] before:-z-20 before:top-0">
        <div class="flex flex-col gap-[8.25rem] h-full py-12 pr-40  3xl:wrapper 3xl:pb-8">
            <div class="flex justify-between items-center lg:flex-col lg:items-start">
                <img class="self-start w-48 lg:w-36" src={Light} alt="logo"/>
                <TextBase className="max-w-[60%] mt-2 3xl:mx-auto lg:!m-0 lg:max-w-full">
                    Your go-to app for discovering and learning about dog breeds through innovative scanning technology.
                </TextBase>
            </div>
            <div class="flex justify-between gap-16 flex-wrap sm:justify-normal">
                {#each sections as section}
                    <div class="flex flex-col gap-2">
                        <Text className="text-light-text-secondary" props={{ size: "md", weight: "bold" }}>{section.title}</Text>
                        <div class="flex flex-col">
                            {#each section.contents as content }
                                <TextBase>{content}</TextBase>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
            <div class="flex justify-between flex-wrap gap-4 text-light-text-secondary mt-auto sm:justify-normal">
                {#each links as link}
                    <Text props={{ weight: "light" }}>{@html link}</Text>
                {/each}
            </div>
        </div>
    </div>
    <div class="flex flex-col items-end gap-3 w-full pt-12 relative before:absolute before:w-screen before:h-full before:bg-light-background-secondary-light before:-z-10 before:top-0 before:left-0 3xl:items-start 3xl:wrapper 3xl:pb-16">
        <div class="flex flex-col gap-12 max-w-[80%] 3xl:w-screen 3xl:max-w-full">
            <div class="flex flex-col text-light-text-secondary mt-2">
                <TextBase className="text-light-background-primary-light">News</TextBase>
                <TextHeading className="-mt-2">Stay paws-itively updated</TextHeading>
            </div>
            <TextBase className="relative w-full h-full overflow-hidden">
                <input class="w-full py-6 pl-8 pr-24 rounded-full outline-none placeholder:text-light-text-gray-dark sm:pr-16" type="text" placeholder="Enter your email...">
                <ButtonCircle className="absolute right-0 py-9 px-10 h-full top-0 bg-light-background-tertiary-dark sm:bg-opacity-0">
                    <Icon className="absolute text-light-text-secondary sm:text-light-background-tertiary-dark" icon="lucide:arrow-right"></Icon>
                </ButtonCircle>
            </TextBase>
        </div>
        <img class="3xl:hidden" src={Brave} alt="dog"/>
    </div>
</section>