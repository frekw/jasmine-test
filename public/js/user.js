var EventEmitter;
if(typeof require === 'function'){
  var EventEmitter = require('events').EventEmitter
}

function User(username){
  if(username) this.username = username
}
  
User.prototype = new EventEmitter
  
User.prototype.load = function(){
  var self = this;
  $.getJSON('/user', function(data){
    if(!data && !data.username) throw new Error('Invalid response')
    self.username = data.username
    self.emit('load', self.username)
  })
}
  
if(typeof define === 'function' && define.amd)
  define(function() { return User })
else if (typeof module !== 'undefined' && module.exports)
  module.exports.User = User