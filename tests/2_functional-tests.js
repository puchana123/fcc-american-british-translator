const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const translate = new Translator;

suite('Functional Tests', () => {
    // #1
    test('Translation with text and locale field', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'american-to-british'
            })
            .end((err, res) => {
                assert.equal(res.status, 200, 'Api response');
                assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.', 'translated correctly');
                done();
            })
    });
    // #2
    test('Translation with text and invalid locale field', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'american-to-russia'
            })
            .end((err, res) => {
                assert.equal(res.status, 200, 'Api response');
                assert.equal(res.body.error, "Invalid value for locale field", 'error message');
                done();
            })
    });
    // #3
    test('Translation with missing text field', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                locale: 'american-to-british'
            })
            .end((err, res) => {
                assert.equal(res.status, 200, 'Api response');
                assert.equal(res.body.error, "Required field(s) missing", 'error message');
                done();
            })
    });
    // #4
    test('Translation with missing locale field', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: 'Mangoes are my favorite fruit.'
            })
            .end((err, res) => {
                assert.equal(res.status, 200, 'Api response');
                assert.equal(res.body.error, "Required field(s) missing", 'error message');
                done();
            })
    });
    // #5
    test('Translation with empty text', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: '',
                locale: 'american-to-british'
            })
            .end((err, res) => {
                assert.equal(res.status, 200, 'Api response');
                assert.equal(res.body.error, "No text to translate", 'error message');
                done();
            })
    });
    // #6
    test('Translation with text that needs no translation', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'british-to-american'
            })
            .end((err, res) => {
                assert.equal(res.status, 200, 'Api response');
                assert.equal(res.body.translation, 'Everything looks good to me!', 'response for no need to translated');
                done();
            })
    });
});
