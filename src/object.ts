type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

type Mapping = Record<Month, string>

const MONTH_TO_TRANSLATION_KEY: Mapping = {
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

const getMonthObj = (month: Month) => MONTH_TO_TRANSLATION_KEY[month]

getMonthObj('January')
