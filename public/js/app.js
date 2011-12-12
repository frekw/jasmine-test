var user = new User;
user.on('load', function(){
  $('#user-widget')
    .addClass('logged-in')
    .empty()
    .append('<p>Welcome, ' + user.username + '</p>')
    .append('<p><a href="#">Log out</a></p>')
})

$(function(){
  user.load()
})