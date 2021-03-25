JavaScript library to parse the NIBSS qrcode into emvco object

## How to use

Install Node.js and run this command to install `titan-emvco-parser` in your machine:

```
npm install titan-emvco-parser
```

Then you can use this library by
```
var parser = require('titan-emvco-parser');
var input = '00020101021229370016A000000677010111011300668711111115802TH53037645406500.006304ABAC';
var info = parser(input);
```
