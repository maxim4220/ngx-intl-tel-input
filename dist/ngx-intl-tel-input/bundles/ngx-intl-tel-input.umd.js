(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('google-libphonenumber'), require('@angular/core'), require('@angular/forms'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/dropdown'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-intl-tel-input', ['exports', 'google-libphonenumber', '@angular/core', '@angular/forms', 'ngx-bootstrap/utils', 'ngx-bootstrap/dropdown', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-intl-tel-input"] = {}, global["^3"]["2"]["3"], global.ng.core, global.ng.forms, global.utils, global["ngx-bootstrap-dropdown"], global.ng.common));
})(this, (function (exports, lpn, core, forms, utils, dropdown, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var lpn__namespace = /*#__PURE__*/_interopNamespace(lpn);

    exports.CountryISO = void 0;
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
        CountryISO["C\u00F4teDIvoire"] = "ci";
        CountryISO["Croatia"] = "hr";
        CountryISO["Cuba"] = "cu";
        CountryISO["Cura\u00E7ao"] = "cw";
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
        CountryISO["R\u00E9union"] = "re";
        CountryISO["Romania"] = "ro";
        CountryISO["Russia"] = "ru";
        CountryISO["Rwanda"] = "rw";
        CountryISO["SaintBarth\u00E9lemy"] = "bl";
        CountryISO["SaintHelena"] = "sh";
        CountryISO["SaintKittsAndNevis"] = "kn";
        CountryISO["SaintLucia"] = "lc";
        CountryISO["SaintMartin"] = "mf";
        CountryISO["SaintPierreAndMiquelon"] = "pm";
        CountryISO["SaintVincentAndTheGrenadines"] = "vc";
        CountryISO["Samoa"] = "ws";
        CountryISO["SanMarino"] = "sm";
        CountryISO["S\u00E3oTom\u00E9AndPr\u00EDncipe"] = "st";
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
        CountryISO["\u00C5landIslands"] = "ax";
    })(exports.CountryISO || (exports.CountryISO = {}));

    var CountryCode = /** @class */ (function () {
        function CountryCode() {
            this.allCountries = [
                [
                    'Afghanistan (‫افغانستان‬‎)',
                    exports.CountryISO.Afghanistan,
                    '93'
                ],
                [
                    'Albania (Shqipëri)',
                    exports.CountryISO.Albania,
                    '355'
                ],
                [
                    'Algeria (‫الجزائر‬‎)',
                    exports.CountryISO.Algeria,
                    '213'
                ],
                [
                    'American Samoa',
                    'as',
                    '1',
                    1,
                    [
                        '684',
                    ]
                ],
                [
                    'Andorra',
                    exports.CountryISO.Andorra,
                    '376'
                ],
                [
                    'Angola',
                    exports.CountryISO.Angola,
                    '244'
                ],
                [
                    'Anguilla',
                    'ai',
                    '1',
                    1,
                    [
                        '264',
                    ]
                ],
                [
                    'Antigua and Barbuda',
                    'ag',
                    '1',
                    1,
                    [
                        '268',
                    ]
                ],
                [
                    'Argentina',
                    exports.CountryISO.Argentina,
                    '54'
                ],
                [
                    'Armenia (Հայաստան)',
                    exports.CountryISO.Armenia,
                    '374'
                ],
                [
                    'Aruba',
                    exports.CountryISO.Aruba,
                    '297'
                ],
                [
                    'Australia',
                    exports.CountryISO.Australia,
                    '61',
                    0
                ],
                [
                    'Austria (Österreich)',
                    exports.CountryISO.Austria,
                    '43'
                ],
                [
                    'Azerbaijan (Azərbaycan)',
                    exports.CountryISO.Azerbaijan,
                    '994'
                ],
                [
                    'Bahamas',
                    'bs',
                    '1',
                    1,
                    [
                        '242',
                    ]
                ],
                [
                    'Bahrain (‫البحرين‬‎)',
                    exports.CountryISO.Bahrain,
                    '973'
                ],
                [
                    'Bangladesh (বাংলাদেশ)',
                    exports.CountryISO.Bangladesh,
                    '880'
                ],
                [
                    'Barbados',
                    'bb',
                    '1',
                    1,
                    [
                        '246',
                    ]
                ],
                [
                    'Belarus (Беларусь)',
                    exports.CountryISO.Belarus,
                    '375'
                ],
                [
                    'Belgium (België)',
                    exports.CountryISO.Belgium,
                    '32'
                ],
                [
                    'Belize',
                    exports.CountryISO.Belize,
                    '501'
                ],
                [
                    'Benin (Bénin)',
                    exports.CountryISO.Benin,
                    '229'
                ],
                [
                    'Bermuda',
                    'bm',
                    '1',
                    1,
                    [
                        '441',
                    ]
                ],
                [
                    'Bhutan (འབྲུག)',
                    exports.CountryISO.Bhutan,
                    '975'
                ],
                [
                    'Bolivia',
                    exports.CountryISO.Bolivia,
                    '591'
                ],
                [
                    'Bosnia and Herzegovina (Босна и Херцеговина)',
                    exports.CountryISO.BosniaAndHerzegovina,
                    '387'
                ],
                [
                    'Botswana',
                    exports.CountryISO.Botswana,
                    '267'
                ],
                [
                    'Brazil (Brasil)',
                    exports.CountryISO.Brazil,
                    '55'
                ],
                [
                    'British Indian Ocean Territory',
                    exports.CountryISO.BritishIndianOceanTerritory,
                    '246'
                ],
                [
                    'British Virgin Islands',
                    'vg',
                    '1',
                    1,
                    [
                        '284',
                    ]
                ],
                [
                    'Brunei',
                    exports.CountryISO.Brunei,
                    '673'
                ],
                [
                    'Bulgaria (България)',
                    exports.CountryISO.Bulgaria,
                    '359'
                ],
                [
                    'Burkina Faso',
                    exports.CountryISO.BurkinaFaso,
                    '226'
                ],
                [
                    'Burundi (Uburundi)',
                    exports.CountryISO.Burundi,
                    '257'
                ],
                [
                    'Cambodia (កម្ពុជា)',
                    exports.CountryISO.Cambodia,
                    '855'
                ],
                [
                    'Cameroon (Cameroun)',
                    exports.CountryISO.Cameroon,
                    '237'
                ],
                [
                    'Canada',
                    exports.CountryISO.Canada,
                    '1',
                    1,
                    [
                        '204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416',
                        '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587',
                        '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807',
                        '819', '825', '867', '873', '902', '905'
                    ]
                ],
                [
                    'Cape Verde (Kabu Verdi)',
                    exports.CountryISO.CapeVerde,
                    '238'
                ],
                [
                    'Caribbean Netherlands',
                    exports.CountryISO.CaribbeanNetherlands,
                    '599',
                    1
                ],
                [
                    'Cayman Islands',
                    'ky',
                    '1',
                    1,
                    [
                        '345',
                    ]
                ],
                [
                    'Central African Republic (République centrafricaine)',
                    exports.CountryISO.CentralAfricanRepublic,
                    '236'
                ],
                [
                    'Chad (Tchad)',
                    exports.CountryISO.Chad,
                    '235'
                ],
                [
                    'Chile',
                    exports.CountryISO.Chile,
                    '56'
                ],
                [
                    'China (中国)',
                    exports.CountryISO.China,
                    '86'
                ],
                [
                    'Christmas Island',
                    exports.CountryISO.ChristmasIsland,
                    '61',
                    2
                ],
                [
                    'Cocos (Keeling) Islands',
                    exports.CountryISO.Cocos,
                    '61',
                    1
                ],
                [
                    'Colombia',
                    exports.CountryISO.Colombia,
                    '57'
                ],
                [
                    'Comoros (‫جزر القمر‬‎)',
                    exports.CountryISO.Comoros,
                    '269'
                ],
                [
                    'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
                    exports.CountryISO.CongoDRCJamhuriYaKidemokrasiaYaKongo,
                    '243'
                ],
                [
                    'Congo (Republic) (Congo-Brazzaville)',
                    exports.CountryISO.CongoRepublicCongoBrazzaville,
                    '242'
                ],
                [
                    'Cook Islands',
                    exports.CountryISO.CookIslands,
                    '682'
                ],
                [
                    'Costa Rica',
                    exports.CountryISO.CostaRica,
                    '506'
                ],
                [
                    'Côte d’Ivoire',
                    exports.CountryISO.CôteDIvoire,
                    '225'
                ],
                [
                    'Croatia (Hrvatska)',
                    exports.CountryISO.Croatia,
                    '385'
                ],
                [
                    'Cuba',
                    exports.CountryISO.Cuba,
                    '53'
                ],
                [
                    'Curaçao',
                    exports.CountryISO.Curaçao,
                    '599',
                    0
                ],
                [
                    'Cyprus (Κύπρος)',
                    exports.CountryISO.Cyprus,
                    '357'
                ],
                [
                    'Czech Republic (Česká republika)',
                    exports.CountryISO.CzechRepublic,
                    '420'
                ],
                [
                    'Denmark (Danmark)',
                    exports.CountryISO.Denmark,
                    '45'
                ],
                [
                    'Djibouti',
                    exports.CountryISO.Djibouti,
                    '253'
                ],
                [
                    'Dominica',
                    exports.CountryISO.Dominica,
                    '1767'
                ],
                [
                    'Dominican Republic (República Dominicana)',
                    exports.CountryISO.DominicanRepublic,
                    '1',
                    2,
                    ['809', '829', '849']
                ],
                [
                    'Ecuador',
                    exports.CountryISO.Ecuador,
                    '593'
                ],
                [
                    'Egypt (‫مصر‬‎)',
                    exports.CountryISO.Egypt,
                    '20'
                ],
                [
                    'El Salvador',
                    exports.CountryISO.ElSalvador,
                    '503'
                ],
                [
                    'Equatorial Guinea (Guinea Ecuatorial)',
                    exports.CountryISO.EquatorialGuinea,
                    '240'
                ],
                [
                    'Eritrea',
                    exports.CountryISO.Eritrea,
                    '291'
                ],
                [
                    'Estonia (Eesti)',
                    exports.CountryISO.Estonia,
                    '372'
                ],
                [
                    'Ethiopia',
                    exports.CountryISO.Ethiopia,
                    '251'
                ],
                [
                    'Falkland Islands (Islas Malvinas)',
                    exports.CountryISO.FalklandIslands,
                    '500'
                ],
                [
                    'Faroe Islands (Føroyar)',
                    exports.CountryISO.FaroeIslands,
                    '298'
                ],
                [
                    'Fiji',
                    exports.CountryISO.Fiji,
                    '679'
                ],
                [
                    'Finland (Suomi)',
                    exports.CountryISO.Finland,
                    '358',
                    0
                ],
                [
                    'France',
                    exports.CountryISO.France,
                    '33'
                ],
                [
                    'French Guiana (Guyane française)',
                    exports.CountryISO.FrenchGuiana,
                    '594'
                ],
                [
                    'French Polynesia (Polynésie française)',
                    exports.CountryISO.FrenchPolynesia,
                    '689'
                ],
                [
                    'Gabon',
                    exports.CountryISO.Gabon,
                    '241'
                ],
                [
                    'Gambia',
                    exports.CountryISO.Gambia,
                    '220'
                ],
                [
                    'Georgia (საქართველო)',
                    exports.CountryISO.Georgia,
                    '995'
                ],
                [
                    'Germany (Deutschland)',
                    exports.CountryISO.Germany,
                    '49'
                ],
                [
                    'Ghana (Gaana)',
                    exports.CountryISO.Ghana,
                    '233'
                ],
                [
                    'Gibraltar',
                    exports.CountryISO.Gibraltar,
                    '350'
                ],
                [
                    'Greece (Ελλάδα)',
                    exports.CountryISO.Greece,
                    '30'
                ],
                [
                    'Greenland (Kalaallit Nunaat)',
                    exports.CountryISO.Greenland,
                    '299'
                ],
                [
                    'Grenada',
                    exports.CountryISO.Grenada,
                    '1473'
                ],
                [
                    'Guadeloupe',
                    exports.CountryISO.Guadeloupe,
                    '590',
                    0
                ],
                [
                    'Guam',
                    'gu',
                    '1',
                    1,
                    [
                        '671',
                    ]
                ],
                [
                    'Guatemala',
                    exports.CountryISO.Guatemala,
                    '502'
                ],
                [
                    'Guernsey',
                    exports.CountryISO.Guernsey,
                    '44',
                    1,
                    [1481]
                ],
                [
                    'Guinea (Guinée)',
                    exports.CountryISO.Guinea,
                    '224'
                ],
                [
                    'Guinea-Bissau (Guiné Bissau)',
                    exports.CountryISO.GuineaBissau,
                    '245'
                ],
                [
                    'Guyana',
                    exports.CountryISO.Guyana,
                    '592'
                ],
                [
                    'Haiti',
                    exports.CountryISO.Haiti,
                    '509'
                ],
                [
                    'Honduras',
                    exports.CountryISO.Honduras,
                    '504'
                ],
                [
                    'Hong Kong (香港)',
                    exports.CountryISO.HongKong,
                    '852'
                ],
                [
                    'Hungary (Magyarország)',
                    exports.CountryISO.Hungary,
                    '36'
                ],
                [
                    'Iceland (Ísland)',
                    exports.CountryISO.Iceland,
                    '354'
                ],
                [
                    'India (भारत)',
                    exports.CountryISO.India,
                    '91'
                ],
                [
                    'Indonesia',
                    exports.CountryISO.Indonesia,
                    '62'
                ],
                [
                    'Iran (‫ایران‬‎)',
                    exports.CountryISO.Iran,
                    '98'
                ],
                [
                    'Iraq (‫العراق‬‎)',
                    exports.CountryISO.Iraq,
                    '964'
                ],
                [
                    'Ireland',
                    exports.CountryISO.Ireland,
                    '353'
                ],
                [
                    'Isle of Man',
                    exports.CountryISO.IsleOfMan,
                    '44',
                    2,
                    [1624]
                ],
                [
                    'Israel (‫ישראל‬‎)',
                    exports.CountryISO.Israel,
                    '972'
                ],
                [
                    'Italy (Italia)',
                    exports.CountryISO.Italy,
                    '39',
                    0
                ],
                [
                    'Jamaica',
                    'jm',
                    '1',
                    1,
                    [
                        '876',
                    ]
                ],
                [
                    'Japan (日本)',
                    exports.CountryISO.Japan,
                    '81'
                ],
                [
                    'Jersey',
                    exports.CountryISO.Jersey,
                    '44',
                    3,
                    [1534]
                ],
                [
                    'Jordan (‫الأردن‬‎)',
                    exports.CountryISO.Jordan,
                    '962'
                ],
                [
                    'Kazakhstan (Казахстан)',
                    exports.CountryISO.Kazakhstan,
                    '7',
                    1
                ],
                [
                    'Kenya',
                    exports.CountryISO.Kenya,
                    '254'
                ],
                [
                    'Kiribati',
                    exports.CountryISO.Kiribati,
                    '686'
                ],
                [
                    'Kosovo',
                    exports.CountryISO.Kosovo,
                    '383'
                ],
                [
                    'Kuwait (‫الكويت‬‎)',
                    exports.CountryISO.Kuwait,
                    '965'
                ],
                [
                    'Kyrgyzstan (Кыргызстан)',
                    exports.CountryISO.Kyrgyzstan,
                    '996'
                ],
                [
                    'Laos (ລາວ)',
                    exports.CountryISO.Laos,
                    '856'
                ],
                [
                    'Latvia (Latvija)',
                    exports.CountryISO.Latvia,
                    '371'
                ],
                [
                    'Lebanon (‫لبنان‬‎)',
                    exports.CountryISO.Lebanon,
                    '961'
                ],
                [
                    'Lesotho',
                    exports.CountryISO.Lesotho,
                    '266'
                ],
                [
                    'Liberia',
                    exports.CountryISO.Liberia,
                    '231'
                ],
                [
                    'Libya (‫ليبيا‬‎)',
                    exports.CountryISO.Libya,
                    '218'
                ],
                [
                    'Liechtenstein',
                    exports.CountryISO.Liechtenstein,
                    '423'
                ],
                [
                    'Lithuania (Lietuva)',
                    exports.CountryISO.Lithuania,
                    '370'
                ],
                [
                    'Luxembourg',
                    exports.CountryISO.Luxembourg,
                    '352'
                ],
                [
                    'Macau (澳門)',
                    exports.CountryISO.Macau,
                    '853'
                ],
                [
                    'Macedonia (FYROM) (Македонија)',
                    exports.CountryISO.Macedonia,
                    '389'
                ],
                [
                    'Madagascar (Madagasikara)',
                    exports.CountryISO.Madagascar,
                    '261'
                ],
                [
                    'Malawi',
                    exports.CountryISO.Malawi,
                    '265'
                ],
                [
                    'Malaysia',
                    exports.CountryISO.Malaysia,
                    '60'
                ],
                [
                    'Maldives',
                    exports.CountryISO.Maldives,
                    '960'
                ],
                [
                    'Mali',
                    exports.CountryISO.Mali,
                    '223'
                ],
                [
                    'Malta',
                    exports.CountryISO.Malta,
                    '356'
                ],
                [
                    'Marshall Islands',
                    exports.CountryISO.MarshallIslands,
                    '692'
                ],
                [
                    'Martinique',
                    exports.CountryISO.Martinique,
                    '596'
                ],
                [
                    'Mauritania (‫موريتانيا‬‎)',
                    exports.CountryISO.Mauritania,
                    '222'
                ],
                [
                    'Mauritius (Moris)',
                    exports.CountryISO.Mauritius,
                    '230'
                ],
                [
                    'Mayotte',
                    exports.CountryISO.Mayotte,
                    '262',
                    1
                ],
                [
                    'Mexico (México)',
                    exports.CountryISO.Mexico,
                    '52'
                ],
                [
                    'Micronesia',
                    exports.CountryISO.Micronesia,
                    '691'
                ],
                [
                    'Moldova (Republica Moldova)',
                    exports.CountryISO.Moldova,
                    '373'
                ],
                [
                    'Monaco',
                    exports.CountryISO.Monaco,
                    '377'
                ],
                [
                    'Mongolia (Монгол)',
                    exports.CountryISO.Mongolia,
                    '976'
                ],
                [
                    'Montenegro (Crna Gora)',
                    exports.CountryISO.Montenegro,
                    '382'
                ],
                [
                    'Montserrat',
                    'ms',
                    '1',
                    1,
                    [
                        '664',
                    ]
                ],
                [
                    'Morocco (‫المغرب‬‎)',
                    exports.CountryISO.Morocco,
                    '212',
                    0
                ],
                [
                    'Mozambique (Moçambique)',
                    exports.CountryISO.Mozambique,
                    '258'
                ],
                [
                    'Myanmar (Burma) (မြန်မာ)',
                    exports.CountryISO.Myanmar,
                    '95'
                ],
                [
                    'Namibia (Namibië)',
                    exports.CountryISO.Namibia,
                    '264'
                ],
                [
                    'Nauru',
                    exports.CountryISO.Nauru,
                    '674'
                ],
                [
                    'Nepal (नेपाल)',
                    exports.CountryISO.Nepal,
                    '977'
                ],
                [
                    'Netherlands (Nederland)',
                    exports.CountryISO.Netherlands,
                    '31'
                ],
                [
                    'New Caledonia (Nouvelle-Calédonie)',
                    exports.CountryISO.NewCaledonia,
                    '687'
                ],
                [
                    'New Zealand',
                    exports.CountryISO.NewZealand,
                    '64'
                ],
                [
                    'Nicaragua',
                    exports.CountryISO.Nicaragua,
                    '505'
                ],
                [
                    'Niger (Nijar)',
                    exports.CountryISO.Niger,
                    '227'
                ],
                [
                    'Nigeria',
                    exports.CountryISO.Nigeria,
                    '234'
                ],
                [
                    'Niue',
                    exports.CountryISO.Niue,
                    '683'
                ],
                [
                    'Norfolk Island',
                    exports.CountryISO.NorfolkIsland,
                    '672'
                ],
                [
                    'North Korea (조선 민주주의 인민 공화국)',
                    exports.CountryISO.NorthKorea,
                    '850'
                ],
                [
                    'Northern Mariana Islands',
                    exports.CountryISO.NorthernMarianaIslands,
                    '1670'
                ],
                [
                    'Norway (Norge)',
                    exports.CountryISO.Norway,
                    '47',
                    0
                ],
                [
                    'Oman (‫عُمان‬‎)',
                    exports.CountryISO.Oman,
                    '968'
                ],
                [
                    'Pakistan (‫پاکستان‬‎)',
                    exports.CountryISO.Pakistan,
                    '92'
                ],
                [
                    'Palau',
                    exports.CountryISO.Palau,
                    '680'
                ],
                [
                    'Palestine (‫فلسطين‬‎)',
                    exports.CountryISO.Palestine,
                    '970'
                ],
                [
                    'Panama (Panamá)',
                    exports.CountryISO.Panama,
                    '507'
                ],
                [
                    'Papua New Guinea',
                    exports.CountryISO.PapuaNewGuinea,
                    '675'
                ],
                [
                    'Paraguay',
                    exports.CountryISO.Paraguay,
                    '595'
                ],
                [
                    'Peru (Perú)',
                    exports.CountryISO.Peru,
                    '51'
                ],
                [
                    'Philippines',
                    exports.CountryISO.Philippines,
                    '63'
                ],
                [
                    'Poland (Polska)',
                    exports.CountryISO.Poland,
                    '48'
                ],
                [
                    'Portugal',
                    exports.CountryISO.Portugal,
                    '351'
                ],
                [
                    'Puerto Rico',
                    exports.CountryISO.PuertoRico,
                    '1',
                    3,
                    ['787', '939']
                ],
                [
                    'Qatar (‫قطر‬‎)',
                    exports.CountryISO.Qatar,
                    '974'
                ],
                [
                    'Réunion (La Réunion)',
                    exports.CountryISO.Réunion,
                    '262',
                    0
                ],
                [
                    'Romania (România)',
                    exports.CountryISO.Romania,
                    '40'
                ],
                [
                    'Russia (Россия)',
                    exports.CountryISO.Russia,
                    '7',
                    0
                ],
                [
                    'Rwanda',
                    exports.CountryISO.Rwanda,
                    '250'
                ],
                [
                    'Saint Barthélemy (Saint-Barthélemy)',
                    exports.CountryISO.SaintBarthélemy,
                    '590',
                    1
                ],
                [
                    'Saint Helena',
                    exports.CountryISO.SaintHelena,
                    '290'
                ],
                [
                    'Saint Kitts and Nevis',
                    exports.CountryISO.SaintKittsAndNevis,
                    '1869'
                ],
                [
                    'Saint Lucia',
                    'lc',
                    '1',
                    1,
                    [
                        '758',
                    ]
                ],
                [
                    'Saint Martin (Saint-Martin (partie française))',
                    exports.CountryISO.SaintMartin,
                    '590',
                    2
                ],
                [
                    'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
                    exports.CountryISO.SaintPierreAndMiquelon,
                    '508'
                ],
                [
                    'Saint Vincent and the Grenadines',
                    'vc',
                    '1',
                    1,
                    [
                        '784',
                    ]
                ],
                [
                    'Samoa',
                    exports.CountryISO.Samoa,
                    '685'
                ],
                [
                    'San Marino',
                    exports.CountryISO.SanMarino,
                    '378'
                ],
                [
                    'São Tomé and Príncipe (São Tomé e Príncipe)',
                    exports.CountryISO.SãoToméAndPríncipe,
                    '239'
                ],
                [
                    'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
                    exports.CountryISO.SaudiArabia,
                    '966'
                ],
                [
                    'Senegal (Sénégal)',
                    exports.CountryISO.Senegal,
                    '221'
                ],
                [
                    'Serbia (Србија)',
                    exports.CountryISO.Serbia,
                    '381'
                ],
                [
                    'Seychelles',
                    exports.CountryISO.Seychelles,
                    '248'
                ],
                [
                    'Sierra Leone',
                    exports.CountryISO.SierraLeone,
                    '232'
                ],
                [
                    'Singapore',
                    exports.CountryISO.Singapore,
                    '65'
                ],
                [
                    'Sint Maarten',
                    'sx',
                    '1',
                    1,
                    [
                        '721',
                    ]
                ],
                [
                    'Slovakia (Slovensko)',
                    exports.CountryISO.Slovakia,
                    '421'
                ],
                [
                    'Slovenia (Slovenija)',
                    exports.CountryISO.Slovenia,
                    '386'
                ],
                [
                    'Solomon Islands',
                    exports.CountryISO.SolomonIslands,
                    '677'
                ],
                [
                    'Somalia (Soomaaliya)',
                    exports.CountryISO.Somalia,
                    '252'
                ],
                [
                    'South Africa',
                    exports.CountryISO.SouthAfrica,
                    '27'
                ],
                [
                    'South Korea (대한민국)',
                    exports.CountryISO.SouthKorea,
                    '82'
                ],
                [
                    'South Sudan (‫جنوب السودان‬‎)',
                    exports.CountryISO.SouthSudan,
                    '211'
                ],
                [
                    'Spain (España)',
                    exports.CountryISO.Spain,
                    '34'
                ],
                [
                    'Sri Lanka (ශ්‍රී ලංකාව)',
                    exports.CountryISO.SriLanka,
                    '94'
                ],
                [
                    'Sudan (‫السودان‬‎)',
                    exports.CountryISO.Sudan,
                    '249'
                ],
                [
                    'Suriname',
                    exports.CountryISO.Suriname,
                    '597'
                ],
                [
                    'Svalbard and Jan Mayen',
                    exports.CountryISO.SvalbardAndJanMayen,
                    '47',
                    1
                ],
                [
                    'Swaziland',
                    exports.CountryISO.Swaziland,
                    '268'
                ],
                [
                    'Sweden (Sverige)',
                    exports.CountryISO.Sweden,
                    '46'
                ],
                [
                    'Switzerland (Schweiz)',
                    exports.CountryISO.Switzerland,
                    '41'
                ],
                [
                    'Syria (‫سوريا‬‎)',
                    exports.CountryISO.Syria,
                    '963'
                ],
                [
                    'Taiwan (台灣)',
                    exports.CountryISO.Taiwan,
                    '886'
                ],
                [
                    'Tajikistan',
                    exports.CountryISO.Tajikistan,
                    '992'
                ],
                [
                    'Tanzania',
                    exports.CountryISO.Tanzania,
                    '255'
                ],
                [
                    'Thailand (ไทย)',
                    exports.CountryISO.Thailand,
                    '66'
                ],
                [
                    'Timor-Leste',
                    exports.CountryISO.TimorLeste,
                    '670'
                ],
                [
                    'Togo',
                    exports.CountryISO.Togo,
                    '228'
                ],
                [
                    'Tokelau',
                    exports.CountryISO.Tokelau,
                    '690'
                ],
                [
                    'Tonga',
                    exports.CountryISO.Tonga,
                    '676'
                ],
                [
                    'Trinidad and Tobago',
                    'tt',
                    '1',
                    1,
                    [
                        '868',
                    ]
                ],
                [
                    'Tunisia (‫تونس‬‎)',
                    exports.CountryISO.Tunisia,
                    '216'
                ],
                [
                    'Turkey (Türkiye)',
                    exports.CountryISO.Turkey,
                    '90'
                ],
                [
                    'Turkmenistan',
                    exports.CountryISO.Turkmenistan,
                    '993'
                ],
                [
                    'Turks and Caicos Islands',
                    exports.CountryISO.TurksAndCaicosIslands,
                    '1649'
                ],
                [
                    'Tuvalu',
                    exports.CountryISO.Tuvalu,
                    '688'
                ],
                [
                    'U.S. Virgin Islands',
                    'vi',
                    '1',
                    1,
                    [
                        '340',
                    ]
                ],
                [
                    'Uganda',
                    exports.CountryISO.Uganda,
                    '256'
                ],
                [
                    'Ukraine (Україна)',
                    exports.CountryISO.Ukraine,
                    '380'
                ],
                [
                    'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
                    exports.CountryISO.UnitedArabEmirates,
                    '971'
                ],
                [
                    'United Kingdom',
                    exports.CountryISO.UnitedKingdom,
                    '44',
                    0
                ],
                [
                    'United States',
                    exports.CountryISO.UnitedStates,
                    '1',
                    0
                ],
                [
                    'Uruguay',
                    exports.CountryISO.Uruguay,
                    '598'
                ],
                [
                    'Uzbekistan (Oʻzbekiston)',
                    exports.CountryISO.Uzbekistan,
                    '998'
                ],
                [
                    'Vanuatu',
                    exports.CountryISO.Vanuatu,
                    '678'
                ],
                [
                    'Vatican City (Città del Vaticano)',
                    exports.CountryISO.VaticanCity,
                    '39',
                    1
                ],
                [
                    'Venezuela',
                    exports.CountryISO.Venezuela,
                    '58'
                ],
                [
                    'Vietnam (Việt Nam)',
                    exports.CountryISO.Vietnam,
                    '84'
                ],
                [
                    'Wallis and Futuna',
                    exports.CountryISO.WallisAndFutuna,
                    '681'
                ],
                [
                    'Western Sahara (‫الصحراء الغربية‬‎)',
                    exports.CountryISO.WesternSahara,
                    '212',
                    1
                ],
                [
                    'Yemen (‫اليمن‬‎)',
                    exports.CountryISO.Yemen,
                    '967'
                ],
                [
                    'Zambia',
                    exports.CountryISO.Zambia,
                    '260'
                ],
                [
                    'Zimbabwe',
                    exports.CountryISO.Zimbabwe,
                    '263'
                ],
                [
                    'Åland Islands',
                    exports.CountryISO.ÅlandIslands,
                    '358',
                    1
                ]
            ];
        }
        return CountryCode;
    }());
    CountryCode.decorators = [
        { type: core.Injectable }
    ];

    exports.SearchCountryField = void 0;
    (function (SearchCountryField) {
        SearchCountryField["DialCode"] = "dialCode";
        SearchCountryField["Iso2"] = "iso2";
        SearchCountryField["Name"] = "name";
        SearchCountryField["All"] = "all";
    })(exports.SearchCountryField || (exports.SearchCountryField = {}));

    /*
    We use "control: any" instead of "control: FormControl" to silence:
    "Property 'nativeElement' does not exist on type 'FormControl'".
    This happens because I've expanded control with nativeElement via
    'NativeElementInjectorDirective' to get an access to the element.
    More about this approach and reasons for this:
    https://github.com/angular/angular/issues/18025
    https://stackoverflow.com/a/54075119/1617590
    */
    var phoneNumberValidator = function (control) {
        if (!control.value) {
            return;
        }
        // Find <input> inside injected nativeElement and get its "id".
        var el = control.nativeElement;
        var inputBox = el
            ? el.querySelector('input[type="tel"]')
            : undefined;
        if (inputBox) {
            var id = inputBox.id;
            var isCheckValidation = inputBox.getAttribute('validation');
            if (isCheckValidation === 'true') {
                var isRequired = control.errors && control.errors.required === true;
                var error = { validatePhoneNumber: { valid: false } };
                inputBox.setCustomValidity('Invalid field.');
                var number = void 0;
                try {
                    number = lpn__namespace.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
                }
                catch (e) {
                    if (isRequired === true) {
                        return error;
                    }
                    else {
                        inputBox.setCustomValidity('');
                    }
                }
                if (control.value) {
                    if (!number) {
                        return error;
                    }
                    else {
                        if (!lpn__namespace.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                            return error;
                        }
                        else {
                            inputBox.setCustomValidity('');
                        }
                    }
                }
            }
            else if (isCheckValidation === 'false') {
                inputBox.setCustomValidity('');
                control.clearValidators();
            }
        }
        return;
    };

    exports.PhoneNumberFormat = void 0;
    (function (PhoneNumberFormat) {
        PhoneNumberFormat["International"] = "INTERNATIONAL";
        PhoneNumberFormat["National"] = "NATIONAL";
    })(exports.PhoneNumberFormat || (exports.PhoneNumberFormat = {}));

    var ɵ0 = phoneNumberValidator;
    var NgxIntlTelInputComponent = /** @class */ (function () {
        function NgxIntlTelInputComponent(countryCodeData, cdr) {
            this.countryCodeData = countryCodeData;
            this.cdr = cdr;
            this.value = '';
            this.preferredCountries = [];
            this.enablePlaceholder = true;
            this.numberFormat = exports.PhoneNumberFormat.International;
            this.cssClass = 'form-control';
            this.onlyCountries = [];
            this.enableAutoCountrySelect = true;
            this.searchCountryFlag = false;
            this.searchCountryField = [exports.SearchCountryField.All];
            this.searchCountryPlaceholder = 'Search Country';
            this.maxLength = '';
            this.selectFirstCountry = true;
            this.phoneValidation = true;
            this.inputId = 'phone';
            this.separateDialCode = false;
            this.defaultPhoneMask = '00 00 00 00';
            this.countryChange = new core.EventEmitter();
            this.selectedCountry = {
                areaCodes: undefined,
                dialCode: '',
                htmlId: '',
                flagClass: '',
                iso2: '',
                name: '',
                placeHolder: '',
                priority: 0,
            };
            this.phoneNumber = '';
            this.allCountries = [];
            this.preferredCountriesInDropDown = [];
            // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
            this.phoneUtil = lpn__namespace.PhoneNumberUtil.getInstance();
            this.disabled = false;
            this.errors = ['Phone number is required.'];
            this.countrySearchText = '';
            this.phoneMask = this.defaultPhoneMask;
            this.onTouched = function () { };
            this.propagateChange = function (_) { };
            // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
            // Add the wrong classes and such
            utils.setTheme('bs4');
        }
        NgxIntlTelInputComponent.prototype.ngOnInit = function () {
            this.init();
        };
        NgxIntlTelInputComponent.prototype.ngOnChanges = function (changes) {
            var selectedISO = changes['selectedCountryISO'];
            if (this.allCountries &&
                selectedISO &&
                selectedISO.currentValue !== selectedISO.previousValue) {
                this.updateSelectedCountry();
            }
            if (changes.preferredCountries) {
                this.updatePreferredCountries();
            }
            this.checkSeparateDialCodeStyle();
        };
        /*
            This is a wrapper method to avoid calling this.ngOnInit() in writeValue().
            Ref: http://codelyzer.com/rules/no-life-cycle-call/
        */
        NgxIntlTelInputComponent.prototype.init = function () {
            var _this = this;
            this.fetchCountryData();
            if (this.preferredCountries.length) {
                this.updatePreferredCountries();
            }
            if (this.onlyCountries.length) {
                this.allCountries = this.allCountries.filter(function (c) { return _this.onlyCountries.includes(c.iso2); });
            }
            if (this.selectFirstCountry) {
                if (this.preferredCountriesInDropDown.length) {
                    this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
                }
                else {
                    this.setSelectedCountry(this.allCountries[0]);
                }
            }
            this.updateSelectedCountry();
            this.checkSeparateDialCodeStyle();
        };
        NgxIntlTelInputComponent.prototype.setSelectedCountry = function (country) {
            this.selectedCountry = country;
            this.countryChange.emit(country);
        };
        /**
         * Search country based on country name, iso2, dialCode or all of them.
         */
        NgxIntlTelInputComponent.prototype.searchCountry = function () {
            var _this = this;
            if (!this.countrySearchText) {
                this.countryList.nativeElement
                    .querySelector('.iti__country-list li')
                    .scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest',
                });
                return;
            }
            var countrySearchTextLower = this.countrySearchText.toLowerCase();
            var country = this.allCountries.filter(function (c) {
                if (_this.searchCountryField.indexOf(exports.SearchCountryField.All) > -1) {
                    // Search in all fields
                    if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                    if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                    if (c.dialCode.startsWith(_this.countrySearchText)) {
                        return c;
                    }
                }
                else {
                    // Or search by specific SearchCountryField(s)
                    if (_this.searchCountryField.indexOf(exports.SearchCountryField.Iso2) > -1) {
                        if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                            return c;
                        }
                    }
                    if (_this.searchCountryField.indexOf(exports.SearchCountryField.Name) > -1) {
                        if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                            return c;
                        }
                    }
                    if (_this.searchCountryField.indexOf(exports.SearchCountryField.DialCode) > -1) {
                        if (c.dialCode.startsWith(_this.countrySearchText)) {
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
                        inline: 'nearest',
                    });
                }
            }
            this.checkSeparateDialCodeStyle();
        };
        NgxIntlTelInputComponent.prototype.onPhoneNumberChange = function () {
            var countryCode;
            // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.
            if (this.phoneNumber && typeof this.phoneNumber === 'object') {
                var numberObj = this.phoneNumber;
                this.phoneNumber = numberObj.number;
                countryCode = numberObj.countryCode;
            }
            this.value = this.phoneNumber;
            countryCode = countryCode || this.selectedCountry.iso2;
            var number = this.getParsedNumber(this.phoneNumber, countryCode);
            // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
            if (this.enableAutoCountrySelect) {
                countryCode =
                    number && number.getCountryCode()
                        ? this.getCountryIsoCode(number.getCountryCode(), number)
                        : this.selectedCountry.iso2;
                if (countryCode && countryCode !== this.selectedCountry.iso2) {
                    var newCountry = this.allCountries
                        .sort(function (a, b) {
                        return a.priority - b.priority;
                    })
                        .find(function (c) { return c.iso2 === countryCode; });
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
            }
            else {
                var intlNo = number
                    ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.INTERNATIONAL)
                    : '';
                // parse phoneNumber if separate dial code is needed
                if (this.separateDialCode && intlNo) {
                    this.value = this.removeDialCode(intlNo);
                }
                this.propagateChange({
                    number: this.value,
                    internationalNumber: intlNo,
                    nationalNumber: number
                        ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.NATIONAL)
                        : '',
                    e164Number: number
                        ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.E164)
                        : '',
                    countryCode: countryCode.toUpperCase(),
                    dialCode: '+' + this.selectedCountry.dialCode,
                });
            }
        };
        NgxIntlTelInputComponent.prototype.onCountrySelect = function (country, el) {
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
                var intlNo = number
                    ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.INTERNATIONAL)
                    : '';
                // parse phoneNumber if separate dial code is needed
                if (this.separateDialCode && intlNo) {
                    this.value = this.removeDialCode(intlNo);
                }
                this.propagateChange({
                    number: this.value,
                    internationalNumber: intlNo,
                    nationalNumber: number
                        ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.NATIONAL)
                        : '',
                    e164Number: number
                        ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.E164)
                        : '',
                    countryCode: this.selectedCountry.iso2.toUpperCase(),
                    dialCode: '+' + this.selectedCountry.dialCode,
                });
            }
            else {
                // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                // tslint:disable-next-line: no-null-keyword
                this.propagateChange(null);
            }
            el.focus();
        };
        NgxIntlTelInputComponent.prototype.onInputKeyPress = function (event) {
            var allowedChars = /[0-9\+\-\(\)\ ]/;
            var allowedCtrlChars = /[axcv]/; // Allows copy-pasting
            var allowedOtherKeys = [
                'ArrowLeft',
                'ArrowUp',
                'ArrowRight',
                'ArrowDown',
                'Home',
                'End',
                'Insert',
                'Delete',
                'Backspace',
            ];
            if (!allowedChars.test(event.key) &&
                !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
                !allowedOtherKeys.includes(event.key)) {
                event.preventDefault();
            }
        };
        NgxIntlTelInputComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        NgxIntlTelInputComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NgxIntlTelInputComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        NgxIntlTelInputComponent.prototype.writeValue = function (obj) {
            var _this = this;
            if (obj === undefined) {
                this.init();
            }
            this.phoneNumber = obj;
            setTimeout(function () {
                _this.onPhoneNumberChange();
            }, 1);
        };
        NgxIntlTelInputComponent.prototype.resolvePlaceholder = function () {
            var placeholder = '';
            if (this.customPlaceholder) {
                placeholder = this.customPlaceholder;
            }
            else if (this.selectedCountry.placeHolder) {
                placeholder = this.selectedCountry.placeHolder;
                if (this.separateDialCode) {
                    placeholder = this.removeDialCode(placeholder);
                }
            }
            return placeholder;
        };
        /* --------------------------------- Helpers -------------------------------- */
        /**
         * Returns parse PhoneNumber object.
         * @param phoneNumber string
         * @param countryCode string
         */
        NgxIntlTelInputComponent.prototype.getParsedNumber = function (phoneNumber, countryCode) {
            var number;
            try {
                number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
            }
            catch (e) { }
            return number;
        };
        /**
         * Adjusts input alignment based on the dial code presentation style.
         */
        NgxIntlTelInputComponent.prototype.checkSeparateDialCodeStyle = function () {
            if (this.separateDialCode && this.selectedCountry) {
                var cntryCd = this.selectedCountry.dialCode;
                this.separateDialCodeClass =
                    'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
            }
            else {
                this.separateDialCodeClass = '';
            }
        };
        /**
         * Cleans dialcode from phone number string.
         * @param phoneNumber string
         */
        NgxIntlTelInputComponent.prototype.removeDialCode = function (phoneNumber) {
            var number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
            phoneNumber = this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat[this.numberFormat]);
            if (phoneNumber.startsWith('+') && this.separateDialCode) {
                phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
            }
            return phoneNumber;
        };
        /**
         * Sifts through all countries and returns iso code of the primary country
         * based on the number provided.
         * @param countryCode country code in number format
         * @param number PhoneNumber object
         */
        NgxIntlTelInputComponent.prototype.getCountryIsoCode = function (countryCode, number) {
            // Will use this to match area code from the first numbers
            var rawNumber = number['values_']['2'].toString();
            // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
            var countries = this.allCountries.filter(function (c) { return c.dialCode === countryCode.toString(); });
            // Main country is the country, which has no areaCodes specified in country-code.ts file.
            var mainCountry = countries.find(function (c) { return c.areaCodes === undefined; });
            // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
            var secondaryCountries = countries.filter(function (c) { return c.areaCodes !== undefined; });
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
        };
        /**
         * Gets formatted example phone number from phoneUtil.
         * @param countryCode string
         */
        NgxIntlTelInputComponent.prototype.getPhoneNumberPlaceHolder = function (countryCode) {
            try {
                return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn__namespace.PhoneNumberFormat[this.numberFormat]);
            }
            catch (e) {
                return e;
            }
        };
        /**
         * Clearing the list to avoid duplicates (https://github.com/webcat12345/ngx-intl-tel-input/issues/248)
         */
        NgxIntlTelInputComponent.prototype.fetchCountryData = function () {
            var _this = this;
            this.allCountries = [];
            this.countryCodeData.allCountries.forEach(function (c) {
                var country = {
                    name: c[0].toString(),
                    iso2: c[1].toString(),
                    dialCode: c[2].toString(),
                    priority: +c[3] || 0,
                    areaCodes: c[4] || undefined,
                    htmlId: "iti-0__item-" + c[1].toString(),
                    flagClass: "iti__" + c[1].toString().toLocaleLowerCase(),
                    placeHolder: '',
                };
                if (_this.enablePlaceholder) {
                    country.placeHolder = _this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
                }
                _this.allCountries.push(country);
            });
        };
        /**
         * Populates preferredCountriesInDropDown with prefferred countries.
         */
        NgxIntlTelInputComponent.prototype.updatePreferredCountries = function () {
            var _this = this;
            if (this.preferredCountries.length) {
                this.preferredCountriesInDropDown = [];
                this.preferredCountries.forEach(function (iso2) {
                    var preferredCountry = _this.allCountries.filter(function (c) {
                        return c.iso2 === iso2;
                    });
                    _this.preferredCountriesInDropDown.push(preferredCountry[0]);
                });
            }
        };
        /**
         * Updates selectedCountry.
         */
        NgxIntlTelInputComponent.prototype.updateSelectedCountry = function () {
            var _this = this;
            if (this.selectedCountryISO) {
                this.selectedCountry = this.allCountries.find(function (c) {
                    return c.iso2.toLowerCase() === _this.selectedCountryISO.toLowerCase();
                });
                if (this.selectedCountry) {
                    if (this.phoneNumber) {
                        this.onPhoneNumberChange();
                    }
                    else {
                        // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                        // tslint:disable-next-line: no-null-keyword
                        this.propagateChange(null);
                    }
                }
            }
        };
        return NgxIntlTelInputComponent;
    }());
    NgxIntlTelInputComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'ngx-intl-tel-input',
                    template: "<div class=\"iti iti--allow-dropdown\"\n\t[ngClass]=\"separateDialCodeClass\">\n\t<div class=\"iti__flag-container\"\n\t\tdropdown\n\t\t[ngClass]=\"{'disabled': disabled}\"\n\t\t[isDisabled]=\"disabled\">\n\t\t<div class=\"iti__selected-flag dropdown-toggle\"\n\t\t\tdropdownToggle>\n\t\t\t<div class=\"iti__flag\"\n\t\t\t\t[ngClass]=\"selectedCountry?.flagClass\"></div>\n\t\t\t<div *ngIf=\"separateDialCode\"\n\t\t\t\tclass=\"selected-dial-code\">+{{selectedCountry.dialCode}}</div>\n\t\t\t<div class=\"iti__arrow\"></div>\n\t\t</div>\n\t\t<div *dropdownMenu\n\t\t\tclass=\"dropdown-menu country-dropdown\">\n\t\t\t<div class=\"search-container\"\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\">\n\t\t\t\t<input id=\"country-search-box\"\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\n\t\t\t\t\t(keyup)=\"searchCountry()\"\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\n\t\t\t\t\tautofocus>\n\t\t\t</div>\n\t\t\t<ul class=\"iti__country-list\"\n\t\t\t\t#countryList>\n\t\t\t\t<li class=\"iti__country iti__preferred\"\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId+'-preferred'\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"iti__divider\"\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"></li>\n\t\t\t\t<li class=\"iti__country iti__standard\"\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<input type=\"tel\"\n\t\t\t\t [mask]=\"phoneMask\"\n\t\t[id]=\"inputId\"\n\t\tautocomplete=\"off\"\n\t\t[ngClass]=\"cssClass\"\n\t\t(blur)=\"onTouched()\"\n\t\t(keypress)=\"onInputKeyPress($event)\"\n\t\t[(ngModel)]=\"phoneNumber\"\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\n\t\t[disabled]=\"disabled\"\n\t\t[placeholder]=\"resolvePlaceholder()\"\n\t\t[attr.maxLength]=\"maxLength\"\n\t\t[attr.validation]=\"phoneValidation\"\n\t\t#focusable>\n</div>\n",
                    providers: [
                        CountryCode,
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            // tslint:disable-next-line:no-forward-ref
                            useExisting: core.forwardRef(function () { return NgxIntlTelInputComponent; }),
                            multi: true,
                        },
                        {
                            provide: forms.NG_VALIDATORS,
                            useValue: ɵ0,
                            multi: true,
                        },
                    ],
                    styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"]
                },] }
    ];
    NgxIntlTelInputComponent.ctorParameters = function () { return [
        { type: CountryCode },
        { type: core.ChangeDetectorRef }
    ]; };
    NgxIntlTelInputComponent.propDecorators = {
        value: [{ type: core.Input }],
        preferredCountries: [{ type: core.Input }],
        enablePlaceholder: [{ type: core.Input }],
        customPlaceholder: [{ type: core.Input }],
        numberFormat: [{ type: core.Input }],
        cssClass: [{ type: core.Input }],
        onlyCountries: [{ type: core.Input }],
        enableAutoCountrySelect: [{ type: core.Input }],
        searchCountryFlag: [{ type: core.Input }],
        searchCountryField: [{ type: core.Input }],
        searchCountryPlaceholder: [{ type: core.Input }],
        maxLength: [{ type: core.Input }],
        selectFirstCountry: [{ type: core.Input }],
        selectedCountryISO: [{ type: core.Input }],
        phoneValidation: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        separateDialCode: [{ type: core.Input }],
        defaultPhoneMask: [{ type: core.Input }],
        countryChange: [{ type: core.Output }],
        countryList: [{ type: core.ViewChild, args: ['countryList',] }]
    };

    /*
    "Property 'nativeElement' does not exist on type 'FormControl'".
    'NativeElementInjectorDirective' injects nativeElement to each control,
    so we can access it from inside validator for example.
    More about this approach and reasons for this:
    https://github.com/angular/angular/issues/18025
    https://stackoverflow.com/a/54075119/1617590
    */
    var NativeElementInjectorDirective = /** @class */ (function () {
        function NativeElementInjectorDirective(controlDir, host) {
            this.controlDir = controlDir;
            this.host = host;
        }
        NativeElementInjectorDirective.prototype.ngOnInit = function () {
            if (this.controlDir.control) {
                this.controlDir.control['nativeElement'] = this.host.nativeElement;
            }
        };
        return NativeElementInjectorDirective;
    }());
    NativeElementInjectorDirective.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ngModel], [formControl], [formControlName]',
                },] }
    ];
    NativeElementInjectorDirective.ctorParameters = function () { return [
        { type: forms.NgControl },
        { type: core.ElementRef }
    ]; };

    var config = new core.InjectionToken('config');
    var NEW_CONFIG = new core.InjectionToken('NEW_CONFIG');
    var INITIAL_CONFIG = new core.InjectionToken('INITIAL_CONFIG');
    var initialConfig = {
        sufix: '',
        prefix: '',
        clearIfNotMatch: false,
        showTemplate: false,
        showMaskTyped: false,
        dropSpecialCharacters: true,
        specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '\"', '\''],
        patterns: {
            '0': {
                pattern: new RegExp('\\d'),
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
                pattern: new RegExp('\\d'),
            },
            'm': {
                pattern: new RegExp('\\d'),
            },
            'H': {
                pattern: new RegExp('\\d'),
            },
            'h': {
                pattern: new RegExp('\\d'),
            },
            's': {
                pattern: new RegExp('\\d'),
            }
        }
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var MaskApplierService = /** @class */ (function () {
        function MaskApplierService(_config) {
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
        }
        // tslint:disable-next-line:no-any
        MaskApplierService.prototype.applyMaskWithPattern = function (inputValue, maskAndPattern) {
            var _a = __read(maskAndPattern, 2), mask = _a[0], customPattern = _a[1];
            this.customPattern = customPattern;
            return this.applyMask(inputValue, mask);
        };
        MaskApplierService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
            if (position === void 0) { position = 0; }
            if (cb === void 0) { cb = function () { }; }
            if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
                return '';
            }
            var cursor = 0;
            var result = "";
            var multi = false;
            if (inputValue.slice(0, this.prefix.length) === this.prefix) {
                inputValue = inputValue.slice(this.prefix.length, inputValue.length);
            }
            var inputArray = inputValue.toString()
                .split('');
            if (maskExpression === 'separator') {
                if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                var strForSep = inputValue.replace(/\s/g, '');
                result = this.separator(strForSep);
                position = result.length + 1;
                cursor = position;
                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                    ? inputArray.length
                    : cursor;
                this._shift.add(shiftStep + this.prefix.length || 0);
            }
            else {
                // tslint:disable-next-line
                for (var i = 0, inputSymbol = inputArray[0]; i
                    < inputArray.length; i++, inputSymbol = inputArray[i]) {
                    if (cursor === maskExpression.length) {
                        break;
                    }
                    if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                        result += inputSymbol;
                        cursor += 2;
                    }
                    else if (maskExpression[cursor + 1] === '*' && multi
                        && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                        result += inputSymbol;
                        cursor += 3;
                        multi = false;
                    }
                    else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])
                        && maskExpression[cursor + 1]
                            === '*') {
                        result += inputSymbol;
                        multi = true;
                    }
                    else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                        result += inputSymbol;
                        cursor += 3;
                    }
                    else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                        if (maskExpression[cursor] === 'H') {
                            if (Number(inputSymbol) > 2) {
                                result += 0;
                                cursor += 1;
                                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                    ? inputArray.length
                                    : cursor;
                                this._shift.add(shiftStep + this.prefix.length || 0);
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
                                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                    ? inputArray.length
                                    : cursor;
                                this._shift.add(shiftStep + this.prefix.length || 0);
                                i--;
                                continue;
                            }
                        }
                        if (maskExpression[cursor] === 's') {
                            if (Number(inputSymbol) > 5) {
                                result += 0;
                                cursor += 1;
                                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                    ? inputArray.length
                                    : cursor;
                                this._shift.add(shiftStep + this.prefix.length || 0);
                                i--;
                                continue;
                            }
                        }
                        result += inputSymbol;
                        cursor++;
                    }
                    else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                        if (maskExpression[cursor] === 'd') {
                            if (Number(inputSymbol) > 3) {
                                result += 0;
                                cursor += 1;
                                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                    ? inputArray.length
                                    : cursor;
                                this._shift.add(shiftStep + this.prefix.length || 0);
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
                                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                    ? inputArray.length
                                    : cursor;
                                this._shift.add(shiftStep + this.prefix.length || 0);
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
                    }
                    else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                        result += maskExpression[cursor];
                        cursor++;
                        var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                            ? inputArray.length
                            : cursor;
                        this._shift.add(shiftStep + this.prefix.length || 0);
                        i--;
                    }
                    else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1
                        && this.maskAvailablePatterns[maskExpression[cursor]]
                        && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                        cursor++;
                        i--;
                    }
                    else if ((this.maskExpression[cursor + 1] === '*')
                        && (this._findSpecialChar(this.maskExpression[cursor + 2]))
                        && (this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2]) && multi) {
                        cursor += 3;
                        result += inputSymbol;
                    }
                }
            }
            if (result.length + 1 === maskExpression.length
                && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
                result += maskExpression[maskExpression.length - 1];
            }
            var shift = 1;
            var newPosition = position + 1;
            while (this._shift.has(newPosition)) {
                shift++;
                newPosition++;
            }
            cb(this._shift.has(position) ? shift : 0);
            var res = "" + this.prefix + result;
            res = this.sufix ? "" + this.prefix + result + this.sufix : "" + this.prefix + result;
            if (result.length === 0) {
                res = "" + this.prefix + result;
            }
            return res;
        };
        MaskApplierService.prototype._findSpecialChar = function (inputSymbol) {
            var symbol = this.maskSpecialCharacters
                .find(function (val) { return val === inputSymbol; });
            return symbol;
        };
        MaskApplierService.prototype._checkSymbolMask = function (inputSymbol, maskSymbol) {
            this.maskAvailablePatterns = this.customPattern
                ? this.customPattern
                : this.maskAvailablePatterns;
            return this.maskAvailablePatterns[maskSymbol]
                && this.maskAvailablePatterns[maskSymbol].pattern
                && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
        };
        return MaskApplierService;
    }());
    MaskApplierService.decorators = [
        { type: core.Injectable }
    ];
    MaskApplierService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [config,] }] }
    ]; };

    var MaskService = /** @class */ (function (_super) {
        __extends(MaskService, _super);
        function MaskService(
        // tslint:disable-next-line
        document, _config, _elementRef, _renderer) {
            var _this = _super.call(this, _config) || this;
            _this.document = document;
            _this._config = _config;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this.maskExpression = '';
            _this.isNumberValue = false;
            _this.showMaskTyped = false;
            _this.maskIsShown = '';
            // tslint:disable-next-line
            _this.onChange = function (_) { };
            _this.onTouch = function () { };
            _this._formElement = _this._elementRef.nativeElement;
            return _this;
        }
        MaskService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
            if (position === void 0) { position = 0; }
            if (cb === void 0) { cb = function () { }; }
            this.maskIsShown = this.showMaskTyped
                ? this.maskExpression.replace(/\w/g, '_')
                : '';
            if (!inputValue && this.showMaskTyped) {
                return this.prefix + this.maskIsShown;
            }
            var result = _super.prototype.applyMask.call(this, inputValue, maskExpression, position, cb);
            Array.isArray(this.dropSpecialCharacters)
                ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters))
                : this.dropSpecialCharacters === true
                    ? this.onChange(this.isNumberValue
                        ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                        : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                    : this.onChange(this._removeSufix(this._removePrefix(result)));
            var ifMaskIsShown = '';
            if (!this.showMaskTyped) {
                return result;
            }
            var resLen = result.length;
            var prefNmask = this.prefix + this.maskIsShown;
            ifMaskIsShown = prefNmask.slice(resLen);
            return result + ifMaskIsShown;
        };
        MaskService.prototype.applyValueChanges = function (position, cb) {
            if (position === void 0) { position = 0; }
            if (cb === void 0) { cb = function () { }; }
            var maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
            this._formElement.value = maskedInput;
            if (this._formElement === this.document.activeElement) {
                return;
            }
            this.clearIfNotMatchFn();
        };
        MaskService.prototype.showMaskInInput = function () {
            if (this.showMaskTyped) {
                this.maskIsShown = this.maskExpression.replace(/\w/g, '_');
            }
        };
        MaskService.prototype.clearIfNotMatchFn = function () {
            if (this.clearIfNotMatch === true &&
                this.maskExpression.length !== this._formElement.value.length) {
                this.formElementProperty = ['value', ''];
                this.applyMask(this._formElement.value, this.maskExpression);
            }
        };
        Object.defineProperty(MaskService.prototype, "formElementProperty", {
            set: function (_a) {
                var _b = __read(_a, 2), name = _b[0], value = _b[1];
                this._renderer.setProperty(this._formElement, name, value);
            },
            enumerable: false,
            configurable: true
        });
        MaskService.prototype._removeMask = function (value, specialCharactersForRemove) {
            return value
                ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
                : value;
        };
        MaskService.prototype._removePrefix = function (value) {
            if (!this.prefix) {
                return value;
            }
            return value
                ? value.replace(this.prefix, '')
                : value;
        };
        MaskService.prototype._removeSufix = function (value) {
            if (!this.sufix) {
                return value;
            }
            return value
                ? value.replace(this.sufix, '')
                : value;
        };
        MaskService.prototype._regExpForRemove = function (specialCharactersForRemove) {
            return new RegExp(specialCharactersForRemove.map(function (item) { return "\\" + item; }).join('|'), 'gi');
        };
        return MaskService;
    }(MaskApplierService));
    MaskService.decorators = [
        { type: core.Injectable }
    ];
    MaskService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: core.Inject, args: [config,] }] },
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };

    var MaskDirective = /** @class */ (function () {
        function MaskDirective(
        // tslint:disable-next-line
        document, _maskService) {
            this.document = document;
            this._maskService = _maskService;
            this._position = null;
            // tslint:disable-next-line
            this.onChange = function (_) { };
            this.onTouch = function () { };
        }
        Object.defineProperty(MaskDirective.prototype, "maskExpression", {
            set: function (value) {
                this._maskValue = value || '';
                if (!this._maskValue) {
                    return;
                }
                this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
                this._maskService.formElementProperty = [
                    'value',
                    this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
                ];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
            set: function (value) {
                if (!value ||
                    !Array.isArray(value) ||
                    (Array.isArray(value) && !value.length)) {
                    return;
                }
                this._maskService.maskSpecialCharacters = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "patterns", {
            set: function (value) {
                if (!value) {
                    return;
                }
                this._maskService.maskAvailablePatterns = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "prefix", {
            set: function (value) {
                if (!value) {
                    return;
                }
                this._maskService.prefix = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "sufix", {
            set: function (value) {
                if (!value) {
                    return;
                }
                this._maskService.sufix = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
            set: function (value) {
                this._maskService.dropSpecialCharacters = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "showMaskTyped", {
            set: function (value) {
                if (!value) {
                    return;
                }
                this._maskService.showMaskTyped = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "showTemplate", {
            set: function (value) {
                this._maskService.showTemplate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
            set: function (value) {
                this._maskService.clearIfNotMatch = value;
            },
            enumerable: false,
            configurable: true
        });
        MaskDirective.prototype.onInput = function (e) {
            var el = e.target;
            this._inputValue = el.value;
            if (!this._maskValue) {
                this.onChange(el.value);
                return;
            }
            var position = el.selectionStart === 1
                ? el.selectionStart + this._maskService.prefix.length
                : el.selectionStart;
            var caretShift = 0;
            this._maskService.applyValueChanges(position, function (shift) { return (caretShift = shift); });
            // only set the selection if the element is active
            if (this.document.activeElement !== el) {
                return;
            }
            el.selectionStart = el.selectionEnd =
                this._position !== null
                    ? this._position
                    : position +
                        // tslint:disable-next-line
                        (e.inputType === 'deleteContentBackward' ? 0 : caretShift);
            this._position = null;
        };
        MaskDirective.prototype.onBlur = function () {
            this._maskService.clearIfNotMatchFn();
            this.onTouch();
        };
        MaskDirective.prototype.onFocus = function (e) {
            var el = e.target;
            if (el !== null && el.selectionStart !== null &&
                el.selectionStart === el.selectionEnd &&
                el.selectionStart > this._maskService.prefix.length &&
                // tslint:disable-next-line
                e.keyCode !== 38) {
                return;
            }
            if (this._maskService.showMaskTyped) {
                this._maskService.maskIsShown = this._maskService.maskExpression.replace(/[0-9]/g, '_');
            }
            el.value = !el.value || el.value === this._maskService.prefix
                ? this._maskService.prefix + this._maskService.maskIsShown
                : el.value;
            /** fix of cursor position with prefix when mouse click occur */
            if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
                el.selectionStart = this._maskService.prefix.length;
                return;
            }
        };
        MaskDirective.prototype.a = function (e) {
            var el = e.target;
            if (e.keyCode === 38) {
                e.preventDefault();
            }
            if (e.keyCode === 37 || e.keyCode === 8) {
                if (el.selectionStart <= this._maskService.prefix.length
                    && el.selectionEnd <= this._maskService.prefix.length) {
                    e.preventDefault();
                }
                this.onFocus(e);
                if (e.keyCode === 8
                    && el.selectionStart === 0
                    && el.selectionEnd === el.value.length) {
                    el.value = this._maskService.prefix;
                    this._position = this._maskService.prefix ? this._maskService.prefix.length : 1;
                    this.onInput(e);
                }
            }
        };
        MaskDirective.prototype.onPaste = function () {
            this._position = Number.MAX_SAFE_INTEGER;
        };
        /** It writes the value in the input */
        MaskDirective.prototype.writeValue = function (inputValue) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (inputValue === undefined) {
                        inputValue = '';
                    }
                    if (typeof inputValue === 'number') {
                        inputValue = String(inputValue);
                        this._maskService.isNumberValue = true;
                    }
                    inputValue && this._maskService.maskExpression ||
                        this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)
                        ? (this._maskService.formElementProperty = [
                            'value',
                            this._maskService.applyMask(inputValue, this._maskService.maskExpression)
                        ])
                        : (this._maskService.formElementProperty = ['value', inputValue]);
                    this._inputValue = inputValue;
                    return [2 /*return*/];
                });
            });
        };
        // tslint:disable-next-line
        MaskDirective.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
            this._maskService.onChange = this.onChange;
        };
        // tslint:disable-next-line
        MaskDirective.prototype.registerOnTouched = function (fn) {
            this.onTouch = fn;
        };
        /** It disables the input element */
        MaskDirective.prototype.setDisabledState = function (isDisabled) {
            this._maskService.formElementProperty = ['disabled', isDisabled];
        };
        MaskDirective.prototype._repeatPatternSymbols = function (maskExp) {
            var _this = this;
            return maskExp.match(/{[0-9]+}/)
                && maskExp.split('')
                    .reduce(function (accum, currval, index) {
                    _this._start = (currval === '{') ? index : _this._start;
                    if (currval !== '}') {
                        return _this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                    }
                    _this._end = index;
                    var repeatNumber = Number(maskExp
                        .slice(_this._start + 1, _this._end));
                    var repaceWith = new Array(repeatNumber + 1)
                        .join(maskExp[_this._start - 1]);
                    return accum + repaceWith;
                }, '') || maskExp;
        };
        return MaskDirective;
    }());
    MaskDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mask]',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return MaskDirective; }),
                            multi: true
                        },
                        MaskService
                    ]
                },] }
    ];
    MaskDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: MaskService }
    ]; };
    MaskDirective.propDecorators = {
        maskExpression: [{ type: core.Input, args: ['mask',] }],
        specialCharacters: [{ type: core.Input }],
        patterns: [{ type: core.Input }],
        prefix: [{ type: core.Input }],
        sufix: [{ type: core.Input }],
        dropSpecialCharacters: [{ type: core.Input }],
        showMaskTyped: [{ type: core.Input }],
        showTemplate: [{ type: core.Input }],
        clearIfNotMatch: [{ type: core.Input }],
        onInput: [{ type: core.HostListener, args: ['input', ['$event'],] }],
        onBlur: [{ type: core.HostListener, args: ['blur',] }],
        onFocus: [{ type: core.HostListener, args: ['click', ['$event'],] }],
        a: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
        onPaste: [{ type: core.HostListener, args: ['paste',] }]
    };

    var MaskPipe = /** @class */ (function () {
        function MaskPipe(_maskService) {
            this._maskService = _maskService;
        }
        MaskPipe.prototype.transform = function (value, mask) {
            if (!value) {
                return '';
            }
            if (typeof mask === 'string') {
                return this._maskService.applyMask("" + value, mask);
            }
            return this._maskService.applyMaskWithPattern("" + value, mask);
        };
        return MaskPipe;
    }());
    MaskPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'mask',
                    pure: true
                },] }
    ];
    MaskPipe.ctorParameters = function () { return [
        { type: MaskApplierService }
    ]; };

    var NgxMaskModule = /** @class */ (function () {
        function NgxMaskModule() {
        }
        NgxMaskModule.forRoot = function (configValue) {
            return {
                ngModule: NgxMaskModule,
                providers: [
                    {
                        provide: NEW_CONFIG,
                        useValue: configValue
                    },
                    {
                        provide: INITIAL_CONFIG,
                        useValue: initialConfig
                    },
                    {
                        provide: config,
                        useFactory: _configFactory,
                        deps: [INITIAL_CONFIG, NEW_CONFIG]
                    },
                ]
            };
        };
        NgxMaskModule.forChild = function (configValue) {
            return {
                ngModule: NgxMaskModule,
            };
        };
        return NgxMaskModule;
    }());
    NgxMaskModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [MaskApplierService],
                    exports: [MaskDirective, MaskPipe],
                    declarations: [MaskDirective, MaskPipe]
                },] }
    ];
    /**
     * @internal
     */
    function _configFactory(initConfig, configValue) {
        return (typeof configValue === 'function') ? configValue() : Object.assign(Object.assign({}, initConfig), configValue);
    }

    var dropdownModuleForRoot = dropdown.BsDropdownModule.forRoot();
    var NgxIntlTelInputModule = /** @class */ (function () {
        function NgxIntlTelInputModule() {
        }
        return NgxIntlTelInputModule;
    }());
    NgxIntlTelInputModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        dropdownModuleForRoot,
                        NgxMaskModule.forRoot(),
                    ],
                    exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                },] }
    ];

    /*
     * Public API Surface of ngx-intl-tel-input
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NativeElementInjectorDirective = NativeElementInjectorDirective;
    exports.NgxIntlTelInputComponent = NgxIntlTelInputComponent;
    exports.NgxIntlTelInputModule = NgxIntlTelInputModule;
    exports.dropdownModuleForRoot = dropdownModuleForRoot;
    exports["ɵ0"] = ɵ0;
    exports["ɵa"] = CountryCode;
    exports["ɵb"] = phoneNumberValidator;
    exports["ɵc"] = NgxMaskModule;
    exports["ɵd"] = _configFactory;
    exports["ɵe"] = MaskApplierService;
    exports["ɵg"] = config;
    exports["ɵh"] = NEW_CONFIG;
    exports["ɵi"] = INITIAL_CONFIG;
    exports["ɵj"] = initialConfig;
    exports["ɵk"] = MaskDirective;
    exports["ɵl"] = MaskService;
    exports["ɵm"] = MaskPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-intl-tel-input.umd.js.map
