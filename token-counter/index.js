const { get_encoding} = require("tiktoken");
const tableDto = require("./tableDto.json");
const enc = get_encoding("cl100k_base")


function analyzeText (text, title){
    const textEncoded = encode(text);

    console.log(`\n=== ${title} ===`)
    console.log(`${title} toString: ${text}`)
    console.log(`How many tokens are there in ${title}: ${textEncoded.length} tokens`)
    console.log(`${title} tokens: ${textEncoded}`)
}

function encode(text) {
   return enc.encode(text)
}

function main(){
    try{
        const javaRecord = "public record TableDTO(String id, String material, int capacity, boolean isAvailable){}"
        analyzeText(javaRecord, "java")

        const json = JSON.stringify(tableDto)
        analyzeText(json, "json")
    } catch (error) {
        console.error("erro on execution: ",error)
    } finally {
        enc.free()
    }
}

main()