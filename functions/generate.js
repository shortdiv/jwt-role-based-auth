exports.handler = (event, context, callback) => {
  console.log("hello from inside function");
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({})
  });
};
