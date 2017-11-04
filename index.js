/*!
 * promptpay-emvco-parser
 * JavaScript library to parse the promptpay qrcode into emvco object
 * <https://>
 *
 * Refs:
 * - https://www.blognone.com/node/95133
 * - https://www.emvco.com/emv-technologies/qrcodes/
 * - https://github.com/dtinth/promptpay-qr
 * - https://github.com/mhdnamvar/node-emv.git
 * 
 * @license MIT
 */

 // 00020101021229370016A000000677010111011300668799210195802TH53037645406500.006304ABAC
 
 function parse(emvdata) {
    // tokenize the string first
    var tags = {};
    var index = 0;
    var data = emvdata;
    while(index < emvdata.length) {
        var data = emvdata.substring(index);
        // get ID tag
        var tagId = data.substr(0, 2);
        // get tag length
        var tagLength = parseInt(data.substr(2, 2));
        // get tag information
        var tagInformation = data.substr(4, tagLength);
        var tag = {
            "id": tagId,
            "length": tagLength,
            "data": tagInformation
        }
        tags[tagId] = tag;
        index += tagLength + 4;
    }
    
    // read from each tag

    // construct object information
 }

 parse("00020101021229370016A000000677010111011300668799210195802TH53037645406500.006304ABAC");
 //module.exports = parse

