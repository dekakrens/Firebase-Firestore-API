const app = require('express')();
const fire = require('./fire');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(
        '<h1>Tes Express & Firebase Cloud Firestore</h1><ul><li><p><b>GET /data/esp32</b></p></li><li><p><b>POST /data/esp32</b>  => {suhu, tinggi, berat}</p></li></ul>'
    );
});

app.get('/posyandu', (req, res) => {
    const db = fire.firestore();
    let wholeData = []
    db.collection('posyandu').orderBy('waktu', 'desc').get().then(snapshot => {
        snapshot.forEach(doc => {
            wholeData.push(doc.data())
        });
        res.send(wholeData)
    }).catch(error => {
        console.log('Error! ', error);
    });
});

app.post('/posyandu', (req, res) => {
    const db = fire.firestore();
    db.collection('posyandu').add({
        suhu: req.body.suhu,
        tinggi: req.body.tinggi,
        berat: req.body.berat,
        waktu: new Date()
    });
    res.send({
        waktu: new Date(),
        status: 'POST Success!'
    });
});

app.listen(PORT, () => {
    console.log(`Server has been started. Listening on port ${PORT}`)
});