
(function(){

$(document).ready(function(){
    $('.sidenav').sidenav({
        menuWidth: 250,
        closeOnClick: true
    });
    $('.carousel').carousel();
    $('.collapsible.expandable').collapsible();
    $('.tabs').tabs();
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

                const templateScript = document.getElementById("services").innerHTML;
                const template = Handlebars.compile(templateScript);

                const html = template(data);
                container.append(html);
            })
    };
    createInfoBlock();


});

})();

