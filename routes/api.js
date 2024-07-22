'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      const result = translator.Translator(text, locale);
      res.json({
        text: text,
        translation: result
      })
    });
};
