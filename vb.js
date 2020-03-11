var http = require("http");

var qs = require("querystring");

var options = {
  method: "POST",
  hostname: "https://vbee.vn/api/v1/convert-tts-api",
  path: "/api/tts",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

var req = http.request(options, function(res) {
  var chunks = [];

  res.on("data", function(chunk) {
    chunks.push(chunk);
  });

  res.on("end", function(chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function(error) {
    console.error(error);
  });
});

var postData = qs.stringify({
  username: "0901736869",
  input_text:
    "chào mừng bạn đến với chúng tôi, ứng dụng chuyển văn bản thành giọng nói tiếng Việt",
  dictionary_id: "",
  application_id: "",
  voice: "hn_female_thutrang_phrase_48k-hsmm",
  rate: "1",
  audio_type: "mp3",
  type_output: "link",
  input_type: "text",
  bit_rate: "128000",
  type_campaign: "1",
  url_callback_api: "https://vbee.vn/api/v1/callback-tts-demo"
});

req.write(postData);

req.end();
