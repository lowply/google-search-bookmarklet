javascript:void%20function(){if(%22www.google.com%22!=window.location.host)return!1;const%20a=window.location.href,b=a.match(/lr=[^%26]+/),c=a.match(/hl=[^%26]+/);if(!window.location.search.match(/q=[^%26]+/))return!1;let%20d=a;b%3F%22lang_ja%22==b[0].split(%22=%22)[1]%3Fd=d.replace(/lr=[^%26]+/,%22lr=lang_en%22):d=d.replace(/lr=[^%26]+/,%22lr=lang_ja%22):d+=%22%26lr=lang_ja%22,c%3F%22ja%22==c[0].split(%22=%22)[1]%3Fd=d.replace(/hl=[^%26]+/,%22hl=en%22):d=d.replace(/hl=[^%26]+/,%22hl=ja%22):d+=%22%26hl=ja%22,window.location.assign(d)}();