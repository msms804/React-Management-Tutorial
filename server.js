const express = require('express');
const bodyParser = require('body-parser'); //server 모듈위한 기능
const app = express();
const port = process.env.PORT || 5000;  //서버의 포트번호는 5000번으로 열어줌

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
});

//app동작 위해 5000번 포트로 동작
app.listen(port, () => console.log(`listening on port ${port}`));

//동작하면 listening on port 5000 뜸