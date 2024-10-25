<script lang=ts>
    import { ButtonSecondary, ButtonText } from "$components/shared/buttons";
    import { Avatar, Icon, Skeleton } from "$components/shared/other";
    import { TextBase, TextLarge, TextMedium } from "$components/shared/text";
    import { ScanPlantLeft, ScanPlantRight } from "$images/objects";
    import { Border } from "$images/other";
    import { enhance } from "$app/forms";
	import { fade, fly, slide } from "svelte/transition";
    import { Forest } from "$images/dogs";
    import type { UploadData } from "$lib/types/types";

    let { 
        form 
    }: { form: UploadData } = $props();

    let elForm: HTMLFormElement | null = $state(null);
    let fileInput: HTMLInputElement | null = $state(null);
    let imageUrl: string | null = $state(null);
    let isDrawerOpen: boolean = $state(false);

    let predictedBreed: string | null = $derived(form?.predictedBreed);
    let confidence: number = $derived(form?.confidence);
    let top: Array<{ breed: string; confidence: number}> = $derived(form?.top);

    function uploadImage(e: Event) {
        const files = (e.target as HTMLInputElement)?.files;
        if (!(files && files.length > 0))
            return;

        form = { ...form, predictedBreed: null };
        isDrawerOpen = false;

        const reader = new FileReader();
        reader.onload = () => {
            imageUrl = reader.result as string;
            elForm?.requestSubmit();
        }
        reader.readAsDataURL(files[0]);
    }

    const openFileDialog = () => fileInput?.click();
    const toggleDrawer = () => isDrawerOpen = !isDrawerOpen;
</script>

<section class="wrapper flex relative justify-between h-full lg:h-[40rem] lg:p-0 md:!h-screen md:-mb-[12.5rem] md:!pb-[12.5rem]">
    <img class="h-full 3xl:hidden" src={ScanPlantLeft} alt="plant"/>
    <div class="absolute -top-[8.5rem] left-0 -z-10 w-full h-[calc(100%+12.5rem)] hidden overflow-hidden lg:block md:!h-[100%]">
        <div class="absolute left-0 z-10 w-full h-full bg-black opacity-30"></div>
        <img class="h-full w-full object-cover" src={imageUrl ? imageUrl : Forest} alt="dog"/>
    </div>
    <form method="post" action="?/upload" enctype="multipart/form-data" bind:this={elForm} class="w-full relative flex flex-col items-center justify-center" use:enhance>
        <input bind:this={fileInput} type="file" class="hidden" name="image" accept="image/*" required onchange={uploadImage}>
        <div class="h-[40rem] relative w-full overflow-hidden lg:overflow-visible lg:h-full">
            {#if imageUrl}
                <img transition:fade class="absolute w-full h-full -z-10 rounded-xl lg:hidden" src={imageUrl} alt="dog"/>
            {/if}

            {#if !imageUrl}
                <div transition:fade class="flex flex-col h-full items-center justify-center gap-16 lg:text-light-text-secondary">
                    <img class="absolute w-full h-full -z-10 lg:hidden" src={Border} alt="border"/>
                    <div class="flex flex-col items-center gap-6">
                        <Icon className="!text-hero" icon="lucide:upload"></Icon>
                        <TextMedium>Drop your images here or browse.</TextMedium>
                    </div>
                    <ButtonSecondary onclick={openFileDialog}>
                        <TextBase>Upload Image</TextBase>
                    </ButtonSecondary>
                </div>
            {:else}
                <div in:fly={{ y: '50%', delay: 250 }} class="absolute z-10 bottom-0 p-8 flex flex-col gap-6 w-full bg-light-background-white-light lg:-bottom-16 lg:wrapper">
                    {#if !predictedBreed}
                        <div class="flex gap-6 w-full">  
                            <Skeleton className="w-[50px] h-[50px] rounded-full flex-shrink-0"></Skeleton>
                            <Skeleton className="w-full rounded-xl"></Skeleton>
                        </div> 
                        <div class="w-full h-1 bg-light-separator rounded-full"></div>
                    {:else}
                        <div in:fade class="flex items-center justify-between relative w-full">  
                            <TextLarge className="text-light-background-tertiary-dark">{predictedBreed}</TextLarge>
                            <div class="flex gap-6">
                                <ButtonText onclick={openFileDialog}>
                                    <Icon icon="lucide:upload"></Icon>
                                </ButtonText>
                                <ButtonText onclick={toggleDrawer}>
                                    <Icon icon={isDrawerOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'}></Icon>
                                </ButtonText>
                            </div>
                        </div> 
                        <div class="w-full h-1 bg-light-separator rounded-full"></div>
                        <div in:fade class="flex flex-col">
                            <TextLarge>The image you scanned looks {confidence}% like a {predictedBreed}.</TextLarge>
                            {#if isDrawerOpen}
                                <div transition:slide class="flex flex-col gap-6 relative mt-6 p-8 bg-light-separator rounded-lg lg:p-0 lg:bg-transparent">
                                    {#each top as { breed, confidence }}
                                        <div class="flex items-center gap-6">
                                            <Avatar src={imageUrl} size="4rem"></Avatar>
                                            <div class="flex flex-col justify-center">
                                                <TextLarge>{breed}</TextLarge>
                                                <TextMedium>{confidence}%</TextMedium>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    </form>
    <img class="h-full 3xl:hidden" src={ScanPlantRight} alt="plant"/>
</section>