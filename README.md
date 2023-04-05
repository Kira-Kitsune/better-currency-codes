# better-currency-codes

better-currency-codes is a package for getting currency, with their name (unit, denoymn and full), alphabetic/numeric code and symbol.

Supports both ESM and CJS!

# Installation

```sh
npm install better-currency-codes
```

# Why another currency package?

I found that all the existing currency packages are out of date and/or haven't been updated in years (e.g. Croatia is now using the Euro since Jan 2023, and HRK is now apart of the historic list), they aren't done well either, even though to say, I don't think mine is the best.

I also aimmed to give a more clear ISO 4127 "experience", with having current and historic codes (coming soon).

# Usage

For the data structure; see [Data Structure](#data-structure)

## To import all functions

```ts
import * as betterCurrency from 'better-currency-codes';

betterCurrency.codes();
```

Or just a single function

```ts
import { codes } from 'better-currency-codes';
```

## Gets the raw currency data array

```ts
import { codeDatas } from 'better-currency-codes';

const res = codeDatas();
```

## Gets the single data object for a particular code.

```ts
import { codeData } from 'better-currency-codes';

// Can use numeric codes. 'numeric' can be omitted for alphabetic codes.
const res = codeData({ code: 'AUD', numeric: false });
```

## Gets the name (full, denoymn, unit and subunit) for a particular code.

```ts
import { name } from 'better-currency-codes';

// Can use numeric codes. 'numeric' can be omitted for alphabetic codes.
const res = name({ code: 'AUD', numeric: false });
```

## Gets the entities that use the currency for a particular code.

```ts
import { entities } from 'better-currency-codes';

// Can use numeric codes. 'numeric' can be omitted for alphabetic codes.
const res = entities({ code: 'AUD', numeric: false });
```

## Gets the symbol for a particular code.

```ts
import { symbol } from 'better-currency-codes';

// Can use numeric codes. 'numeric' can be omitted for alphabetic codes.
const res = symbol({ code: 'AUD', numeric: false });
```

## For getting the codes (alphabetic and numeric) of every current currency

```ts
import { codes } from 'better-currency-codes';

// Returns just the code part of the Data Structure
const res = codes();
```

## For getting just the names of every current currency

```ts
import { names } from 'better-currency-codes';

// Returns just the code part of the Data Structure
const res = names();
```

## For getting just the alphabetic codes of every current currency

```ts
import { alphaCodes } from 'better-currency-codes';

const res = alphaCodes();
```

## For getting just the numeric codes of every current currency

```ts
import { numericCodes } from 'better-currency-codes';

const res = numericCodes();
```

## For getting just the codes and names (the code and name object)

```ts
import { codeNamePair } from 'better-currency-codes';

const res = codeNamePair();
```

## For getting an object with alphabetic code - name object pairing (all)

```ts
import { codeAlphaNamePair } from 'better-currency-codes';

const res = codeAlphaNamePair();
```

## For getting an object with numeric code - name object pairing (all)

```ts
import { codeNumericNamePair } from 'better-currency-codes';

const res = codeNumericNamePair();
```

# Data Structure

```ts
// Data Object (AUD for example)
{
    entities: [
        {
            name: "Australia",
            code: "AU" // ISO 3166-1 alpha-2 (Except for Currency XDR)
        },
        ... // Some currencies have more country/unions that use the same currency (e.g. EUR, USD, AUD)
    ],
    code: {
        alphabetic: "AUD",
        numeric: "036"
    },
    name: {
        full: "Australian Dollar",
        denoymn: "Australian",
        unit: {
            single: "Dollar",
            plural: "Dollars"
        },
        subunit: {
            single: "Cent",
            plural: "Cents"
        }
    },
    symbol: {
        international: "AU$", // What it would be used if another currency has similar symbol
        native: "$" // Normally in it's native language or shorthand
    },
    decimal: 2, // How many decimals after is used for subunits
    subdivided: 100 // How much it's
}

// For TypeScript:
import type { CurrencyData } from 'better-currency-codes';
```

# Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested.
You are free to submit a PR to this repo, please fork first.

# License

better-currency-codes is available under the MIT license. See the LICENSE.md file for more info.

Copyright &copy; 2023 Kira Kitsune <https://kirakitsune.com>, All rights reserved.
