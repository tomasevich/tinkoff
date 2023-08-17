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
let sandboxService;
let tempAccounts;
describe('SandboxService', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        sandboxService = new _1.SandboxService((_a = process.env.TINKOFF_INVEST_API_TOKEN) !== null && _a !== void 0 ? _a : '', true);
    }));
    describe('GetSandboxAccounts', () => {
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            const { accounts } = yield sandboxService.GetSandboxAccounts({});
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
});
