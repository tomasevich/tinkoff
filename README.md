# Tinkoff Invest API

`Неофициальная` библиотека для работы с [Тинькофф Инвестиции](https://www.tinkoff.ru/invest/)

> Внимание! Сборка пока не готова для продуктивного использования

## Установка

```sh
npm i @tomasevich/tinkoff
```

## Использование

### CommonJS

```js
const { TinkoffInvestApi } = require('@tomasevich/tinkoff')

console.log(TinkoffInvestApi()) // work
```

### Module

```ts
import { TinkoffInvestApi } from '@tomasevich/tinkoff'

console.log(TinkoffInvestApi()) // work
```

## Разработка

### Тестирование

Для запуска тестов, необходимо настроить переменные окружения

#### Копируем настройки окружения

```sh
cp .env .env.test
```

#### Заполняем поля своими данными и запускаем тесты

```sh
npm test
```
