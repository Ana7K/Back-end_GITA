
const fs = require("fs/promises")

async function main() {
    await fs.writeFile("../message.txt","hello world")

    let data = await fs.readFile("../message.txt","utf-8")
    let reversed = data.split("").reverse().join("")

    await fs.writeFile("../message.txt",reversed)
}

main()
