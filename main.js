const bookmarkleter = require('bookmarkleter')
const fs = require('fs')
const langs = ["en", "ja"]

langs.forEach(lang => {
    const bookmarklet = bookmarkleter(`
    if (document.location.host == "www.google.com") {
        let query = []
        query.push(document.URL.match(/q=[^&]+/)[0])
        query.push("lr=lang_${lang}")
        query.push("hl=${lang}")
        window.location.assign("search?" + query.join("&"))
    }
    `, {
        "iife": true,
        "mangleVars": true,
        "transpile": false
    })
    fs.writeFile(lang + ".bookmarklet", bookmarklet, (err) => {
        if (err) throw err;
    })
})
