OIB.js - Simple OIB validation
======

[![Build Status](https://semaphoreci.com/api/v1/andreicek/oib-js/branches/master/badge.svg)](https://semaphoreci.com/andreicek/oib-js)

## What is OIB?

OIB is _Osobni identifikacijski broj_ (eng. Personal identification number); a uniq numerical identificator of companies and people in Republic of Craotia. It's in use since 2009.

## Usage

Install it with npm:

```Bash
npm install --save oib.js
```

And use it like:

```JavaScript
const oib = require('oib.js');

oib.validate('24076340234');
```

---------------------------------

Or include it in your HTML (1995 style):

```HTML
<script src="https://unpkg.com/oib.js"></script>
```

And use it like:

```JavaScript
oib.validate('24076340234');
```

## Methods

### `validate(1)`

This will validate agains the full specification of the standard. It accepts both `string` and `number`. It return `true` or `false`.

```JavaScript
oib.validate('24076340234');
oib.validate(24076340234);
```

### `iso7064(1)`

This validates only agains ISO 7064 standard. It accepts both `string` and `number`. It return `true` or `false`.

```JavaScript
oib.iso7064('24076340234');
oib.iso7064(24076340234);
```

## License

Andrei Zvonimir Crnkovic <andrei@infinum.co> MIT 2016.
