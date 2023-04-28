<script lang="ts">
    import { createEventDispatcher } from "svelte";
    let formTitle;
    let formText;
    let formLink;
    let dispatchData;
    let dispatch = createEventDispatcher()
    function handleSubmit() {
        let topic: { title: any; text: any; link: any; } | null;
        let error: { error: boolean; message: string; };
        
        if (formTitle == undefined || formTitle == "" ||
                        formText == undefined ||formText == '' ||
                        formLink == undefined || formText == '') {
            error = {error: true, message: "Należy wypełnić wszystkie pola"}
            topic = null;
            console.log("ERROR")
        } else {
            topic = {
                title: formTitle,
                text: formText,
                link: formLink
            }
            error = {error: false, message: ''}

        }
        dispatchData = {error, topic}
        dispatch("addEntry", dispatchData)
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <!-- <p id="error-message" class={errorClass}>Test</p> -->
    <input type="text" size=100 placeholder="podaj tytuł" bind:value={formTitle}>
    <textarea placeholder="podaj treść" cols="100" rows="10" bind:value={formText}/>
    <input type="text" size=100 placeholder="podaj url" bind:value={formLink}>
    <button>Dodaj wpis</button>
</form>

