const express   = require('express');
const app       = express();
const port      = 5000;

app.use(express.static('assets'))
app.use('/css', express.static(__dirname + 'assets/css'))
app.use('/img', express.static(__dirname + 'assets/img'))
app.use('/js', express.static(__dirname + 'assets/js'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
  })

app.listen(port, () => {
  console.log('Listening on port ' + port);
})