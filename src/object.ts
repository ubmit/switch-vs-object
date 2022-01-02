type MonthToTranslationKey = {
  [index: string]: string
  January: string
  February: string
  March: string
  April: string
  May: string
  June: string
  July: string
  August: string
  September: string
  October: string
  November: string
  December: string
}

const MONTH_TO_TRANSLATION_KEY: MonthToTranslationKey = {
  January: 'JANUARY_TRANSLATION_KEY',
  February: 'FEBRUARY_TRANSLATION_KEY',
  March: 'MARCH_TRANSLATION_KEY',
  April: 'APRIL_TRANSLATION_KEY',
  May: 'MAY_TRANSLATION_KEY',
  June: 'JUNE_TRANSLATION_KEY',
  July: 'JULY_TRANSLATION_KEY',
  August: 'AUGUST_TRANSLATION_KEY',
  September: 'SEPTEMBER_TRANSLATION_KEY',
  October: 'OCTOBER_TRANSLATION_KEY',
  November: 'NOVEMBER_TRANSLATION_KEY',
  December: 'DECEMBER_TRANSLATION_KEY',
}

const getMonth = (month: string) => MONTH_TO_TRANSLATION_KEY[month]

getMonth('January')

export {}
