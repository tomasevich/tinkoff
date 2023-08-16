"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentsService = exports.InstrumentType = void 0;
const Common_1 = require("./Common");
var InstrumentType;
(function (InstrumentType) {
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_UNSPECIFIED"] = 0] = "INSTRUMENT_TYPE_UNSPECIFIED";
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_BOND"] = 1] = "INSTRUMENT_TYPE_BOND";
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_SHARE"] = 2] = "INSTRUMENT_TYPE_SHARE";
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_CURRENCY"] = 3] = "INSTRUMENT_TYPE_CURRENCY";
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_ETF"] = 4] = "INSTRUMENT_TYPE_ETF";
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_FUTURES"] = 5] = "INSTRUMENT_TYPE_FUTURES";
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_SP"] = 6] = "INSTRUMENT_TYPE_SP";
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_OPTION"] = 7] = "INSTRUMENT_TYPE_OPTION";
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_CLEARING_CERTIFICATE"] = 8] = "INSTRUMENT_TYPE_CLEARING_CERTIFICATE";
})(InstrumentType || (exports.InstrumentType = InstrumentType = {}));
class InstrumentsService extends Common_1.Common {
    TradingSchedules(body) {
        return this.request('InstrumentsService', 'TradingSchedules', body);
    }
    BondBy(body) {
        return this.request('InstrumentsService', 'BondBy', body);
    }
    Bonds(body) {
        return this.request('InstrumentsService', 'Bonds', body);
    }
    GetBondCoupons(body) {
        return this.request('InstrumentsService', 'GetBondCoupons', body);
    }
    CurrencyBy(body) {
        return this.request('InstrumentsService', 'CurrencyBy', body);
    }
    Currencies(body) {
        return this.request('InstrumentsService', 'Currencies', body);
    }
    EtfBy(body) {
        return this.request('InstrumentsService', 'EtfBy', body);
    }
    Etfs(body) {
        return this.request('InstrumentsService', 'Etfs', body);
    }
    FutureBy(body) {
        return this.request('InstrumentsService', 'FutureBy', body);
    }
    Futures(body) {
        return this.request('InstrumentsService', 'Futures', body);
    }
    OptionBy(body) {
        return this.request('InstrumentsService', 'OptionBy', body);
    }
    Options(body) {
        return this.request('InstrumentsService', 'Options', body);
    }
    OptionsBy(body) {
        return this.request('InstrumentsService', 'OptionsBy', body);
    }
    ShareBy(body) {
        return this.request('InstrumentsService', 'ShareBy', body);
    }
    Shares(body) {
        return this.request('InstrumentsService', 'Shares', body);
    }
    GetAccruedInterests(body) {
        return this.request('InstrumentsService', 'GetAccruedInterests', body);
    }
    GetFuturesMargin(body) {
        return this.request('InstrumentsService', 'GetFuturesMargin', body);
    }
    GetInstrumentBy(body) {
        return this.request('InstrumentsService', 'GetInstrumentBy', body);
    }
    GetDividends(body) {
        return this.request('InstrumentsService', 'GetDividends', body);
    }
    GetAssetBy(body) {
        return this.request('InstrumentsService', 'GetAssetBy', body);
    }
    GetAssets(body) {
        return this.request('InstrumentsService', 'GetAssets', body);
    }
    GetFavorites(body) {
        return this.request('InstrumentsService', 'GetFavorites', body);
    }
    EditFavorites(body) {
        return this.request('InstrumentsService', 'EditFavorites', body);
    }
    GetCountries(body) {
        return this.request('InstrumentsService', 'GetCountries', body);
    }
    FindInstrument(body) {
        return this.request('InstrumentsService', 'FindInstrument', body);
    }
    GetBrands(body) {
        return this.request('InstrumentsService', 'GetBrands', body);
    }
    GetBrandBy(body) {
        return this.request('InstrumentsService', 'GetBrandBy', body);
    }
}
exports.InstrumentsService = InstrumentsService;
