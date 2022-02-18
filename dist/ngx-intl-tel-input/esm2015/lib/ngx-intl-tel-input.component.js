import * as lpn from 'google-libphonenumber';
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import { CountryCode } from './data/country-code';
import { SearchCountryField } from './enums/search-country-field.enum';
import { phoneNumberValidator } from './ngx-intl-tel-input.validator';
import { PhoneNumberFormat } from './enums/phone-number-format.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './data/country-code';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ngx-bootstrap/dropdown';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from './ngx-mask/mask.directive';
import * as ɵngcc6 from './directives/native-element-injector.directive';

const _c0 = ["countryList"];
function NgxIntlTelInputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("+", ctx_r0.selectedCountry.dialCode, "");
} }
function NgxIntlTelInputComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelementStart(1, "input", 18);
    ɵngcc0.ɵɵlistener("ngModelChange", function NgxIntlTelInputComponent_div_6_div_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.countrySearchText = $event; })("keyup", function NgxIntlTelInputComponent_div_6_div_1_Template_input_keyup_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.searchCountry(); })("click", function NgxIntlTelInputComponent_div_6_div_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r3.countrySearchText)("placeholder", ctx_r3.searchCountryPlaceholder);
} }
function NgxIntlTelInputComponent_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 19);
    ɵngcc0.ɵɵlistener("click", function NgxIntlTelInputComponent_div_6_li_4_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r14); const country_r12 = restoredCtx.$implicit; const ctx_r13 = ɵngcc0.ɵɵnextContext(2); const _r2 = ɵngcc0.ɵɵreference(8); return ctx_r13.onCountrySelect(country_r12, _r2); });
    ɵngcc0.ɵɵelementStart(1, "div", 20);
    ɵngcc0.ɵɵelement(2, "div", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 21);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "span", 22);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r12 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("id", country_r12.htmlId + "-preferred");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", country_r12.flagClass);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(country_r12.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("+", country_r12.dialCode, "");
} }
function NgxIntlTelInputComponent_div_6_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 23);
} }
function NgxIntlTelInputComponent_div_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 24);
    ɵngcc0.ɵɵlistener("click", function NgxIntlTelInputComponent_div_6_li_6_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r17); const country_r15 = restoredCtx.$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(2); const _r2 = ɵngcc0.ɵɵreference(8); return ctx_r16.onCountrySelect(country_r15, _r2); });
    ɵngcc0.ɵɵelementStart(1, "div", 20);
    ɵngcc0.ɵɵelement(2, "div", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 21);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "span", 22);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r15 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("id", country_r15.htmlId);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", country_r15.flagClass);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(country_r15.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("+", country_r15.dialCode, "");
} }
function NgxIntlTelInputComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, NgxIntlTelInputComponent_div_6_div_1_Template, 2, 2, "div", 11);
    ɵngcc0.ɵɵelementStart(2, "ul", 12, 13);
    ɵngcc0.ɵɵtemplate(4, NgxIntlTelInputComponent_div_6_li_4_Template, 7, 4, "li", 14);
    ɵngcc0.ɵɵtemplate(5, NgxIntlTelInputComponent_div_6_li_5_Template, 1, 0, "li", 15);
    ɵngcc0.ɵɵtemplate(6, NgxIntlTelInputComponent_div_6_li_6_Template, 7, 4, "li", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.searchCountryFlag && ctx_r1.searchCountryField);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.preferredCountriesInDropDown);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.preferredCountriesInDropDown == null ? null : ctx_r1.preferredCountriesInDropDown.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.allCountries);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
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
NgxIntlTelInputComponent.ɵfac = function NgxIntlTelInputComponent_Factory(t) { return new (t || NgxIntlTelInputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CountryCode), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgxIntlTelInputComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxIntlTelInputComponent, selectors: [["ngx-intl-tel-input"]], viewQuery: function NgxIntlTelInputComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.countryList = _t.first);
    } }, inputs: { value: "value", preferredCountries: "preferredCountries", enablePlaceholder: "enablePlaceholder", numberFormat: "numberFormat", cssClass: "cssClass", onlyCountries: "onlyCountries", enableAutoCountrySelect: "enableAutoCountrySelect", searchCountryFlag: "searchCountryFlag", searchCountryField: "searchCountryField", searchCountryPlaceholder: "searchCountryPlaceholder", maxLength: "maxLength", selectFirstCountry: "selectFirstCountry", phoneValidation: "phoneValidation", inputId: "inputId", separateDialCode: "separateDialCode", defaultPhoneMask: "defaultPhoneMask", customPlaceholder: "customPlaceholder", selectedCountryISO: "selectedCountryISO" }, outputs: { countryChange: "countryChange" }, features: [ɵngcc0.ɵɵProvidersFeature([
            CountryCode,
            {
                provide: NG_VALUE_ACCESSOR,
                // tslint:disable-next-line:no-forward-ref
                useExisting: forwardRef(() => NgxIntlTelInputComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useValue: ɵ0,
                multi: true
            },
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 15, consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "mask", "id", "ngClass", "ngModel", "disabled", "placeholder", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]], template: function NgxIntlTelInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, NgxIntlTelInputComponent_div_4_Template, 2, 1, "div", 4);
        ɵngcc0.ɵɵelement(5, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NgxIntlTelInputComponent_div_6_Template, 7, 4, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "input", 7, 8);
        ɵngcc0.ɵɵlistener("blur", function NgxIntlTelInputComponent_Template_input_blur_7_listener() { return ctx.onTouched(); })("keypress", function NgxIntlTelInputComponent_Template_input_keypress_7_listener($event) { return ctx.onInputKeyPress($event); })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener($event) { return ctx.phoneNumber = $event; })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener() { return ctx.onPhoneNumberChange(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.separateDialCodeClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(13, _c1, ctx.disabled))("isDisabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.selectedCountry == null ? null : ctx.selectedCountry.flagClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.separateDialCode);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("mask", ctx.phoneMask)("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder());
        ɵngcc0.ɵɵattribute("maxLength", ctx.maxLength)("validation", ctx.phoneValidation);
    } }, directives: [ɵngcc2.NgClass, ɵngcc3.BsDropdownDirective, ɵngcc3.BsDropdownToggleDirective, ɵngcc2.NgIf, ɵngcc3.BsDropdownMenuDirective, ɵngcc4.DefaultValueAccessor, ɵngcc5.MaskDirective, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc6.NativeElementInjectorDirective, ɵngcc2.NgForOf], styles: [".dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%]{position:relative}.dropdown-toggle[_ngcontent-%COMP%]{white-space:nowrap}.dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-right[_ngcontent-%COMP%]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-sm-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-md-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-lg-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-xl-right[_ngcontent-%COMP%]{right:0;left:auto}}.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{vertical-align:0}.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{vertical-align:0}.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%]{right:auto;bottom:auto}.dropdown-divider[_ngcontent-%COMP%]{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item[_ngcontent-%COMP%]{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.dropdown-header[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text[_ngcontent-%COMP%]{display:block;padding:.25rem 1.5rem;color:#212529}", "li.iti__country[_ngcontent-%COMP%]:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle[_ngcontent-%COMP%]:after{content:none}.iti__flag-container.disabled[_ngcontent-%COMP%]{cursor:default!important}.iti.iti--allow-dropdown[_ngcontent-%COMP%]   .flag-container.disabled[_ngcontent-%COMP%]:hover   .iti__selected-flag[_ngcontent-%COMP%]{background:none}.country-dropdown[_ngcontent-%COMP%]{border:1px solid #ccc;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container[_ngcontent-%COMP%]{position:relative}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list[_ngcontent-%COMP%]{position:relative;border:none}.iti[_ngcontent-%COMP%]   input#country-search-box[_ngcontent-%COMP%]{padding-left:6px}.iti[_ngcontent-%COMP%]   .selected-dial-code[_ngcontent-%COMP%]{margin-left:6px}.iti.separate-dial-code[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%]{width:93px}.iti.separate-dial-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:98px}"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxIntlTelInputComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ngx-intl-tel-input',
                template: "<div class=\"iti iti--allow-dropdown\"\n\t[ngClass]=\"separateDialCodeClass\">\n\t<div class=\"iti__flag-container\"\n\t\tdropdown\n\t\t[ngClass]=\"{'disabled': disabled}\"\n\t\t[isDisabled]=\"disabled\">\n\t\t<div class=\"iti__selected-flag dropdown-toggle\"\n\t\t\tdropdownToggle>\n\t\t\t<div class=\"iti__flag\"\n\t\t\t\t[ngClass]=\"selectedCountry?.flagClass\"></div>\n\t\t\t<div *ngIf=\"separateDialCode\"\n\t\t\t\tclass=\"selected-dial-code\">+{{selectedCountry.dialCode}}</div>\n\t\t\t<div class=\"iti__arrow\"></div>\n\t\t</div>\n\t\t<div *dropdownMenu\n\t\t\tclass=\"dropdown-menu country-dropdown\">\n\t\t\t<div class=\"search-container\"\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\">\n\t\t\t\t<input id=\"country-search-box\"\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\n\t\t\t\t\t(keyup)=\"searchCountry()\"\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\n\t\t\t\t\tautofocus>\n\t\t\t</div>\n\t\t\t<ul class=\"iti__country-list\"\n\t\t\t\t#countryList>\n\t\t\t\t<li class=\"iti__country iti__preferred\"\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId+'-preferred'\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"iti__divider\"\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"></li>\n\t\t\t\t<li class=\"iti__country iti__standard\"\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<input type=\"tel\"\n\t\t\t\t [mask]=\"phoneMask\"\n\t\t[id]=\"inputId\"\n\t\tautocomplete=\"off\"\n\t\t[ngClass]=\"cssClass\"\n\t\t(blur)=\"onTouched()\"\n\t\t(keypress)=\"onInputKeyPress($event)\"\n\t\t[(ngModel)]=\"phoneNumber\"\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\n\t\t[disabled]=\"disabled\"\n\t\t[placeholder]=\"resolvePlaceholder()\"\n\t\t[attr.maxLength]=\"maxLength\"\n\t\t[attr.validation]=\"phoneValidation\"\n\t\t#focusable>\n</div>\n",
                providers: [
                    CountryCode,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        // tslint:disable-next-line:no-forward-ref
                        useExisting: forwardRef(() => NgxIntlTelInputComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useValue: ɵ0,
                        multi: true
                    },
                ],
                styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"]
            }]
    }], function () { return [{ type: ɵngcc1.CountryCode }, { type: ɵngcc0.ChangeDetectorRef }]; }, { value: [{
            type: Input
        }], preferredCountries: [{
            type: Input
        }], enablePlaceholder: [{
            type: Input
        }], numberFormat: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], onlyCountries: [{
            type: Input
        }], enableAutoCountrySelect: [{
            type: Input
        }], searchCountryFlag: [{
            type: Input
        }], searchCountryField: [{
            type: Input
        }], searchCountryPlaceholder: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], selectFirstCountry: [{
            type: Input
        }], phoneValidation: [{
            type: Input
        }], inputId: [{
            type: Input
        }], separateDialCode: [{
            type: Input
        }], defaultPhoneMask: [{
            type: Input
        }], countryChange: [{
            type: Output
        }], customPlaceholder: [{
            type: Input
        }], selectedCountryISO: [{
            type: Input
        }], countryList: [{
            type: ViewChild,
            args: ['countryList']
        }] }); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBRTdDLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDckUsV0FnQmEsb0JBQW9CO0FBS2pDLE1BQU0sT0FBTyx3QkFBd0I7QUFBRyxJQWlEdkMsWUFBb0IsZUFBNEIsRUFBVSxHQUFzQjtBQUNqRixRQURxQixvQkFBZSxHQUFmLGVBQWUsQ0FBYTtBQUFDLFFBQVMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQWhEeEUsVUFBSyxHQUFHLEVBQUUsQ0FBQztBQUNyQixRQUFVLHVCQUFrQixHQUFrQixFQUFFLENBQUM7QUFD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QzFCLDBDQUEwQyx5QkFDMUM7UUFBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztPQUF3QixDQUFDLDBCQUN2RCxLQUFLLEVBQUU7Q0FBSSx1QkFDWDtFQUNELDBCQUNDLE9BQU8sRUFBRTtXQUFhLDBCQUN0QixRQUFRLElBQXNCLDBCQUM5QixLQUFLLEVBQUUsSUFBSTtzQkFDWDtFQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b21HQUNELGloSEFDSTtBQUFDO0FBQWtELFlBNUIvQyxXQUFXO0FBQUksWUFoQnZCLGlCQUFpQjtBQUNqQjtBQUFHO0FBR0ksb0JBeUNOLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyxzQ0FDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyx1Q0FDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFLLDRCQUdWLE1BQU07QUFBSywwQkF1QlgsU0FBUyxTQUFDLGFBQWE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBscG4gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcblxuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRmb3J3YXJkUmVmLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBzZXRUaGVtZSB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb3VudHJ5Q29kZSB9IGZyb20gJy4vZGF0YS9jb3VudHJ5LWNvZGUnO1xuaW1wb3J0IHsgQ291bnRyeUlTTyB9IGZyb20gJy4vZW51bXMvY291bnRyeS1pc28uZW51bSc7XG5pbXBvcnQgeyBTZWFyY2hDb3VudHJ5RmllbGQgfSBmcm9tICcuL2VudW1zL3NlYXJjaC1jb3VudHJ5LWZpZWxkLmVudW0nO1xuaW1wb3J0IHR5cGUgeyBDaGFuZ2VEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2NoYW5nZS1kYXRhJztcbmltcG9ydCB0eXBlIHsgQ291bnRyeSB9IGZyb20gJy4vbW9kZWwvY291bnRyeS5tb2RlbCc7XG5pbXBvcnQgeyBwaG9uZU51bWJlclZhbGlkYXRvciB9IGZyb20gJy4vbmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvcic7XG5pbXBvcnQgeyBQaG9uZU51bWJlckZvcm1hdCB9IGZyb20gJy4vZW51bXMvcGhvbmUtbnVtYmVyLWZvcm1hdC5lbnVtJztcblxuQENvbXBvbmVudCh7XG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG5cdHNlbGVjdG9yOiAnbmd4LWludGwtdGVsLWlucHV0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2Jvb3RzdHJhcC1kcm9wZG93bi5jc3MnLCAnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50LmNzcyddLFxuXHRwcm92aWRlcnM6IFtcblx0XHRDb3VudHJ5Q29kZSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1mb3J3YXJkLXJlZlxuXHRcdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4SW50bFRlbElucHV0Q29tcG9uZW50KSxcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMSURBVE9SUyxcblx0XHRcdHVzZVZhbHVlOiBwaG9uZU51bWJlclZhbGlkYXRvcixcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEludGxUZWxJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgdmFsdWUgPSAnJztcblx0QElucHV0KCkgcHJlZmVycmVkQ291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cdEBJbnB1dCgpIGVuYWJsZVBsYWNlaG9sZGVyID0gdHJ1ZTtcblx0QElucHV0KCkgY3VzdG9tUGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgbnVtYmVyRm9ybWF0OiBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0LkludGVybmF0aW9uYWw7XG5cdEBJbnB1dCgpIGNzc0NsYXNzID0gJ2Zvcm0tY29udHJvbCc7XG5cdEBJbnB1dCgpIG9ubHlDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblx0QElucHV0KCkgZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QgPSB0cnVlO1xuXHRASW5wdXQoKSBzZWFyY2hDb3VudHJ5RmxhZyA9IGZhbHNlO1xuXHRASW5wdXQoKSBzZWFyY2hDb3VudHJ5RmllbGQ6IFNlYXJjaENvdW50cnlGaWVsZFtdID0gW1NlYXJjaENvdW50cnlGaWVsZC5BbGxdO1xuXHRASW5wdXQoKSBzZWFyY2hDb3VudHJ5UGxhY2Vob2xkZXIgPSAnU2VhcmNoIENvdW50cnknO1xuXHRASW5wdXQoKSBtYXhMZW5ndGggPSAnJztcblx0QElucHV0KCkgc2VsZWN0Rmlyc3RDb3VudHJ5ID0gdHJ1ZTtcblx0QElucHV0KCkgc2VsZWN0ZWRDb3VudHJ5SVNPOiBDb3VudHJ5SVNPO1xuXHRASW5wdXQoKSBwaG9uZVZhbGlkYXRpb24gPSB0cnVlO1xuXHRASW5wdXQoKSBpbnB1dElkID0gJ3Bob25lJztcblx0QElucHV0KCkgc2VwYXJhdGVEaWFsQ29kZSA9IGZhbHNlO1xuXHRASW5wdXQoKSBkZWZhdWx0UGhvbmVNYXNrID0gJzAwIDAwIDAwIDAwJztcblx0c2VwYXJhdGVEaWFsQ29kZUNsYXNzOiBzdHJpbmc7XG5cblx0QE91dHB1dCgpIHJlYWRvbmx5IGNvdW50cnlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvdW50cnk+KCk7XG5cblx0c2VsZWN0ZWRDb3VudHJ5OiBDb3VudHJ5ID0ge1xuXHRcdGFyZWFDb2RlczogdW5kZWZpbmVkLFxuXHRcdGRpYWxDb2RlOiAnJyxcblx0XHRodG1sSWQ6ICcnLFxuXHRcdGZsYWdDbGFzczogJycsXG5cdFx0aXNvMjogJycsXG5cdFx0bmFtZTogJycsXG5cdFx0cGxhY2VIb2xkZXI6ICcnLFxuXHRcdHByaW9yaXR5OiAwLFxuXHR9O1xuXG5cdHBob25lTnVtYmVyID0gJyc7XG5cdGFsbENvdW50cmllczogQXJyYXk8Q291bnRyeT4gPSBbXTtcblx0cHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93bjogQXJyYXk8Q291bnRyeT4gPSBbXTtcblx0Ly8gSGFzIHRvIGJlICdhbnknIHRvIHByZXZlbnQgYSBuZWVkIHRvIGluc3RhbGwgQHR5cGVzL2dvb2dsZS1saWJwaG9uZW51bWJlciBieSB0aGUgcGFja2FnZSB1c2VyLi4uXG5cdHBob25lVXRpbDogYW55ID0gbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xuXHRkaXNhYmxlZCA9IGZhbHNlO1xuXHRlcnJvcnM6IEFycmF5PGFueT4gPSBbJ1Bob25lIG51bWJlciBpcyByZXF1aXJlZC4nXTtcblx0Y291bnRyeVNlYXJjaFRleHQgPSAnJztcblx0cHVibGljIHBob25lTWFzayA9IHRoaXMuZGVmYXVsdFBob25lTWFzaztcblxuXHRAVmlld0NoaWxkKCdjb3VudHJ5TGlzdCcpIGNvdW50cnlMaXN0OiBFbGVtZW50UmVmO1xuXG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogQ2hhbmdlRGF0YSkgPT4ge307XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb3VudHJ5Q29kZURhdGE6IENvdW50cnlDb2RlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHQvLyBJZiB0aGlzIGlzIG5vdCBzZXQsIG5neC1ib290c3RyYXAgd2lsbCB0cnkgdG8gdXNlIHRoZSBiczMgQ1NTICh3aGljaCBpcyBub3Qgd2hhdCB3ZSd2ZSBlbWJlZGRlZCkgYW5kIHdpbGxcblx0XHQvLyBBZGQgdGhlIHdyb25nIGNsYXNzZXMgYW5kIHN1Y2hcblx0XHRzZXRUaGVtZSgnYnM0Jyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBzZWxlY3RlZElTTyA9IGNoYW5nZXNbJ3NlbGVjdGVkQ291bnRyeUlTTyddO1xuXHRcdGlmIChcblx0XHRcdHRoaXMuYWxsQ291bnRyaWVzICYmXG5cdFx0XHRzZWxlY3RlZElTTyAmJlxuXHRcdFx0c2VsZWN0ZWRJU08uY3VycmVudFZhbHVlICE9PSBzZWxlY3RlZElTTy5wcmV2aW91c1ZhbHVlXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpO1xuXHRcdH1cblx0XHRpZiAoY2hhbmdlcy5wcmVmZXJyZWRDb3VudHJpZXMpIHtcblx0XHRcdHRoaXMudXBkYXRlUHJlZmVycmVkQ291bnRyaWVzKCk7XG5cdFx0fVxuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblx0fVxuXG5cdC8qXG5cdFx0VGhpcyBpcyBhIHdyYXBwZXIgbWV0aG9kIHRvIGF2b2lkIGNhbGxpbmcgdGhpcy5uZ09uSW5pdCgpIGluIHdyaXRlVmFsdWUoKS5cblx0XHRSZWY6IGh0dHA6Ly9jb2RlbHl6ZXIuY29tL3J1bGVzL25vLWxpZmUtY3ljbGUtY2FsbC9cblx0Ki9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmZldGNoQ291bnRyeURhdGEoKTtcblx0XHRpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVByZWZlcnJlZENvdW50cmllcygpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5vbmx5Q291bnRyaWVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hbGxDb3VudHJpZXMgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+XG5cdFx0XHRcdHRoaXMub25seUNvdW50cmllcy5pbmNsdWRlcyhjLmlzbzIpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5zZWxlY3RGaXJzdENvdW50cnkpIHtcblx0XHRcdGlmICh0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd24ubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRDb3VudHJ5KHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93blswXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFNlbGVjdGVkQ291bnRyeSh0aGlzLmFsbENvdW50cmllc1swXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlU2VsZWN0ZWRDb3VudHJ5KCk7XG5cdFx0dGhpcy5jaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpO1xuXHR9XG5cblx0c2V0U2VsZWN0ZWRDb3VudHJ5KGNvdW50cnk6IENvdW50cnkpIHtcblx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeSA9IGNvdW50cnk7XG5cdFx0dGhpcy5jb3VudHJ5Q2hhbmdlLmVtaXQoY291bnRyeSk7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIGNvdW50cnkgYmFzZWQgb24gY291bnRyeSBuYW1lLCBpc28yLCBkaWFsQ29kZSBvciBhbGwgb2YgdGhlbS5cblx0ICovXG5cdHB1YmxpYyBzZWFyY2hDb3VudHJ5KCkge1xuXHRcdGlmICghdGhpcy5jb3VudHJ5U2VhcmNoVGV4dCkge1xuXHRcdFx0dGhpcy5jb3VudHJ5TGlzdC5uYXRpdmVFbGVtZW50XG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCcuaXRpX19jb3VudHJ5LWxpc3QgbGknKVxuXHRcdFx0XHQuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdFx0XHRibG9jazogJ25lYXJlc3QnLFxuXHRcdFx0XHRcdGlubGluZTogJ25lYXJlc3QnLFxuXHRcdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgY291bnRyeVNlYXJjaFRleHRMb3dlciA9IHRoaXMuY291bnRyeVNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCBjb3VudHJ5ID0gdGhpcy5hbGxDb3VudHJpZXMuZmlsdGVyKChjKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuQWxsKSA+IC0xKSB7XG5cdFx0XHRcdC8vIFNlYXJjaCBpbiBhbGwgZmllbGRzXG5cdFx0XHRcdGlmIChjLmlzbzIudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGMubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoY291bnRyeVNlYXJjaFRleHRMb3dlcikpIHtcblx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYy5kaWFsQ29kZS5zdGFydHNXaXRoKHRoaXMuY291bnRyeVNlYXJjaFRleHQpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE9yIHNlYXJjaCBieSBzcGVjaWZpYyBTZWFyY2hDb3VudHJ5RmllbGQocylcblx0XHRcdFx0aWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLklzbzIpID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoYy5pc28yLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5OYW1lKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGMubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoY291bnRyeVNlYXJjaFRleHRMb3dlcikpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuRGlhbENvZGUpID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoYy5kaWFsQ29kZS5zdGFydHNXaXRoKHRoaXMuY291bnRyeVNlYXJjaFRleHQpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChjb3VudHJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGVsID0gdGhpcy5jb3VudHJ5TGlzdC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdCcjJyArIGNvdW50cnlbMF0uaHRtbElkXG5cdFx0XHQpO1xuXHRcdFx0aWYgKGVsKSB7XG5cdFx0XHRcdGVsLnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRcdFx0YmxvY2s6ICduZWFyZXN0Jyxcblx0XHRcdFx0XHRpbmxpbmU6ICduZWFyZXN0Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpO1xuXHR9XG5cblx0cHVibGljIG9uUGhvbmVOdW1iZXJDaGFuZ2UoKTogdm9pZCB7XG5cdFx0bGV0IGNvdW50cnlDb2RlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0Ly8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSB1c2VyIHNldHMgdGhlIHZhbHVlIHByb2dyYW1hdGljYWxseSBiYXNlZCBvbiBhIHBlcnNpc3RlZCBDaGFuZ2VEYXRhIG9iai5cblx0XHRpZiAodGhpcy5waG9uZU51bWJlciAmJiB0eXBlb2YgdGhpcy5waG9uZU51bWJlciA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IG51bWJlck9iajogQ2hhbmdlRGF0YSA9IHRoaXMucGhvbmVOdW1iZXI7XG5cdFx0XHR0aGlzLnBob25lTnVtYmVyID0gbnVtYmVyT2JqLm51bWJlcjtcblx0XHRcdGNvdW50cnlDb2RlID0gbnVtYmVyT2JqLmNvdW50cnlDb2RlO1xuXHRcdH1cblxuXHRcdHRoaXMudmFsdWUgPSB0aGlzLnBob25lTnVtYmVyO1xuXHRcdGNvdW50cnlDb2RlID0gY291bnRyeUNvZGUgfHwgdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcblx0XHRjb25zdCBudW1iZXIgPSB0aGlzLmdldFBhcnNlZE51bWJlcih0aGlzLnBob25lTnVtYmVyLCBjb3VudHJ5Q29kZSk7XG5cblx0XHQvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxuXHRcdGlmICh0aGlzLmVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0KSB7XG5cdFx0XHRjb3VudHJ5Q29kZSA9XG5cdFx0XHRcdG51bWJlciAmJiBudW1iZXIuZ2V0Q291bnRyeUNvZGUoKVxuXHRcdFx0XHRcdD8gdGhpcy5nZXRDb3VudHJ5SXNvQ29kZShudW1iZXIuZ2V0Q291bnRyeUNvZGUoKSwgbnVtYmVyKVxuXHRcdFx0XHRcdDogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcblx0XHRcdGlmIChjb3VudHJ5Q29kZSAmJiBjb3VudHJ5Q29kZSAhPT0gdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMikge1xuXHRcdFx0XHRjb25zdCBuZXdDb3VudHJ5ID0gdGhpcy5hbGxDb3VudHJpZXNcblx0XHRcdFx0XHQuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmZpbmQoKGMpID0+IGMuaXNvMiA9PT0gY291bnRyeUNvZGUpO1xuXHRcdFx0XHRpZiAobmV3Q291bnRyeSkge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gbmV3Q291bnRyeTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlID8gY291bnRyeUNvZGUgOiB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yO1xuXG5cdFx0dGhpcy5jaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpO1xuXG5cdFx0aWYgKCF0aGlzLnZhbHVlKSB7XG5cdFx0XHQvLyBSZWFzb246IGF2b2lkIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDM1ODEzMy8xNjE3NTkwXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW51bGwta2V5d29yZFxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UobnVsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGludGxObyA9IG51bWJlclxuXHRcdFx0XHQ/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxuXHRcdFx0XHQ6ICcnO1xuXG5cdFx0XHQvLyBwYXJzZSBwaG9uZU51bWJlciBpZiBzZXBhcmF0ZSBkaWFsIGNvZGUgaXMgbmVlZGVkXG5cdFx0XHRpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGxObykge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRsTm8pO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRcdG51bWJlcjogdGhpcy52YWx1ZSxcblx0XHRcdFx0aW50ZXJuYXRpb25hbE51bWJlcjogaW50bE5vLFxuXHRcdFx0XHRuYXRpb25hbE51bWJlcjogbnVtYmVyXG5cdFx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXG5cdFx0XHRcdFx0OiAnJyxcblx0XHRcdFx0ZTE2NE51bWJlcjogbnVtYmVyXG5cdFx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuRTE2NClcblx0XHRcdFx0XHQ6ICcnLFxuXHRcdFx0XHRjb3VudHJ5Q29kZTogY291bnRyeUNvZGUudG9VcHBlckNhc2UoKSxcblx0XHRcdFx0ZGlhbENvZGU6ICcrJyArIHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uQ291bnRyeVNlbGVjdChjb3VudHJ5OiBDb3VudHJ5LCBlbCk6IHZvaWQge1xuXHRcdGNvbnN0IGNvdW50cnlQbGFjZWhvbGRlciA9IGNvdW50cnkucGxhY2VIb2xkZXIucmVwbGFjZSgvWzAtOV0vZywgJzAnKTtcblx0XHRpZihjb3VudHJ5UGxhY2Vob2xkZXIpIHtcblx0XHRcdHRoaXMucGhvbmVNYXNrID0gY291bnRyeVBsYWNlaG9sZGVyO1xuXHRcdFx0dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U2VsZWN0ZWRDb3VudHJ5KGNvdW50cnkpO1xuXG5cdFx0dGhpcy5jaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpO1xuXG5cdFx0aWYgKHRoaXMucGhvbmVOdW1iZXIgJiYgdGhpcy5waG9uZU51bWJlci5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcblx0XHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKFxuXHRcdFx0XHR0aGlzLnBob25lTnVtYmVyLFxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgaW50bE5vID0gbnVtYmVyXG5cdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXG5cdFx0XHRcdDogJyc7XG5cdFx0XHQvLyBwYXJzZSBwaG9uZU51bWJlciBpZiBzZXBhcmF0ZSBkaWFsIGNvZGUgaXMgbmVlZGVkXG5cdFx0XHRpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGxObykge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRsTm8pO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRcdG51bWJlcjogdGhpcy52YWx1ZSxcblx0XHRcdFx0aW50ZXJuYXRpb25hbE51bWJlcjogaW50bE5vLFxuXHRcdFx0XHRuYXRpb25hbE51bWJlcjogbnVtYmVyXG5cdFx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXG5cdFx0XHRcdFx0OiAnJyxcblx0XHRcdFx0ZTE2NE51bWJlcjogbnVtYmVyXG5cdFx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuRTE2NClcblx0XHRcdFx0XHQ6ICcnLFxuXHRcdFx0XHRjb3VudHJ5Q29kZTogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMi50b1VwcGVyQ2FzZSgpLFxuXHRcdFx0XHRkaWFsQ29kZTogJysnICsgdGhpcy5zZWxlY3RlZENvdW50cnkuZGlhbENvZGUsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1udWxsLWtleXdvcmRcblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xuXHRcdH1cblxuXHRcdGVsLmZvY3VzKCk7XG5cdH1cblxuXHRwdWJsaWMgb25JbnB1dEtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG5cdFx0Y29uc3QgYWxsb3dlZENoYXJzID0gL1swLTlcXCtcXC1cXChcXClcXCBdLztcblx0XHRjb25zdCBhbGxvd2VkQ3RybENoYXJzID0gL1theGN2XS87IC8vIEFsbG93cyBjb3B5LXBhc3Rpbmdcblx0XHRjb25zdCBhbGxvd2VkT3RoZXJLZXlzID0gW1xuXHRcdFx0J0Fycm93TGVmdCcsXG5cdFx0XHQnQXJyb3dVcCcsXG5cdFx0XHQnQXJyb3dSaWdodCcsXG5cdFx0XHQnQXJyb3dEb3duJyxcblx0XHRcdCdIb21lJyxcblx0XHRcdCdFbmQnLFxuXHRcdFx0J0luc2VydCcsXG5cdFx0XHQnRGVsZXRlJyxcblx0XHRcdCdCYWNrc3BhY2UnLFxuXHRcdF07XG5cblx0XHRpZiAoXG5cdFx0XHQhYWxsb3dlZENoYXJzLnRlc3QoZXZlbnQua2V5KSAmJlxuXHRcdFx0IShldmVudC5jdHJsS2V5ICYmIGFsbG93ZWRDdHJsQ2hhcnMudGVzdChldmVudC5rZXkpKSAmJlxuXHRcdFx0IWFsbG93ZWRPdGhlcktleXMuaW5jbHVkZXMoZXZlbnQua2V5KVxuXHRcdCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcblx0fVxuXG5cdHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAob2JqID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdH1cblx0XHR0aGlzLnBob25lTnVtYmVyID0gb2JqO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5vblBob25lTnVtYmVyQ2hhbmdlKCk7XG5cdFx0fSwgMSk7XG5cdH1cblxuXHRyZXNvbHZlUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRsZXQgcGxhY2Vob2xkZXIgPSAnJztcblx0XHRpZiAodGhpcy5jdXN0b21QbGFjZWhvbGRlcikge1xuXHRcdFx0cGxhY2Vob2xkZXIgPSB0aGlzLmN1c3RvbVBsYWNlaG9sZGVyO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZENvdW50cnkucGxhY2VIb2xkZXIpIHtcblx0XHRcdHBsYWNlaG9sZGVyID0gdGhpcy5zZWxlY3RlZENvdW50cnkucGxhY2VIb2xkZXI7XG5cdFx0XHRpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlKSB7XG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShwbGFjZWhvbGRlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBwbGFjZWhvbGRlcjtcblx0fVxuXG5cdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHBhcnNlIFBob25lTnVtYmVyIG9iamVjdC5cblx0ICogQHBhcmFtIHBob25lTnVtYmVyIHN0cmluZ1xuXHQgKiBAcGFyYW0gY291bnRyeUNvZGUgc3RyaW5nXG5cdCAqL1xuXHRwcml2YXRlIGdldFBhcnNlZE51bWJlcihcblx0XHRwaG9uZU51bWJlcjogc3RyaW5nLFxuXHRcdGNvdW50cnlDb2RlOiBzdHJpbmdcblx0KTogbHBuLlBob25lTnVtYmVyIHtcblx0XHRsZXQgbnVtYmVyOiBscG4uUGhvbmVOdW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdG51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHBob25lTnVtYmVyLCBjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpKTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHJldHVybiBudW1iZXI7XG5cdH1cblxuXHQvKipcblx0ICogQWRqdXN0cyBpbnB1dCBhbGlnbm1lbnQgYmFzZWQgb24gdGhlIGRpYWwgY29kZSBwcmVzZW50YXRpb24gc3R5bGUuXG5cdCAqL1xuXHRwcml2YXRlIGNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCkge1xuXHRcdGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgdGhpcy5zZWxlY3RlZENvdW50cnkpIHtcblx0XHRcdGNvbnN0IGNudHJ5Q2QgPSB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZTtcblx0XHRcdHRoaXMuc2VwYXJhdGVEaWFsQ29kZUNsYXNzID1cblx0XHRcdFx0J3NlcGFyYXRlLWRpYWwtY29kZSBpdGktc2RjLScgKyAoY250cnlDZC5sZW5ndGggKyAxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXBhcmF0ZURpYWxDb2RlQ2xhc3MgPSAnJztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYW5zIGRpYWxjb2RlIGZyb20gcGhvbmUgbnVtYmVyIHN0cmluZy5cblx0ICogQHBhcmFtIHBob25lTnVtYmVyIHN0cmluZ1xuXHQgKi9cblx0cHJpdmF0ZSByZW1vdmVEaWFsQ29kZShwaG9uZU51bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zdCBudW1iZXIgPSB0aGlzLmdldFBhcnNlZE51bWJlcihwaG9uZU51bWJlciwgdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMik7XG5cdFx0cGhvbmVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5mb3JtYXQoXG5cdFx0XHRudW1iZXIsXG5cdFx0XHRscG4uUGhvbmVOdW1iZXJGb3JtYXRbdGhpcy5udW1iZXJGb3JtYXRdXG5cdFx0KTtcblx0XHRpZiAocGhvbmVOdW1iZXIuc3RhcnRzV2l0aCgnKycpICYmIHRoaXMuc2VwYXJhdGVEaWFsQ29kZSkge1xuXHRcdFx0cGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlci5zdWJzdHIocGhvbmVOdW1iZXIuaW5kZXhPZignICcpICsgMSk7XG5cdFx0fVxuXHRcdHJldHVybiBwaG9uZU51bWJlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaWZ0cyB0aHJvdWdoIGFsbCBjb3VudHJpZXMgYW5kIHJldHVybnMgaXNvIGNvZGUgb2YgdGhlIHByaW1hcnkgY291bnRyeVxuXHQgKiBiYXNlZCBvbiB0aGUgbnVtYmVyIHByb3ZpZGVkLlxuXHQgKiBAcGFyYW0gY291bnRyeUNvZGUgY291bnRyeSBjb2RlIGluIG51bWJlciBmb3JtYXRcblx0ICogQHBhcmFtIG51bWJlciBQaG9uZU51bWJlciBvYmplY3Rcblx0ICovXG5cdHByaXZhdGUgZ2V0Q291bnRyeUlzb0NvZGUoXG5cdFx0Y291bnRyeUNvZGU6IG51bWJlcixcblx0XHRudW1iZXI6IGxwbi5QaG9uZU51bWJlclxuXHQpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdC8vIFdpbGwgdXNlIHRoaXMgdG8gbWF0Y2ggYXJlYSBjb2RlIGZyb20gdGhlIGZpcnN0IG51bWJlcnNcblx0XHRjb25zdCByYXdOdW1iZXIgPSBudW1iZXJbJ3ZhbHVlc18nXVsnMiddLnRvU3RyaW5nKCk7XG5cdFx0Ly8gTGlzdCBvZiBhbGwgY291bnRyaWVzIHdpdGggY291bnRyeUNvZGUgKGNhbiBiZSBtb3JlIHRoYW4gb25lLiBlLnguIFVTLCBDQSwgRE8sIFBSIGFsbCBoYXZlICsxIGNvdW50cnlDb2RlKVxuXHRcdGNvbnN0IGNvdW50cmllcyA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcihcblx0XHRcdChjKSA9PiBjLmRpYWxDb2RlID09PSBjb3VudHJ5Q29kZS50b1N0cmluZygpXG5cdFx0KTtcblx0XHQvLyBNYWluIGNvdW50cnkgaXMgdGhlIGNvdW50cnksIHdoaWNoIGhhcyBubyBhcmVhQ29kZXMgc3BlY2lmaWVkIGluIGNvdW50cnktY29kZS50cyBmaWxlLlxuXHRcdGNvbnN0IG1haW5Db3VudHJ5ID0gY291bnRyaWVzLmZpbmQoKGMpID0+IGMuYXJlYUNvZGVzID09PSB1bmRlZmluZWQpO1xuXHRcdC8vIFNlY29uZGFyeSBjb3VudHJpZXMgYXJlIGFsbCBjb3VudHJpZXMsIHdoaWNoIGhhdmUgYXJlYUNvZGVzIHNwZWNpZmllZCBpbiBjb3VudHJ5LWNvZGUudHMgZmlsZS5cblx0XHRjb25zdCBzZWNvbmRhcnlDb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKFxuXHRcdFx0KGMpID0+IGMuYXJlYUNvZGVzICE9PSB1bmRlZmluZWRcblx0XHQpO1xuXHRcdGxldCBtYXRjaGVkQ291bnRyeSA9IG1haW5Db3VudHJ5ID8gbWFpbkNvdW50cnkuaXNvMiA6IHVuZGVmaW5lZDtcblxuXHRcdC8qXG5cdFx0XHRJdGVyYXRlIG92ZXIgZWFjaCBzZWNvbmRhcnkgY291bnRyeSBhbmQgY2hlY2sgaWYgbmF0aW9uYWxOdW1iZXIgc3RhcnRzIHdpdGggYW55IG9mIGFyZWFDb2RlcyBhdmFpbGFibGUuXG5cdFx0XHRJZiBubyBtYXRjaGVzIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgbWFpbiBjb3VudHJ5LlxuXHRcdCovXG5cdFx0c2Vjb25kYXJ5Q291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcblx0XHRcdGNvdW50cnkuYXJlYUNvZGVzLmZvckVhY2goKGFyZWFDb2RlKSA9PiB7XG5cdFx0XHRcdGlmIChyYXdOdW1iZXIuc3RhcnRzV2l0aChhcmVhQ29kZSkpIHtcblx0XHRcdFx0XHRtYXRjaGVkQ291bnRyeSA9IGNvdW50cnkuaXNvMjtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbWF0Y2hlZENvdW50cnk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBmb3JtYXR0ZWQgZXhhbXBsZSBwaG9uZSBudW1iZXIgZnJvbSBwaG9uZVV0aWwuXG5cdCAqIEBwYXJhbSBjb3VudHJ5Q29kZSBzdHJpbmdcblx0ICovXG5cdHByb3RlY3RlZCBnZXRQaG9uZU51bWJlclBsYWNlSG9sZGVyKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5waG9uZVV0aWwuZm9ybWF0KFxuXHRcdFx0XHR0aGlzLnBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnlDb2RlKSxcblx0XHRcdFx0bHBuLlBob25lTnVtYmVyRm9ybWF0W3RoaXMubnVtYmVyRm9ybWF0XVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXJpbmcgdGhlIGxpc3QgdG8gYXZvaWQgZHVwbGljYXRlcyAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNhdDEyMzQ1L25neC1pbnRsLXRlbC1pbnB1dC9pc3N1ZXMvMjQ4KVxuXHQgKi9cblx0cHJvdGVjdGVkIGZldGNoQ291bnRyeURhdGEoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxDb3VudHJpZXMgPSBbXTtcblxuXHRcdHRoaXMuY291bnRyeUNvZGVEYXRhLmFsbENvdW50cmllcy5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHRjb25zdCBjb3VudHJ5OiBDb3VudHJ5ID0ge1xuXHRcdFx0XHRuYW1lOiBjWzBdLnRvU3RyaW5nKCksXG5cdFx0XHRcdGlzbzI6IGNbMV0udG9TdHJpbmcoKSxcblx0XHRcdFx0ZGlhbENvZGU6IGNbMl0udG9TdHJpbmcoKSxcblx0XHRcdFx0cHJpb3JpdHk6ICtjWzNdIHx8IDAsXG5cdFx0XHRcdGFyZWFDb2RlczogKGNbNF0gYXMgc3RyaW5nW10pIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0aHRtbElkOiBgaXRpLTBfX2l0ZW0tJHtjWzFdLnRvU3RyaW5nKCl9YCxcblx0XHRcdFx0ZmxhZ0NsYXNzOiBgaXRpX18ke2NbMV0udG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpfWAsXG5cdFx0XHRcdHBsYWNlSG9sZGVyOiAnJyxcblx0XHRcdH07XG5cblx0XHRcdGlmICh0aGlzLmVuYWJsZVBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdGNvdW50cnkucGxhY2VIb2xkZXIgPSB0aGlzLmdldFBob25lTnVtYmVyUGxhY2VIb2xkZXIoXG5cdFx0XHRcdFx0Y291bnRyeS5pc28yLnRvVXBwZXJDYXNlKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hbGxDb3VudHJpZXMucHVzaChjb3VudHJ5KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMgcHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93biB3aXRoIHByZWZmZXJyZWQgY291bnRyaWVzLlxuXHQgKi9cblx0cHJpdmF0ZSB1cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKSB7XG5cdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duID0gW107XG5cdFx0XHR0aGlzLnByZWZlcnJlZENvdW50cmllcy5mb3JFYWNoKChpc28yKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHByZWZlcnJlZENvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gYy5pc28yID09PSBpc28yO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd24ucHVzaChwcmVmZXJyZWRDb3VudHJ5WzBdKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHNlbGVjdGVkQ291bnRyeS5cblx0ICovXG5cdHByaXZhdGUgdXBkYXRlU2VsZWN0ZWRDb3VudHJ5KCkge1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkQ291bnRyeUlTTykge1xuXHRcdFx0dGhpcy5zZWxlY3RlZENvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maW5kKChjKSA9PiB7XG5cdFx0XHRcdHJldHVybiBjLmlzbzIudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5zZWxlY3RlZENvdW50cnlJU08udG9Mb3dlckNhc2UoKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5KSB7XG5cdFx0XHRcdGlmICh0aGlzLnBob25lTnVtYmVyKSB7XG5cdFx0XHRcdFx0dGhpcy5vblBob25lTnVtYmVyQ2hhbmdlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxuXHRcdFx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXG5cdFx0XHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UobnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==