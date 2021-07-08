# jmot-lib (JavaScript Manipulation of Time Library) :milky_way:

A JavaScript utility library that converts decimal to time.

Sometimes we end up having to work with non-standard time values. For example 1.5 hrs means one and a half hours.

This library aims to make it easy to do manipulations on time.  So that, 1.5 hrs becomes 1:30.
| Hours    | Time | Hours     | Time  |
|----------|------|-----------|-------|
|        0 | 0:00 |        12 | 12:00 |
| 0.083333 | 0:05 | 12.083333 | 12:05 |
| 0.166667 | 0:10 | 12.166667 | 12:10 |
|     0.25 | 0:15 |     12.25 | 12:15 |
| 0.333333 | 0:20 | 12.333333 | 12:20 |
| 0.416667 | 0:25 | 12.416667 | 12:25 |
|      0.5 | 0:30 |      12.5 | 12:30 |
| 0.583333 | 0:35 | 12.583333 | 12:35 |
| 0.666667 | 0:40 | 12.666667 | 12:40 |
|     0.75 | 0:45 |     12.75 | 12:45 |
| 0.833333 | 0:50 | 12.833333 | 12:50 |
| 0.916667 | 0:55 | 12.916667 | 12:55 |
|        1 | 1:00 |        13 | 13:00 |

:information_source: *1 hour is equal to 60 mintues.*

## Usage

### Installation

using npm:

`npm install jmot-lib`

### Code Example

ESM support:

    import { dectotime } from 'jmot-lib';

    var x = dectotime('4.5');
    console.log('result: ', x);
    // result: 4:30


CJS(CommonJS) and UMD(Universal Module Definition) also supported.

### String -> String

`dectotime` takes a string as input and outputs a string.


### Gotchas :facepunch:

- #### :clock12: 24 Hour Format
The api supports up to 24-hour decimal time.  However, it will allow all values.

- #### :ghost: Boo O'Clock
`dectotime` takes a string as input. 

    dectotime('boo');
    // boo:00

Ensure you validate the value being passed in beforehand.

## Contribute :purple_heart:

Become a contributor to jmot!

If you've found a bug, please create a new issue or a pull request.

All Feedback welcome! :raising_hand:

