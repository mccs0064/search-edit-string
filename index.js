if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}

const GlossDataStruct = {
    "A" : {
        "id": "123",
        "term": "This is an APPLE or a fake term with an ACRONYM"
    }
}

const AcDataStruct = [
    {
        "ac" : "ACRONYM",
        "id" : "456"
    },
    {
        "ac" : "APPLE",
        "id" : "456"
    }
]

findAconym = (glossaryItem, termsArr) => {
    let returnTerm = glossaryItem.term;
    
    const closeTag = "</a>"
    termsArr.map(
        (term) => {
            if(returnTerm.indexOf(term.ac)){
                const openTag = `<a href="/glossary/${term.id}">`
                const startIndex = returnTerm.indexOf(term.ac)
                const endIndex = startIndex + term.ac.length
                returnTerm = returnTerm
                                .splice(startIndex, 0, openTag)
                                .splice(endIndex+openTag.length, 0,  closeTag)
            }
        }
    )
    return returnTerm;    
}

console.log(findAconym(GlossDataStruct['A'], AcDataStruct));