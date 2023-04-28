import { describe, expect, it } from "vitest"

import { prefix } from './../../../src/lib/utils/prefix'
import { validateHTML } from './validateHTML'

describe("prefix", ()=> {
    it("returns valid html fragment", () => {
        const htmlFragment = prefix("dd") + "</body></html>"
        const doc = validateHTML(htmlFragment); // Parse the HTML fragment as a document
        let fragmentType = doc.documentElement.nodeName.toLowerCase()
        let errorNode = doc.querySelector('parsererror');
        console.log(fragmentType)
        console.log(errorNode)
        expect((errorNode)).toBeFalsy()
        expect((fragmentType)).toBe("html")
    })
})