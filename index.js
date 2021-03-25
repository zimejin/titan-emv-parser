/*!
 * promptpay-emvco-parser
 * JavaScript library to parse the promptpay qrcode into emvco object
 * <https://github.com/apemon/promptpay-emv-parser>
 *
 * Refs:
 * - https://www.blognone.com/node/95133
 * - https://www.emvco.com/emv-technologies/qrcodes/
 * - https://github.com/dtinth/promptpay-qr
 * - https://github.com/mhdnamvar/node-emv.git
 * 
 * @license MIT
 */
var crc = require('crc');
var emv_tags = require('./tags.js');

function parse(emvdata: string) {
    // tokenize the string first
    var tags = _parseTag(emvdata);

    // read from each tag
    var result = {};
    var keys = Object.keys(_tags);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      var value = tags[key];
      if (value) {
        var tag = _tags[key];
        var temp = tag;
        temp.data = value.data;
        result[tag.name] = temp;
        // check subdomain info
        if (key == "15") temp.details = _parseOrganisationInfo(temp);
        if (key == "26") temp.subdomainInfo = _parseSubdomains(temp);
      }
    }
    return result;
  }

function _parseOrganisationInfo(tag: { data: any }) {
    let data, info, paymentInfo;
    data = _parseTag(tag.data);

    info = Object.values(data)[0]
      ["data"].split("*")
      .filter((i: string) => i !== "");

    paymentInfo = {
      organizationNumber: info[0],
      forwardingNumber: info[1],
      merchantID: info[2],
    };
    return paymentInfo;
  }

function _parseTag(emvdata) {
    var tags = {};
    var index = 0;
    var data = emvdata;
    while (index < emvdata.length) {
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
    return tags;
}

module.exports = parse
