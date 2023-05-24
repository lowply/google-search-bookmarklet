const bookmarkleter = require('bookmarkleter')
const fs = require('fs')
const code = fs.readFileSync("src.js", "utf8", (err) => {
    if (err) throw err;
})
const bookmarklet = bookmarkleter(code, {
    "iife": true,
    "mangleVars": true,
    "transpile": false
})
fs.writeFile("bookmarklet.js", bookmarklet, (err) => {
    if (err) throw err;
})
