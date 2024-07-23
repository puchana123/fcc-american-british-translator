const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

// change britishToAmerican by reverse Object keys values
const britishToAmericanSpelling = {};
Object.keys(americanToBritishSpelling).forEach(key => {
    const value = americanToBritishSpelling[key];
    britishToAmericanSpelling[value] = key;
});

// reverse Object and Capitalize
const britishToAmericanTitles = {};
Object.keys(americanToBritishTitles).forEach(key => {
    const value = americanToBritishTitles[key];
    britishToAmericanTitles[value] = key.charAt(0).toUpperCase() + key.slice(1);
});

// change Object value of titles to Capitalize such as (Mr.)
Object.keys(americanToBritishTitles).forEach(key => {
    const value = americanToBritishTitles[key]
    americanToBritishTitles[key] = value.charAt(0).toUpperCase() + value.slice(1);
});
class Translator {
    Translator(text, locale) {
        // check word
        const wordResult = this.IsWord(text, locale)
        // check title format
        const titleResult = this.IsTitle(wordResult, locale);
        // check time format
        const timeResult = this.IsTime(titleResult, locale);
        const lastResult = timeResult
        // check last result is any change or not
        if (lastResult === text) {
            return 'Everything looks good to me!'
        } else {
            return lastResult
        }
    }

    IsWord(text, locale) {
        let dictionary;
        // check locale 
        if (locale === 'american-to-british') {
            // group all word american to british
            dictionary = { ...americanToBritishSpelling, ...americanOnly };
        } else if (locale === 'british-to-american') {
            // group all word british to american
            dictionary = { ...britishToAmericanSpelling, ...britishOnly };
        } else {
            return {"error": `support 'american-to-british' or 'british-to-american' locale only`};
        }
        // create regex  pattern from keys using \\b (word boundary) to match whole words only
        // regex format => /\b(word1|word 2|....)\b/gi
        const pattern = new RegExp(`\\b(${Object.keys(dictionary).join('|')})\\b`, 'gi');
        // result change color to green with match pattern
        const result = text.replace(pattern, match => `<span style="color:green">${dictionary[match.toLowerCase()] || match}</span>`
        );

        return result
    }

    IsTitle(text, locale) {
        let pattern;
        let dictionary
        if (locale === 'american-to-british') {
            // select pattern from american to bristish
            dictionary = americanToBritishTitles
            // regex format => /(mr\.|mrs\.|....)/gi
            pattern = new RegExp(`(${Object.keys(dictionary).map((key, index) => {
                if (index !== Object.keys(dictionary).length - 1) {
                    return key.slice(0, -1) + '\\.|'
                } else {
                    return key.slice(0, -1) + '\\.'
                }
            }).join('')})`, 'gi');
        } else if (locale === 'british-to-american') {
            // select pattern from bristish to american
            dictionary = britishToAmericanTitles
            // regex format => /\b(mr|mrs|....)\b/gi
            pattern = new RegExp(`\\b(${Object.keys(dictionary).join('|')})\\b`, 'gi');
        } else {
            return {"error": `support 'american-to-british' or 'british-to-american' locale only`};
        }
        // result change color to green with match pattern
        const result = text.replace(pattern, match => `<span style="color:green">${dictionary[match.toLowerCase()] || match}</span>`
        );

        return result
    }

    IsTime(text, locale) {
        let result;
        let pattern;
        if (locale === 'american-to-british') {
            // change : to .
            pattern = /(\d{1,2}):(\d{2})/;
            result = text.replace(pattern, (mathc, hour, minute) => {
                // result change color to green with whole time format
                return `<span style="color:green">${hour + '.' + minute}</span>`
            });
        } else if (locale === 'british-to-american') {
            // change . to :
            pattern = /(\d{1,2})\.(\d{2})/;
            result = text.replace(pattern, (mathc, hour, minute) => {
                // result change color to green with whole time format
                return `<span style="color:green">${hour + ':' + minute}</span>`
            });
        } else {
            return {"error": `support 'american-to-british' or 'british-to-american' locale only`};
        }
        return result
    }
}

module.exports = Translator;