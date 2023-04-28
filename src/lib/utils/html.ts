export function encodeReservedCharacters(str: string){
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    return str;}
    
if (import.meta.vitest) {
    const { describe, expect, it } = import.meta.vitest
    describe("encodeReservedCharacters", () => {
        it("should encode an ampersand character", () => {
        const input = "I like cats & dogs";
        const expectedOutput = "I like cats &amp; dogs";
        expect(encodeReservedCharacters(input)).toEqual(expectedOutput);
        });
    
        it("should encode a greater than sign character", () => {
        const input = "2 > 1";
        const expectedOutput = "2 &gt; 1";
        expect(encodeReservedCharacters(input)).toEqual(expectedOutput);
        });
    
        it("should encode a less than sign character", () => {
        const input = "1 < 2";
        const expectedOutput = "1 &lt; 2";
        expect(encodeReservedCharacters(input)).toEqual(expectedOutput);
        });
    
        it("should encode a double quote character", () => {
        const input = 'She said, "Hello"';
        const expectedOutput = "She said, &quot;Hello&quot;";
        expect(encodeReservedCharacters(input)).toEqual(expectedOutput);
        });
    
        it("should encode a single quote character", () => {
        const input = "It's a beautiful day";
        const expectedOutput = "It&#039;s a beautiful day";
        expect(encodeReservedCharacters(input)).toEqual(expectedOutput);
        });
    
        it("should not modify a string that does not contain any reserved characters", () => {
        const input = "The quick brown fox jumps over the lazy dog";
        expect(encodeReservedCharacters(input)).toEqual(input);
        });
    
        it("should handle empty string input", () => {
        const input = "";
        expect(encodeReservedCharacters(input)).toEqual(input);
        });
    });
}