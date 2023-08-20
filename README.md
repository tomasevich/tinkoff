# Tinkoff Invest API

`Неофициальная` библиотека для работы с [Тинькофф Инвестиции](https://www.tinkoff.ru/invest/)

![npm (scoped)](https://img.shields.io/npm/v/%40tomasevich/tinkoff?color=blue)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40tomasevich%2Ftinkoff?color=purple)
![GitHub top language](https://img.shields.io/github/languages/top/tomasevich/tinkoff?color=purple)
![GitHub](https://img.shields.io/github/license/tomasevich/tinkoff?color=orange)
![Static Badge](https://img.shields.io/badge/tests-117/6/122-yellow)
![Static Badge](https://img.shields.io/badge/covarage-311/335-green)
![Static Badge](https://img.shields.io/badge/docs-true-green)

## Мотивация

- Отсутствует официальная библиотека для зыков `JavaScript`/`TypeScript`
- [Swagger](https://tinkoff.github.io/investAPI/swagger-ui/) `v1.4` покрывает все `API`, но толком не описан
- [Документация](https://tinkoff.github.io/investAPI/) `v1.5` описана с ошибками, но отличается от **Swagger**

<!-- От автора: ревью показывает, дублирование интерфейсов и их свойств, отсутствие наследований и излишних прокси-интерфесов в коде - зашкаливают -->

## Приемущества

- **0** зависимостей
- Просканировано **CodeQL** и **Dependabot**
- Написано на **Typescript**
- [Покрыто](/coverage/lcov-report/) тестами **Jest**
- Покрыто документацией **TypeDoc**
- Тонна реальных **Примеров**

## Сообщество

- Проект на [GitHub](https://github.com/tomasevich/tinkoff)
- [Документация](https://tomasevich.github.io/tinkoff) по API
- [Обсуждения](https://github.com/tomasevich/tinkoff/discussions) идей
- [Предложения](https://github.com/tomasevich/tinkoff/issues) по развитию

## Установка

```sh
npm i @tomasevich/tinkoff
```

## Настройка

Для получения **Токена** читаем [инструкцию](https://tinkoff.github.io/investAPI/token/)

## Использование

```js
import { SandboxService } from '@tomasevich/tinkoff'

const sandboxService = new SandboxService('<TOKEN>', true)
const { orders } = await sandboxService.GetSandboxOrders({
  accountId: '<ACCOUNT_ID>'
})

console.log(orders)
```

## Разработка

### Тестирование

Для запуска тестов, необходимо настроить переменные окружения

1. Копируем настройки окружения

```sh
cp .env .env.test
```

2. Заполняем поля своими данными и запускаем тесты

```sh
npm test
```

### Контрибютерам

Присылаем **PR** & **Issue** без фанатизма, проект `домашний` (некоммерческий)
