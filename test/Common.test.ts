import dotenv from 'dotenv'

import { Common } from '../src'

dotenv.config({ path: './.env.test' })

describe.each([
  {
    received: {
      units: '114',
      nano: 250000000,
      currency: 'rub'
    },
    expected: '114.25 rub'
  },
  {
    received: {
      units: '-200',
      nano: -200000000,
      currency: 'eur'
    },
    expected: '-200.2 eur'
  },
  {
    received: {
      units: '-0',
      nano: -10000000,
      currency: 'usd'
    },
    expected: '-0.01 usd'
  }
])('Запрашиваем строку из значения', ({ received, expected }) => {
  test('Получаем строку из значения MoneyValue', () => {
    expect(Common.MoneyValueToString(received)).toEqual(expected)
  })
})

describe.each([
  {
    received: {
      units: '114',
      nano: 250000000
    },
    expected: '114.25'
  },
  {
    received: {
      units: '-200',
      nano: -200000000
    },
    expected: '-200.2'
  },
  {
    received: {
      units: '-0',
      nano: -10000000
    },
    expected: '-0.01'
  }
])('Запрашиваем строку из значения', ({ received, expected }) => {
  test('Получаем строку из значения Quotation', () => {
    expect(Common.QuotationToString(received)).toEqual(expected)
  })
})

describe.each([
  {
    received: '114.25 rub',
    expected: {
      units: '114',
      nano: 250000000,
      currency: 'rub'
    }
  },
  {
    received: '-200.2 eur',
    expected: {
      units: '-200',
      nano: -200000000,
      currency: 'eur'
    }
  },
  {
    received: '-0.01 usd',
    expected: {
      units: '-0',
      nano: -10000000,
      currency: 'usd'
    }
  }
])('Запрашиваем значение из строки', ({ received, expected }) => {
  test('Получаем значение MoneyValue из строки', () => {
    expect(Common.StringToMoneyValue(received)).toEqual(expected)
  })
})

describe.each([
  {
    received: '114.25',
    expected: {
      units: '114',
      nano: 250000000
    }
  },
  {
    received: '-200.2',
    expected: {
      units: '-200',
      nano: -200000000
    }
  },
  {
    received: '-0.01',
    expected: {
      units: '-0',
      nano: -10000000
    }
  }
])('Запрашиваем значение из строки', ({ received, expected }) => {
  test('Получаем значение Quotation из строки', () => {
    expect(Common.StringToQuotation(received)).toEqual(expected)
  })
})
