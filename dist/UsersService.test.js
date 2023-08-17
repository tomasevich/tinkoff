"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const _1 = require("./");
dotenv_1.default.config({ path: './.env.test' });
let usersService;
let tempAccounts;
let tempInfo;
let tempMarginAttributes;
let tempUserTariff;
describe('UsersService', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        usersService = new _1.UsersService((_a = process.env.TINKOFF_INVEST_API_TOKEN) !== null && _a !== void 0 ? _a : '', true);
    }));
    describe('GetAccounts', () => {
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            const { accounts } = yield usersService.GetAccounts({});
            tempAccounts = accounts;
        }));
        describe('Expect "Accounts" length', () => {
            test('To be greater than "0"', () => {
                expect(tempAccounts.length).toBeGreaterThan(0);
            });
            describe('Expect "Account" properies', () => {
                test('To have "id"', () => {
                    expect(tempAccounts[0]).toHaveProperty('id');
                });
                test('To have "type"', () => {
                    expect(tempAccounts[0]).toHaveProperty('type');
                });
                test('To have "name"', () => {
                    expect(tempAccounts[0]).toHaveProperty('name');
                });
                test('To have "status"', () => {
                    expect(tempAccounts[0]).toHaveProperty('status');
                });
                test('To have "openedDate"', () => {
                    expect(tempAccounts[0]).toHaveProperty('openedDate');
                });
                test('To have "accessLevel"', () => {
                    expect(tempAccounts[0]).toHaveProperty('accessLevel');
                });
                // test('To have "closedDate"', () => {
                // Почему-то не возвращает дату закрытия, хотя в оф.документации есть это свойство
                // expect(tempAccounts[0]).toHaveProperty('closedDate')
                // })
            });
        });
    });
    describe('GetMarginAttributes', () => {
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const marginAttributes = yield usersService.GetMarginAttributes({
                accountId: (_a = process.env.TINKOFF_INVEST_API_ACCOUNT_ID) !== null && _a !== void 0 ? _a : ''
            });
            tempMarginAttributes = marginAttributes;
        }));
        describe('Expect "Margin Attributes" properies', () => {
            test('To have "liquidPortfolio"', () => {
                expect(tempMarginAttributes).toHaveProperty('liquidPortfolio');
            });
            test('To have "startingMargin"', () => {
                expect(tempMarginAttributes).toHaveProperty('startingMargin');
            });
            test('To have "minimalMargin"', () => {
                expect(tempMarginAttributes).toHaveProperty('minimalMargin');
            });
            test('To have "fundsSufficiencyLevel"', () => {
                expect(tempMarginAttributes).toHaveProperty('fundsSufficiencyLevel');
            });
            test('To have "amountOfMissingFunds"', () => {
                expect(tempMarginAttributes).toHaveProperty('amountOfMissingFunds');
            });
            test('To have "correctedMargin"', () => {
                expect(tempMarginAttributes).toHaveProperty('correctedMargin');
            });
        });
    });
    describe('GetUserTariff', () => {
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const userTariff = yield usersService.GetUserTariff({
                accountId: (_a = process.env.TINKOFF_INVEST_API_ACCOUNT_ID) !== null && _a !== void 0 ? _a : ''
            });
            tempUserTariff = userTariff;
        }));
        describe('Expect "User Tariff" properies', () => {
            test('To have "unaryLimits"', () => {
                expect(tempUserTariff).toHaveProperty('unaryLimits');
            });
            test('To have "streamLimits"', () => {
                expect(tempUserTariff).toHaveProperty('streamLimits');
            });
            describe('Expect "unaryLimits" properies', () => {
                test('To have "limitPerMinute"', () => {
                    expect(tempUserTariff.unaryLimits[0]).toHaveProperty('limitPerMinute');
                });
                test('To have "methods"', () => {
                    expect(tempUserTariff.unaryLimits[0]).toHaveProperty('methods');
                });
            });
            describe('Expect "streamLimits" properies', () => {
                test('To have "limit"', () => {
                    expect(tempUserTariff.streamLimits[0]).toHaveProperty('limit');
                });
                test('To have "streams"', () => {
                    expect(tempUserTariff.streamLimits[0]).toHaveProperty('streams');
                });
                test('To have "open"', () => {
                    expect(tempUserTariff.streamLimits[0]).toHaveProperty('open');
                });
            });
        });
    });
    describe('GetInfo', () => {
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            const info = yield usersService.GetInfo({});
            tempInfo = info;
        }));
        describe('Expect "Info" properies', () => {
            test('To have "premStatus"', () => {
                expect(tempInfo).toHaveProperty('premStatus');
            });
            test('To have "qualStatus"', () => {
                expect(tempInfo).toHaveProperty('qualStatus');
            });
            test('To have "qualifiedForWorkWith"', () => {
                expect(tempInfo).toHaveProperty('qualifiedForWorkWith');
            });
            test('To have "tariff"', () => {
                expect(tempInfo).toHaveProperty('tariff');
            });
        });
    });
});
