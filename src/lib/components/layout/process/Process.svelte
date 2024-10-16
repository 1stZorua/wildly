<script lang=ts>
    import { Text, TextLarge, TextHeading } from "$components/shared/text";
    import { ButtonCircle } from "$components/shared/buttons";
    import { Running } from "$images/dogs";
    import { Easel } from "$images/objects";
    import { steps } from "./config";

    let activeStepIndex = $state(0);
</script>

<section class="wrapper flex 3xl:bg-light-background-tertiary-dark 3xl:items-center 3xl:p-0">
    <div class="flex flex-col justify-center relative gap-40 w-full before:absolute before:w-screen before:h-full before:bg-light-background-tertiary-dark before:-translate-x-[50vw] before:-z-10 3xl:gap-20 3xl:wrapper 3xl:py-16">
        <div class="flex flex-col gap-1">
            <div class="flex -mb-4 text-light-background-secondary-light">
                <Text props={{ family: "secondary", size: "lg" }}>{activeStepIndex + 1}</Text>
                <Text props={{ family: "secondary", size: "sm", weight: "bold" }} className="mt-[0.5%]">{activeStepIndex == 0 ? "ST" : activeStepIndex == 1 ? "ND" : "TH"}</Text>
                <Text props={{ family: "secondary", size: "lg" }} className="ml-2">STEP</Text>
            </div>
            <div class="flex flex-col gap-2 text-light-text-secondary max-w-[80%] z-10 3xl:max-w-full">
                <TextHeading className="">{steps[activeStepIndex].title}</TextHeading>
                <TextLarge>{steps[activeStepIndex].description}</TextLarge>    
            </div>
        </div>
        <div class="flex gap-6 3xl:flex-wrap md:gap-4">
            {#each Array(4) as _, i}
                <ButtonCircle onclick={() => activeStepIndex = i} className={`relative hover:bg-light-background-tertiary-light hover:text-light-text-secondary ${activeStepIndex == i ? "bg-light-background-tertiary-light text-light-text-secondary" : ""} md:p-8`}>
                    <Text className="absolute" props={{ size: "xl" }}>{i + 1}</Text>
                </ButtonCircle>
            {/each}
        </div>
    </div>
    <div class="w-full relative before:absolute before:w-screen before:h-full before:bg-light-background-primary-light before:-z-10 3xl:hidden">
        <div class="flex flex-col items-center justify-end h-full w-full">
            <img class="h-[80%] max-h-[80%] max-w-[80%] rounded-t-xl" src={Running} alt="dog"/>
            <img class="max-w-[80%]" src={Easel} alt="stand"/>
        </div>
    </div>
</section>