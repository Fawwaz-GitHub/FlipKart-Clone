const { v4: uuidv4 } = require('uuid');
const paytmchecksum = require('../paytm/PaytmChecksum.js')
const formidable = require('formidable')
const https = require('https')

const addPaymentGateway = async (request, response) => {

    let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
    let paytmParams = {};
    paytmParams['MID']= process.env.PAYTM_MID;
    paytmParams['WEBSITE']= process.env.PAYTM_WEBSITE;
    paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
    paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
    paytmParams['ORDER_ID'] = uuidv4();
    paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
    paytmParams['TXN_AMOUNT'] = `${request.body.amount}`;
    paytmParams['CALLBACK_URL'] = process.env.CALLBACK_URL;
    paytmParams['EMAIL'] = 'xyz@gmail.com'
    paytmParams['MOBILE_NO'] = '9090909090';

    try {
       let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
       let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmCheckSum
       }
       console.log('CHECKSUM',paytmCheckSum);
       response.status(200).json(params);
    } catch (error) {
       response.status(500).json({ error: error.message }) 
    }
}

const paytmResponse = async (req ,res) => {
   const form = new formidable.IncomingForm();
   let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
   let paytmCheckSum = req.body.CHECKSUMHASH
   delete req.body.CHECKSUMHASH
   let params = JSON.parse(JSON.stringify(req.body))

   let isVerifySignature = paytmchecksum.verifySignature(params, paytmMerchantKey, paytmCheckSum)
   if (isVerifySignature) {
      let paytmParams = {};
      paytmParams['MID'] = params.MID;
      paytmParams['ORDERID'] = params.ORDERID;

      paytmchecksum.generateSignature(paytmParams, paytmMerchantKey).then(function(checksum){
         paytmParams['CHECKSUMHASH'] = checksum

         let post_data = JSON.stringify(paytmParams);

         let options = {
            hostname: 'securegw-stage.paytm.in',
            port : 443,
            path: '/order/status',
            headers: {
               'Content-Type': 'application/json',
               'Content-Length' : post_data.length 
            }
         }

         let response = "";
         let post_req = https.request(options, function(post_res){
            post_res.on('data', function(chunk){
               response += chunk;
            })

            post_res.on('end', function(){
               let result = JSON.parse(response)
               res.redirect(process.env.FRONT_END_URL)
            })
         })

         post_req.write(post_data);
         post_req.end();
      })
   } else {
      console.log('Checksum Mismatched');
   }
}

module.exports = { addPaymentGateway, paytmResponse }