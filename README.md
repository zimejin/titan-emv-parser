# promptpay-emvco-parser [![npm version](https://badge.fury.io/js/promptpay-emvco-parser.svg)](https://badge.fury.io/js/promptpay-emvco-parser)

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

## Sample Web

You can view [live version of sample web here](https://promptpay-qr-17c4d.firebaseapp.com/)  
[source code](https://github.com/apemon/promptpay-web-qrscan-sample)