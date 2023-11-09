$(document).ready(function(){
  $('.hamburger-lines').click(function(){
      $('.hamburger-lines').toggleClass('active')
      $('.nav-list').fadeToggle(500)
  })
})