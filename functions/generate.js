exports.handler = (event, context, callback) => {
  const cookie = require("cookie");

  const netlifyCookie = cookie.serialize("nf_jwt", "sometoken", {
    secure: true,
    path: "/",
    expires: new Date()
  });

  console.log(netlifyCookie);
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({})
  });
};
