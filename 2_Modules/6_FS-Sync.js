// import module

const { readFileSync, writeFileSync } = require("fs")

// read files synchronously - blocking

const first = readFileSync("./contents/first.txt", "utf8")
const second = readFileSync("./contents/second.txt", "utf8")
console.log(first, second)
writeFileSync(
	"contents/result-sync.txt",
	`Here is the result :${first},${second}`,
	{ flag: "a" }
)
