let express = require('express')
const app = express()
const router = express.Router();
const fs = require('fs')


app.get('/', (req, res) => {
    res.send('Express setup here');
  });

app.get('/endpoint', (req, res) => {
    res.send('Endpoint here');
});

app.get('/createUser', (req, res) => {
    const { name, session, address, age } = req.query;

    const userInfo = { name, session, address, age};
    fs.writeFile('userInfo.json', JSON.stringify(userInfo, null, 2), (err) => {
        if(err){
            return res.status(500)
        }
    })
    res.json({
        name: name,
        session: session,
        address: address,
        age: age
    })
});


app.listen(9000)