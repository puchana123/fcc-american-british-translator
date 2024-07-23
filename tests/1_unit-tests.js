const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translate = new Translator;

suite('Unit Tests', () => {
    suite('American to British', () => {
        // #1
        test('No.1', () => {
            const text = 'Mangoes are my favorite fruit.';
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        });
        // #2
        test('No.2', () => {
            const text = 'I ate yogurt for breakfast.';
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        });
        // #3
        test('No.3', () => {
            const text = "We had a party at my friend's condo.";
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `We had a party at my friend's <span class="highlight">flat</span>.`);
        });
        // #4
        test('No.4', () => {
            const text = "Can you toss this in the trashcan for me?";
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `Can you toss this in the <span class="highlight">bin</span> for me?`);
        });
        // #5
        test('No.5', () => {
            const text = "The parking lot was full.";
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `The <span class="highlight">car park</span> was full.`);
        });
        // #6
        test('No.6', () => {
            const text = "Like a high tech Rube Goldberg machine.";
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `Like a high tech <span class="highlight">Heath Robinson device</span>.`);
        });
        // #7
        test('No.7', () => {
            const text = "To play hooky means to skip class or work.";
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `To <span class="highlight">bunk off</span> means to skip class or work.`);
        });
        // #8
        test('No.8', () => {
            const text = "No Mr. Bond, I expect you to die.";
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `No <span class="highlight">Mr</span> Bond, I expect you to die.`);
        });
        // #9
        test('No.9', () => {
            const text = "Dr. Grosh will see you now.";
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `<span class="highlight">Dr</span> Grosh will see you now.`);
        });
        // #10
        test('No.10', () => {
            const text = "Lunch is at 12:15 today.";
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `Lunch is at <span class="highlight">12.15</span> today.`);
        });
    });

    suite('British to Americam', () => {
        // #11
        test('No.11', () => {
            const text = "We watched the footie match for a while.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `We watched the <span class="highlight">soccer</span> match for a while.`);
        });
        // #12
        test('No.12', () => {
            const text = "Paracetamol takes up to an hour to work.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
        });
        // #13
        test('No.13', () => {
            const text = "First, caramelise the onions.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `First, <span class="highlight">caramelize</span> the onions.`);
        });
        // #14
        test('No.14', () => {
            const text = "I spent the bank holiday at the funfair.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`);
        });
        // #15
        test('No.15', () => {
            const text = "I had a bicky then went to the chippy.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`);
        });
        // #16
        test('No.16', () => {
            const text = "I've just got bits and bobs in my bum bag.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
        });
        // #17
        test('No.17', () => {
            const text = "The car boot sale at Boxted Airfield was called off.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`);
        });
        // #18
        test('No.18', () => {
            const text = "Have you met Mrs Kalyani?";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `Have you met <span class="highlight">Mrs.</span> Kalyani?`);
        });
        // #19
        test('No.19', () => {
            const text = "Prof Joyner of King's College, London.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `<span class="highlight">Prof.</span> Joyner of King's College, London.`);
        });
        // #20
        test('No.20', () => {
            const text = "Tea time is usually around 4 or 4.30.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `Tea time is usually around 4 or <span class="highlight">4:30</span>.`);
        });
    });

    suite('Highlight translation', () => {
        // #21
        test('No.21', () => {
            const text = 'Mangoes are my favorite fruit.';
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        });
        // #22
        test('No.22', () => {
            const text = 'I ate yogurt for breakfast.';
            const locale = 'american-to-british'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        });
        // #23
        test('No.23', () => {
            const text = "We watched the footie match for a while.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `We watched the <span class="highlight">soccer</span> match for a while.`);
        });
        // #24
        test('No.24', () => {
            const text = "Paracetamol takes up to an hour to work.";
            const locale = 'british-to-american'
            const output = translate.Translator(text, locale);
            assert.isString(output, 'result is String');
            assert.equal(output, `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
        });
    });
});
