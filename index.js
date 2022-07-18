const app = require("express")();
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

app.get("/mutu", (req, res) => {
  axios
    .get("https://stage-api-ops.mutuapps.com/v1/operation/activity")
    .then((axiosRes) => {
      res.send(axiosRes.data);
    });
});

app.listen(PORT, () => {
  console.log(`Server has been started. Listening on port ${PORT}`);
});
