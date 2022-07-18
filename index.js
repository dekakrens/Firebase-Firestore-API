const app = require("express")();
// const fire = require("./fire");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const PORT = process.env.PORT | 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    "<h1>Tes Express & Firebase Cloud Firestore</h1><ul><li><p><b>GET /data/esp32</b></p></li><li><p><b>POST /data/esp32</b>  => {suhu, tinggi, berat}</p></li></ul>"
  );
});

//match databaseName with your database name
app.get("/mutu", (req, res) => {
  // const db = fire.firestore();
  // let wholeData = [];
  // db.collection("databaseName")
  //   .orderBy("date", "desc")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       wholeData.push(doc.data());
  //     });
  //     res.send(wholeData);
  //   })
  //   .catch((error) => {
  //     console.log("Error! ", error);
  //   });

  console.log("first");

  axios
    .get("https://stage-api-ops.mutuapps.com/v1/operation/activity")
    .then((axiosRes) => {
      // res.send(res.data);
      console.log(axiosRes.data);
      res.send(axiosRes.data);
    })
    .catch((e) => {
      // res.send(e?.response);
    });
});

// app.post("/databaseName", (req, res) => {
//   const db = fire.firestore();
//   db.collection("databaseName").add({
//     //change this collections according to your need
//     temperature: req.body.suhu,
//     height: req.body.tinggi,
//     weight: req.body.berat,
//     date: new Date(),
//   });
//   res.send({
//     date: new Date(),
//     status: "POST Success!",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server has been started. Listening on port ${PORT}`);
});
