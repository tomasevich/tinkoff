# Tinkoff Invest API

`Неофициальная` библиотека для работы с [Тинькофф Инвестиции](https://www.tinkoff.ru/invest/)

![npm (scoped)](https://img.shields.io/npm/v/%40tomasevich/tinkoff?color=blue&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40tomasevich%2Ftinkoff?color=purple&logo=npm)
![GitHub](https://img.shields.io/github/license/tomasevich/tinkoff?color=orange&logo=github)
![Static Badge](https://img.shields.io/badge/tests-22/14/131-yellow?logo=github)
![Static Badge](https://img.shields.io/badge/covarage-329/346-green?logo=github)

## Мотивация

- Отсутствует официальная библиотека для зыков `JavaScript`/`TypeScript`
- [Swagger](https://tinkoff.github.io/investAPI/swagger-ui/) `v1.4` покрывает все `API`, но толком не описан
- [Документация](https://tinkoff.github.io/investAPI/) `v1.5` описана с ошибками, но отличается от **Swagger**

<!-- От автора: ревью показывает, дублирование интерфейсов и их свойств, отсутствие наследований и излишних прокси-интерфесов в коде - зашкаливают -->

## Приемущества

- **0** зависимостей
- Просканировано **CodeQL** и **Dependabot**
- Написано на **Typescript**
- [Покрыто](https://tomasevich.github.io/tinkoff/coverage/lcov-report/) тестами **Jest**
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

2. Заполняем поля своими данными и запускаем тесты (с покрытием)

```sh
npm run test:coverage
```

### Контрибютерам

1. [Кодекс поведения](./.github/CODE_OF_CONDUCT.md)
2. [Руководство по содействию](./.github/CONTRIBUTING.md)
3. [Политика безопасности](./SECURITY.md)
