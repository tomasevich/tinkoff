"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
/**
 * Общий класс для взаимодействия с сервисами Tinkoff Invest API
 */
class Common {
    /**
     * Конструктор
     *
     * @param {string} token Токен приложения
     * @param {boolean} isSandbox Флаг включения режима "Песочницы"
     */
    constructor(token, isSandbox) {
        this.token = token;
        this.isSandbox = isSandbox;
        /**
         * Публичный адрес работы с Биржей
         */
        this.public = 'https://invest-public-api.tinkoff.ru';
        /**
         * Адрес для работы в Песочнице
         */
        this.sandbox = 'https://sandbox-invest-public-api.tinkoff.ru';
    }
    /**
     * Метод HTTPs запроса к Tinkoff Invest API
     *
     * @param {Service} service Имя сервиса
     * @param {Method} method Метод сервиса
     * @param {any} body Тело запроса
     *
     * @returns {Promise<any>}
     */
    request(service, method, body) {
        const server = this.isSandbox ? this.sandbox : this.public;
        const contract = '/rest/tinkoff.public.invest.api.contract.v1.';
        const url = server + contract + service + '/' + method;
        const opt = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        };
        return fetch(url, opt);
    }
}
exports.Common = Common;
