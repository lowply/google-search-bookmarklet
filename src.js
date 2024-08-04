if (window.location.host !== "www.google.com") return false;
if (!window.location.search.includes("q=")) return false;

const href = window.location.href
const lr = href.match(/lr=[^&]+/)
const hl = href.match(/hl=[^&]+/)

let newhref = href

if (!lr) {
    newhref += "&lr=lang_en"
} else {
    newhref = newhref.replace(/lr=[^&]+/, lr[0].split("=")[1] == "lang_ja" ? "lr=lang_en" : "lr=lang_ja")
}

if (!hl) {
    newhref += "&hl=en";
} else {
    newhref = newhref.replace(/hl=[^&]+/, hl[0].split("=")[1] === "ja" ? "hl=en" : "hl=ja");
}

window.location.assign(newhref)
