const getMonth = (month: string) => {
  let translationKey = ''
  switch (month) {
    case 'January':
      translationKey = 'JANUARY_TRANSLATION_KEY'
      break
    case 'February':
      translationKey = 'FEBRUARY_TRANSLATION_KEY'
      break
    case 'March':
      translationKey = 'MARCH_TRANSLATION_KEY'
      break
    case 'April':
      translationKey = 'APRIL_TRANSLATION_KEY'
      break
    case 'May':
      translationKey = 'MAY_TRANSLATION_KEY'
      break
    case 'June':
      translationKey = 'JUNE_TRANSLATION_KEY'
      break
    case 'July':
      translationKey = 'JULY_TRANSLATION_KEY'
      break
    case 'August':
      translationKey = 'AUGUST_TRANSLATION_KEY'
      break
    case 'September':
      translationKey = 'SEPTEMBER_TRANSLATION_KEY'
      break
    case 'October':
      translationKey = 'OCTOBER_TRANSLATION_KEY'
      break
    case 'November':
      translationKey = 'NOVEMBER_TRANSLATION_KEY'
      break
    case 'December':
      translationKey = 'DECEMBER_TRANSLATION_KEY'
  }
  return translationKey
}

getMonth('January')

export {}
