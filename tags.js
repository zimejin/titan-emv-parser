/*!
 * tags
 * This is tag information based on EMV QR Code Specification for Payment Systems Merchant
 * https://www.emvco.com/emv-technologies/qrcodes/
 * Note that I use the page 18 on 31 July, 2017 version 
 * 
 * each tag will contain with these following information
 * id - tag id
 * name - tag name
 * format - N (number), S (string), ans (alphanumeric special)
 * presence - M (mandatory), O (optional), C (conditional)
 * 
 * @license MIT
 */
var tags = {
  "00": {
    id: "00",
    name: "PointOfInitiationMethod",
    format: "N",
    presence: "M",
  },
  "01": {
    id: "01",
    name: "QRCategory",
    format: "N",
    presence: "O",
    category: {},
  },
  "15": {
    id: "15",
    name: "Organization Number + Forwarding Number + Merchant ID",
    format: "N",
    presence: "M",
    details: {},
  },
  "26": {
    id: "26",
    name: "Reverse Domain Name + Sub Merchant Number + Order Number",
    format: "ans",
    presence: "M",
    merchant: "PromptPay",
    subdomainInfo: {},
  },
  "52": {
    id: "52",
    name: "MerchantCategory",
    format: "N",
    presence: "M",
  },
  "53": {
    id: "53",
    name: "CurrencyCode",
    format: "N",
    presence: "M",
  },
  "54": {
    id: "54",
    name: "Amount",
    format: "ans",
    presence: "C",
  },
  "58": {
    id: "58",
    name: "CountryCode",
    format: "ans",
    presence: "M",
  },
  "59": {
    id: "59",
    name: "MerchantName",
    format: "ans",
    presence: "M",
  },
  "60": {
    id: "60",
    name: "MerchantCity",
    format: "ans",
    presence: "M",
  },
  "63": {
    id: "63",
    name: "CRC",
    format: "ans",
    presence: "M",
    valid: true, // check that it valid CRC
  },
};

module.exports = tags;
