(function(){    function createInfoBlock () {        const container = $('#container');        fetch('data.json')            .then(function (response) {                if (response.ok) {                    return response.json();                }                throw new Error('Error during fetch');            })            .then(function (data) {                const templateScript = document.getElementById("services").innerHTML;                const template = Handlebars.compile(templateScript);                const html = template(data);                container.append(html);            })    };    createInfoBlock();$(document).ready(function(){    $('.sidenav').sidenav({        menuWidth: 250,        closeOnClick: true    });    $('.carousel').carousel();    $('.collapsible.expandable').collapsible();    $('.tabs').tabs();    console.log('Doc ready');    // function tabs () {    //     event.preventDefault();    //     $(this).toggleClass('active');    //     $(this).siblings('.tab').removeClass('active');    //     var divID = $(this).children().attr('href');    //     $('div.tab-content').hide();    //     $(divID).show();    // }    // $('.tab').click(tabs);    // $('.tab').focus(tabs);});    $('div.tab-content').hide().first().show();    console.log($('div.tab-content'));})();