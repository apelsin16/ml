var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

// var elem1 = document.querySelector('.button-collapse');
// var instance1 = M.Sidenav.getInstance(elem1);

$(document).ready(function(){
  $('.sidenav').sidenav({
    
    closeOnClick: true
   
  });
});


