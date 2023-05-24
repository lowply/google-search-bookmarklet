if (window.location.host != "www.google.com") {
    return false
}

const href = window.location.href
const lr = href.match(/lr=[^&]+/)
const hl = href.match(/hl=[^&]+/)

if (!window.location.search.match(/q=[^&]+/)) {
    return false
}

let newhref = href

if (!lr) {
    newhref += "&lr=lang_ja"
} else if (lr[0].split("=")[1] == "lang_ja") {
    newhref = newhref.replace(/lr=[^&]+/, "lr=lang_en")
} else {
    newhref = newhref.replace(/lr=[^&]+/, "lr=lang_ja")
}

if (!hl) {
    newhref += "&hl=ja"
} else if (hl[0].split("=")[1] == "ja") {
    newhref = newhref.replace(/hl=[^&]+/, "hl=en")
} else {
    newhref = newhref.replace(/hl=[^&]+/, "hl=ja")
}

window.location.assign(newhref)

