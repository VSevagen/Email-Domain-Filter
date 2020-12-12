const fs = require("fs");

fs.readFile("data.csv", function read(err, data) {
  if (err) {
    throw err;
  }

  // Copying data from csv to array.
  var content = data.toString();
  const EmailArray = new Array();
  var lines = content.split("\n");
  EmailArray.push(lines);

  // Comparing and ignoring gmail accounts
  for (i = 0; i < EmailArray[0].length; i++) {
    const check = EmailArray[0][i].split("@")[1];
    if (check != "gmail.com") {
      var res = EmailArray[0][i].split("@")[1];
      var SKIP_PERSONAL = new Boolean(true);
    }

    // Skips this step if res == gmail account
    if (SKIP_PERSONAL) {
      const url =
        "https://api.urlbox.io/v1/1pwobKqZIOBI3ycJ/png?url=" +
        res +
        "&thumb_width=600&ttl=86400";
      const Name = res;
      const path = "/home/sevagen/Documents/Email-Domain-Filter/screenshots/";

      var fs = require("fs"),
        request = require("request");

      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          console.log("content-type:", res.headers["content-type"]);
          console.log("content-length:", res.headers["content-length"]);

          request(uri)
            .pipe(fs.createWriteStream(path + filename))
            .on("close", callback);
        });
      };

      download(url, Name, function () {
        console.log("done");
      });
    }
  }
});
