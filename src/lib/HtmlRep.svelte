<script lang="ts">
    export let content: string;
    const copyAll = () => {
        console.log("kopiuje do schowka")
        if (content) navigator.clipboard.writeText(content)
    }
</script>

<div>
    <textarea cols="100" rows="25" readonly value={content}></textarea>
    <div>
        <button on:click={copyAll}>Kopiuj wynik</button>
    </div>
</div>