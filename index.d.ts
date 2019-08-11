import * as num from './src/number'
import * as str from './src/string'
import * as cur from './src/currency'

/* Main export */
const fo = {
  ...num,
  ...str,
  ...cur
}
export default fo