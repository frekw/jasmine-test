var User

// if running under node.js, load jsdom and jQuery
// this check isn't enough since AMD loaders might also define require...
if(typeof require === 'function'){
  global.window = require('jsdom').jsdom().createWindow()
  require('../public/js/jquery.min.js')
  global.$ = global.jQuery = window.jQuery
  
  User = require('../public/js/user.js').User
}

describe('User', function(){
  describe('#constructor', function(){
    
    it('should set the username if one is given', function(){
      var user = new User('test')
      expect(user.username).toEqual('test')
    })
    
    it('should have an empty username if one isn\'t given', function(){
      var user = new User
      expect(user.username).toBeUndefined()
    })
    
  })
  
  describe('#load', function(){
    var user
    beforeEach(function(){
      user = new User;
    })
    
    it('should load data via Ajax', function(){
      spyOn($, 'getJSON')
      user.load()
      expect($.getJSON).toHaveBeenCalled()
    })
    
    it('should load load data from /user', function(){
      spyOn($, 'getJSON')
      user.load()
      expect($.getJSON.mostRecentCall.args[0]).toEqual('/user')
    })
    
    it('should set the username properly', function(){
       spyOn($, 'getJSON')
       user.load()
       $.getJSON.mostRecentCall.args[1]({'username': 'jasmine bdd'})
       expect(user.username).toEqual('jasmine bdd')
    })
    
    it('should fire the load listeners when the data has finished loading', function(){
       var callback = jasmine.createSpy()
       spyOn($, 'getJSON')
       user.on('load', callback)
       user.load()
       $.getJSON.mostRecentCall.args[1]({'username': 'jasmine bdd'})
       expect(callback).toHaveBeenCalledWith('jasmine bdd')
    })
  })
})