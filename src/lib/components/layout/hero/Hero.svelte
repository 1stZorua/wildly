<script lang="ts">
    import { Text, TextBase, TextSmall, TextMedium, TextHero } from "$components/shared/text";
    import { ButtonSecondary, ButtonAction } from "$components/shared/buttons";
    import { Avatar, Icon } from "$components/shared/other";
    import { Happy, Nature } from "$images/dogs";
    import { Plank, Plant } from "$images/objects";
    import { Person_1, Person_2, Person_3 } from "$images/other";

    const persons = [
        Person_1, 
        Person_2, 
        Person_3
    ];
</script>

<section class="relative flex justify-between items-center -mb-16 3xl:gap-14 md:h-screen">
    <div class="wrapper flex flex-col gap-14 max-w-[42.5%] absolute 3xl:z-20 3xl:max-w-[65%] xl:!max-w-full lg:text-light-text-secondary">
        <div class="flex flex-col gap-14 xl:gap-6">
            <TextHero className="text-balance leading-[100%]">Find your pets' true nature</TextHero>
            <TextMedium className="-mt-2 md:text-pretty 3xl:max-w-[80%] xl:!max-w-full">Get to know your pet better with the use of AI technology, by downloading the app below.</TextMedium>
        </div>
        <ButtonSecondary className="flex items-center justify-center gap-4 !max-w-fit">
            <Icon icon="lucide:download"></Icon>
            <TextBase>Download now</TextBase>
        </ButtonSecondary>
        <div class="flex items-center gap-6 mt-12 3xl:hidden">
            <div class="flex relative">
                {#each Array(3) as _, i}
                    <Avatar className={(i != 0 ? "-ml-8" : "") + " border-[6px] border-white"} src={persons[i]}></Avatar>
                {/each}
            </div>
            <TextMedium>18K+ Downloads</TextMedium>
        </div>
    </div>
    <div class="absolute -top-[8.5rem] -z-10 w-full h-full hidden overflow-hidden lg:block">
        <div class="absolute left-0 z-10 w-full h-full bg-black opacity-30"></div>
        <img class="h-full w-full object-cover" src={Nature} alt="dog"/>
    </div>
    <div class="wrapper flex flex-col items-center ml-auto 3xl:w-full 3xl:items-end 3xl:blur-sm lg:invisible">
        <div class="relative bg-light-background-secondary-light w-[40rem] h-[44rem] rounded-t-lg overflow-hidden 3xl:mr-24 3xl:-z-10">
            <img class="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover 3xl:min-h-[80%] 3xl:opacity-50" src={Happy} alt="dog"/>
            <div class="flex justify-between relative h-full p-5">
                <ButtonAction className="flex">
                    <Icon icon="lucide:scan-line"></Icon>
                </ButtonAction>
                <ButtonAction className="flex items-center gap-4 self-end">
                    <Avatar className="bg-light-background-primary-light" src={Happy} size="50px"></Avatar>
                    <div class="flex flex-col items-start">
                        <Text props={{ weight: "bold" }}>Dog</Text>
                        <TextSmall className="text-light-text-gray-dark">Miniature Schnauzer</TextSmall>
                    </div>
                </ButtonAction>
            </div>
        </div>
        <div class="relative w-[52rem]">
            <img class="absolute bottom-1/2 left-8" src={Plant} alt="plant"/>
            <img class="w-fullleft-24" src={Plank} alt="plank"/>
        </div>
    </div>
</section>