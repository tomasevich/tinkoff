# Tinkoff Invest API

`Неофициальная` библиотека для работы с [Тинькофф Инвестиции](https://www.tinkoff.ru/invest/)

- Проект на [GitHub](https://github.com/tomasevich/tinkoff)
- [Документация](https://tomasevich.github.io/tinkoff) по API
- [Обсуждения](https://github.com/tomasevich/tinkoff/discussions) идей и предложений

## Установка

```sh
npm i @tomasevich/tinkoff
```

## Использование

```js
import { SandboxService } from '@tomasevich/tinkoff'

const sandboxService = new SandboxService('<TOKEN>', true)

sandboxService
  .GetSandboxOrders({
    accountId: '<ACCOUNT_ID>'
  })
  .then(response => response.json())
  .then(data => console.log(data))
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
