import { prefix, doctype } from './prefix'
import { sufix } from './sufix'
import { generateTopicBody as body } from './body'
import { encodeReservedCharacters } from "./html"

export function generateHtmlRep(entries, date: string) {
    let htmlRep = doctype + prefix(date) +
        entries.reduce((acc, cur) => {
            let bodyHTML = body(encodeReservedCharacters(cur.title),
            encodeReservedCharacters(cur.text),
            encodeReservedCharacters(cur.link))
            return acc + bodyHTML
        },
        "")
        + sufix()
    return htmlRep
}