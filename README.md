# promptpay-emvco-parser

JavaScript library to parse the promptpay qrcode into emvco object

## How to use

Install Node.js and run this command to install `promptpay-emvco-parser` in your machine:

```
npm install promptpay-emvco-parser
```

Then you can use this library by
```
var parser = require('promptpay-emvco-parser);
var input = '00020101021229370016A000000677010111011300668711111115802TH53037645406500.006304ABAC';
var info = parser(input);
```