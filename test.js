var assert = require('assert');
var parser = require('./index.js');

describe('test parse function',function() {
    it('it should get merchant mobilephone correctly', function() {
        var info = parser("00020101021229370016A000000677010111011300668711111115802TH53037645406500.006304ABAC");
        assert.equal("MobileNumber", info.MerchantAccountInformation.merchantInfo.promptpayIdType);
        assert.equal("0871111111", info.MerchantAccountInformation.merchantInfo.promptpayNumber);      
    });
    it('it should get merchant taxId correctly', function() {
        var info = parser("00020101021229370016A000000677010111021311111111111115802TH53037645406500.0063043865");
        assert.equal("TaxId", info.MerchantAccountInformation.merchantInfo.promptpayIdType);
        assert.equal("1111111111111", info.MerchantAccountInformation.merchantInfo.promptpayNumber);      
    });
    it('it should check validate CRC', function() {
        var info = parser("00020101021229370016A000000677010111011300668711111115802TH53037645406500.006304F230");
        assert.equal(true, info.CRC.valid);
        info = parser("00020101021229370016A000000677010111011300668712111115802TH53037645406500.006304F230");
        assert.equal(false, info.CRC.valid);
    });
});