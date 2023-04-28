<script lang="ts">
    import Entries from './lib/Entries.svelte';
    import Form from './lib/Form.svelte';
    import HtmlRep from './lib/HtmlRep.svelte';
    import {generateHtmlRep} from './lib/utils/app'
    import {dateToISO, dateToLocal, ISOToDate} from './lib/utils/dates'
    let entries: [{title: string, text: string, link: string}]|any=[]
    let setDate = new Date()
    $: isoDate = dateToISO(setDate)
    $: localDate = dateToLocal(setDate)
    let mainErrorMsg: string = ''
    let errorClass: "visible" | "invisible"="invisible"
    let displayError = (message: string) => {
        mainErrorMsg = message
        errorClass = 'visible'
    }
    let hideError = () => {
        mainErrorMsg = ""
        errorClass = 'invisible'
    }
    const updateDate = (e) => {
        setDate = ISOToDate(e.target.value)
    }

    $: htmlRep = generateHtmlRep(entries, localDate)
    const addEntry = (e) => {
        let { topic, error } = e.detail
        if (error.error) {
            displayError(error.message)
            return
        }
        if (entries.some(e => e.title == topic.title)) {
            displayError("Tytuł każdego wydarzenia powinien być unikatowy")
            return
        }
        hideError()
        entries = [...entries, topic]
    }
    const dellEntry = (e) => {
        entries = [ ...entries.filter(etnry => etnry.title !== e.detail)]
        hideError()
    }
</script>

<main>
  <div>
    <input type="date" value={isoDate} on:change={(e) => updateDate(e)}>
    <Entries on:delEntry={dellEntry} entries={entries}/>
    <div class="{errorClass}">{mainErrorMsg}</div>
    <Form on:addEntry={addEntry}/>
    <HtmlRep content={htmlRep}/>
  </div>
</main>

<style lang="scss">
    .invisible {
        display: none;
    }
    .visible {
        background: pink;
        color: black;
        font-weight: 700;
    }
    :global(input, textarea) {
            display: block;
            margin: 0.5rem;
    }
</style>

