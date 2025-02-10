const word_input = document.querySelector("#word_input");

wk_kanji_button = document.querySelector("#wk_kanji")
wk_vocab_button = document.querySelector("#wk_vocab")
jisho_button = document.querySelector("#jisho")
kanji_breakdown_button = document.querySelector("#kanji_breakdown")

function checkIfTextSafe(word) {
    if (word.length === 0) {
        return false
    }

    const japaneseRegex = /^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}\s]*$/u;

    if (!japaneseRegex.test(word)) {
        return false
    }

    return true

}

wk_kanji_button.addEventListener("click", async () => {
    if (checkIfTextSafe(word_input.value || word_input.value > 1)) {
        chrome.tabs.create({url: `https://www.wanikani.com/kanji/${word_input.value}`});
    }
})

wk_vocab_button.addEventListener("click", function () {
    if (checkIfTextSafe(word_input.value)) {
        chrome.tabs.create({url: `https://www.wanikani.com/vocabulary/${word_input.value}`});
    }
})

jisho_button.addEventListener("click", function () {
    if (checkIfTextSafe(word_input.value)) {
        chrome.tabs.create({url: `https://www.jisho.org/search/${word_input.value}`});
    }  
})
