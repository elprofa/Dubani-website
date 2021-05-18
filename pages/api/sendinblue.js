const SibApiV3Sdk = require('sib-api-v3-sdk');
const apiInstance = require('sib-api-v3-sdk').SMTPApi;
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
// console.log(SibApiV3Sdk)
// var apiInstance = new SibApiV3Sdk.SMTPApi();

const sendinblue = (sendSmtpEmail) => {
  apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
      return true;
    }, function(error) {
      console.error(error);
      return false;
    });
}

module.exports = sendinblue