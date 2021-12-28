// File: generic-helper.js
// Project: Credit Repair Cloud
// File Created: Friday, 17-12-2021, 09:30 am
// Author: Karthik Hebbar A
// Last Modified: Monday, 27-12-2021, 05:58 pm
// Modified By: Karthik Hebbar A<karthik.hebbar@altorumleren.com>
// This script contains the functions and the body for the cloud mail api's

var ids = require("nanoid");
// var jsonMerger = require("json-merger");
// const fs = require('fs');
// var mergeJSON = require("merge-json") ;

// function appendJson(req, context, _events, done){
//     // var result = jsonMerger.mergeFile("../AddressAPI.json");
//     // result = jsonMerger.mergeFile("../WalletAPI.json");
//     var addressFileObject = require("../AddressAPI.json");
//     var wallietFileObject = require("../WalletAPI.json");
//     var result = mergeJSON.merge(addressFileObject, wallietFileObject);
//     var resultString = JSON.stringify(result);
//     fs.writeFileSync("result.json", resultString);

  // fs.readFile('result.json', 'utf-8', (err, result) => {
  //     if (err) {
  //         throw err;
  //     }

  //     // parse JSON object
  //     const user = JSON.parse(result.toString());
  //     return user;
  // });
  // return done();
// }

function addRequestId(req, context, _events, done) {
  req.headers["X-Requested-With"] = ids.nanoid(8);
  req.headers["content-language"] = "en";
  return done();
}

function addJsonDataforAddressVerify(req, context, _events, done) {
  var primary_line = "Bangalore";
  context.vars["primary_line"]=primary_line;
  req.json = 
  {
    primary_line: context.vars.primary_line,
    secondary_line: "Karnataka",
    city: "Electronic City",
    state: "Karnataka",
    zip_code: "123456"
  };
  return done();
}

function addJsonDataforAddressVerifyNegativeTest1(req, context, _events, done) {
  req.json = 
  {
    secondary_line: "Karnataka",
    city: "Electronic City",
    state: "Karnataka",
    zip_code: "123456"
  };
  return done();
}

function addJsonDataforCreateWallet(req, context, _events, done) {
  var registration_id=""+Math.floor(Math.random()*100000);
  var wallet_type="cloudmail";
  context.vars["registration_id"]=registration_id;
  context.vars["wallet_type"]=wallet_type;
  req.json = 
      {
        registration_id: context.vars.registration_id,
        wallet_type: context.vars.wallet_type
      };
  return done();
}

function addJsonDataforCreateWalletNegativeTest1(req, context, _events, done) {
  var wallet_type="cloudmail";
  context.vars["wallet_type"]=wallet_type;
  req.json = 
      {
        registration_id: context.vars.registration_id,
        wallet_type: context.vars.wallet_type
      };
  return done();
}

function addJsonDataforCreateWalletNegativeTest2(req, context, _events, done) {
  var registration_id="TestingwithAlphabet";
  var wallet_type="cloudmail";
  context.vars["registration_id"]=registration_id;
  context.vars["wallet_type"]=wallet_type;
  req.json = 
      {
        registration_id: context.vars.registration_id,
        wallet_type: context.vars.wallet_type
      };
  return done();
}

function addJsonDataforCreateWalletNegativeTest3(req, context, _events, done) {
  var registration_id="Testingwith123";
  var wallet_type="cloudmail";
  context.vars["registration_id"]=registration_id;
  context.vars["wallet_type"]=wallet_type;
  req.json = 
      {
        registration_id: context.vars.registration_id,
        wallet_type: context.vars.wallet_type
      };
  return done();
}

function addJsonDataforCreateWalletNegativeTest4(req, context, _events, done) {
  var registration_id=""+Math.floor(Math.random()*100000);
  var wallet_type="cloudmailapi";
  context.vars["registration_id"]=registration_id;
  context.vars["wallet_type"]=wallet_type;
  req.json = 
      {
        registration_id: context.vars.registration_id,
        wallet_type: context.vars.wallet_type
      };
  return done();
}

function addJsonDataforCreateWalletNegativeTest5(req, context, _events, done) {
  var registration_id=""+Math.floor(Math.random()*100000);
  var wallet_type="12345678";
  context.vars["registration_id"]=registration_id;
  context.vars["wallet_type"]=wallet_type;
  req.json = 
      {
        registration_id: context.vars.registration_id,
        wallet_type: context.vars.wallet_type
      };
  return done();
}

function addJsonDataforCreateWalletNegativeTest6(req, context, _events, done) {
  var registration_id=""+Math.floor(Math.random()*100000);
  var wallet_type="12.12345678";
  context.vars["registration_id"]=registration_id;
  context.vars["wallet_type"]=wallet_type;
  req.json = 
      {
        registration_id: context.vars.registration_id,
        wallet_type: context.vars.wallet_type
      };
  return done();
}

function addJsonDataforCreateWalletNegativeTest7(req, context, _events, done) {
  var registration_id="InvalidId";
  var wallet_type="Invalid12.12345678";
  context.vars["registration_id"]=registration_id;
  context.vars["wallet_type"]=wallet_type;
  req.json = 
      {
        registration_id: context.vars.registration_id,
        wallet_type: context.vars.wallet_type
      };
  return done();
}

// function updateAddressId(request, response, context, ee, next) {
//   var address_id = response.body["_id"];
//   context.vars["addressid"] = address_id;
//   return next();
// }

function addJsonDataforUpdateBalance(req, context, _events, done) {
  req.json = 
    {
        registration_id : context.vars.registration_id,
        wallet_type: context.vars.wallet_type,
        amount: "50",
        // transaction_refrence_id: ""
    };
  return done();
}

function addJsonDataforUpdateBalanceNegativeTest1(req, context, _events, done) {
  req.json = 
    {
        registration_id : context.vars.registration_id,
        wallet_type: context.vars.wallet_type,
        amount: "0",
        // transaction_refrence_id: ""
    };
  return done();
}

function addJsonDataforUpdateBalanceNegativeTest2(req, context, _events, done) {
  req.json = 
    {
        registration_id : context.vars.registration_id,
        wallet_type: context.vars.wallet_type,
        amount: "ABC!24",
        // transaction_refrence_id: ""
    };
  return done();
}

function addJsonDataforUpdateBalanceNegativeTest3(req, context, _events, done) {
  req.json = 
    {
        registration_id : "",
        wallet_type: context.vars.wallet_type,
        amount: "100",
        // transaction_refrence_id: ""
    };
  return done();
}

function addJsonDataforUpdateBalanceNegativeTest4(req, context, _events, done) {
  req.json = 
    {
        registration_id : context.vars.registration_id,
        wallet_type: "",
        amount: "100",
        // transaction_refrence_id: ""
    };
  return done();
}

function addJsonDataforUpdateBalanceNegativeTest5(req, context, _events, done) {
  req.json = 
    {
        registration_id : "",
        wallet_type: "",
        amount: "100",
        // transaction_refrence_id: ""
    };
  return done();
}

function addJsonDataforUpdateBalanceNegativeTest6(req, context, _events, done) {
  req.json = 
    {
        registration_id : "",
        wallet_type: "",
        amount: "xyz",
        // transaction_refrence_id: ""
    };
  return done();
}

exports.addRequestId=addRequestId;
exports.addJsonDataforAddressVerify=addJsonDataforAddressVerify;
exports.addJsonDataforCreateWallet=addJsonDataforCreateWallet;
exports.addJsonDataforUpdateBalance=addJsonDataforUpdateBalance;
exports.addJsonDataforCreateWalletNegativeTest1=addJsonDataforCreateWalletNegativeTest1;
exports.addJsonDataforCreateWalletNegativeTest2=addJsonDataforCreateWalletNegativeTest2;
exports.addJsonDataforCreateWalletNegativeTest3=addJsonDataforCreateWalletNegativeTest3;
exports.addJsonDataforCreateWalletNegativeTest4=addJsonDataforCreateWalletNegativeTest4;
exports.addJsonDataforCreateWalletNegativeTest5=addJsonDataforCreateWalletNegativeTest5;
exports.addJsonDataforCreateWalletNegativeTest6=addJsonDataforCreateWalletNegativeTest6;
exports.addJsonDataforCreateWalletNegativeTest7=addJsonDataforCreateWalletNegativeTest7;
exports.addJsonDataforUpdateBalanceNegativeTest1=addJsonDataforUpdateBalanceNegativeTest1;
exports.addJsonDataforUpdateBalanceNegativeTest2=addJsonDataforUpdateBalanceNegativeTest2;
exports.addJsonDataforUpdateBalanceNegativeTest3=addJsonDataforUpdateBalanceNegativeTest3;
exports.addJsonDataforUpdateBalanceNegativeTest4=addJsonDataforUpdateBalanceNegativeTest4;
exports.addJsonDataforUpdateBalanceNegativeTest5=addJsonDataforUpdateBalanceNegativeTest5;
exports.addJsonDataforUpdateBalanceNegativeTest6=addJsonDataforUpdateBalanceNegativeTest6;
exports.addJsonDataforAddressVerifyNegativeTest1=addJsonDataforAddressVerifyNegativeTest1;
// exports.appendJson=appendJson;
// exports.updateAddressId=updateAddressId;