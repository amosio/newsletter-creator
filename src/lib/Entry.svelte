<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let title:string;
    export let text:string;
    export let link:string;

    let dispatch = createEventDispatcher()
    const handleDelete = () => {
        dispatch("delEntry", title)
    }

</script>
<h3>{title}</h3>

<p>{text}</p>

<p>{link}</p>

<button on:click={handleDelete}>Usuń wpis</button>

<hr/>