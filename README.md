# Google English search bookmarklet

* Googleの検索結果ページからワンクリックで英語の検索結果に飛べるBookmarkletです。
* ブラウザの検索ボックスから検索をした後、検索結果に物足りない／英語圏のページまで検索したいということが多々あったので作りました。
* URL中の「q=」から「&」までを抜き出し、「www.google.com」に渡すだけです。

A bookmarklet to jump to Google's English search result page from Japanese result page.

## 使い方

1. [lowply.github.io/google-english-search-bookmarklet](https://lowply.github.io/google-english-search-bookmarklet/) へ行く
1. ブックマークバーにリンクをドラッグ&ドロップ
1. Googleの日本語の検索結果ページでブックマークレットをクリック

## Local development

Currently `make.sh` only supports macOS with `gsed` and `nkf` installed.

1. Clone down the repo and `cd` into the directory
1. Make your changes to `main.js`
1. Run `make.sh`
