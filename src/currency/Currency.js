const l10nUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export const currencyUSD = i => l10nUSD.format(i)
export const currencyUSDRound = i => {
  const result = l10nUSD.format(i).toString()
  return result.substr(0, result.length - 3)
}
export const stripCurrency = i => {
  i = i.replace('$', '')
  i = i.replace('.', '')
  let num = Number(i.replace(/[^0-9.]/g, ''))
  if (num < 10) {
    i = `0.0${num}`
  } else if (num < 100) {
    i = `0.${num}`
  } else {
    let str = num.toString()
    i = str.substr(0, str.length - 2) + '.' + str.substr(str.length - 2, 2)
  }
  return parseFloat(i).toFixed(2)
}