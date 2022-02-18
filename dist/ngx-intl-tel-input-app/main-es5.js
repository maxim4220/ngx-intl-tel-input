(function () {
  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_intl_tel_input_app"] = self["webpackChunkngx_intl_tel_input_app"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    3065:
    /*!******************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/data/country-code.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryCode": function CountryCode() {
          return (
            /* binding */
            _CountryCode
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums/country-iso.enum */
      5924);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1477);

      var _CountryCode = /*#__PURE__*/_createClass(function _CountryCode() {
        _classCallCheck(this, _CountryCode);

        this.allCountries = [['Afghanistan (‫افغانستان‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Afghanistan, '93'], ['Albania (Shqipëri)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Albania, '355'], ['Algeria (‫الجزائر‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Algeria, '213'], ['American Samoa', 'as', '1', 1, ['684']], ['Andorra', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Andorra, '376'], ['Angola', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Angola, '244'], ['Anguilla', 'ai', '1', 1, ['264']], ['Antigua and Barbuda', 'ag', '1', 1, ['268']], ['Argentina', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Argentina, '54'], ['Armenia (Հայաստան)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Armenia, '374'], ['Aruba', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Aruba, '297'], ['Australia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Australia, '61', 0], ['Austria (Österreich)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Austria, '43'], ['Azerbaijan (Azərbaycan)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Azerbaijan, '994'], ['Bahamas', 'bs', '1', 1, ['242']], ['Bahrain (‫البحرين‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Bahrain, '973'], ['Bangladesh (বাংলাদেশ)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Bangladesh, '880'], ['Barbados', 'bb', '1', 1, ['246']], ['Belarus (Беларусь)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Belarus, '375'], ['Belgium (België)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Belgium, '32'], ['Belize', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Belize, '501'], ['Benin (Bénin)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Benin, '229'], ['Bermuda', 'bm', '1', 1, ['441']], ['Bhutan (འབྲུག)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Bhutan, '975'], ['Bolivia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Bolivia, '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.BosniaAndHerzegovina, '387'], ['Botswana', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Botswana, '267'], ['Brazil (Brasil)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Brazil, '55'], ['British Indian Ocean Territory', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.BritishIndianOceanTerritory, '246'], ['British Virgin Islands', 'vg', '1', 1, ['284']], ['Brunei', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Brunei, '673'], ['Bulgaria (България)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Bulgaria, '359'], ['Burkina Faso', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.BurkinaFaso, '226'], ['Burundi (Uburundi)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Burundi, '257'], ['Cambodia (កម្ពុជា)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Cambodia, '855'], ['Cameroon (Cameroun)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Cameroon, '237'], ['Canada', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Canada, '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.CapeVerde, '238'], ['Caribbean Netherlands', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.CaribbeanNetherlands, '599', 1], ['Cayman Islands', 'ky', '1', 1, ['345']], ['Central African Republic (République centrafricaine)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.CentralAfricanRepublic, '236'], ['Chad (Tchad)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Chad, '235'], ['Chile', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Chile, '56'], ['China (中国)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.China, '86'], ['Christmas Island', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.ChristmasIsland, '61', 2], ['Cocos (Keeling) Islands', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Cocos, '61', 1], ['Colombia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Colombia, '57'], ['Comoros (‫جزر القمر‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Comoros, '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.CongoDRCJamhuriYaKidemokrasiaYaKongo, '243'], ['Congo (Republic) (Congo-Brazzaville)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.CongoRepublicCongoBrazzaville, '242'], ['Cook Islands', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.CookIslands, '682'], ['Costa Rica', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.CostaRica, '506'], ['Côte d’Ivoire', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO["CôteDIvoire"], '225'], ['Croatia (Hrvatska)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Croatia, '385'], ['Cuba', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Cuba, '53'], ['Curaçao', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO["Curaçao"], '599', 0], ['Cyprus (Κύπρος)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Cyprus, '357'], ['Czech Republic (Česká republika)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.CzechRepublic, '420'], ['Denmark (Danmark)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Denmark, '45'], ['Djibouti', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Djibouti, '253'], ['Dominica', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Dominica, '1767'], ['Dominican Republic (República Dominicana)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.DominicanRepublic, '1', 2, ['809', '829', '849']], ['Ecuador', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Ecuador, '593'], ['Egypt (‫مصر‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Egypt, '20'], ['El Salvador', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.ElSalvador, '503'], ['Equatorial Guinea (Guinea Ecuatorial)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.EquatorialGuinea, '240'], ['Eritrea', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Eritrea, '291'], ['Estonia (Eesti)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Estonia, '372'], ['Ethiopia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Ethiopia, '251'], ['Falkland Islands (Islas Malvinas)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.FalklandIslands, '500'], ['Faroe Islands (Føroyar)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.FaroeIslands, '298'], ['Fiji', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Fiji, '679'], ['Finland (Suomi)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Finland, '358', 0], ['France', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.France, '33'], ['French Guiana (Guyane française)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.FrenchGuiana, '594'], ['French Polynesia (Polynésie française)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.FrenchPolynesia, '689'], ['Gabon', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Gabon, '241'], ['Gambia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Gambia, '220'], ['Georgia (საქართველო)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Georgia, '995'], ['Germany (Deutschland)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Germany, '49'], ['Ghana (Gaana)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Ghana, '233'], ['Gibraltar', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Gibraltar, '350'], ['Greece (Ελλάδα)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Greece, '30'], ['Greenland (Kalaallit Nunaat)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Greenland, '299'], ['Grenada', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Grenada, '1473'], ['Guadeloupe', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Guadeloupe, '590', 0], ['Guam', 'gu', '1', 1, ['671']], ['Guatemala', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Guatemala, '502'], ['Guernsey', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Guernsey, '44', 1, [1481]], ['Guinea (Guinée)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Guinea, '224'], ['Guinea-Bissau (Guiné Bissau)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.GuineaBissau, '245'], ['Guyana', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Guyana, '592'], ['Haiti', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Haiti, '509'], ['Honduras', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Honduras, '504'], ['Hong Kong (香港)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.HongKong, '852'], ['Hungary (Magyarország)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Hungary, '36'], ['Iceland (Ísland)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Iceland, '354'], ['India (भारत)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.India, '91'], ['Indonesia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Indonesia, '62'], ['Iran (‫ایران‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Iran, '98'], ['Iraq (‫العراق‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Iraq, '964'], ['Ireland', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Ireland, '353'], ['Isle of Man', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.IsleOfMan, '44', 2, [1624]], ['Israel (‫ישראל‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Israel, '972'], ['Italy (Italia)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Italy, '39', 0], ['Jamaica', 'jm', '1', 1, ['876']], ['Japan (日本)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Japan, '81'], ['Jersey', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Jersey, '44', 3, [1534]], ['Jordan (‫الأردن‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Jordan, '962'], ['Kazakhstan (Казахстан)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Kazakhstan, '7', 1], ['Kenya', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Kenya, '254'], ['Kiribati', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Kiribati, '686'], ['Kosovo', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Kosovo, '383'], ['Kuwait (‫الكويت‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Kuwait, '965'], ['Kyrgyzstan (Кыргызстан)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Kyrgyzstan, '996'], ['Laos (ລາວ)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Laos, '856'], ['Latvia (Latvija)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Latvia, '371'], ['Lebanon (‫لبنان‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Lebanon, '961'], ['Lesotho', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Lesotho, '266'], ['Liberia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Liberia, '231'], ['Libya (‫ليبيا‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Libya, '218'], ['Liechtenstein', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Liechtenstein, '423'], ['Lithuania (Lietuva)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Lithuania, '370'], ['Luxembourg', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Luxembourg, '352'], ['Macau (澳門)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Macau, '853'], ['Macedonia (FYROM) (Македонија)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Macedonia, '389'], ['Madagascar (Madagasikara)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Madagascar, '261'], ['Malawi', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Malawi, '265'], ['Malaysia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Malaysia, '60'], ['Maldives', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Maldives, '960'], ['Mali', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Mali, '223'], ['Malta', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Malta, '356'], ['Marshall Islands', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.MarshallIslands, '692'], ['Martinique', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Martinique, '596'], ['Mauritania (‫موريتانيا‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Mauritania, '222'], ['Mauritius (Moris)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Mauritius, '230'], ['Mayotte', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Mayotte, '262', 1], ['Mexico (México)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Mexico, '52'], ['Micronesia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Micronesia, '691'], ['Moldova (Republica Moldova)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Moldova, '373'], ['Monaco', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Monaco, '377'], ['Mongolia (Монгол)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Mongolia, '976'], ['Montenegro (Crna Gora)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Montenegro, '382'], ['Montserrat', 'ms', '1', 1, ['664']], ['Morocco (‫المغرب‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Morocco, '212', 0], ['Mozambique (Moçambique)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Mozambique, '258'], ['Myanmar (Burma) (မြန်မာ)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Myanmar, '95'], ['Namibia (Namibië)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Namibia, '264'], ['Nauru', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Nauru, '674'], ['Nepal (नेपाल)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Nepal, '977'], ['Netherlands (Nederland)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Netherlands, '31'], ['New Caledonia (Nouvelle-Calédonie)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.NewCaledonia, '687'], ['New Zealand', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.NewZealand, '64'], ['Nicaragua', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Nicaragua, '505'], ['Niger (Nijar)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Niger, '227'], ['Nigeria', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Nigeria, '234'], ['Niue', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Niue, '683'], ['Norfolk Island', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.NorfolkIsland, '672'], ['North Korea (조선 민주주의 인민 공화국)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.NorthKorea, '850'], ['Northern Mariana Islands', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.NorthernMarianaIslands, '1670'], ['Norway (Norge)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Norway, '47', 0], ['Oman (‫عُمان‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Oman, '968'], ['Pakistan (‫پاکستان‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Pakistan, '92'], ['Palau', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Palau, '680'], ['Palestine (‫فلسطين‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Palestine, '970'], ['Panama (Panamá)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Panama, '507'], ['Papua New Guinea', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.PapuaNewGuinea, '675'], ['Paraguay', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Paraguay, '595'], ['Peru (Perú)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Peru, '51'], ['Philippines', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Philippines, '63'], ['Poland (Polska)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Poland, '48'], ['Portugal', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Portugal, '351'], ['Puerto Rico', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.PuertoRico, '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Qatar, '974'], ['Réunion (La Réunion)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO["Réunion"], '262', 0], ['Romania (România)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Romania, '40'], ['Russia (Россия)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Russia, '7', 0], ['Rwanda', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Rwanda, '250'], ['Saint Barthélemy (Saint-Barthélemy)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO["SaintBarthélemy"], '590', 1], ['Saint Helena', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SaintHelena, '290'], ['Saint Kitts and Nevis', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SaintKittsAndNevis, '1869'], ['Saint Lucia', 'lc', '1', 1, ['758']], ['Saint Martin (Saint-Martin (partie française))', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SaintMartin, '590', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SaintPierreAndMiquelon, '508'], ['Saint Vincent and the Grenadines', 'vc', '1', 1, ['784']], ['Samoa', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Samoa, '685'], ['San Marino', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SanMarino, '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO["SãoToméAndPríncipe"], '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SaudiArabia, '966'], ['Senegal (Sénégal)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Senegal, '221'], ['Serbia (Србија)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Serbia, '381'], ['Seychelles', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Seychelles, '248'], ['Sierra Leone', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SierraLeone, '232'], ['Singapore', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Singapore, '65'], ['Sint Maarten', 'sx', '1', 1, ['721']], ['Slovakia (Slovensko)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Slovakia, '421'], ['Slovenia (Slovenija)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Slovenia, '386'], ['Solomon Islands', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SolomonIslands, '677'], ['Somalia (Soomaaliya)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Somalia, '252'], ['South Africa', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SouthAfrica, '27'], ['South Korea (대한민국)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SouthKorea, '82'], ['South Sudan (‫جنوب السودان‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SouthSudan, '211'], ['Spain (España)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Spain, '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SriLanka, '94'], ['Sudan (‫السودان‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Sudan, '249'], ['Suriname', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Suriname, '597'], ['Svalbard and Jan Mayen', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.SvalbardAndJanMayen, '47', 1], ['Swaziland', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Swaziland, '268'], ['Sweden (Sverige)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Sweden, '46'], ['Switzerland (Schweiz)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Switzerland, '41'], ['Syria (‫سوريا‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Syria, '963'], ['Taiwan (台灣)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Taiwan, '886'], ['Tajikistan', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Tajikistan, '992'], ['Tanzania', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Tanzania, '255'], ['Thailand (ไทย)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Thailand, '66'], ['Timor-Leste', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.TimorLeste, '670'], ['Togo', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Togo, '228'], ['Tokelau', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Tokelau, '690'], ['Tonga', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Tonga, '676'], ['Trinidad and Tobago', 'tt', '1', 1, ['868']], ['Tunisia (‫تونس‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Tunisia, '216'], ['Turkey (Türkiye)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Turkey, '90'], ['Turkmenistan', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Turkmenistan, '993'], ['Turks and Caicos Islands', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.TurksAndCaicosIslands, '1649'], ['Tuvalu', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Tuvalu, '688'], ['U.S. Virgin Islands', 'vi', '1', 1, ['340']], ['Uganda', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Uganda, '256'], ['Ukraine (Україна)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Ukraine, '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.UnitedArabEmirates, '971'], ['United Kingdom', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.UnitedKingdom, '44', 0], ['United States', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.UnitedStates, '1', 0], ['Uruguay', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Uruguay, '598'], ['Uzbekistan (Oʻzbekiston)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Uzbekistan, '998'], ['Vanuatu', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Vanuatu, '678'], ['Vatican City (Città del Vaticano)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.VaticanCity, '39', 1], ['Venezuela', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Venezuela, '58'], ['Vietnam (Việt Nam)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Vietnam, '84'], ['Wallis and Futuna', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.WallisAndFutuna, '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.WesternSahara, '212', 1], ['Yemen (‫اليمن‬‎)', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Yemen, '967'], ['Zambia', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Zambia, '260'], ['Zimbabwe', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Zimbabwe, '263'], ['Åland Islands', _enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO["ÅlandIslands"], '358', 1]];
      });

      _CountryCode.ɵfac = function CountryCode_Factory(t) {
        return new (t || _CountryCode)();
      };

      _CountryCode.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CountryCode,
        factory: _CountryCode.ɵfac
      });
      /***/
    },

    /***/
    1993:
    /*!*********************************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/directives/native-element-injector.directive.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NativeElementInjectorDirective": function NativeElementInjectorDirective() {
          return (
            /* binding */
            _NativeElementInjectorDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      9298);
      /*
      "Property 'nativeElement' does not exist on type 'FormControl'".
      'NativeElementInjectorDirective' injects nativeElement to each control,
      so we can access it from inside validator for example.
      More about this approach and reasons for this:
      https://github.com/angular/angular/issues/18025
      https://stackoverflow.com/a/54075119/1617590
      */


      var _NativeElementInjectorDirective = /*#__PURE__*/function () {
        function _NativeElementInjectorDirective(controlDir, host) {
          _classCallCheck(this, _NativeElementInjectorDirective);

          this.controlDir = controlDir;
          this.host = host;
        }

        _createClass(_NativeElementInjectorDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.controlDir.control) {
              this.controlDir.control['nativeElement'] = this.host.nativeElement;
            }
          }
        }]);

        return _NativeElementInjectorDirective;
      }();

      _NativeElementInjectorDirective.ɵfac = function NativeElementInjectorDirective_Factory(t) {
        return new (t || _NativeElementInjectorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _NativeElementInjectorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NativeElementInjectorDirective,
        selectors: [["", "ngModel", ""], ["", "formControl", ""], ["", "formControlName", ""]]
      });
      /***/
    },

    /***/
    5924:
    /*!***********************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryISO": function CountryISO() {
          return (
            /* binding */
            _CountryISO
          );
        }
        /* harmony export */

      });

      var _CountryISO;

      (function (CountryISO) {
        CountryISO["Afghanistan"] = "af";
        CountryISO["Albania"] = "al";
        CountryISO["Algeria"] = "dz";
        CountryISO["AmericanSamoa"] = "as";
        CountryISO["Andorra"] = "ad";
        CountryISO["Angola"] = "ao";
        CountryISO["Anguilla"] = "ai";
        CountryISO["AntiguaAndBarbuda"] = "ag";
        CountryISO["Argentina"] = "ar";
        CountryISO["Armenia"] = "am";
        CountryISO["Aruba"] = "aw";
        CountryISO["Australia"] = "au";
        CountryISO["Austria"] = "at";
        CountryISO["Azerbaijan"] = "az";
        CountryISO["Bahamas"] = "bs";
        CountryISO["Bahrain"] = "bh";
        CountryISO["Bangladesh"] = "bd";
        CountryISO["Barbados"] = "bb";
        CountryISO["Belarus"] = "by";
        CountryISO["Belgium"] = "be";
        CountryISO["Belize"] = "bz";
        CountryISO["Benin"] = "bj";
        CountryISO["Bermuda"] = "bm";
        CountryISO["Bhutan"] = "bt";
        CountryISO["Bolivia"] = "bo";
        CountryISO["BosniaAndHerzegovina"] = "ba";
        CountryISO["Botswana"] = "bw";
        CountryISO["Brazil"] = "br";
        CountryISO["BritishIndianOceanTerritory"] = "io";
        CountryISO["BritishVirginIslands"] = "vg";
        CountryISO["Brunei"] = "bn";
        CountryISO["Bulgaria"] = "bg";
        CountryISO["BurkinaFaso"] = "bf";
        CountryISO["Burundi"] = "bi";
        CountryISO["Cambodia"] = "kh";
        CountryISO["Cameroon"] = "cm";
        CountryISO["Canada"] = "ca";
        CountryISO["CapeVerde"] = "cv";
        CountryISO["CaribbeanNetherlands"] = "bq";
        CountryISO["CaymanIslands"] = "ky";
        CountryISO["CentralAfricanRepublic"] = "cf";
        CountryISO["Chad"] = "td";
        CountryISO["Chile"] = "cl";
        CountryISO["China"] = "cn";
        CountryISO["ChristmasIsland"] = "cx";
        CountryISO["Cocos"] = "cc";
        CountryISO["Colombia"] = "co";
        CountryISO["Comoros"] = "km";
        CountryISO["CongoDRCJamhuriYaKidemokrasiaYaKongo"] = "cd";
        CountryISO["CongoRepublicCongoBrazzaville"] = "cg";
        CountryISO["CookIslands"] = "ck";
        CountryISO["CostaRica"] = "cr";
        CountryISO["C\xF4teDIvoire"] = "ci";
        CountryISO["Croatia"] = "hr";
        CountryISO["Cuba"] = "cu";
        CountryISO["Cura\xE7ao"] = "cw";
        CountryISO["Cyprus"] = "cy";
        CountryISO["CzechRepublic"] = "cz";
        CountryISO["Denmark"] = "dk";
        CountryISO["Djibouti"] = "dj";
        CountryISO["Dominica"] = "dm";
        CountryISO["DominicanRepublic"] = "do";
        CountryISO["Ecuador"] = "ec";
        CountryISO["Egypt"] = "eg";
        CountryISO["ElSalvador"] = "sv";
        CountryISO["EquatorialGuinea"] = "gq";
        CountryISO["Eritrea"] = "er";
        CountryISO["Estonia"] = "ee";
        CountryISO["Ethiopia"] = "et";
        CountryISO["FalklandIslands"] = "fk";
        CountryISO["FaroeIslands"] = "fo";
        CountryISO["Fiji"] = "fj";
        CountryISO["Finland"] = "fi";
        CountryISO["France"] = "fr";
        CountryISO["FrenchGuiana"] = "gf";
        CountryISO["FrenchPolynesia"] = "pf";
        CountryISO["Gabon"] = "ga";
        CountryISO["Gambia"] = "gm";
        CountryISO["Georgia"] = "ge";
        CountryISO["Germany"] = "de";
        CountryISO["Ghana"] = "gh";
        CountryISO["Gibraltar"] = "gi";
        CountryISO["Greece"] = "gr";
        CountryISO["Greenland"] = "gl";
        CountryISO["Grenada"] = "gd";
        CountryISO["Guadeloupe"] = "gp";
        CountryISO["Guam"] = "gu";
        CountryISO["Guatemala"] = "gt";
        CountryISO["Guernsey"] = "gg";
        CountryISO["Guinea"] = "gn";
        CountryISO["GuineaBissau"] = "gw";
        CountryISO["Guyana"] = "gy";
        CountryISO["Haiti"] = "ht";
        CountryISO["Honduras"] = "hn";
        CountryISO["HongKong"] = "hk";
        CountryISO["Hungary"] = "hu";
        CountryISO["Iceland"] = "is";
        CountryISO["India"] = "in";
        CountryISO["Indonesia"] = "id";
        CountryISO["Iran"] = "ir";
        CountryISO["Iraq"] = "iq";
        CountryISO["Ireland"] = "ie";
        CountryISO["IsleOfMan"] = "im";
        CountryISO["Israel"] = "il";
        CountryISO["Italy"] = "it";
        CountryISO["Jamaica"] = "jm";
        CountryISO["Japan"] = "jp";
        CountryISO["Jersey"] = "je";
        CountryISO["Jordan"] = "jo";
        CountryISO["Kazakhstan"] = "kz";
        CountryISO["Kenya"] = "ke";
        CountryISO["Kiribati"] = "ki";
        CountryISO["Kosovo"] = "xk";
        CountryISO["Kuwait"] = "kw";
        CountryISO["Kyrgyzstan"] = "kg";
        CountryISO["Laos"] = "la";
        CountryISO["Latvia"] = "lv";
        CountryISO["Lebanon"] = "lb";
        CountryISO["Lesotho"] = "ls";
        CountryISO["Liberia"] = "lr";
        CountryISO["Libya"] = "ly";
        CountryISO["Liechtenstein"] = "li";
        CountryISO["Lithuania"] = "lt";
        CountryISO["Luxembourg"] = "lu";
        CountryISO["Macau"] = "mo";
        CountryISO["Macedonia"] = "mk";
        CountryISO["Madagascar"] = "mg";
        CountryISO["Malawi"] = "mw";
        CountryISO["Malaysia"] = "my";
        CountryISO["Maldives"] = "mv";
        CountryISO["Mali"] = "ml";
        CountryISO["Malta"] = "mt";
        CountryISO["MarshallIslands"] = "mh";
        CountryISO["Martinique"] = "mq";
        CountryISO["Mauritania"] = "mr";
        CountryISO["Mauritius"] = "mu";
        CountryISO["Mayotte"] = "yt";
        CountryISO["Mexico"] = "mx";
        CountryISO["Micronesia"] = "fm";
        CountryISO["Moldova"] = "md";
        CountryISO["Monaco"] = "mc";
        CountryISO["Mongolia"] = "mn";
        CountryISO["Montenegro"] = "me";
        CountryISO["Montserrat"] = "ms";
        CountryISO["Morocco"] = "ma";
        CountryISO["Mozambique"] = "mz";
        CountryISO["Myanmar"] = "mm";
        CountryISO["Namibia"] = "na";
        CountryISO["Nauru"] = "nr";
        CountryISO["Nepal"] = "np";
        CountryISO["Netherlands"] = "nl";
        CountryISO["NewCaledonia"] = "nc";
        CountryISO["NewZealand"] = "nz";
        CountryISO["Nicaragua"] = "ni";
        CountryISO["Niger"] = "ne";
        CountryISO["Nigeria"] = "ng";
        CountryISO["Niue"] = "nu";
        CountryISO["NorfolkIsland"] = "nf";
        CountryISO["NorthKorea"] = "kp";
        CountryISO["NorthernMarianaIslands"] = "mp";
        CountryISO["Norway"] = "no";
        CountryISO["Oman"] = "om";
        CountryISO["Pakistan"] = "pk";
        CountryISO["Palau"] = "pw";
        CountryISO["Palestine"] = "ps";
        CountryISO["Panama"] = "pa";
        CountryISO["PapuaNewGuinea"] = "pg";
        CountryISO["Paraguay"] = "py";
        CountryISO["Peru"] = "pe";
        CountryISO["Philippines"] = "ph";
        CountryISO["Poland"] = "pl";
        CountryISO["Portugal"] = "pt";
        CountryISO["PuertoRico"] = "pr";
        CountryISO["Qatar"] = "qa";
        CountryISO["R\xE9union"] = "re";
        CountryISO["Romania"] = "ro";
        CountryISO["Russia"] = "ru";
        CountryISO["Rwanda"] = "rw";
        CountryISO["SaintBarth\xE9lemy"] = "bl";
        CountryISO["SaintHelena"] = "sh";
        CountryISO["SaintKittsAndNevis"] = "kn";
        CountryISO["SaintLucia"] = "lc";
        CountryISO["SaintMartin"] = "mf";
        CountryISO["SaintPierreAndMiquelon"] = "pm";
        CountryISO["SaintVincentAndTheGrenadines"] = "vc";
        CountryISO["Samoa"] = "ws";
        CountryISO["SanMarino"] = "sm";
        CountryISO["S\xE3oTom\xE9AndPr\xEDncipe"] = "st";
        CountryISO["SaudiArabia"] = "sa";
        CountryISO["Senegal"] = "sn";
        CountryISO["Serbia"] = "rs";
        CountryISO["Seychelles"] = "sc";
        CountryISO["SierraLeone"] = "sl";
        CountryISO["Singapore"] = "sg";
        CountryISO["SintMaarten"] = "sx";
        CountryISO["Slovakia"] = "sk";
        CountryISO["Slovenia"] = "si";
        CountryISO["SolomonIslands"] = "sb";
        CountryISO["Somalia"] = "so";
        CountryISO["SouthAfrica"] = "za";
        CountryISO["SouthKorea"] = "kr";
        CountryISO["SouthSudan"] = "ss";
        CountryISO["Spain"] = "es";
        CountryISO["SriLanka"] = "lk";
        CountryISO["Sudan"] = "sd";
        CountryISO["Suriname"] = "sr";
        CountryISO["SvalbardAndJanMayen"] = "sj";
        CountryISO["Swaziland"] = "sz";
        CountryISO["Sweden"] = "se";
        CountryISO["Switzerland"] = "ch";
        CountryISO["Syria"] = "sy";
        CountryISO["Taiwan"] = "tw";
        CountryISO["Tajikistan"] = "tj";
        CountryISO["Tanzania"] = "tz";
        CountryISO["Thailand"] = "th";
        CountryISO["TimorLeste"] = "tl";
        CountryISO["Togo"] = "tg";
        CountryISO["Tokelau"] = "tk";
        CountryISO["Tonga"] = "to";
        CountryISO["TrinidadAndTobago"] = "tt";
        CountryISO["Tunisia"] = "tn";
        CountryISO["Turkey"] = "tr";
        CountryISO["Turkmenistan"] = "tm";
        CountryISO["TurksAndCaicosIslands"] = "tc";
        CountryISO["Tuvalu"] = "tv";
        CountryISO["USVirginIslands"] = "vi";
        CountryISO["Uganda"] = "ug";
        CountryISO["Ukraine"] = "ua";
        CountryISO["UnitedArabEmirates"] = "ae";
        CountryISO["UnitedKingdom"] = "gb";
        CountryISO["UnitedStates"] = "us";
        CountryISO["Uruguay"] = "uy";
        CountryISO["Uzbekistan"] = "uz";
        CountryISO["Vanuatu"] = "vu";
        CountryISO["VaticanCity"] = "va";
        CountryISO["Venezuela"] = "ve";
        CountryISO["Vietnam"] = "vn";
        CountryISO["WallisAndFutuna"] = "wf";
        CountryISO["WesternSahara"] = "eh";
        CountryISO["Yemen"] = "ye";
        CountryISO["Zambia"] = "zm";
        CountryISO["Zimbabwe"] = "zw";
        CountryISO["\xC5landIslands"] = "ax";
      })(_CountryISO || (_CountryISO = {}));
      /***/

    },

    /***/
    5847:
    /*!*******************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/enums/phone-number-format.enum.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhoneNumberFormat": function PhoneNumberFormat() {
          return (
            /* binding */
            _PhoneNumberFormat
          );
        }
        /* harmony export */

      });

      var _PhoneNumberFormat;

      (function (PhoneNumberFormat) {
        PhoneNumberFormat["International"] = "INTERNATIONAL";
        PhoneNumberFormat["National"] = "NATIONAL";
      })(_PhoneNumberFormat || (_PhoneNumberFormat = {}));
      /***/

    },

    /***/
    6894:
    /*!********************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchCountryField": function SearchCountryField() {
          return (
            /* binding */
            _SearchCountryField
          );
        }
        /* harmony export */

      });

      var _SearchCountryField;

      (function (SearchCountryField) {
        SearchCountryField["DialCode"] = "dialCode";
        SearchCountryField["Iso2"] = "iso2";
        SearchCountryField["Name"] = "name";
        SearchCountryField["All"] = "all";
      })(_SearchCountryField || (_SearchCountryField = {}));
      /***/

    },

    /***/
    2725:
    /*!***********************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/interfaces/change-data.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    3749:
    /*!*****************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxIntlTelInputComponent": function NgxIntlTelInputComponent() {
          return (
            /* binding */
            _NgxIntlTelInputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! google-libphonenumber */
      882);
      /* harmony import */


      var google_libphonenumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      9298);
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      7291);
      /* harmony import */


      var _data_country_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data/country-code */
      3065);
      /* harmony import */


      var _enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./enums/search-country-field.enum */
      6894);
      /* harmony import */


      var _ngx_intl_tel_input_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ngx-intl-tel-input.validator */
      7997);
      /* harmony import */


      var _enums_phone_number_format_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./enums/phone-number-format.enum */
      5847);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      93);
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      3676);
      /* harmony import */


      var _ngx_mask_mask_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ngx-mask/mask.directive */
      4729);
      /* harmony import */


      var _directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./directives/native-element-injector.directive */
      1993);

      var _c0 = ["countryList"];

      function NgxIntlTelInputComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("+", ctx_r0.selectedCountry.dialCode, "");
        }
      }

      function NgxIntlTelInputComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NgxIntlTelInputComponent_div_6_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r8.countrySearchText = $event;
          })("keyup", function NgxIntlTelInputComponent_div_6_div_1_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r10.searchCountry();
          })("click", function NgxIntlTelInputComponent_div_6_div_1_Template_input_click_1_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.countrySearchText)("placeholder", ctx_r3.searchCountryPlaceholder);
        }
      }

      function NgxIntlTelInputComponent_div_6_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NgxIntlTelInputComponent_div_6_li_4_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

            var country_r12 = restoredCtx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

            return ctx_r13.onCountrySelect(country_r12, _r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", country_r12.htmlId + "-preferred");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", country_r12.flagClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](country_r12.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("+", country_r12.dialCode, "");
        }
      }

      function NgxIntlTelInputComponent_div_6_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 23);
        }
      }

      function NgxIntlTelInputComponent_div_6_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NgxIntlTelInputComponent_div_6_li_6_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var country_r15 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

            return ctx_r16.onCountrySelect(country_r15, _r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", country_r15.htmlId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", country_r15.flagClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](country_r15.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("+", country_r15.dialCode, "");
        }
      }

      function NgxIntlTelInputComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgxIntlTelInputComponent_div_6_div_1_Template, 2, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ul", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NgxIntlTelInputComponent_div_6_li_4_Template, 7, 4, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NgxIntlTelInputComponent_div_6_li_5_Template, 1, 0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NgxIntlTelInputComponent_div_6_li_6_Template, 7, 4, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.searchCountryFlag && ctx_r1.searchCountryField);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.preferredCountriesInDropDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.preferredCountriesInDropDown == null ? null : ctx_r1.preferredCountriesInDropDown.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.allCountries);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "disabled": a0
        };
      };

      var _NgxIntlTelInputComponent = /*#__PURE__*/function () {
        function _NgxIntlTelInputComponent(countryCodeData, cdr) {
          _classCallCheck(this, _NgxIntlTelInputComponent);

          this.countryCodeData = countryCodeData;
          this.cdr = cdr;
          this.value = '';
          this.preferredCountries = [];
          this.enablePlaceholder = true;
          this.numberFormat = _enums_phone_number_format_enum__WEBPACK_IMPORTED_MODULE_3__.PhoneNumberFormat.International;
          this.cssClass = 'form-control';
          this.onlyCountries = [];
          this.enableAutoCountrySelect = true;
          this.searchCountryFlag = false;
          this.searchCountryField = [_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_1__.SearchCountryField.All];
          this.searchCountryPlaceholder = 'Search Country';
          this.maxLength = '';
          this.selectFirstCountry = true;
          this.phoneValidation = true;
          this.inputId = 'phone';
          this.separateDialCode = false;
          this.defaultPhoneMask = '00 00 00 00';
          this.countryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.selectedCountry = {
            areaCodes: undefined,
            dialCode: '',
            htmlId: '',
            flagClass: '',
            iso2: '',
            name: '',
            placeHolder: '',
            priority: 0
          };
          this.phoneNumber = '';
          this.allCountries = [];
          this.preferredCountriesInDropDown = []; // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...

          this.phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberUtil.getInstance();
          this.disabled = false;
          this.errors = ['Phone number is required.'];
          this.countrySearchText = '';
          this.phoneMask = this.defaultPhoneMask;

          this.onTouched = function () {};

          this.propagateChange = function (_) {}; // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
          // Add the wrong classes and such


          (0, ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_8__.setTheme)('bs4');
        }

        _createClass(_NgxIntlTelInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var selectedISO = changes['selectedCountryISO'];

            if (this.allCountries && selectedISO && selectedISO.currentValue !== selectedISO.previousValue) {
              this.updateSelectedCountry();
            }

            if (changes.preferredCountries) {
              this.updatePreferredCountries();
            }

            this.checkSeparateDialCodeStyle();
          }
          /*
              This is a wrapper method to avoid calling this.ngOnInit() in writeValue().
              Ref: http://codelyzer.com/rules/no-life-cycle-call/
          */

        }, {
          key: "init",
          value: function init() {
            var _this = this;

            this.fetchCountryData();

            if (this.preferredCountries.length) {
              this.updatePreferredCountries();
            }

            if (this.onlyCountries.length) {
              this.allCountries = this.allCountries.filter(function (c) {
                return _this.onlyCountries.includes(c.iso2);
              });
            }

            if (this.selectFirstCountry) {
              if (this.preferredCountriesInDropDown.length) {
                this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
              } else {
                this.setSelectedCountry(this.allCountries[0]);
              }
            }

            this.updateSelectedCountry();
            this.checkSeparateDialCodeStyle();
          }
        }, {
          key: "setSelectedCountry",
          value: function setSelectedCountry(country) {
            this.selectedCountry = country;
            this.countryChange.emit(country);
          }
          /**
           * Search country based on country name, iso2, dialCode or all of them.
           */

        }, {
          key: "searchCountry",
          value: function searchCountry() {
            var _this2 = this;

            if (!this.countrySearchText) {
              this.countryList.nativeElement.querySelector('.iti__country-list li').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest'
              });
              return;
            }

            var countrySearchTextLower = this.countrySearchText.toLowerCase();
            var country = this.allCountries.filter(function (c) {
              if (_this2.searchCountryField.indexOf(_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_1__.SearchCountryField.All) > -1) {
                // Search in all fields
                if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                  return c;
                }

                if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                  return c;
                }

                if (c.dialCode.startsWith(_this2.countrySearchText)) {
                  return c;
                }
              } else {
                // Or search by specific SearchCountryField(s)
                if (_this2.searchCountryField.indexOf(_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_1__.SearchCountryField.Iso2) > -1) {
                  if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                  }
                }

                if (_this2.searchCountryField.indexOf(_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_1__.SearchCountryField.Name) > -1) {
                  if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                  }
                }

                if (_this2.searchCountryField.indexOf(_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_1__.SearchCountryField.DialCode) > -1) {
                  if (c.dialCode.startsWith(_this2.countrySearchText)) {
                    return c;
                  }
                }
              }
            });

            if (country.length > 0) {
              var el = this.countryList.nativeElement.querySelector('#' + country[0].htmlId);

              if (el) {
                el.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'nearest'
                });
              }
            }

            this.checkSeparateDialCodeStyle();
          }
        }, {
          key: "onPhoneNumberChange",
          value: function onPhoneNumberChange() {
            var countryCode; // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.

            if (this.phoneNumber && typeof this.phoneNumber === 'object') {
              var numberObj = this.phoneNumber;
              this.phoneNumber = numberObj.number;
              countryCode = numberObj.countryCode;
            }

            this.value = this.phoneNumber;
            countryCode = countryCode || this.selectedCountry.iso2;
            var number = this.getParsedNumber(this.phoneNumber, countryCode); // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)

            if (this.enableAutoCountrySelect) {
              countryCode = number && number.getCountryCode() ? this.getCountryIsoCode(number.getCountryCode(), number) : this.selectedCountry.iso2;

              if (countryCode && countryCode !== this.selectedCountry.iso2) {
                var newCountry = this.allCountries.sort(function (a, b) {
                  return a.priority - b.priority;
                }).find(function (c) {
                  return c.iso2 === countryCode;
                });

                if (newCountry) {
                  this.selectedCountry = newCountry;
                }
              }
            }

            countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
            this.checkSeparateDialCodeStyle();

            if (!this.value) {
              // Reason: avoid https://stackoverflow.com/a/54358133/1617590
              // tslint:disable-next-line: no-null-keyword
              this.propagateChange(null);
            } else {
              var intlNo = number ? this.phoneUtil.format(number, google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberFormat.INTERNATIONAL) : ''; // parse phoneNumber if separate dial code is needed

              if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
              }

              this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number ? this.phoneUtil.format(number, google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberFormat.NATIONAL) : '',
                e164Number: number ? this.phoneUtil.format(number, google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberFormat.E164) : '',
                countryCode: countryCode.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode
              });
            }
          }
        }, {
          key: "onCountrySelect",
          value: function onCountrySelect(country, el) {
            var countryPlaceholder = country.placeHolder.replace(/[0-9]/g, '0');

            if (countryPlaceholder) {
              this.phoneMask = countryPlaceholder;
              this.cdr.markForCheck();
            }

            this.setSelectedCountry(country);
            this.checkSeparateDialCodeStyle();

            if (this.phoneNumber && this.phoneNumber.length > 0) {
              this.value = this.phoneNumber;
              var number = this.getParsedNumber(this.phoneNumber, this.selectedCountry.iso2);
              var intlNo = number ? this.phoneUtil.format(number, google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberFormat.INTERNATIONAL) : ''; // parse phoneNumber if separate dial code is needed

              if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
              }

              this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number ? this.phoneUtil.format(number, google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberFormat.NATIONAL) : '',
                e164Number: number ? this.phoneUtil.format(number, google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberFormat.E164) : '',
                countryCode: this.selectedCountry.iso2.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode
              });
            } else {
              // Reason: avoid https://stackoverflow.com/a/54358133/1617590
              // tslint:disable-next-line: no-null-keyword
              this.propagateChange(null);
            }

            el.focus();
          }
        }, {
          key: "onInputKeyPress",
          value: function onInputKeyPress(event) {
            var allowedChars = /[0-9\+\-\(\)\ ]/;
            var allowedCtrlChars = /[axcv]/; // Allows copy-pasting

            var allowedOtherKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Home', 'End', 'Insert', 'Delete', 'Backspace'];

            if (!allowedChars.test(event.key) && !(event.ctrlKey && allowedCtrlChars.test(event.key)) && !allowedOtherKeys.includes(event.key)) {
              event.preventDefault();
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.propagateChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "writeValue",
          value: function writeValue(obj) {
            var _this3 = this;

            if (obj === undefined) {
              this.init();
            }

            this.phoneNumber = obj;
            setTimeout(function () {
              _this3.onPhoneNumberChange();
            }, 1);
          }
        }, {
          key: "resolvePlaceholder",
          value: function resolvePlaceholder() {
            var placeholder = '';

            if (this.customPlaceholder) {
              placeholder = this.customPlaceholder;
            } else if (this.selectedCountry.placeHolder) {
              placeholder = this.selectedCountry.placeHolder;

              if (this.separateDialCode) {
                placeholder = this.removeDialCode(placeholder);
              }
            }

            return placeholder;
          }
          /* --------------------------------- Helpers -------------------------------- */

          /**
           * Returns parse PhoneNumber object.
           * @param phoneNumber string
           * @param countryCode string
           */

        }, {
          key: "getParsedNumber",
          value: function getParsedNumber(phoneNumber, countryCode) {
            var number;

            try {
              number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
            } catch (e) {}

            return number;
          }
          /**
           * Adjusts input alignment based on the dial code presentation style.
           */

        }, {
          key: "checkSeparateDialCodeStyle",
          value: function checkSeparateDialCodeStyle() {
            if (this.separateDialCode && this.selectedCountry) {
              var cntryCd = this.selectedCountry.dialCode;
              this.separateDialCodeClass = 'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
            } else {
              this.separateDialCodeClass = '';
            }
          }
          /**
           * Cleans dialcode from phone number string.
           * @param phoneNumber string
           */

        }, {
          key: "removeDialCode",
          value: function removeDialCode(phoneNumber) {
            var number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
            phoneNumber = this.phoneUtil.format(number, google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberFormat[this.numberFormat]);

            if (phoneNumber.startsWith('+') && this.separateDialCode) {
              phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
            }

            return phoneNumber;
          }
          /**
           * Sifts through all countries and returns iso code of the primary country
           * based on the number provided.
           * @param countryCode country code in number format
           * @param number PhoneNumber object
           */

        }, {
          key: "getCountryIsoCode",
          value: function getCountryIsoCode(countryCode, number) {
            // Will use this to match area code from the first numbers
            var rawNumber = number['values_']['2'].toString(); // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)

            var countries = this.allCountries.filter(function (c) {
              return c.dialCode === countryCode.toString();
            }); // Main country is the country, which has no areaCodes specified in country-code.ts file.

            var mainCountry = countries.find(function (c) {
              return c.areaCodes === undefined;
            }); // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.

            var secondaryCountries = countries.filter(function (c) {
              return c.areaCodes !== undefined;
            });
            var matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
            /*
                Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
                If no matches found, fallback to the main country.
            */

            secondaryCountries.forEach(function (country) {
              country.areaCodes.forEach(function (areaCode) {
                if (rawNumber.startsWith(areaCode)) {
                  matchedCountry = country.iso2;
                }
              });
            });
            return matchedCountry;
          }
          /**
           * Gets formatted example phone number from phoneUtil.
           * @param countryCode string
           */

        }, {
          key: "getPhoneNumberPlaceHolder",
          value: function getPhoneNumberPlaceHolder(countryCode) {
            try {
              return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), google_libphonenumber__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberFormat[this.numberFormat]);
            } catch (e) {
              return e;
            }
          }
          /**
           * Clearing the list to avoid duplicates (https://github.com/webcat12345/ngx-intl-tel-input/issues/248)
           */

        }, {
          key: "fetchCountryData",
          value: function fetchCountryData() {
            var _this4 = this;

            this.allCountries = [];
            this.countryCodeData.allCountries.forEach(function (c) {
              var country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: c[4] || undefined,
                htmlId: "iti-0__item-".concat(c[1].toString()),
                flagClass: "iti__".concat(c[1].toString().toLocaleLowerCase()),
                placeHolder: ''
              };

              if (_this4.enablePlaceholder) {
                country.placeHolder = _this4.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
              }

              _this4.allCountries.push(country);
            });
          }
          /**
           * Populates preferredCountriesInDropDown with prefferred countries.
           */

        }, {
          key: "updatePreferredCountries",
          value: function updatePreferredCountries() {
            var _this5 = this;

            if (this.preferredCountries.length) {
              this.preferredCountriesInDropDown = [];
              this.preferredCountries.forEach(function (iso2) {
                var preferredCountry = _this5.allCountries.filter(function (c) {
                  return c.iso2 === iso2;
                });

                _this5.preferredCountriesInDropDown.push(preferredCountry[0]);
              });
            }
          }
          /**
           * Updates selectedCountry.
           */

        }, {
          key: "updateSelectedCountry",
          value: function updateSelectedCountry() {
            var _this6 = this;

            if (this.selectedCountryISO) {
              this.selectedCountry = this.allCountries.find(function (c) {
                return c.iso2.toLowerCase() === _this6.selectedCountryISO.toLowerCase();
              });

              if (this.selectedCountry) {
                if (this.phoneNumber) {
                  this.onPhoneNumberChange();
                } else {
                  // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                  // tslint:disable-next-line: no-null-keyword
                  this.propagateChange(null);
                }
              }
            }
          }
        }]);

        return _NgxIntlTelInputComponent;
      }();

      _NgxIntlTelInputComponent.ɵfac = function NgxIntlTelInputComponent_Factory(t) {
        return new (t || _NgxIntlTelInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_data_country_code__WEBPACK_IMPORTED_MODULE_0__.CountryCode), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
      };

      _NgxIntlTelInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _NgxIntlTelInputComponent,
        selectors: [["ngx-intl-tel-input"]],
        viewQuery: function NgxIntlTelInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.countryList = _t.first);
          }
        },
        inputs: {
          value: "value",
          preferredCountries: "preferredCountries",
          enablePlaceholder: "enablePlaceholder",
          customPlaceholder: "customPlaceholder",
          numberFormat: "numberFormat",
          cssClass: "cssClass",
          onlyCountries: "onlyCountries",
          enableAutoCountrySelect: "enableAutoCountrySelect",
          searchCountryFlag: "searchCountryFlag",
          searchCountryField: "searchCountryField",
          searchCountryPlaceholder: "searchCountryPlaceholder",
          maxLength: "maxLength",
          selectFirstCountry: "selectFirstCountry",
          selectedCountryISO: "selectedCountryISO",
          phoneValidation: "phoneValidation",
          inputId: "inputId",
          separateDialCode: "separateDialCode",
          defaultPhoneMask: "defaultPhoneMask"
        },
        outputs: {
          countryChange: "countryChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_data_country_code__WEBPACK_IMPORTED_MODULE_0__.CountryCode, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
          // tslint:disable-next-line:no-forward-ref
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
            return _NgxIntlTelInputComponent;
          }),
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALIDATORS,
          useValue: _ngx_intl_tel_input_validator__WEBPACK_IMPORTED_MODULE_2__.phoneNumberValidator,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
        decls: 9,
        vars: 15,
        consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "mask", "id", "ngClass", "ngModel", "disabled", "placeholder", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]],
        template: function NgxIntlTelInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NgxIntlTelInputComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NgxIntlTelInputComponent_div_6_Template, 7, 4, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function NgxIntlTelInputComponent_Template_input_blur_7_listener() {
              return ctx.onTouched();
            })("keypress", function NgxIntlTelInputComponent_Template_input_keypress_7_listener($event) {
              return ctx.onInputKeyPress($event);
            })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.phoneNumber = $event;
            })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener() {
              return ctx.onPhoneNumberChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.separateDialCodeClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c1, ctx.disabled))("isDisabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.selectedCountry == null ? null : ctx.selectedCountry.flagClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.separateDialCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mask", ctx.phoneMask)("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder());

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("maxLength", ctx.maxLength)("validation", ctx.phoneValidation);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownToggleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownMenuDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _ngx_mask_mask_directive__WEBPACK_IMPORTED_MODULE_4__.MaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_5__.NativeElementInjectorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
        styles: [".dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n\twhite-space: nowrap;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n\tdisplay: inline-block;\n\tmargin-left: 0.255em;\n\tvertical-align: 0.255em;\n\tcontent: \"\";\n\tborder-top: 0.3em solid;\n\tborder-right: 0.3em solid transparent;\n\tborder-bottom: 0;\n\tborder-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n\tmargin-left: 0;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 100%;\n\tleft: 0;\n\tz-index: 1000;\n\tdisplay: none;\n\tfloat: left;\n\tmin-width: 10rem;\n\tpadding: 0.5rem 0;\n\tmargin: 0.125rem 0 0;\n\tfont-size: 1rem;\n\tcolor: #212529;\n\ttext-align: left;\n\tlist-style: none;\n\tbackground-color: #fff;\n\tbackground-clip: padding-box;\n\tborder: 1px solid rgba(0, 0, 0, 0.15);\n\tborder-radius: 0.25rem;\n}\n\n.dropdown-menu-left[_ngcontent-%COMP%] {\n\tright: auto;\n\tleft: 0;\n}\n\n.dropdown-menu-right[_ngcontent-%COMP%] {\n\tright: 0;\n\tleft: auto;\n}\n\n@media (min-width: 576px) {\n\t.dropdown-menu-sm-left[_ngcontent-%COMP%] {\n\t\tright: auto;\n\t\tleft: 0;\n\t}\n\n\t.dropdown-menu-sm-right[_ngcontent-%COMP%] {\n\t\tright: 0;\n\t\tleft: auto;\n\t}\n}\n\n@media (min-width: 768px) {\n\t.dropdown-menu-md-left[_ngcontent-%COMP%] {\n\t\tright: auto;\n\t\tleft: 0;\n\t}\n\n\t.dropdown-menu-md-right[_ngcontent-%COMP%] {\n\t\tright: 0;\n\t\tleft: auto;\n\t}\n}\n\n@media (min-width: 992px) {\n\t.dropdown-menu-lg-left[_ngcontent-%COMP%] {\n\t\tright: auto;\n\t\tleft: 0;\n\t}\n\n\t.dropdown-menu-lg-right[_ngcontent-%COMP%] {\n\t\tright: 0;\n\t\tleft: auto;\n\t}\n}\n\n@media (min-width: 1200px) {\n\t.dropdown-menu-xl-left[_ngcontent-%COMP%] {\n\t\tright: auto;\n\t\tleft: 0;\n\t}\n\n\t.dropdown-menu-xl-right[_ngcontent-%COMP%] {\n\t\tright: 0;\n\t\tleft: auto;\n\t}\n}\n\n.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n\ttop: auto;\n\tbottom: 100%;\n\tmargin-top: 0;\n\tmargin-bottom: 0.125rem;\n}\n\n.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n\tdisplay: inline-block;\n\tmargin-left: 0.255em;\n\tvertical-align: 0.255em;\n\tcontent: \"\";\n\tborder-top: 0;\n\tborder-right: 0.3em solid transparent;\n\tborder-bottom: 0.3em solid;\n\tborder-left: 0.3em solid transparent;\n}\n\n.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n\tmargin-left: 0;\n}\n\n.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n\ttop: 0;\n\tright: auto;\n\tleft: 100%;\n\tmargin-top: 0;\n\tmargin-left: 0.125rem;\n}\n\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n\tdisplay: inline-block;\n\tmargin-left: 0.255em;\n\tvertical-align: 0.255em;\n\tcontent: \"\";\n\tborder-top: 0.3em solid transparent;\n\tborder-right: 0;\n\tborder-bottom: 0.3em solid transparent;\n\tborder-left: 0.3em solid;\n}\n\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n\tmargin-left: 0;\n}\n\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n\tvertical-align: 0;\n}\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n\ttop: 0;\n\tright: 100%;\n\tleft: auto;\n\tmargin-top: 0;\n\tmargin-right: 0.125rem;\n}\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n\tdisplay: inline-block;\n\tmargin-left: 0.255em;\n\tvertical-align: 0.255em;\n\tcontent: \"\";\n}\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n\tdisplay: none;\n}\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::before {\n\tdisplay: inline-block;\n\tmargin-right: 0.255em;\n\tvertical-align: 0.255em;\n\tcontent: \"\";\n\tborder-top: 0.3em solid transparent;\n\tborder-right: 0.3em solid;\n\tborder-bottom: 0.3em solid transparent;\n}\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n\tmargin-left: 0;\n}\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::before {\n\tvertical-align: 0;\n}\n\n.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%] {\n\tright: auto;\n\tbottom: auto;\n}\n\n.dropdown-divider[_ngcontent-%COMP%] {\n\theight: 0;\n\tmargin: 0.5rem 0;\n\toverflow: hidden;\n\tborder-top: 1px solid #e9ecef;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 0.25rem 1.5rem;\n\tclear: both;\n\tfont-weight: 400;\n\tcolor: #212529;\n\ttext-align: inherit;\n\twhite-space: nowrap;\n\tbackground-color: transparent;\n\tborder: 0;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus {\n\tcolor: #16181b;\n\ttext-decoration: none;\n\tbackground-color: #f8f9fa;\n}\n\n.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active {\n\tcolor: #fff;\n\ttext-decoration: none;\n\tbackground-color: #007bff;\n}\n\n.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled {\n\tcolor: #6c757d;\n\tpointer-events: none;\n\tbackground-color: transparent;\n}\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n\tdisplay: block;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tpadding: 0.5rem 1.5rem;\n\tmargin-bottom: 0;\n\tfont-size: 0.875rem;\n\tcolor: #6c757d;\n\twhite-space: nowrap;\n}\n\n.dropdown-item-text[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tpadding: 0.25rem 1.5rem;\n\tcolor: #212529;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC1kcm9wZG93bi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FJQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsdUJBQXVCO0NBQ3ZCLHFDQUFxQztDQUNyQyxnQkFBZ0I7Q0FDaEIsb0NBQW9DO0FBQ3JDOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsYUFBYTtDQUNiLGFBQWE7Q0FDYixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0Qiw0QkFBNEI7Q0FDNUIscUNBQXFDO0NBQ3JDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxRQUFRO0NBQ1IsVUFBVTtBQUNYOztBQUVBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsT0FBTztDQUNSOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7Q0FDWDtBQUNEOztBQUNBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsT0FBTztDQUNSOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7Q0FDWDtBQUNEOztBQUNBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsT0FBTztDQUNSOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7Q0FDWDtBQUNEOztBQUNBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsT0FBTztDQUNSOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7Q0FDWDtBQUNEOztBQUNBO0NBQ0MsU0FBUztDQUNULFlBQVk7Q0FDWixhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLG9CQUFvQjtDQUNwQix1QkFBdUI7Q0FDdkIsV0FBVztDQUNYLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsMEJBQTBCO0NBQzFCLG9DQUFvQztBQUNyQzs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLE1BQU07Q0FDTixXQUFXO0NBQ1gsVUFBVTtDQUNWLGFBQWE7Q0FDYixxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsbUNBQW1DO0NBQ25DLGVBQWU7Q0FDZixzQ0FBc0M7Q0FDdEMsd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsTUFBTTtDQUNOLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixvQkFBb0I7Q0FDcEIsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjs7QUFDQTtDQUNDLGFBQWE7QUFDZDs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLFdBQVc7Q0FDWCxtQ0FBbUM7Q0FDbkMseUJBQXlCO0NBQ3pCLHNDQUFzQztBQUN2Qzs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3QixTQUFTO0FBQ1Y7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtDQUNwQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCx1QkFBdUI7Q0FDdkIsY0FBYztBQUNmIiwiZmlsZSI6ImJvb3RzdHJhcC1kcm9wZG93bi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcHVwLFxuLmRyb3ByaWdodCxcbi5kcm9wZG93bixcbi5kcm9wbGVmdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZSB7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDAuMjU1ZW07XG5cdHZlcnRpY2FsLWFsaWduOiAwLjI1NWVtO1xuXHRjb250ZW50OiBcIlwiO1xuXHRib3JkZXItdG9wOiAwLjNlbSBzb2xpZDtcblx0Ym9yZGVyLXJpZ2h0OiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWJvdHRvbTogMDtcblx0Ym9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXIge1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTAwJTtcblx0bGVmdDogMDtcblx0ei1pbmRleDogMTAwMDtcblx0ZGlzcGxheTogbm9uZTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG1pbi13aWR0aDogMTByZW07XG5cdHBhZGRpbmc6IDAuNXJlbSAwO1xuXHRtYXJnaW46IDAuMTI1cmVtIDAgMDtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRjb2xvcjogIzIxMjUyOTtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmRyb3Bkb3duLW1lbnUtbGVmdCB7XG5cdHJpZ2h0OiBhdXRvO1xuXHRsZWZ0OiAwO1xufVxuXG4uZHJvcGRvd24tbWVudS1yaWdodCB7XG5cdHJpZ2h0OiAwO1xuXHRsZWZ0OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcblx0LmRyb3Bkb3duLW1lbnUtc20tbGVmdCB7XG5cdFx0cmlnaHQ6IGF1dG87XG5cdFx0bGVmdDogMDtcblx0fVxuXG5cdC5kcm9wZG93bi1tZW51LXNtLXJpZ2h0IHtcblx0XHRyaWdodDogMDtcblx0XHRsZWZ0OiBhdXRvO1xuXHR9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LmRyb3Bkb3duLW1lbnUtbWQtbGVmdCB7XG5cdFx0cmlnaHQ6IGF1dG87XG5cdFx0bGVmdDogMDtcblx0fVxuXG5cdC5kcm9wZG93bi1tZW51LW1kLXJpZ2h0IHtcblx0XHRyaWdodDogMDtcblx0XHRsZWZ0OiBhdXRvO1xuXHR9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcblx0LmRyb3Bkb3duLW1lbnUtbGctbGVmdCB7XG5cdFx0cmlnaHQ6IGF1dG87XG5cdFx0bGVmdDogMDtcblx0fVxuXG5cdC5kcm9wZG93bi1tZW51LWxnLXJpZ2h0IHtcblx0XHRyaWdodDogMDtcblx0XHRsZWZ0OiBhdXRvO1xuXHR9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG5cdC5kcm9wZG93bi1tZW51LXhsLWxlZnQge1xuXHRcdHJpZ2h0OiBhdXRvO1xuXHRcdGxlZnQ6IDA7XG5cdH1cblxuXHQuZHJvcGRvd24tbWVudS14bC1yaWdodCB7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0bGVmdDogYXV0bztcblx0fVxufVxuLmRyb3B1cCAuZHJvcGRvd24tbWVudSB7XG5cdHRvcDogYXV0bztcblx0Ym90dG9tOiAxMDAlO1xuXHRtYXJnaW4tdG9wOiAwO1xuXHRtYXJnaW4tYm90dG9tOiAwLjEyNXJlbTtcbn1cbi5kcm9wdXAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xuXHR2ZXJ0aWNhbC1hbGlnbjogMC4yNTVlbTtcblx0Y29udGVudDogXCJcIjtcblx0Ym9yZGVyLXRvcDogMDtcblx0Ym9yZGVyLXJpZ2h0OiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWJvdHRvbTogMC4zZW0gc29saWQ7XG5cdGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5kcm9wdXAgLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXIge1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuLmRyb3ByaWdodCAuZHJvcGRvd24tbWVudSB7XG5cdHRvcDogMDtcblx0cmlnaHQ6IGF1dG87XG5cdGxlZnQ6IDEwMCU7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1sZWZ0OiAwLjEyNXJlbTtcbn1cbi5kcm9wcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xuXHR2ZXJ0aWNhbC1hbGlnbjogMC4yNTVlbTtcblx0Y29udGVudDogXCJcIjtcblx0Ym9yZGVyLXRvcDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogMDtcblx0Ym9yZGVyLWJvdHRvbTogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZDtcbn1cbi5kcm9wcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXIge1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cbi5kcm9wcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuXHR2ZXJ0aWNhbC1hbGlnbjogMDtcbn1cblxuLmRyb3BsZWZ0IC5kcm9wZG93bi1tZW51IHtcblx0dG9wOiAwO1xuXHRyaWdodDogMTAwJTtcblx0bGVmdDogYXV0bztcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLXJpZ2h0OiAwLjEyNXJlbTtcbn1cbi5kcm9wbGVmdCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDAuMjU1ZW07XG5cdHZlcnRpY2FsLWFsaWduOiAwLjI1NWVtO1xuXHRjb250ZW50OiBcIlwiO1xufVxuLmRyb3BsZWZ0IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbi5kcm9wbGVmdCAuZHJvcGRvd24tdG9nZ2xlOjpiZWZvcmUge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1yaWdodDogMC4yNTVlbTtcblx0dmVydGljYWwtYWxpZ246IDAuMjU1ZW07XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGJvcmRlci10b3A6IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmlnaHQ6IDAuM2VtIHNvbGlkO1xuXHRib3JkZXItYm90dG9tOiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5kcm9wbGVmdCAuZHJvcGRvd24tdG9nZ2xlOmVtcHR5OjphZnRlciB7XG5cdG1hcmdpbi1sZWZ0OiAwO1xufVxuLmRyb3BsZWZ0IC5kcm9wZG93bi10b2dnbGU6OmJlZm9yZSB7XG5cdHZlcnRpY2FsLWFsaWduOiAwO1xufVxuXG4uZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49dG9wXSwgLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePXJpZ2h0XSwgLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV0sIC5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj1sZWZ0XSB7XG5cdHJpZ2h0OiBhdXRvO1xuXHRib3R0b206IGF1dG87XG59XG5cbi5kcm9wZG93bi1kaXZpZGVyIHtcblx0aGVpZ2h0OiAwO1xuXHRtYXJnaW46IDAuNXJlbSAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDAuMjVyZW0gMS41cmVtO1xuXHRjbGVhcjogYm90aDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Y29sb3I6ICMyMTI1Mjk7XG5cdHRleHQtYWxpZ246IGluaGVyaXQ7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IDA7XG59XG4uZHJvcGRvd24taXRlbTpob3ZlciwgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xuXHRjb2xvcjogIzE2MTgxYjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLCAuZHJvcGRvd24taXRlbTphY3RpdmUge1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xufVxuLmRyb3Bkb3duLWl0ZW0uZGlzYWJsZWQsIC5kcm9wZG93bi1pdGVtOmRpc2FibGVkIHtcblx0Y29sb3I6ICM2Yzc1N2Q7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG5cdG1hcmdpbi1ib3R0b206IDA7XG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XG5cdGNvbG9yOiAjNmM3NTdkO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZHJvcGRvd24taXRlbS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuMjVyZW0gMS41cmVtO1xuXHRjb2xvcjogIzIxMjUyOTtcbn1cbiJdfQ== */", "li.iti__country[_ngcontent-%COMP%]:hover {\n\tbackground-color: rgba(0, 0, 0, 0.05);\n}\n.iti__selected-flag.dropdown-toggle[_ngcontent-%COMP%]:after {\n\tcontent: none;\n}\n.iti__flag-container.disabled[_ngcontent-%COMP%] {\n\tcursor: default !important;\n}\n.iti.iti--allow-dropdown[_ngcontent-%COMP%]   .flag-container.disabled[_ngcontent-%COMP%]:hover   .iti__selected-flag[_ngcontent-%COMP%] {\n\tbackground: none;\n}\n.country-dropdown[_ngcontent-%COMP%] {\n\tborder: 1px solid #ccc;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\tpadding: 1px;\n\tborder-collapse: collapse;\n}\n.search-container[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n\twidth: 100%;\n\tborder: none;\n\tborder-bottom: 1px solid #ccc;\n\tpadding-left: 10px;\n}\n.search-icon[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 25px;\n\tmargin: 1px 10px;\n}\n.iti__country-list[_ngcontent-%COMP%] {\n\tposition: relative;\n\tborder: none;\n}\n.iti[_ngcontent-%COMP%]   input#country-search-box[_ngcontent-%COMP%] {\n\tpadding-left: 6px;\n}\n.iti[_ngcontent-%COMP%]   .selected-dial-code[_ngcontent-%COMP%] {\n\tmargin-left: 6px;\n}\n.iti.separate-dial-code[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%] {\n\twidth: 93px;\n}\n.iti.separate-dial-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n\tpadding-left: 98px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MscUNBQXFDO0FBQ3RDO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsMEJBQWtCO0NBQWxCLHVCQUFrQjtDQUFsQixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLDZCQUE2QjtDQUM3QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjtBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFFQTs7OztDQUlDLFdBQVc7QUFDWjtBQUVBOzs7O0NBSUMsa0JBQWtCO0FBQ25CIiwiZmlsZSI6Im5neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkuaXRpX19jb3VudHJ5OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5pdGlfX3NlbGVjdGVkLWZsYWcuZHJvcGRvd24tdG9nZ2xlOmFmdGVyIHtcblx0Y29udGVudDogbm9uZTtcbn1cbi5pdGlfX2ZsYWctY29udGFpbmVyLmRpc2FibGVkIHtcblx0Y3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG59XG4uaXRpLml0aS0tYWxsb3ctZHJvcGRvd24gLmZsYWctY29udGFpbmVyLmRpc2FibGVkOmhvdmVyIC5pdGlfX3NlbGVjdGVkLWZsYWcge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xufVxuLmNvdW50cnktZHJvcGRvd24ge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHR3aWR0aDogZml0LWNvbnRlbnQ7XG5cdHBhZGRpbmc6IDFweDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5zZWFyY2gtY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnNlYXJjaC1pY29uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAyO1xuXHR3aWR0aDogMjVweDtcblx0bWFyZ2luOiAxcHggMTBweDtcbn1cbi5pdGlfX2NvdW50cnktbGlzdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym9yZGVyOiBub25lO1xufVxuXG4uaXRpIGlucHV0I2NvdW50cnktc2VhcmNoLWJveCB7XG5cdHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4uaXRpIC5zZWxlY3RlZC1kaWFsLWNvZGUge1xuXHRtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uaXRpLnNlcGFyYXRlLWRpYWwtY29kZSAuaXRpX19zZWxlY3RlZC1mbGFnLFxuLml0aS5zZXBhcmF0ZS1kaWFsLWNvZGUuaXRpLS1hbGxvdy1kcm9wZG93bi5pdGktc2RjLTIgLml0aV9fc2VsZWN0ZWQtZmxhZyxcbi5pdGkuc2VwYXJhdGUtZGlhbC1jb2RlLml0aS0tYWxsb3ctZHJvcGRvd24uaXRpLXNkYy0zIC5pdGlfX3NlbGVjdGVkLWZsYWcsXG4uaXRpLnNlcGFyYXRlLWRpYWwtY29kZS5pdGktLWFsbG93LWRyb3Bkb3duLml0aS1zZGMtNCAuaXRpX19zZWxlY3RlZC1mbGFnIHtcblx0d2lkdGg6IDkzcHg7XG59XG5cbi5pdGkuc2VwYXJhdGUtZGlhbC1jb2RlIGlucHV0LFxuLml0aS5zZXBhcmF0ZS1kaWFsLWNvZGUuaXRpLS1hbGxvdy1kcm9wZG93bi5pdGktc2RjLTIgaW5wdXQsXG4uaXRpLnNlcGFyYXRlLWRpYWwtY29kZS5pdGktLWFsbG93LWRyb3Bkb3duLml0aS1zZGMtMyBpbnB1dCxcbi5pdGkuc2VwYXJhdGUtZGlhbC1jb2RlLml0aS0tYWxsb3ctZHJvcGRvd24uaXRpLXNkYy00IGlucHV0IHtcblx0cGFkZGluZy1sZWZ0OiA5OHB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    5098:
    /*!**************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "dropdownModuleForRoot": function dropdownModuleForRoot() {
          return (
            /* binding */
            _dropdownModuleForRoot
          );
        },

        /* harmony export */
        "NgxIntlTelInputModule": function NgxIntlTelInputModule() {
          return (
            /* binding */
            _NgxIntlTelInputModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      3676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      93);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      9298);
      /* harmony import */


      var _directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./directives/native-element-injector.directive */
      1993);
      /* harmony import */


      var _ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngx-intl-tel-input.component */
      3749);
      /* harmony import */


      var _ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ngx-mask/ngx-mask.module */
      2819);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1477);

      var _dropdownModuleForRoot = ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule.forRoot();

      var _NgxIntlTelInputModule = /*#__PURE__*/_createClass(function _NgxIntlTelInputModule() {
        _classCallCheck(this, _NgxIntlTelInputModule);
      });

      _NgxIntlTelInputModule.ɵfac = function NgxIntlTelInputModule_Factory(t) {
        return new (t || _NgxIntlTelInputModule)();
      };

      _NgxIntlTelInputModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _NgxIntlTelInputModule
      });
      _NgxIntlTelInputModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _dropdownModuleForRoot, _ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_2__.NgxMaskModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_NgxIntlTelInputModule, {
          declarations: [_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_1__.NgxIntlTelInputComponent, _directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_0__.NativeElementInjectorDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule, _ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_2__.NgxMaskModule],
          exports: [_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_1__.NgxIntlTelInputComponent, _directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_0__.NativeElementInjectorDirective]
        });
      })();
      /***/

    },

    /***/
    7997:
    /*!*****************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.validator.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "phoneNumberValidator": function phoneNumberValidator() {
          return (
            /* binding */
            _phoneNumberValidator
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! google-libphonenumber */
      882);
      /* harmony import */


      var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__);
      /*
      We use "control: any" instead of "control: FormControl" to silence:
      "Property 'nativeElement' does not exist on type 'FormControl'".
      This happens because I've expanded control with nativeElement via
      'NativeElementInjectorDirective' to get an access to the element.
      More about this approach and reasons for this:
      https://github.com/angular/angular/issues/18025
      https://stackoverflow.com/a/54075119/1617590
      */


      var _phoneNumberValidator = function _phoneNumberValidator(control) {
        if (!control.value) {
          return;
        } // Find <input> inside injected nativeElement and get its "id".


        var el = control.nativeElement;
        var inputBox = el ? el.querySelector('input[type="tel"]') : undefined;

        if (inputBox) {
          var id = inputBox.id;
          var isCheckValidation = inputBox.getAttribute('validation');

          if (isCheckValidation === 'true') {
            var isRequired = control.errors && control.errors.required === true;
            var error = {
              validatePhoneNumber: {
                valid: false
              }
            };
            inputBox.setCustomValidity('Invalid field.');
            var number;

            try {
              number = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
            } catch (e) {
              if (isRequired === true) {
                return error;
              } else {
                inputBox.setCustomValidity('');
              }
            }

            if (control.value) {
              if (!number) {
                return error;
              } else {
                if (!google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                  return error;
                } else {
                  inputBox.setCustomValidity('');
                }
              }
            }
          } else if (isCheckValidation === 'false') {
            inputBox.setCustomValidity('');
            control.clearValidators();
          }
        }

        return;
      };
      /***/

    },

    /***/
    7285:
    /*!****************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-mask/config.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "config": function config() {
          return (
            /* binding */
            _config2
          );
        },

        /* harmony export */
        "NEW_CONFIG": function NEW_CONFIG() {
          return (
            /* binding */
            _NEW_CONFIG
          );
        },

        /* harmony export */
        "INITIAL_CONFIG": function INITIAL_CONFIG() {
          return (
            /* binding */
            _INITIAL_CONFIG
          );
        },

        /* harmony export */
        "initialConfig": function initialConfig() {
          return (
            /* binding */
            _initialConfig
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1477);

      var _config2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('config');

      var _NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NEW_CONFIG');

      var _INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('INITIAL_CONFIG');

      var _initialConfig = {
        sufix: '',
        prefix: '',
        clearIfNotMatch: false,
        showTemplate: false,
        showMaskTyped: false,
        dropSpecialCharacters: true,
        specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '\"', '\''],
        patterns: {
          '0': {
            pattern: new RegExp('\\d')
          },
          '9': {
            pattern: new RegExp('\\d'),
            optional: true
          },
          'A': {
            pattern: new RegExp('\[a-zA-Z0-9\]')
          },
          'S': {
            pattern: new RegExp('\[a-zA-Z\]')
          },
          'd': {
            pattern: new RegExp('\\d')
          },
          'm': {
            pattern: new RegExp('\\d')
          },
          'H': {
            pattern: new RegExp('\\d')
          },
          'h': {
            pattern: new RegExp('\\d')
          },
          's': {
            pattern: new RegExp('\\d')
          }
        }
      };
      /***/
    },

    /***/
    6608:
    /*!******************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-mask/mask-applier.service.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaskApplierService": function MaskApplierService() {
          return (
            /* binding */
            _MaskApplierService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      7285);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1477);

      var _MaskApplierService = /*#__PURE__*/function () {
        function _MaskApplierService(_config) {
          _classCallCheck(this, _MaskApplierService);

          this._config = _config;
          this.maskExpression = '';

          this.separator = function (str) {
            str += '';
            var x = str.split(' ');
            var res = x[0];
            var rgx = /(\d+)(\d{3})/;

            while (rgx.test(res)) {
              res = res.replace(rgx, '$1' + ' ' + '$2');
            }

            return res;
          };

          this._shift = new Set();
          this.maskSpecialCharacters = this._config.specialCharacters;
          this.maskAvailablePatterns = this._config.patterns;
          this.clearIfNotMatch = this._config.clearIfNotMatch;
          this.dropSpecialCharacters = this._config.dropSpecialCharacters;
          this.maskSpecialCharacters = this._config.specialCharacters;
          this.maskAvailablePatterns = this._config.patterns;
          this.prefix = this._config.prefix;
          this.sufix = this._config.sufix;
        } // tslint:disable-next-line:no-any


        _createClass(_MaskApplierService, [{
          key: "applyMaskWithPattern",
          value: function applyMaskWithPattern(inputValue, maskAndPattern) {
            var _maskAndPattern = _slicedToArray(maskAndPattern, 2),
                mask = _maskAndPattern[0],
                customPattern = _maskAndPattern[1];

            this.customPattern = customPattern;
            return this.applyMask(inputValue, mask);
          }
        }, {
          key: "applyMask",
          value: function applyMask(inputValue, maskExpression) {
            var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

            if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
              return '';
            }

            var cursor = 0;
            var result = "";
            var multi = false;

            if (inputValue.slice(0, this.prefix.length) === this.prefix) {
              inputValue = inputValue.slice(this.prefix.length, inputValue.length);
            }

            var inputArray = inputValue.toString().split('');

            if (maskExpression === 'separator') {
              if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
              }

              var strForSep = inputValue.replace(/\s/g, '');
              result = this.separator(strForSep);
              position = result.length + 1;
              cursor = position;
              var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

              this._shift.add(shiftStep + this.prefix.length || 0);
            } else {
              // tslint:disable-next-line
              for (var i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
                if (cursor === maskExpression.length) {
                  break;
                }

                if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                  result += inputSymbol;
                  cursor += 2;
                } else if (maskExpression[cursor + 1] === '*' && multi && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                  result += inputSymbol;
                  cursor += 3;
                  multi = false;
                } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '*') {
                  result += inputSymbol;
                  multi = true;
                } else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                  result += inputSymbol;
                  cursor += 3;
                } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                  if (maskExpression[cursor] === 'H') {
                    if (Number(inputSymbol) > 2) {
                      result += 0;
                      cursor += 1;

                      var _shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                      this._shift.add(_shiftStep + this.prefix.length || 0);

                      i--;
                      continue;
                    }
                  }

                  if (maskExpression[cursor] === 'h') {
                    if (result === '2' && Number(inputSymbol) > 3) {
                      continue;
                    }
                  }

                  if (maskExpression[cursor] === 'm') {
                    if (Number(inputSymbol) > 5) {
                      result += 0;
                      cursor += 1;

                      var _shiftStep2 = /\*|\?/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                      this._shift.add(_shiftStep2 + this.prefix.length || 0);

                      i--;
                      continue;
                    }
                  }

                  if (maskExpression[cursor] === 's') {
                    if (Number(inputSymbol) > 5) {
                      result += 0;
                      cursor += 1;

                      var _shiftStep3 = /\*|\?/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                      this._shift.add(_shiftStep3 + this.prefix.length || 0);

                      i--;
                      continue;
                    }
                  }

                  result += inputSymbol;
                  cursor++;
                } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                  if (maskExpression[cursor] === 'd') {
                    if (Number(inputSymbol) > 3) {
                      result += 0;
                      cursor += 1;

                      var _shiftStep4 = /\*|\?/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                      this._shift.add(_shiftStep4 + this.prefix.length || 0);

                      i--;
                      continue;
                    }
                  }

                  if (maskExpression[cursor - 1] === 'd') {
                    if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 31) {
                      continue;
                    }
                  }

                  if (maskExpression[cursor] === 'm') {
                    if (Number(inputSymbol) > 1) {
                      result += 0;
                      cursor += 1;

                      var _shiftStep5 = /\*|\?/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                      this._shift.add(_shiftStep5 + this.prefix.length || 0);

                      i--;
                      continue;
                    }
                  }

                  if (maskExpression[cursor - 1] === 'm') {
                    if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 12) {
                      continue;
                    }
                  }

                  result += inputSymbol;
                  cursor++;
                } else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                  result += maskExpression[cursor];
                  cursor++;

                  var _shiftStep6 = /\*|\?/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                  this._shift.add(_shiftStep6 + this.prefix.length || 0);

                  i--;
                } else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 && this.maskAvailablePatterns[maskExpression[cursor]] && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                  cursor++;
                  i--;
                } else if (this.maskExpression[cursor + 1] === '*' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
                  cursor += 3;
                  result += inputSymbol;
                }
              }
            }

            if (result.length + 1 === maskExpression.length && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
              result += maskExpression[maskExpression.length - 1];
            }

            var shift = 1;
            var newPosition = position + 1;

            while (this._shift.has(newPosition)) {
              shift++;
              newPosition++;
            }

            cb(this._shift.has(position) ? shift : 0);
            var res = "".concat(this.prefix).concat(result);
            res = this.sufix ? "".concat(this.prefix).concat(result).concat(this.sufix) : "".concat(this.prefix).concat(result);

            if (result.length === 0) {
              res = "".concat(this.prefix).concat(result);
            }

            return res;
          }
        }, {
          key: "_findSpecialChar",
          value: function _findSpecialChar(inputSymbol) {
            var symbol = this.maskSpecialCharacters.find(function (val) {
              return val === inputSymbol;
            });
            return symbol;
          }
        }, {
          key: "_checkSymbolMask",
          value: function _checkSymbolMask(inputSymbol, maskSymbol) {
            this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
            return this.maskAvailablePatterns[maskSymbol] && this.maskAvailablePatterns[maskSymbol].pattern && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
          }
        }]);

        return _MaskApplierService;
      }();

      _MaskApplierService.ɵfac = function MaskApplierService_Factory(t) {
        return new (t || _MaskApplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_0__.config));
      };

      _MaskApplierService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _MaskApplierService,
        factory: _MaskApplierService.ɵfac
      });
      /***/
    },

    /***/
    4729:
    /*!************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-mask/mask.directive.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaskDirective": function MaskDirective() {
          return (
            /* binding */
            _MaskDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      5994);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      93);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      9298);
      /* harmony import */


      var _mask_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mask.service */
      1540);

      var _MaskDirective = /*#__PURE__*/function () {
        function _MaskDirective( // tslint:disable-next-line
        document, _maskService) {
          _classCallCheck(this, _MaskDirective);

          this.document = document;
          this._maskService = _maskService;
          this._position = null; // tslint:disable-next-line

          this.onChange = function (_) {};

          this.onTouch = function () {};
        }

        _createClass(_MaskDirective, [{
          key: "maskExpression",
          set: function set(value) {
            this._maskValue = value || '';

            if (!this._maskValue) {
              return;
            }

            this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
            this._maskService.formElementProperty = ['value', this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
          }
        }, {
          key: "specialCharacters",
          set: function set(value) {
            if (!value || !Array.isArray(value) || Array.isArray(value) && !value.length) {
              return;
            }

            this._maskService.maskSpecialCharacters = value;
          }
        }, {
          key: "patterns",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._maskService.maskAvailablePatterns = value;
          }
        }, {
          key: "prefix",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._maskService.prefix = value;
          }
        }, {
          key: "sufix",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._maskService.sufix = value;
          }
        }, {
          key: "dropSpecialCharacters",
          set: function set(value) {
            this._maskService.dropSpecialCharacters = value;
          }
        }, {
          key: "showMaskTyped",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._maskService.showMaskTyped = value;
          }
        }, {
          key: "showTemplate",
          set: function set(value) {
            this._maskService.showTemplate = value;
          }
        }, {
          key: "clearIfNotMatch",
          set: function set(value) {
            this._maskService.clearIfNotMatch = value;
          }
        }, {
          key: "onInput",
          value: function onInput(e) {
            var el = e.target;
            this._inputValue = el.value;

            if (!this._maskValue) {
              this.onChange(el.value);
              return;
            }

            var position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
            var caretShift = 0;

            this._maskService.applyValueChanges(position, function (shift) {
              return caretShift = shift;
            }); // only set the selection if the element is active


            if (this.document.activeElement !== el) {
              return;
            }

            el.selectionStart = el.selectionEnd = this._position !== null ? this._position : position + ( // tslint:disable-next-line
            e.inputType === 'deleteContentBackward' ? 0 : caretShift);
            this._position = null;
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this._maskService.clearIfNotMatchFn();

            this.onTouch();
          }
        }, {
          key: "onFocus",
          value: function onFocus(e) {
            var el = e.target;

            if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length && // tslint:disable-next-line
            e.keyCode !== 38) {
              return;
            }

            if (this._maskService.showMaskTyped) {
              this._maskService.maskIsShown = this._maskService.maskExpression.replace(/[0-9]/g, '_');
            }

            el.value = !el.value || el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value;
            /** fix of cursor position with prefix when mouse click occur */

            if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
              el.selectionStart = this._maskService.prefix.length;
              return;
            }
          }
        }, {
          key: "a",
          value: function a(e) {
            var el = e.target;

            if (e.keyCode === 38) {
              e.preventDefault();
            }

            if (e.keyCode === 37 || e.keyCode === 8) {
              if (el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
                e.preventDefault();
              }

              this.onFocus(e);

              if (e.keyCode === 8 && el.selectionStart === 0 && el.selectionEnd === el.value.length) {
                el.value = this._maskService.prefix;
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 1;
                this.onInput(e);
              }
            }
          }
        }, {
          key: "onPaste",
          value: function onPaste() {
            this._position = Number.MAX_SAFE_INTEGER;
          }
          /** It writes the value in the input */

        }, {
          key: "writeValue",
          value: function writeValue(inputValue) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (inputValue === undefined) {
                        inputValue = '';
                      }

                      if (typeof inputValue === 'number') {
                        inputValue = String(inputValue);
                        this._maskService.isNumberValue = true;
                      }

                      inputValue && this._maskService.maskExpression || this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped) ? this._maskService.formElementProperty = ['value', this._maskService.applyMask(inputValue, this._maskService.maskExpression)] : this._maskService.formElementProperty = ['value', inputValue];
                      this._inputValue = inputValue;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // tslint:disable-next-line

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
            this._maskService.onChange = this.onChange;
          } // tslint:disable-next-line

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
          /** It disables the input element */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._maskService.formElementProperty = ['disabled', isDisabled];
          }
        }, {
          key: "_repeatPatternSymbols",
          value: function _repeatPatternSymbols(maskExp) {
            var _this7 = this;

            return maskExp.match(/{[0-9]+}/) && maskExp.split('').reduce(function (accum, currval, index) {
              _this7._start = currval === '{' ? index : _this7._start;

              if (currval !== '}') {
                return _this7._maskService._findSpecialChar(currval) ? accum + currval : accum;
              }

              _this7._end = index;
              var repeatNumber = Number(maskExp.slice(_this7._start + 1, _this7._end));
              var repaceWith = new Array(repeatNumber + 1).join(maskExp[_this7._start - 1]);
              return accum + repaceWith;
            }, '') || maskExp;
          }
        }]);

        return _MaskDirective;
      }();

      _MaskDirective.ɵfac = function MaskDirective_Factory(t) {
        return new (t || _MaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_mask_service__WEBPACK_IMPORTED_MODULE_0__.MaskService));
      };

      _MaskDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MaskDirective,
        selectors: [["", "mask", ""]],
        hostBindings: function MaskDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function MaskDirective_input_HostBindingHandler($event) {
              return ctx.onInput($event);
            })("blur", function MaskDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("click", function MaskDirective_click_HostBindingHandler($event) {
              return ctx.onFocus($event);
            })("keydown", function MaskDirective_keydown_HostBindingHandler($event) {
              return ctx.a($event);
            })("paste", function MaskDirective_paste_HostBindingHandler() {
              return ctx.onPaste();
            });
          }
        },
        inputs: {
          maskExpression: ["mask", "maskExpression"],
          specialCharacters: "specialCharacters",
          patterns: "patterns",
          prefix: "prefix",
          sufix: "sufix",
          dropSpecialCharacters: "dropSpecialCharacters",
          showMaskTyped: "showMaskTyped",
          showTemplate: "showTemplate",
          clearIfNotMatch: "clearIfNotMatch"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function () {
            return _MaskDirective;
          }),
          multi: true
        }, _mask_service__WEBPACK_IMPORTED_MODULE_0__.MaskService])]
      });
      /***/
    },

    /***/
    1375:
    /*!*******************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-mask/mask.pipe.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaskPipe": function MaskPipe() {
          return (
            /* binding */
            _MaskPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _mask_applier_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mask-applier.service */
      6608);

      var _MaskPipe = /*#__PURE__*/function () {
        function _MaskPipe(_maskService) {
          _classCallCheck(this, _MaskPipe);

          this._maskService = _maskService;
        }

        _createClass(_MaskPipe, [{
          key: "transform",
          value: function transform(value, mask) {
            if (!value) {
              return '';
            }

            if (typeof mask === 'string') {
              return this._maskService.applyMask("".concat(value), mask);
            }

            return this._maskService.applyMaskWithPattern("".concat(value), mask);
          }
        }]);

        return _MaskPipe;
      }();

      _MaskPipe.ɵfac = function MaskPipe_Factory(t) {
        return new (t || _MaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mask_applier_service__WEBPACK_IMPORTED_MODULE_0__.MaskApplierService, 16));
      };

      _MaskPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "mask",
        type: _MaskPipe,
        pure: true
      });
      /***/
    },

    /***/
    1540:
    /*!**********************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-mask/mask.service.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaskService": function MaskService() {
          return (
            /* binding */
            _MaskService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      7285);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      93);
      /* harmony import */


      var _mask_applier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mask-applier.service */
      6608);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1477);

      var _MaskService = /*#__PURE__*/function (_mask_applier_service) {
        _inherits(_MaskService, _mask_applier_service);

        var _super = _createSuper(_MaskService);

        function _MaskService( // tslint:disable-next-line
        document, _config, _elementRef, _renderer) {
          var _this8;

          _classCallCheck(this, _MaskService);

          _this8 = _super.call(this, _config);
          _this8.document = document;
          _this8._config = _config;
          _this8._elementRef = _elementRef;
          _this8._renderer = _renderer;
          _this8.maskExpression = '';
          _this8.isNumberValue = false;
          _this8.showMaskTyped = false;
          _this8.maskIsShown = ''; // tslint:disable-next-line

          _this8.onChange = function (_) {};

          _this8.onTouch = function () {};

          _this8._formElement = _this8._elementRef.nativeElement;
          return _this8;
        }

        _createClass(_MaskService, [{
          key: "applyMask",
          value: function applyMask(inputValue, maskExpression) {
            var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
            this.maskIsShown = this.showMaskTyped ? this.maskExpression.replace(/\w/g, '_') : '';

            if (!inputValue && this.showMaskTyped) {
              return this.prefix + this.maskIsShown;
            }

            var result = _get(_getPrototypeOf(_MaskService.prototype), "applyMask", this).call(this, inputValue, maskExpression, position, cb);

            Array.isArray(this.dropSpecialCharacters) ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters)) : this.dropSpecialCharacters === true ? this.onChange(this.isNumberValue ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters)) : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters)) : this.onChange(this._removeSufix(this._removePrefix(result)));
            var ifMaskIsShown = '';

            if (!this.showMaskTyped) {
              return result;
            }

            var resLen = result.length;
            var prefNmask = this.prefix + this.maskIsShown;
            ifMaskIsShown = prefNmask.slice(resLen);
            return result + ifMaskIsShown;
          }
        }, {
          key: "applyValueChanges",
          value: function applyValueChanges() {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            var maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
            this._formElement.value = maskedInput;

            if (this._formElement === this.document.activeElement) {
              return;
            }

            this.clearIfNotMatchFn();
          }
        }, {
          key: "showMaskInInput",
          value: function showMaskInInput() {
            if (this.showMaskTyped) {
              this.maskIsShown = this.maskExpression.replace(/\w/g, '_');
            }
          }
        }, {
          key: "clearIfNotMatchFn",
          value: function clearIfNotMatchFn() {
            if (this.clearIfNotMatch === true && this.maskExpression.length !== this._formElement.value.length) {
              this.formElementProperty = ['value', ''];
              this.applyMask(this._formElement.value, this.maskExpression);
            }
          }
        }, {
          key: "formElementProperty",
          set: function set(_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                name = _ref2[0],
                value = _ref2[1];

            this._renderer.setProperty(this._formElement, name, value);
          }
        }, {
          key: "_removeMask",
          value: function _removeMask(value, specialCharactersForRemove) {
            return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
          }
        }, {
          key: "_removePrefix",
          value: function _removePrefix(value) {
            if (!this.prefix) {
              return value;
            }

            return value ? value.replace(this.prefix, '') : value;
          }
        }, {
          key: "_removeSufix",
          value: function _removeSufix(value) {
            if (!this.sufix) {
              return value;
            }

            return value ? value.replace(this.sufix, '') : value;
          }
        }, {
          key: "_regExpForRemove",
          value: function _regExpForRemove(specialCharactersForRemove) {
            return new RegExp(specialCharactersForRemove.map(function (item) {
              return "\\".concat(item);
            }).join('|'), 'gi');
          }
        }]);

        return _MaskService;
      }(_mask_applier_service__WEBPACK_IMPORTED_MODULE_1__.MaskApplierService);

      _MaskService.ɵfac = function MaskService_Factory(t) {
        return new (t || _MaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_0__.config), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
      };

      _MaskService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _MaskService,
        factory: _MaskService.ɵfac
      });
      /***/
    },

    /***/
    2819:
    /*!*************************************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/lib/ngx-mask/ngx-mask.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxMaskModule": function NgxMaskModule() {
          return (
            /* binding */
            _NgxMaskModule
          );
        },

        /* harmony export */
        "_configFactory": function _configFactory() {
          return (
            /* binding */
            _configFactory2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      7285);
      /* harmony import */


      var _mask_applier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mask-applier.service */
      6608);
      /* harmony import */


      var _mask_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mask.directive */
      4729);
      /* harmony import */


      var _mask_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mask.pipe */
      1375);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1477);

      var _NgxMaskModule = /*#__PURE__*/function () {
        function _NgxMaskModule() {
          _classCallCheck(this, _NgxMaskModule);
        }

        _createClass(_NgxMaskModule, null, [{
          key: "forRoot",
          value: function forRoot(configValue) {
            return {
              ngModule: _NgxMaskModule,
              providers: [{
                provide: _config__WEBPACK_IMPORTED_MODULE_0__.NEW_CONFIG,
                useValue: configValue
              }, {
                provide: _config__WEBPACK_IMPORTED_MODULE_0__.INITIAL_CONFIG,
                useValue: _config__WEBPACK_IMPORTED_MODULE_0__.initialConfig
              }, {
                provide: _config__WEBPACK_IMPORTED_MODULE_0__.config,
                useFactory: _configFactory2,
                deps: [_config__WEBPACK_IMPORTED_MODULE_0__.INITIAL_CONFIG, _config__WEBPACK_IMPORTED_MODULE_0__.NEW_CONFIG]
              }]
            };
          }
        }, {
          key: "forChild",
          value: function forChild(configValue) {
            return {
              ngModule: _NgxMaskModule
            };
          }
        }]);

        return _NgxMaskModule;
      }();

      _NgxMaskModule.ɵfac = function NgxMaskModule_Factory(t) {
        return new (t || _NgxMaskModule)();
      };

      _NgxMaskModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _NgxMaskModule
      });
      _NgxMaskModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_mask_applier_service__WEBPACK_IMPORTED_MODULE_1__.MaskApplierService]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_NgxMaskModule, {
          declarations: [_mask_directive__WEBPACK_IMPORTED_MODULE_2__.MaskDirective, _mask_pipe__WEBPACK_IMPORTED_MODULE_3__.MaskPipe],
          exports: [_mask_directive__WEBPACK_IMPORTED_MODULE_2__.MaskDirective, _mask_pipe__WEBPACK_IMPORTED_MODULE_3__.MaskPipe]
        });
      })();
      /**
       * @internal
       */


      function _configFactory2(initConfig, configValue) {
        return typeof configValue === 'function' ? configValue() : Object.assign(Object.assign({}, initConfig), configValue);
      }
      /***/

    },

    /***/
    2261:
    /*!*******************************************************!*\
      !*** ./projects/ngx-intl-tel-input/src/public_api.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxIntlTelInputComponent": function NgxIntlTelInputComponent() {
          return (
            /* reexport safe */
            _lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_0__.NgxIntlTelInputComponent
          );
        },

        /* harmony export */
        "NativeElementInjectorDirective": function NativeElementInjectorDirective() {
          return (
            /* reexport safe */
            _lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_1__.NativeElementInjectorDirective
          );
        },

        /* harmony export */
        "NgxIntlTelInputModule": function NgxIntlTelInputModule() {
          return (
            /* reexport safe */
            _lib_ngx_intl_tel_input_module__WEBPACK_IMPORTED_MODULE_2__.NgxIntlTelInputModule
          );
        },

        /* harmony export */
        "dropdownModuleForRoot": function dropdownModuleForRoot() {
          return (
            /* reexport safe */
            _lib_ngx_intl_tel_input_module__WEBPACK_IMPORTED_MODULE_2__.dropdownModuleForRoot
          );
        },

        /* harmony export */
        "CountryISO": function CountryISO() {
          return (
            /* reexport safe */
            _lib_enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_3__.CountryISO
          );
        },

        /* harmony export */
        "SearchCountryField": function SearchCountryField() {
          return (
            /* reexport safe */
            _lib_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_4__.SearchCountryField
          );
        },

        /* harmony export */
        "PhoneNumberFormat": function PhoneNumberFormat() {
          return (
            /* reexport safe */
            _lib_enums_phone_number_format_enum__WEBPACK_IMPORTED_MODULE_5__.PhoneNumberFormat
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/ngx-intl-tel-input.component */
      3749);
      /* harmony import */


      var _lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/directives/native-element-injector.directive */
      1993);
      /* harmony import */


      var _lib_ngx_intl_tel_input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/ngx-intl-tel-input.module */
      5098);
      /* harmony import */


      var _lib_enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/enums/country-iso.enum */
      5924);
      /* harmony import */


      var _lib_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lib/enums/search-country-field.enum */
      6894);
      /* harmony import */


      var _lib_enums_phone_number_format_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lib/enums/phone-number-format.enum */
      5847);
      /* harmony import */


      var _lib_interfaces_change_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lib/interfaces/change-data */
      2725);
      /*
       * Public API Surface of ngx-intl-tel-input
       */

      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var projects_ngx_intl_tel_input_src_lib_enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum */
      5924);
      /* harmony import */


      var projects_ngx_intl_tel_input_src_lib_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum */
      6894);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      9298);
      /* harmony import */


      var projects_ngx_intl_tel_input_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! projects/ngx-intl-tel-input/src/public_api */
      2261);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _projects_ngx_intl_tel_input_src_lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../projects/ngx-intl-tel-input/src/lib/directives/native-element-injector.directive */
      1993);
      /* harmony import */


      var _projects_ngx_intl_tel_input_src_lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.component */
      3749);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      93);

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent() {
          _classCallCheck(this, _AppComponent);

          this.separateDialCode = false;
          this.SearchCountryField = projects_ngx_intl_tel_input_src_lib_enums_search_country_field_enum__WEBPACK_IMPORTED_MODULE_1__.SearchCountryField;
          this.CountryISO = projects_ngx_intl_tel_input_src_lib_enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO;
          this.PhoneNumberFormat = projects_ngx_intl_tel_input_src_public_api__WEBPACK_IMPORTED_MODULE_2__.PhoneNumberFormat;
          this.preferredCountries = [projects_ngx_intl_tel_input_src_lib_enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.UnitedStates, projects_ngx_intl_tel_input_src_lib_enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.UnitedKingdom];
          this.phoneForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
          });
        }

        _createClass(_AppComponent, [{
          key: "changePreferredCountries",
          value: function changePreferredCountries() {
            this.preferredCountries = [projects_ngx_intl_tel_input_src_lib_enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.India, projects_ngx_intl_tel_input_src_lib_enums_country_iso_enum__WEBPACK_IMPORTED_MODULE_0__.CountryISO.Canada];
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 46,
        vars: 26,
        consts: [[2, "margin", "50px"], [1, "wrapper"], [3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [3, "formGroup"], ["f", "ngForm"], ["name", "phone", "formControlName", "phone", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "selectedCountryISO", "maxLength", "phoneValidation", "separateDialCode", "numberFormat"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Test International Telephone Input Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() {
              return ctx.changePreferredCountries();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Change Preferred Countries");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.separateDialCode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\xA0Separate Dial Code?");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ngx-intl-tel-input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Is input valid:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Is input touched:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Is form valid:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Form value:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Form validation errors:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.separateDialCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.phoneForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cssClass", "custom")("preferredCountries", ctx.preferredCountries)("enableAutoCountrySelect", true)("enablePlaceholder", true)("searchCountryFlag", true)("searchCountryField", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](23, _c0, ctx.SearchCountryField.Iso2, ctx.SearchCountryField.Name))("selectFirstCountry", false)("selectedCountryISO", ctx.CountryISO.India)("maxLength", 15)("phoneValidation", true)("separateDialCode", ctx.separateDialCode)("numberFormat", ctx.PhoneNumberFormat.National);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](!_r0.form.controls["phone"].invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_r0.form.controls["phone"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_r0.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](39, 19, _r0.form.value));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](45, 21, _r0.form.controls["phone"].errors));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _projects_ngx_intl_tel_input_src_lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_3__.NativeElementInjectorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _projects_ngx_intl_tel_input_src_lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_4__.NgxIntlTelInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var projects_ngx_intl_tel_input_src_lib_ngx_intl_tel_input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.module */
      5098);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      9298);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      4919);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      2352);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1477);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, projects_ngx_intl_tel_input_src_lib_ngx_intl_tel_input_module__WEBPACK_IMPORTED_MODULE_0__.NgxIntlTelInputModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, projects_ngx_intl_tel_input_src_lib_ngx_intl_tel_input_module__WEBPACK_IMPORTED_MODULE_0__.NgxIntlTelInputModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule]
        });
      })();
      /***/

    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      4919);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map