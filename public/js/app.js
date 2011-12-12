$(function(){
  $.getJSON('/user', function(data){
    if(!data && !data.username) throw new Error('Invalid response')
    
    $('#user-widget')
      .addClass('logged-in')
      .empty()
      .append('<p>Welcome, ' + data.username + '</p>')
      .append('<p><a href="#">Log out</a></p>')
  })
})