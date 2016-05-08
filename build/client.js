define(["i18next", "i18next-xhr-backend", "babel-register"], function (_i18next, _i18nextXhrBackend) {
     "use strict";

     var _i18next2 = _interopRequireDefault(_i18next);

     var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

     function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
               default: obj
          };
     }

     requirejs.config({
          config: {
               es6: {
                    resolveModuleSource: function (source) {
                         return 'es6!' + source;
                    }
               }
          },
          paths: {
               es6: "node_modules/requirejs-babel/es6",
               babel: "node_modules/requirejs-babel/babel-4.6.6.min"
          }
     });


     _i18next2.default.use(_i18nextXhrBackend2.default);
     _i18next2.default.init(options);
     $(document).ready(function () {

          //  var options = {
          //       debug: true,
          //       ns: [
          //            "translation"
          //       ],
          //       defaultNS: [
          //            "translation"
          //       ],
          //       fallbackLng: "en",
          //       fallbackNS: false,
          //       whitelist: false,
          //       load: "all",
          //       preload: false,
          //       keySeparator: false,
          //       nsSeparator: false,
          //       pluralSeparator: "_",
          //       contextSeparator: "_",
          //       saveMissing: false,
          //       saveMissingTo: "fallback",
          //       missingKeyHandler: false,
          //       postProcess: false,
          //       returnNull: true,
          //       returnEmptyString: true,
          //       returnObjects: false,
          //       joinArrays: false,
          //       parseMissingKeyHandler: false,
          //       appendNamespaceToMissingKey: false,
          //       interpolation: {
          //            escapeValue: true,
          //            prefix: "{{",
          //            suffix: "}}",
          //            unescapePrefix: "-",
          //            nestingPrefix: "$t(",
          //            nestingSuffix: ")"
          //       },
          //       lngs: ["en", "es"],
          //       backend: {
          //            loadPath: "locales/{{lng}}/{{ns}}.json",
          //            addPath: "locales/add/{{lng}}/{{ns}}",
          //            allowMultiLoading: false
          //       }
          //  };

          var options = {
               lng: "en",
               resGetPath: ['locales/en/translation.json', 'locales/es/translation.json']
          };
          //TODO implement XHR

          _i18next2.default.init(options, function () {
               //alert("initiated");
               alert(options.resGetPath);
          });
          var lang;
          var Spanish = "locales/es/translation.json";
          var English = "locales/en/translation.json";

          $(".english").on("click", function () {
               lang = $(this).attr('data-lang');
               _i18next2.default.changeLanguage(lang, function (err, t) {
                    alert("language changed!" + lang);
               });
               alert(_i18next2.default.t("nav.home", {
                    lng: lang
               }));

               $.ajax({
                    type: "GET",
                    url: English,
                    dataType: "json",
                    success: function (data) {
                         console.log(data);
                    }
               });
          });
          //alert(i18next.t(lang.app.name, options));

          $(".spanish").on("click", function () {
               lang = $(this).attr('data-lang');
               _i18next2.default.changeLanguage(lang, function (err, t) {
                    alert("language changed!" + lang);
               });
          });
          //  $(".english").on("click", function() {
          //       var lang = $(this).attr('data-lang');
          //       alert(lang);
          //  $.ajax({
          //       type: "GET",
          //       url: English,
          //       dataType: "json",
          //       success: function(data) {
          //            console.log(data);
          //            var english = data;
          //            console.log(english);
          //            i18next.init(options, function(t) {
          //                 var title = english.newsTile.title;
          //                 alert(title);
          //
          //            });
          //            $(".tile-title").html(english.newsTile.title);
          //
          //       }
          //
          //  });
          //  });
          //
          //  $(".spanish").on("click", function() {
          //       $.ajax({
          //            type: "GET",
          //            url: Spanish,
          //            dataType: "json",
          //            success: function(data) {
          //                 console.log(data);
          //            }
          //
          //       });
          //
          //  });
     });
});