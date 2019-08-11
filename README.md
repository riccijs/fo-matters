FO-Matters
=============

A collection of formatting tool, useful for formatting strings, numbers, and currency.

[![npm module](https://img.shields.io/npm/v/fo-matters/latest.svg)](https://www.npmjs.org/package/fo-matters)
[![dependencies](https://david-dm.org/riccijs/fo-matters.svg)](https://david-dm.org/riccijs/fo-matters)



About FO-Matters?
----------

We are in the beginning stages of this project. Currently, there are minimal tools for formatting strings, numbers, and currency (USD ONLY), but we will be adding more in the near future!

Full typescript support! :)



Installation
------------

To use with node:

```bash
$ npm install fo-matters --save
```

Javascript:

```javascript
const fo = require('fo-matters');
```

ES6 and above:

```javascript
import fo from 'fo-matters'
```

(note that using `latest` is taking a significant risk that fo-matters API changes could break your code.)



API
-------------

```js
import fo from 'fo-matters'

// Strings

fo.lettersOnly('alph@123')
// ===> 'alph'

fo.alphaNumericOnly('alph@123')
// ===> 'alph123'

fo.minLength('alph@123', 10)
// ===> false

fo.maxLength('alph@123', 4)
// ===> 'alph'

fo.capitalizeFirstLetter('alph@123')
// ===> 'Alph@123'


// Numbers

fo.number(91234.56)
// ===> '91,234.56'

fo.numberRound(91234.56)
// ===> '91,235'

fo.stripNumber('91,234.56')
// ===> 91234.56


// Currency (USD ONLY)

fo.currency(91234.56)
// ===> '$91,234.56'

fo.currencyRound(91234.56)
// ===> '$91,235'

fo.stripCurrency('$91,234.56')
// ===> 91234.56
```


Acknowledgements
-----------------

Thanks to Bryan Ricci!
License [MIT](https://opensource.org/licenses/MIT).
