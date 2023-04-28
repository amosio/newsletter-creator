import { describe, expect, it } from "vitest"

import { generateTopicBody } from './../../../src/lib/utils/body'
import { validateHTML } from './validateHTML'

describe("one topic fragment", ()=> {
    it("returns valid html fragment", () => {


        const htmlFragment = "<html><body>" + 
            generateTopicBody(
                "Kolejny test elektrycznego autobusu",
                "Autobus będzie jeździł na liniach: 0,1,3,9,30,33, w testowanym pojeździe zastosowano silnik zasilany energią pochodzącą z baterii Solaris High Energy, o pojemności 528 kWh. Dzięki tak dużej pojemności magazynów energii, autobus na jednym ładowaniu może komfortowo pokonywać znaczne odległości - gwarantowany zasięg na jednym ładowaniu to 350 km. W autobusie może wygodnie podróżować 45 pasażerów, w tym 31 na miejscach siedzących",
                "https://tarnow.pl/Dla-mieszkancow/Aktualnosci/Miasto/Kolejny-test-elektrycznego-autobusu"
                )
            + "</body></html>"
        const doc = validateHTML(htmlFragment); // Parse the HTML fragment as a document
        let fragmentType = doc.documentElement.nodeName.toLowerCase()
        let errorNode = doc.querySelector('parsererror');
        console.log(fragmentType)
        console.log(errorNode)
        expect((errorNode)).toBeFalsy()
        expect((fragmentType)).toBe("html")
    })
})