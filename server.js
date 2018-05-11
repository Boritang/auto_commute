var express    = require('express');
var app        = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/keyboard', function(req, res){
  const menu = {
      "type": 'buttons',
      "buttons": ["출근", "퇴근"]
  };

  res.set({
      'content-type': 'application/json'
  }).send(JSON.stringify(menu));
});

app.post('/message',function (req, res) {

    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };

    console.log(_obj)

    if(_obj.content == '출근')
    {	    
      var massage = {
          "message": {
              "text": '출근완료'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  "출근",
                  "퇴근"
              ]
          }
      };

      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));
    }
    else if(_obj.content == '퇴근')
    {
      var massage = {
          "message": {
              "text": '퇴근완료'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  "출근",
                  "퇴근"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));
    }
});

app.listen(9000, function() {
});
