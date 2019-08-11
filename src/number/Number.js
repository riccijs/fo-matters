const l10nEN = new Intl.NumberFormat('en-US')

export const number = i => l10nEN.format(i)
export const numberRound = (value, decimals) => {
  return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals)
}
export const stripNumber = i => Number(i.replace(/[^0-9.]/g, ''))