const http = require("http");
const tableDTOJson = require("./TableDTO.json");
const { encode, decode } = require("gpt-3-encoder");

const server = http.createServer((req, res) => {
  res.end("It's running");
});

server.listen(2121, "localhost", () => {
  
  const str = "An table is defined by material, capacity and availability.\n" +
    "Here is a JSON Schema describing a TableDTO:\n" +
    JSON.stringify(tableDTOJson, null, 2) + "\n" +
    "Here is the Java class definition for TableDTO:\n" +
    "public record TableDTO(UUID id, String material,int capacity, boolean available){}";

  const encoded = encode(str);
  console.log("Encoded this string looks like: ", encoded);

  console.log("We can look at each token and what it represents");
  for (let token of encoded) {
    console.log({ token, string: decode([token]) });
  }

  const decoded = decode(encoded);
  console.log("We can decode it back into:\n", decoded);
});
