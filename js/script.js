var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});


$(document).ready(function(){
  $('.sidenav').sidenav({
    menuWidth: 250,
    closeOnClick: true   
  });
  $('.carousel').carousel();

});


