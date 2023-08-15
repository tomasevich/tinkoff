"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentsService = void 0;
const Common_1 = require("./Common");
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
