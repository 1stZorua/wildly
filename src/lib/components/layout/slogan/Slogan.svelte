<script lang=ts>
    import { TextLarge, TextHeading } from "$components/shared/text";
    import { Curious } from "$images/dogs";
    import { Lamp, Ladder } from "$images/objects";
</script>

<section class="wrapper flex items-center justify-center gap-[10%] mt-48 lg:-mt-16 lg:flex-col lg:gap-16">
    <div class="relative flex flex-col justify-center items-center gap-12 lg:gap-0 lg:w-full">
        <img class="absolute -z-10 w-[13rem] h-[52rem] lg:h-[105vw] lg:rotate-90" src={Ladder} alt="ladder"/>
        <div class="flex justify-center mt-8 w-[360px] h-[210px] min-w-[290px] rounded-xl bg-light-background-secondary-light lg:hidden">
            <img class="object-cover" src={Lamp} alt="lamp"/>
        </div>
        <div class="flex justify-center overflow-hidden items-end w-[360px] h-[360px] rounded-xl bg-light-background-primary-light lg:w-full">
            <img class="h-[20rem]" src={Curious} alt="dog"/>
        </div>
    </div>
    <div class="flex flex-col gap-2 max-w-[45%] lg:max-w-full">
        <TextHeading className="text-nowrap lg:text-wrap">Elevate your knowledge</TextHeading>
        <TextLarge className="text-wrap">Unconver the unique characteristics of your pet and strengthen your bond.</TextLarge>
    </div>
</section>