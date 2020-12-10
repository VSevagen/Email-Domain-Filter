var EmailArray = [
  "sevagenv@gmail.com",
  "sundar@google.com",
  "ajay@cometchat.com",
  "sevagen@gnome.org",
];

for (i = 0; i < EmailArray.length; i++) {
  const check = EmailArray[i].slice(-9);
  if (check != "gmail.com") {
    var res = EmailArray[i].split("@")[1];

    const url =
      "https://api.urlbox.io/v1/1pwobKqZIOBI3ycJ/png?url=" +
      res +
      "&thumb_width=600&ttl=86400";
    const Name = res;
    const path = "/home/sevagen/Documents/EmailProj/screenshots/";

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

    // var file = "/home/sevagen/Documents/EmailProj" + Name;
    // var MoveTo = path + Name;

    // File.Move(file, MoveTo);
  }
}
