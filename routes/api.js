'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      // check input fields
      if(!text && !locale){
        res.json({"error":"No text and locale field"});
        return;
      }
      if(!text){
        res.json({"error":"No text to translate"});
        return;
      };
      if(!locale){
        res.json({"error":"No locale field"});
        return;
      }
      const result = translator.Translator(text, locale);
      // if return result = error
      if(result.error){
        return res.json(result);
      };

      res.json({
        text: text,
        translation: result
      })
    });
};
