var express = require('express')
  , app     = express.createServer()
  
app.configure(function(){
  app.use(express.bodyParser())
  app.use(express.static(__dirname + '/public'))
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true}))
  app.set('view engine', 'jade')
})

app.get('/', function(req, res){
  res.render('index.jade', { layout: false })
})


app.get('/user', function(req, res){
  res.json({username:'Jasmine BDD'})
})

app.listen(3000)