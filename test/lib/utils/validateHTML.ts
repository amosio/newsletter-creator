export function validateHTML(htmlString: string): Document{
    let parser = new DOMParser();
    let doc = parser.parseFromString(htmlString, "application/xhtml+xml");
    return doc
}