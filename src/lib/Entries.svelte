<script>
    import Entry from "./Entry.svelte";
    import { createEventDispatcher } from "svelte";
    export let entries;

    let dispatch = createEventDispatcher()
    // let dellEntry = (e) => {
    //     dispatch("delEntry", e.detail)
    // }
</script>

{#each entries as entry}
    <Entry on:delEntry {...entry}/>
{/each}