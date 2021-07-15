# jmot-lib (JavaScript Manipulation of Time Library) :milky_way:

A JavaScript utility library that converts decimal to time, add decimal to time and get current time based on locale.

Give it a whirl on RunKit:

<script src="https://embed.runkit.com" data-element-id="jmot"></script>

<div id="jmot">

var jmot = require("jmot-lib");
<br />
jmot.currenttime();</div>

:information_source: *https://npm.runkit.com/jmot-lib*


Sometimes we end up having to work with non-standard time values. For example 1.5 hrs means one and a half hours.

This library aims to make it easy to do manipulations on time.  So that, 1.5 hrs becomes 1:30 and where 1.5 + 14:00 returns 15:30.


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

:information_source: *1 hour is equal to 60 minutes.*

## Usage

### Installation

using npm:

`npm install jmot-lib`

### Code Example

ESM support:

    import { dectotime, adddectotime } from 'jmot-lib';

    var x = dectotime('4.5');
    console.log('result: ', x);
    // result: 4:30

    var y = adddectotime('1.75','14:00');
    console.log('result: ', y);
    // result: 15:45


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

## Functions

***adddectotime*** takes two string inputs ('1.0','12:00') a decimal and a time. The two values are summed together and returned as a string.

***currenttime*** returns current time based on your locale setting. The default `currenttime()` returns your local short(HH:MM)time in UTC format. 

Optional parameters: `currenttime(_locale_,_timeformat_)`. _locale_(specify a language format and or location) and _timeformat_ Use 'HH:MM:SS' to return a long time.  See examples below:

    import { currenttime } from 'jmot-lib';

    currenttime();
    // "13:15"

    currenttime('en');
    // "1:15 PM"

    currenttime('en-GB');
    // "13:15"

    currenttime('in-ID');
    // "১:১৫ PM"

    currenttime('en-US', 'HH:MM:SS');
    // "1:15:03 PM"

List of [supported locales](https://github.com/saSinclair/jmot-lib/tree/main/docs/locales.md) and example outputs.

***dectotime*** takes a decimal string as input and returns a string time HH:MM.



## Contribute :purple_heart:

Become a contributor to jmot!

If you've found a bug, please create a new issue or a pull request.

All feedback welcome! :raising_hand:

