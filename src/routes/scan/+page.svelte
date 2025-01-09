<script lang=ts>
    import { Upload } from "$components/layout";
    import type { UploadData } from "$lib/types/types";

    let { 
        form 
    }: { form: UploadData } = $props();
</script>

<Upload {form}></Upload>