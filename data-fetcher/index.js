require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const axios = require("axios");
const FormData = require("form-data");

const bodyFormData = new FormData();
bodyFormData.append("email", process.env.EMAIL);
bodyFormData.append("password", process.env.PASSWORD);

console.log(process.env.URL);
axios({
  method: "post",
  url: "https://www.blackdesertonline.com/?re=login",
  data: bodyFormData,
  headers: {
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "max-age=0",
    Connection: "keep-alive",
    "user-agent":
      "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Mobile Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
})
  //   .post("https://www.blackdesertonline.com/?re=login", {
  //     headers: {
  //       "user-agent":
  //         "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Mobile Safari/537.36",
  //       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //        "username=John&password=Smith&grant_type=password"
  //     }
  //   })
  .then(data => console.log(data))
  .catch(error => console.log(error));
