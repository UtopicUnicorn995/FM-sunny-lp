$(document).ready(function(){
  $('.hamburger-lines').click(function(){
      $('.hamburger-lines').toggleClass('active')
      $('.nav-list').fadeToggle(500)
  })

  var win = $(this)
  if (win.width() >= 786) { 
    $('.nav-list').show()
  }

  $(window).on('resize', function(){
    if (win.width() >= 786) { 
      $('.nav-list').show()
    }else{
      $('.nav-list').hide()
    }
});
})