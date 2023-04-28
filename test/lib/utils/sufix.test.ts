import { describe, expect, it } from "vitest"

import { sufix } from './../../../src/lib/utils/sufix'
import { validateHTML } from './validateHTML'

describe("sufix", ()=> {
    it("returns valid html fragment", () => {
        const htmlFragment = "<html><body>" + sufix()
        const doc = validateHTML(htmlFragment); // Parse the HTML fragment as a document
        let fragmentType = doc.documentElement.nodeName.toLowerCase()
        let errorNode = doc.querySelector('parsererror');

        expect((errorNode)).toBeFalsy()
        expect((fragmentType)).toBe("html")
    })
})