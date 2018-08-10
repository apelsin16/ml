
(function(){

$(document).ready(function(){


    function createInfoBlock () {
        const container = $('#container');

        fetch('data.json')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error during fetch');
            })
            .then(function (data) {

                const templateScript = $('services').html();
                console.log(templateScript);
                const template = Handlebars.compile(templateScript);
                const html = template(data);
                container.append(html);
            })
    }




    $('.sidenav').sidenav({
    menuWidth: 250,
    closeOnClick: true   
  });
  $('.carousel').carousel();
  $('.collapsible.expandable').collapsible();


    createInfoBlock();
});


})();
// $.ajax({
//     url: 'data.json'
// }).done(function (data) {
//     var json = JSON.parse(data);
//     console.log(json);
//     var templateScript = $('services').html();
//     var template = Handlebars.compile(templateScript);
//     var html    = template(json);
//     container.append(html);
// })
