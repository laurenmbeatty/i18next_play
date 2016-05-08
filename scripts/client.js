//configure require
requirejs.config({
     paths: {
          i18next: "i18next",
          i18nextXHRBackend: "i18next-xhr-backend",
          jqueryI18next: "jquery-i18next"
     }
});

require(["i18next", "i18nextXHRBackend", "jqueryI18next"], function(i18next, i18nextXHRBackend, jqueryI18next) {
     "use strict";

     //backend connector
     var XHR = i18nextXHRBackend;
     //set up jquery i18next
     var jQuery = jqueryI18next;

     //use them both
     i18next.use(XHR);
     i18next.use(jQuery);

     //options to pass into i18next initiation
     var options = {
          //gives awesome console info.
          debug: true,
          //initialize right away
          initImmediate: true,
          //set the start language
          lng: "en",
          //set the namespace
          ns: "translation",
          //need to use XHR plugin with this
          backend: {
               loadPath: "locales/{{lng}}/{{ns}}.json"
          }
     };

     //initialize i18next
     i18next.init(options, function(err, t) {
          //initialize i18next-jquery
          jQuery.init(i18next, $);
          //translate the document---English is the default
          $(document).localize();
     });

     var lang;
     //on the English/Spanish button click, change the language
     $(".english").on("click", function() {
          lang = $(this).attr('data-lang');
          i18next.changeLanguage(lang, function(err, t) {
               $(document).localize();
          });
     });

     $(".spanish").on("click", function() {
          lang = $(this).attr('data-lang');
          i18next.changeLanguage(lang, function(err, t) {
               $(document).localize();
          });
     });
});