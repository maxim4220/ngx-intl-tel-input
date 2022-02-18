import * as lpn from 'google-libphonenumber';
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import { CountryCode } from './data/country-code';
import { SearchCountryField } from './enums/search-country-field.enum';
import { phoneNumberValidator } from './ngx-intl-tel-input.validator';
import { PhoneNumberFormat } from './enums/phone-number-format.enum';
const ɵ0 = phoneNumberValidator;
export class NgxIntlTelInputComponent {
    constructor(countryCodeData, cdr) {
        this.countryCodeData = countryCodeData;
        this.cdr = cdr;
        this.value = '';
        this.preferredCountries = [];
        this.enablePlaceholder = true;
        this.numberFormat = PhoneNumberFormat.International;
        this.cssClass = 'form-control';
        this.onlyCountries = [];
        this.enableAutoCountrySelect = true;
        this.searchCountryFlag = false;
        this.searchCountryField = [SearchCountryField.All];
        this.searchCountryPlaceholder = 'Search Country';
        this.maxLength = '';
        this.selectFirstCountry = true;
        this.phoneValidation = true;
        this.inputId = 'phone';
        this.separateDialCode = false;
        this.defaultPhoneMask = '00 00 00 00';
        this.countryChange = new EventEmitter();
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
        this.phoneUtil = lpn.PhoneNumberUtil.getInstance();
        this.disabled = false;
        this.errors = ['Phone number is required.'];
        this.countrySearchText = '';
        this.phoneMask = this.defaultPhoneMask;
        this.onTouched = () => { };
        this.propagateChange = (_) => { };
        // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
        // Add the wrong classes and such
        setTheme('bs4');
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        const selectedISO = changes['selectedCountryISO'];
        if (this.allCountries &&
            selectedISO &&
            selectedISO.currentValue !== selectedISO.previousValue) {
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
    init() {
        this.fetchCountryData();
        if (this.preferredCountries.length) {
            this.updatePreferredCountries();
        }
        if (this.onlyCountries.length) {
            this.allCountries = this.allCountries.filter((c) => this.onlyCountries.includes(c.iso2));
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
    }
    setSelectedCountry(country) {
        this.selectedCountry = country;
        this.countryChange.emit(country);
    }
    /**
     * Search country based on country name, iso2, dialCode or all of them.
     */
    searchCountry() {
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
        const countrySearchTextLower = this.countrySearchText.toLowerCase();
        const country = this.allCountries.filter((c) => {
            if (this.searchCountryField.indexOf(SearchCountryField.All) > -1) {
                // Search in all fields
                if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.dialCode.startsWith(this.countrySearchText)) {
                    return c;
                }
            }
            else {
                // Or search by specific SearchCountryField(s)
                if (this.searchCountryField.indexOf(SearchCountryField.Iso2) > -1) {
                    if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.Name) > -1) {
                    if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.DialCode) > -1) {
                    if (c.dialCode.startsWith(this.countrySearchText)) {
                        return c;
                    }
                }
            }
        });
        if (country.length > 0) {
            const el = this.countryList.nativeElement.querySelector('#' + country[0].htmlId);
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest',
                });
            }
        }
        this.checkSeparateDialCodeStyle();
    }
    onPhoneNumberChange() {
        let countryCode;
        // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.
        if (this.phoneNumber && typeof this.phoneNumber === 'object') {
            const numberObj = this.phoneNumber;
            this.phoneNumber = numberObj.number;
            countryCode = numberObj.countryCode;
        }
        this.value = this.phoneNumber;
        countryCode = countryCode || this.selectedCountry.iso2;
        const number = this.getParsedNumber(this.phoneNumber, countryCode);
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            countryCode =
                number && number.getCountryCode()
                    ? this.getCountryIsoCode(number.getCountryCode(), number)
                    : this.selectedCountry.iso2;
            if (countryCode && countryCode !== this.selectedCountry.iso2) {
                const newCountry = this.allCountries
                    .sort((a, b) => {
                    return a.priority - b.priority;
                })
                    .find((c) => c.iso2 === countryCode);
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
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: countryCode.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
    }
    onCountrySelect(country, el) {
        const countryPlaceholder = country.placeHolder.replace(/[0-9]/g, '0');
        if (countryPlaceholder) {
            this.phoneMask = countryPlaceholder;
            this.cdr.markForCheck();
        }
        this.setSelectedCountry(country);
        this.checkSeparateDialCodeStyle();
        if (this.phoneNumber && this.phoneNumber.length > 0) {
            this.value = this.phoneNumber;
            const number = this.getParsedNumber(this.phoneNumber, this.selectedCountry.iso2);
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
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
    }
    onInputKeyPress(event) {
        const allowedChars = /[0-9\+\-\(\)\ ]/;
        const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
        const allowedOtherKeys = [
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
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (obj === undefined) {
            this.init();
        }
        this.phoneNumber = obj;
        setTimeout(() => {
            this.onPhoneNumberChange();
        }, 1);
    }
    resolvePlaceholder() {
        let placeholder = '';
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
    }
    /* --------------------------------- Helpers -------------------------------- */
    /**
     * Returns parse PhoneNumber object.
     * @param phoneNumber string
     * @param countryCode string
     */
    getParsedNumber(phoneNumber, countryCode) {
        let number;
        try {
            number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
        }
        catch (e) { }
        return number;
    }
    /**
     * Adjusts input alignment based on the dial code presentation style.
     */
    checkSeparateDialCodeStyle() {
        if (this.separateDialCode && this.selectedCountry) {
            const cntryCd = this.selectedCountry.dialCode;
            this.separateDialCodeClass =
                'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
        }
        else {
            this.separateDialCodeClass = '';
        }
    }
    /**
     * Cleans dialcode from phone number string.
     * @param phoneNumber string
     */
    removeDialCode(phoneNumber) {
        const number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
        phoneNumber = this.phoneUtil.format(number, lpn.PhoneNumberFormat[this.numberFormat]);
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
    getCountryIsoCode(countryCode, number) {
        // Will use this to match area code from the first numbers
        const rawNumber = number['values_']['2'].toString();
        // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
        const countries = this.allCountries.filter((c) => c.dialCode === countryCode.toString());
        // Main country is the country, which has no areaCodes specified in country-code.ts file.
        const mainCountry = countries.find((c) => c.areaCodes === undefined);
        // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
        const secondaryCountries = countries.filter((c) => c.areaCodes !== undefined);
        let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
        /*
            Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
            If no matches found, fallback to the main country.
        */
        secondaryCountries.forEach((country) => {
            country.areaCodes.forEach((areaCode) => {
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
    getPhoneNumberPlaceHolder(countryCode) {
        try {
            return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat[this.numberFormat]);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Clearing the list to avoid duplicates (https://github.com/webcat12345/ngx-intl-tel-input/issues/248)
     */
    fetchCountryData() {
        this.allCountries = [];
        this.countryCodeData.allCountries.forEach((c) => {
            const country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: c[4] || undefined,
                htmlId: `iti-0__item-${c[1].toString()}`,
                flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
                placeHolder: '',
            };
            if (this.enablePlaceholder) {
                country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
            }
            this.allCountries.push(country);
        });
    }
    /**
     * Populates preferredCountriesInDropDown with prefferred countries.
     */
    updatePreferredCountries() {
        if (this.preferredCountries.length) {
            this.preferredCountriesInDropDown = [];
            this.preferredCountries.forEach((iso2) => {
                const preferredCountry = this.allCountries.filter((c) => {
                    return c.iso2 === iso2;
                });
                this.preferredCountriesInDropDown.push(preferredCountry[0]);
            });
        }
    }
    /**
     * Updates selectedCountry.
     */
    updateSelectedCountry() {
        if (this.selectedCountryISO) {
            this.selectedCountry = this.allCountries.find((c) => {
                return c.iso2.toLowerCase() === this.selectedCountryISO.toLowerCase();
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
    }
}
NgxIntlTelInputComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ngx-intl-tel-input',
                template: "<div class=\"iti iti--allow-dropdown\"\n\t[ngClass]=\"separateDialCodeClass\">\n\t<div class=\"iti__flag-container\"\n\t\tdropdown\n\t\t[ngClass]=\"{'disabled': disabled}\"\n\t\t[isDisabled]=\"disabled\">\n\t\t<div class=\"iti__selected-flag dropdown-toggle\"\n\t\t\tdropdownToggle>\n\t\t\t<div class=\"iti__flag\"\n\t\t\t\t[ngClass]=\"selectedCountry?.flagClass\"></div>\n\t\t\t<div *ngIf=\"separateDialCode\"\n\t\t\t\tclass=\"selected-dial-code\">+{{selectedCountry.dialCode}}</div>\n\t\t\t<div class=\"iti__arrow\"></div>\n\t\t</div>\n\t\t<div *dropdownMenu\n\t\t\tclass=\"dropdown-menu country-dropdown\">\n\t\t\t<div class=\"search-container\"\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\">\n\t\t\t\t<input id=\"country-search-box\"\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\n\t\t\t\t\t(keyup)=\"searchCountry()\"\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\n\t\t\t\t\tautofocus>\n\t\t\t</div>\n\t\t\t<ul class=\"iti__country-list\"\n\t\t\t\t#countryList>\n\t\t\t\t<li class=\"iti__country iti__preferred\"\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId+'-preferred'\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"iti__divider\"\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"></li>\n\t\t\t\t<li class=\"iti__country iti__standard\"\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<input type=\"tel\"\n\t\t\t\t [mask]=\"phoneMask\"\n\t\t[id]=\"inputId\"\n\t\tautocomplete=\"off\"\n\t\t[ngClass]=\"cssClass\"\n\t\t(blur)=\"onTouched()\"\n\t\t(keypress)=\"onInputKeyPress($event)\"\n\t\t[(ngModel)]=\"phoneNumber\"\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\n\t\t[disabled]=\"disabled\"\n\t\t[placeholder]=\"resolvePlaceholder()\"\n\t\t[attr.maxLength]=\"maxLength\"\n\t\t[attr.validation]=\"phoneValidation\"\n\t\t#focusable>\n</div>\n",
                providers: [
                    CountryCode,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        // tslint:disable-next-line:no-forward-ref
                        useExisting: forwardRef(() => NgxIntlTelInputComponent),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useValue: ɵ0,
                        multi: true,
                    },
                ],
                styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"]
            },] }
];
NgxIntlTelInputComponent.ctorParameters = () => [
    { type: CountryCode },
    { type: ChangeDetectorRef }
];
NgxIntlTelInputComponent.propDecorators = {
    value: [{ type: Input }],
    preferredCountries: [{ type: Input }],
    enablePlaceholder: [{ type: Input }],
    customPlaceholder: [{ type: Input }],
    numberFormat: [{ type: Input }],
    cssClass: [{ type: Input }],
    onlyCountries: [{ type: Input }],
    enableAutoCountrySelect: [{ type: Input }],
    searchCountryFlag: [{ type: Input }],
    searchCountryField: [{ type: Input }],
    searchCountryPlaceholder: [{ type: Input }],
    maxLength: [{ type: Input }],
    selectFirstCountry: [{ type: Input }],
    selectedCountryISO: [{ type: Input }],
    phoneValidation: [{ type: Input }],
    inputId: [{ type: Input }],
    separateDialCode: [{ type: Input }],
    defaultPhoneMask: [{ type: Input }],
    countryChange: [{ type: Output }],
    countryList: [{ type: ViewChild, args: ['countryList',] }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUU3QyxPQUFPLEVBQ04saUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO1dBaUJ4RCxvQkFBb0I7QUFLakMsTUFBTSxPQUFPLHdCQUF3QjtJQWlEcEMsWUFBb0IsZUFBNEIsRUFBVSxHQUFzQjtRQUE1RCxvQkFBZSxHQUFmLGVBQWUsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaER2RSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsdUJBQWtCLEdBQWtCLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFekIsaUJBQVksR0FBc0IsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1FBQ2xFLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDMUIsa0JBQWEsR0FBa0IsRUFBRSxDQUFD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cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbHBuIGZyb20gJ2dvb2dsZS1saWJwaG9uZW51bWJlcic7XG5cbmltcG9ydCB7XG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0Zm9yd2FyZFJlZixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgc2V0VGhlbWUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuaW1wb3J0IHsgQ291bnRyeUNvZGUgfSBmcm9tICcuL2RhdGEvY291bnRyeS1jb2RlJztcbmltcG9ydCB7IENvdW50cnlJU08gfSBmcm9tICcuL2VudW1zL2NvdW50cnktaXNvLmVudW0nO1xuaW1wb3J0IHsgU2VhcmNoQ291bnRyeUZpZWxkIH0gZnJvbSAnLi9lbnVtcy9zZWFyY2gtY291bnRyeS1maWVsZC5lbnVtJztcbmltcG9ydCB0eXBlIHsgQ2hhbmdlRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcy9jaGFuZ2UtZGF0YSc7XG5pbXBvcnQgdHlwZSB7IENvdW50cnkgfSBmcm9tICcuL21vZGVsL2NvdW50cnkubW9kZWwnO1xuaW1wb3J0IHsgcGhvbmVOdW1iZXJWYWxpZGF0b3IgfSBmcm9tICcuL25neC1pbnRsLXRlbC1pbnB1dC52YWxpZGF0b3InO1xuaW1wb3J0IHsgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICcuL2VudW1zL3Bob25lLW51bWJlci1mb3JtYXQuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuXHRzZWxlY3RvcjogJ25neC1pbnRsLXRlbC1pbnB1dCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9ib290c3RyYXAtZHJvcGRvd24uY3NzJywgJy4vbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5jc3MnXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q291bnRyeUNvZGUsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZm9yd2FyZC1yZWZcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neEludGxUZWxJbnB1dENvbXBvbmVudCksXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG5cdFx0XHR1c2VWYWx1ZTogcGhvbmVOdW1iZXJWYWxpZGF0b3IsXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHZhbHVlID0gJyc7XG5cdEBJbnB1dCgpIHByZWZlcnJlZENvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXHRASW5wdXQoKSBlbmFibGVQbGFjZWhvbGRlciA9IHRydWU7XG5cdEBJbnB1dCgpIGN1c3RvbVBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG51bWJlckZvcm1hdDogUGhvbmVOdW1iZXJGb3JtYXQgPSBQaG9uZU51bWJlckZvcm1hdC5JbnRlcm5hdGlvbmFsO1xuXHRASW5wdXQoKSBjc3NDbGFzcyA9ICdmb3JtLWNvbnRyb2wnO1xuXHRASW5wdXQoKSBvbmx5Q291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cdEBJbnB1dCgpIGVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0ID0gdHJ1ZTtcblx0QElucHV0KCkgc2VhcmNoQ291bnRyeUZsYWcgPSBmYWxzZTtcblx0QElucHV0KCkgc2VhcmNoQ291bnRyeUZpZWxkOiBTZWFyY2hDb3VudHJ5RmllbGRbXSA9IFtTZWFyY2hDb3VudHJ5RmllbGQuQWxsXTtcblx0QElucHV0KCkgc2VhcmNoQ291bnRyeVBsYWNlaG9sZGVyID0gJ1NlYXJjaCBDb3VudHJ5Jztcblx0QElucHV0KCkgbWF4TGVuZ3RoID0gJyc7XG5cdEBJbnB1dCgpIHNlbGVjdEZpcnN0Q291bnRyeSA9IHRydWU7XG5cdEBJbnB1dCgpIHNlbGVjdGVkQ291bnRyeUlTTzogQ291bnRyeUlTTztcblx0QElucHV0KCkgcGhvbmVWYWxpZGF0aW9uID0gdHJ1ZTtcblx0QElucHV0KCkgaW5wdXRJZCA9ICdwaG9uZSc7XG5cdEBJbnB1dCgpIHNlcGFyYXRlRGlhbENvZGUgPSBmYWxzZTtcblx0QElucHV0KCkgZGVmYXVsdFBob25lTWFzayA9ICcwMCAwMCAwMCAwMCc7XG5cdHNlcGFyYXRlRGlhbENvZGVDbGFzczogc3RyaW5nO1xuXG5cdEBPdXRwdXQoKSByZWFkb25seSBjb3VudHJ5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudHJ5PigpO1xuXG5cdHNlbGVjdGVkQ291bnRyeTogQ291bnRyeSA9IHtcblx0XHRhcmVhQ29kZXM6IHVuZGVmaW5lZCxcblx0XHRkaWFsQ29kZTogJycsXG5cdFx0aHRtbElkOiAnJyxcblx0XHRmbGFnQ2xhc3M6ICcnLFxuXHRcdGlzbzI6ICcnLFxuXHRcdG5hbWU6ICcnLFxuXHRcdHBsYWNlSG9sZGVyOiAnJyxcblx0XHRwcmlvcml0eTogMCxcblx0fTtcblxuXHRwaG9uZU51bWJlciA9ICcnO1xuXHRhbGxDb3VudHJpZXM6IEFycmF5PENvdW50cnk+ID0gW107XG5cdHByZWZlcnJlZENvdW50cmllc0luRHJvcERvd246IEFycmF5PENvdW50cnk+ID0gW107XG5cdC8vIEhhcyB0byBiZSAnYW55JyB0byBwcmV2ZW50IGEgbmVlZCB0byBpbnN0YWxsIEB0eXBlcy9nb29nbGUtbGlicGhvbmVudW1iZXIgYnkgdGhlIHBhY2thZ2UgdXNlci4uLlxuXHRwaG9uZVV0aWw6IGFueSA9IGxwbi5QaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcblx0ZGlzYWJsZWQgPSBmYWxzZTtcblx0ZXJyb3JzOiBBcnJheTxhbnk+ID0gWydQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQuJ107XG5cdGNvdW50cnlTZWFyY2hUZXh0ID0gJyc7XG5cdHB1YmxpYyBwaG9uZU1hc2sgPSB0aGlzLmRlZmF1bHRQaG9uZU1hc2s7XG5cblx0QFZpZXdDaGlsZCgnY291bnRyeUxpc3QnKSBjb3VudHJ5TGlzdDogRWxlbWVudFJlZjtcblxuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblx0cHJvcGFnYXRlQ2hhbmdlID0gKF86IENoYW5nZURhdGEpID0+IHt9O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY291bnRyeUNvZGVEYXRhOiBDb3VudHJ5Q29kZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0Ly8gSWYgdGhpcyBpcyBub3Qgc2V0LCBuZ3gtYm9vdHN0cmFwIHdpbGwgdHJ5IHRvIHVzZSB0aGUgYnMzIENTUyAod2hpY2ggaXMgbm90IHdoYXQgd2UndmUgZW1iZWRkZWQpIGFuZCB3aWxsXG5cdFx0Ly8gQWRkIHRoZSB3cm9uZyBjbGFzc2VzIGFuZCBzdWNoXG5cdFx0c2V0VGhlbWUoJ2JzNCcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJU08gPSBjaGFuZ2VzWydzZWxlY3RlZENvdW50cnlJU08nXTtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmFsbENvdW50cmllcyAmJlxuXHRcdFx0c2VsZWN0ZWRJU08gJiZcblx0XHRcdHNlbGVjdGVkSVNPLmN1cnJlbnRWYWx1ZSAhPT0gc2VsZWN0ZWRJU08ucHJldmlvdXNWYWx1ZVxuXHRcdCkge1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3RlZENvdW50cnkoKTtcblx0XHR9XG5cdFx0aWYgKGNoYW5nZXMucHJlZmVycmVkQ291bnRyaWVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVByZWZlcnJlZENvdW50cmllcygpO1xuXHRcdH1cblx0XHR0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XG5cdH1cblxuXHQvKlxuXHRcdFRoaXMgaXMgYSB3cmFwcGVyIG1ldGhvZCB0byBhdm9pZCBjYWxsaW5nIHRoaXMubmdPbkluaXQoKSBpbiB3cml0ZVZhbHVlKCkuXG5cdFx0UmVmOiBodHRwOi8vY29kZWx5emVyLmNvbS9ydWxlcy9uby1saWZlLWN5Y2xlLWNhbGwvXG5cdCovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5mZXRjaENvdW50cnlEYXRhKCk7XG5cdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy51cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub25seUNvdW50cmllcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYWxsQ291bnRyaWVzID0gdGhpcy5hbGxDb3VudHJpZXMuZmlsdGVyKChjKSA9PlxuXHRcdFx0XHR0aGlzLm9ubHlDb3VudHJpZXMuaW5jbHVkZXMoYy5pc28yKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuc2VsZWN0Rmlyc3RDb3VudHJ5KSB7XG5cdFx0XHRpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnNldFNlbGVjdGVkQ291bnRyeSh0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd25bMF0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTZWxlY3RlZENvdW50cnkodGhpcy5hbGxDb3VudHJpZXNbMF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpO1xuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblx0fVxuXG5cdHNldFNlbGVjdGVkQ291bnRyeShjb3VudHJ5OiBDb3VudHJ5KSB7XG5cdFx0dGhpcy5zZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5O1xuXHRcdHRoaXMuY291bnRyeUNoYW5nZS5lbWl0KGNvdW50cnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBjb3VudHJ5IGJhc2VkIG9uIGNvdW50cnkgbmFtZSwgaXNvMiwgZGlhbENvZGUgb3IgYWxsIG9mIHRoZW0uXG5cdCAqL1xuXHRwdWJsaWMgc2VhcmNoQ291bnRyeSgpIHtcblx0XHRpZiAoIXRoaXMuY291bnRyeVNlYXJjaFRleHQpIHtcblx0XHRcdHRoaXMuY291bnRyeUxpc3QubmF0aXZlRWxlbWVudFxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcignLml0aV9fY291bnRyeS1saXN0IGxpJylcblx0XHRcdFx0LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRcdFx0YmxvY2s6ICduZWFyZXN0Jyxcblx0XHRcdFx0XHRpbmxpbmU6ICduZWFyZXN0Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGNvdW50cnlTZWFyY2hUZXh0TG93ZXIgPSB0aGlzLmNvdW50cnlTZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT4ge1xuXHRcdFx0aWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLkFsbCkgPiAtMSkge1xuXHRcdFx0XHQvLyBTZWFyY2ggaW4gYWxsIGZpZWxkc1xuXHRcdFx0XHRpZiAoYy5pc28yLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xuXHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGMuZGlhbENvZGUuc3RhcnRzV2l0aCh0aGlzLmNvdW50cnlTZWFyY2hUZXh0KSkge1xuXHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBPciBzZWFyY2ggYnkgc3BlY2lmaWMgU2VhcmNoQ291bnRyeUZpZWxkKHMpXG5cdFx0XHRcdGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5Jc28yKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGMuaXNvMi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoY291bnRyeVNlYXJjaFRleHRMb3dlcikpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuTmFtZSkgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChjLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLkRpYWxDb2RlKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGMuZGlhbENvZGUuc3RhcnRzV2l0aCh0aGlzLmNvdW50cnlTZWFyY2hUZXh0KSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoY291bnRyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBlbCA9IHRoaXMuY291bnRyeUxpc3QubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHQnIycgKyBjb3VudHJ5WzBdLmh0bWxJZFxuXHRcdFx0KTtcblx0XHRcdGlmIChlbCkge1xuXHRcdFx0XHRlbC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0XHRcdGJsb2NrOiAnbmVhcmVzdCcsXG5cdFx0XHRcdFx0aW5saW5lOiAnbmVhcmVzdCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblx0fVxuXG5cdHB1YmxpYyBvblBob25lTnVtYmVyQ2hhbmdlKCk6IHZvaWQge1xuXHRcdGxldCBjb3VudHJ5Q29kZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgdXNlciBzZXRzIHRoZSB2YWx1ZSBwcm9ncmFtYXRpY2FsbHkgYmFzZWQgb24gYSBwZXJzaXN0ZWQgQ2hhbmdlRGF0YSBvYmouXG5cdFx0aWYgKHRoaXMucGhvbmVOdW1iZXIgJiYgdHlwZW9mIHRoaXMucGhvbmVOdW1iZXIgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBudW1iZXJPYmo6IENoYW5nZURhdGEgPSB0aGlzLnBob25lTnVtYmVyO1xuXHRcdFx0dGhpcy5waG9uZU51bWJlciA9IG51bWJlck9iai5udW1iZXI7XG5cdFx0XHRjb3VudHJ5Q29kZSA9IG51bWJlck9iai5jb3VudHJ5Q29kZTtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcblx0XHRjb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlIHx8IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XG5cdFx0Y29uc3QgbnVtYmVyID0gdGhpcy5nZXRQYXJzZWROdW1iZXIodGhpcy5waG9uZU51bWJlciwgY291bnRyeUNvZGUpO1xuXG5cdFx0Ly8gYXV0byBzZWxlY3QgY291bnRyeSBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uIChhbmQgYXJlYUNvZGUgaWYgbmVlZGVkKSAoZS5nIHNlbGVjdCBDYW5hZGEgaWYgbnVtYmVyIHN0YXJ0cyB3aXRoICsxIDQxNilcblx0XHRpZiAodGhpcy5lbmFibGVBdXRvQ291bnRyeVNlbGVjdCkge1xuXHRcdFx0Y291bnRyeUNvZGUgPVxuXHRcdFx0XHRudW1iZXIgJiYgbnVtYmVyLmdldENvdW50cnlDb2RlKClcblx0XHRcdFx0XHQ/IHRoaXMuZ2V0Q291bnRyeUlzb0NvZGUobnVtYmVyLmdldENvdW50cnlDb2RlKCksIG51bWJlcilcblx0XHRcdFx0XHQ6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XG5cdFx0XHRpZiAoY291bnRyeUNvZGUgJiYgY291bnRyeUNvZGUgIT09IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIpIHtcblx0XHRcdFx0Y29uc3QgbmV3Q291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzXG5cdFx0XHRcdFx0LnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5maW5kKChjKSA9PiBjLmlzbzIgPT09IGNvdW50cnlDb2RlKTtcblx0XHRcdFx0aWYgKG5ld0NvdW50cnkpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeSA9IG5ld0NvdW50cnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZSA/IGNvdW50cnlDb2RlIDogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcblxuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblxuXHRcdGlmICghdGhpcy52YWx1ZSkge1xuXHRcdFx0Ly8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1udWxsLWtleXdvcmRcblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBpbnRsTm8gPSBudW1iZXJcblx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTClcblx0XHRcdFx0OiAnJztcblxuXHRcdFx0Ly8gcGFyc2UgcGhvbmVOdW1iZXIgaWYgc2VwYXJhdGUgZGlhbCBjb2RlIGlzIG5lZWRlZFxuXHRcdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRsTm8pIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50bE5vKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2Uoe1xuXHRcdFx0XHRudW1iZXI6IHRoaXMudmFsdWUsXG5cdFx0XHRcdGludGVybmF0aW9uYWxOdW1iZXI6IGludGxObyxcblx0XHRcdFx0bmF0aW9uYWxOdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuXHRcdFx0XHRcdDogJycsXG5cdFx0XHRcdGUxNjROdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LkUxNjQpXG5cdFx0XHRcdFx0OiAnJyxcblx0XHRcdFx0Y291bnRyeUNvZGU6IGNvdW50cnlDb2RlLnRvVXBwZXJDYXNlKCksXG5cdFx0XHRcdGRpYWxDb2RlOiAnKycgKyB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbkNvdW50cnlTZWxlY3QoY291bnRyeTogQ291bnRyeSwgZWwpOiB2b2lkIHtcblx0XHRjb25zdCBjb3VudHJ5UGxhY2Vob2xkZXIgPSBjb3VudHJ5LnBsYWNlSG9sZGVyLnJlcGxhY2UoL1swLTldL2csICcwJyk7XG5cdFx0aWYoY291bnRyeVBsYWNlaG9sZGVyKSB7XG5cdFx0XHR0aGlzLnBob25lTWFzayA9IGNvdW50cnlQbGFjZWhvbGRlcjtcblx0XHRcdHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0XHR0aGlzLnNldFNlbGVjdGVkQ291bnRyeShjb3VudHJ5KTtcblxuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblxuXHRcdGlmICh0aGlzLnBob25lTnVtYmVyICYmIHRoaXMucGhvbmVOdW1iZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMucGhvbmVOdW1iZXI7XG5cdFx0XHRjb25zdCBudW1iZXIgPSB0aGlzLmdldFBhcnNlZE51bWJlcihcblx0XHRcdFx0dGhpcy5waG9uZU51bWJlcixcblx0XHRcdFx0dGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMlxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGludGxObyA9IG51bWJlclxuXHRcdFx0XHQ/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxuXHRcdFx0XHQ6ICcnO1xuXHRcdFx0Ly8gcGFyc2UgcGhvbmVOdW1iZXIgaWYgc2VwYXJhdGUgZGlhbCBjb2RlIGlzIG5lZWRlZFxuXHRcdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRsTm8pIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50bE5vKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2Uoe1xuXHRcdFx0XHRudW1iZXI6IHRoaXMudmFsdWUsXG5cdFx0XHRcdGludGVybmF0aW9uYWxOdW1iZXI6IGludGxObyxcblx0XHRcdFx0bmF0aW9uYWxOdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuXHRcdFx0XHRcdDogJycsXG5cdFx0XHRcdGUxNjROdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LkUxNjQpXG5cdFx0XHRcdFx0OiAnJyxcblx0XHRcdFx0Y291bnRyeUNvZGU6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKSxcblx0XHRcdFx0ZGlhbENvZGU6ICcrJyArIHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFJlYXNvbjogYXZvaWQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MzU4MTMzLzE2MTc1OTBcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcblx0XHR9XG5cblx0XHRlbC5mb2N1cygpO1xuXHR9XG5cblx0cHVibGljIG9uSW5wdXRLZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXHRcdGNvbnN0IGFsbG93ZWRDaGFycyA9IC9bMC05XFwrXFwtXFwoXFwpXFwgXS87XG5cdFx0Y29uc3QgYWxsb3dlZEN0cmxDaGFycyA9IC9bYXhjdl0vOyAvLyBBbGxvd3MgY29weS1wYXN0aW5nXG5cdFx0Y29uc3QgYWxsb3dlZE90aGVyS2V5cyA9IFtcblx0XHRcdCdBcnJvd0xlZnQnLFxuXHRcdFx0J0Fycm93VXAnLFxuXHRcdFx0J0Fycm93UmlnaHQnLFxuXHRcdFx0J0Fycm93RG93bicsXG5cdFx0XHQnSG9tZScsXG5cdFx0XHQnRW5kJyxcblx0XHRcdCdJbnNlcnQnLFxuXHRcdFx0J0RlbGV0ZScsXG5cdFx0XHQnQmFja3NwYWNlJyxcblx0XHRdO1xuXG5cdFx0aWYgKFxuXHRcdFx0IWFsbG93ZWRDaGFycy50ZXN0KGV2ZW50LmtleSkgJiZcblx0XHRcdCEoZXZlbnQuY3RybEtleSAmJiBhbGxvd2VkQ3RybENoYXJzLnRlc3QoZXZlbnQua2V5KSkgJiZcblx0XHRcdCFhbGxvd2VkT3RoZXJLZXlzLmluY2x1ZGVzKGV2ZW50LmtleSlcblx0XHQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cdH1cblxuXHR3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG5cdFx0aWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmluaXQoKTtcblx0XHR9XG5cdFx0dGhpcy5waG9uZU51bWJlciA9IG9iajtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMub25QaG9uZU51bWJlckNoYW5nZSgpO1xuXHRcdH0sIDEpO1xuXHR9XG5cblx0cmVzb2x2ZVBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG5cdFx0bGV0IHBsYWNlaG9sZGVyID0gJyc7XG5cdFx0aWYgKHRoaXMuY3VzdG9tUGxhY2Vob2xkZXIpIHtcblx0XHRcdHBsYWNlaG9sZGVyID0gdGhpcy5jdXN0b21QbGFjZWhvbGRlcjtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5LnBsYWNlSG9sZGVyKSB7XG5cdFx0XHRwbGFjZWhvbGRlciA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LnBsYWNlSG9sZGVyO1xuXHRcdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSkge1xuXHRcdFx0XHRwbGFjZWhvbGRlciA9IHRoaXMucmVtb3ZlRGlhbENvZGUocGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcGxhY2Vob2xkZXI7XG5cdH1cblxuXHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHQvKipcblx0ICogUmV0dXJucyBwYXJzZSBQaG9uZU51bWJlciBvYmplY3QuXG5cdCAqIEBwYXJhbSBwaG9uZU51bWJlciBzdHJpbmdcblx0ICogQHBhcmFtIGNvdW50cnlDb2RlIHN0cmluZ1xuXHQgKi9cblx0cHJpdmF0ZSBnZXRQYXJzZWROdW1iZXIoXG5cdFx0cGhvbmVOdW1iZXI6IHN0cmluZyxcblx0XHRjb3VudHJ5Q29kZTogc3RyaW5nXG5cdCk6IGxwbi5QaG9uZU51bWJlciB7XG5cdFx0bGV0IG51bWJlcjogbHBuLlBob25lTnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRudW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZShwaG9uZU51bWJlciwgY291bnRyeUNvZGUudG9VcHBlckNhc2UoKSk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHRyZXR1cm4gbnVtYmVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkanVzdHMgaW5wdXQgYWxpZ25tZW50IGJhc2VkIG9uIHRoZSBkaWFsIGNvZGUgcHJlc2VudGF0aW9uIHN0eWxlLlxuXHQgKi9cblx0cHJpdmF0ZSBjaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpIHtcblx0XHRpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIHRoaXMuc2VsZWN0ZWRDb3VudHJ5KSB7XG5cdFx0XHRjb25zdCBjbnRyeUNkID0gdGhpcy5zZWxlY3RlZENvdW50cnkuZGlhbENvZGU7XG5cdFx0XHR0aGlzLnNlcGFyYXRlRGlhbENvZGVDbGFzcyA9XG5cdFx0XHRcdCdzZXBhcmF0ZS1kaWFsLWNvZGUgaXRpLXNkYy0nICsgKGNudHJ5Q2QubGVuZ3RoICsgMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VwYXJhdGVEaWFsQ29kZUNsYXNzID0gJyc7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFucyBkaWFsY29kZSBmcm9tIHBob25lIG51bWJlciBzdHJpbmcuXG5cdCAqIEBwYXJhbSBwaG9uZU51bWJlciBzdHJpbmdcblx0ICovXG5cdHByaXZhdGUgcmVtb3ZlRGlhbENvZGUocGhvbmVOdW1iZXI6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Y29uc3QgbnVtYmVyID0gdGhpcy5nZXRQYXJzZWROdW1iZXIocGhvbmVOdW1iZXIsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIpO1xuXHRcdHBob25lTnVtYmVyID0gdGhpcy5waG9uZVV0aWwuZm9ybWF0KFxuXHRcdFx0bnVtYmVyLFxuXHRcdFx0bHBuLlBob25lTnVtYmVyRm9ybWF0W3RoaXMubnVtYmVyRm9ybWF0XVxuXHRcdCk7XG5cdFx0aWYgKHBob25lTnVtYmVyLnN0YXJ0c1dpdGgoJysnKSAmJiB0aGlzLnNlcGFyYXRlRGlhbENvZGUpIHtcblx0XHRcdHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIuc3Vic3RyKHBob25lTnVtYmVyLmluZGV4T2YoJyAnKSArIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGhvbmVOdW1iZXI7XG5cdH1cblxuXHQvKipcblx0ICogU2lmdHMgdGhyb3VnaCBhbGwgY291bnRyaWVzIGFuZCByZXR1cm5zIGlzbyBjb2RlIG9mIHRoZSBwcmltYXJ5IGNvdW50cnlcblx0ICogYmFzZWQgb24gdGhlIG51bWJlciBwcm92aWRlZC5cblx0ICogQHBhcmFtIGNvdW50cnlDb2RlIGNvdW50cnkgY29kZSBpbiBudW1iZXIgZm9ybWF0XG5cdCAqIEBwYXJhbSBudW1iZXIgUGhvbmVOdW1iZXIgb2JqZWN0XG5cdCAqL1xuXHRwcml2YXRlIGdldENvdW50cnlJc29Db2RlKFxuXHRcdGNvdW50cnlDb2RlOiBudW1iZXIsXG5cdFx0bnVtYmVyOiBscG4uUGhvbmVOdW1iZXJcblx0KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHQvLyBXaWxsIHVzZSB0aGlzIHRvIG1hdGNoIGFyZWEgY29kZSBmcm9tIHRoZSBmaXJzdCBudW1iZXJzXG5cdFx0Y29uc3QgcmF3TnVtYmVyID0gbnVtYmVyWyd2YWx1ZXNfJ11bJzInXS50b1N0cmluZygpO1xuXHRcdC8vIExpc3Qgb2YgYWxsIGNvdW50cmllcyB3aXRoIGNvdW50cnlDb2RlIChjYW4gYmUgbW9yZSB0aGFuIG9uZS4gZS54LiBVUywgQ0EsIERPLCBQUiBhbGwgaGF2ZSArMSBjb3VudHJ5Q29kZSlcblx0XHRjb25zdCBjb3VudHJpZXMgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoXG5cdFx0XHQoYykgPT4gYy5kaWFsQ29kZSA9PT0gY291bnRyeUNvZGUudG9TdHJpbmcoKVxuXHRcdCk7XG5cdFx0Ly8gTWFpbiBjb3VudHJ5IGlzIHRoZSBjb3VudHJ5LCB3aGljaCBoYXMgbm8gYXJlYUNvZGVzIHNwZWNpZmllZCBpbiBjb3VudHJ5LWNvZGUudHMgZmlsZS5cblx0XHRjb25zdCBtYWluQ291bnRyeSA9IGNvdW50cmllcy5maW5kKChjKSA9PiBjLmFyZWFDb2RlcyA9PT0gdW5kZWZpbmVkKTtcblx0XHQvLyBTZWNvbmRhcnkgY291bnRyaWVzIGFyZSBhbGwgY291bnRyaWVzLCB3aGljaCBoYXZlIGFyZWFDb2RlcyBzcGVjaWZpZWQgaW4gY291bnRyeS1jb2RlLnRzIGZpbGUuXG5cdFx0Y29uc3Qgc2Vjb25kYXJ5Q291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlcihcblx0XHRcdChjKSA9PiBjLmFyZWFDb2RlcyAhPT0gdW5kZWZpbmVkXG5cdFx0KTtcblx0XHRsZXQgbWF0Y2hlZENvdW50cnkgPSBtYWluQ291bnRyeSA/IG1haW5Db3VudHJ5LmlzbzIgOiB1bmRlZmluZWQ7XG5cblx0XHQvKlxuXHRcdFx0SXRlcmF0ZSBvdmVyIGVhY2ggc2Vjb25kYXJ5IGNvdW50cnkgYW5kIGNoZWNrIGlmIG5hdGlvbmFsTnVtYmVyIHN0YXJ0cyB3aXRoIGFueSBvZiBhcmVhQ29kZXMgYXZhaWxhYmxlLlxuXHRcdFx0SWYgbm8gbWF0Y2hlcyBmb3VuZCwgZmFsbGJhY2sgdG8gdGhlIG1haW4gY291bnRyeS5cblx0XHQqL1xuXHRcdHNlY29uZGFyeUNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XG5cdFx0XHRjb3VudHJ5LmFyZWFDb2Rlcy5mb3JFYWNoKChhcmVhQ29kZSkgPT4ge1xuXHRcdFx0XHRpZiAocmF3TnVtYmVyLnN0YXJ0c1dpdGgoYXJlYUNvZGUpKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZENvdW50cnkgPSBjb3VudHJ5LmlzbzI7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIG1hdGNoZWRDb3VudHJ5O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgZm9ybWF0dGVkIGV4YW1wbGUgcGhvbmUgbnVtYmVyIGZyb20gcGhvbmVVdGlsLlxuXHQgKiBAcGFyYW0gY291bnRyeUNvZGUgc3RyaW5nXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2V0UGhvbmVOdW1iZXJQbGFjZUhvbGRlcihjb3VudHJ5Q29kZTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMucGhvbmVVdGlsLmZvcm1hdChcblx0XHRcdFx0dGhpcy5waG9uZVV0aWwuZ2V0RXhhbXBsZU51bWJlcihjb3VudHJ5Q29kZSksXG5cdFx0XHRcdGxwbi5QaG9uZU51bWJlckZvcm1hdFt0aGlzLm51bWJlckZvcm1hdF1cblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGU7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFyaW5nIHRoZSBsaXN0IHRvIGF2b2lkIGR1cGxpY2F0ZXMgKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjYXQxMjM0NS9uZ3gtaW50bC10ZWwtaW5wdXQvaXNzdWVzLzI0OClcblx0ICovXG5cdHByb3RlY3RlZCBmZXRjaENvdW50cnlEYXRhKCk6IHZvaWQge1xuXHRcdHRoaXMuYWxsQ291bnRyaWVzID0gW107XG5cblx0XHR0aGlzLmNvdW50cnlDb2RlRGF0YS5hbGxDb3VudHJpZXMuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0Y29uc3QgY291bnRyeTogQ291bnRyeSA9IHtcblx0XHRcdFx0bmFtZTogY1swXS50b1N0cmluZygpLFxuXHRcdFx0XHRpc28yOiBjWzFdLnRvU3RyaW5nKCksXG5cdFx0XHRcdGRpYWxDb2RlOiBjWzJdLnRvU3RyaW5nKCksXG5cdFx0XHRcdHByaW9yaXR5OiArY1szXSB8fCAwLFxuXHRcdFx0XHRhcmVhQ29kZXM6IChjWzRdIGFzIHN0cmluZ1tdKSB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGh0bWxJZDogYGl0aS0wX19pdGVtLSR7Y1sxXS50b1N0cmluZygpfWAsXG5cdFx0XHRcdGZsYWdDbGFzczogYGl0aV9fJHtjWzFdLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKX1gLFxuXHRcdFx0XHRwbGFjZUhvbGRlcjogJycsXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAodGhpcy5lbmFibGVQbGFjZWhvbGRlcikge1xuXHRcdFx0XHRjb3VudHJ5LnBsYWNlSG9sZGVyID0gdGhpcy5nZXRQaG9uZU51bWJlclBsYWNlSG9sZGVyKFxuXHRcdFx0XHRcdGNvdW50cnkuaXNvMi50b1VwcGVyQ2FzZSgpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuYWxsQ291bnRyaWVzLnB1c2goY291bnRyeSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUG9wdWxhdGVzIHByZWZlcnJlZENvdW50cmllc0luRHJvcERvd24gd2l0aCBwcmVmZmVycmVkIGNvdW50cmllcy5cblx0ICovXG5cdHByaXZhdGUgdXBkYXRlUHJlZmVycmVkQ291bnRyaWVzKCkge1xuXHRcdGlmICh0aGlzLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93biA9IFtdO1xuXHRcdFx0dGhpcy5wcmVmZXJyZWRDb3VudHJpZXMuZm9yRWFjaCgoaXNvMikgPT4ge1xuXHRcdFx0XHRjb25zdCBwcmVmZXJyZWRDb3VudHJ5ID0gdGhpcy5hbGxDb3VudHJpZXMuZmlsdGVyKChjKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGMuaXNvMiA9PT0gaXNvMjtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLnB1c2gocHJlZmVycmVkQ291bnRyeVswXSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyBzZWxlY3RlZENvdW50cnkuXG5cdCAqL1xuXHRwcml2YXRlIHVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZENvdW50cnlJU08pIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5hbGxDb3VudHJpZXMuZmluZCgoYykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYy5pc28yLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuc2VsZWN0ZWRDb3VudHJ5SVNPLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9KTtcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkQ291bnRyeSkge1xuXHRcdFx0XHRpZiAodGhpcy5waG9uZU51bWJlcikge1xuXHRcdFx0XHRcdHRoaXMub25QaG9uZU51bWJlckNoYW5nZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFJlYXNvbjogYXZvaWQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MzU4MTMzLzE2MTc1OTBcblx0XHRcdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW51bGwta2V5d29yZFxuXHRcdFx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=