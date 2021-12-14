var ids = require("nanoid");

function addRequestId(req, context, _events, done) {
  req.headers["X-Requested-With"] = ids.nanoid(8);
  req.headers["content-language"] = "en";
  return done();
}

function addJsonDataforAddressVerify(req, context, _events, done) {
  // req.headers["Content-Type"] = "application/json";
  // req.headers["Content-Length"] = "calculated when request is sent";
  // req.headers["Host"] = "calculated when request is sent";
  req.json = 
    {
      primary_line: "deliverable",
      city: "San Francisco",
      state: "CA",
      zip_code: "111111"
    };
  return done();
}

// function updateAddressId(request, response, context, ee, next) {
//   var address_id = response.body["_id"];
//   context.vars["addressid"] = address_id;
//   return next();
// }

exports.addRequestId=addRequestId;
exports.addJsonDataforAddressVerify=addJsonDataforAddressVerify;
// exports.updateAddressId=updateAddressId;