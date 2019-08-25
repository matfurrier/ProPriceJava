var request = require("request");
var FormData = require("form-data");
var fs = require("fs");

var baseUri =
  "https://api.cognitive.microsoft.com/bing/v7.0/images/visualsearch";
var subscriptionKey = "7fb5f51b56474420921c8d98679ecf9d";
var imagePath = "C:UsersorenlDesktopswitch.jpeg";

function requestCallback(err, res, body) {
  console.log(JSON.stringify(JSON.parse(body)));
}

var form = new FormData();
form.append("image", fs.createReadStream(imagePath));

form.getLength((err, length) => {
  if (err) {
    console.log('hi');
    return requestCallback(err);
  }
  var r = request.post(baseUri, requestCallback);
  r._form = form;
  r.setHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
});
