
(function(){

    // const data  = {
    //     "articles": [
    //         {
    //             "title": "Оборудование технологическое",
    //             "body": "Et mollit sunt duis sint voluptate officia commodo tempor excepteur do sint consectetur. Labore cillum ullamco Lorem in. Aute voluptate exercitation dolore minim esse elit enim aute dolor dolor. Mollit aute ea aute anim eiusmod eiusmod adipisicing non aliquip velit consequat sunt consectetur. Lorem mollit consequat nulla sit proident culpa in Lorem nisi."
    //         },
    //         {
    //             "title": "Электротехника",
    //             "body": "Et mollit sunt duis sint voluptate officia commodo tempor excepteur do sint consectetur. Labore cillum ullamco Lorem in. Aute voluptate exercitation dolore minim esse elit enim aute dolor dolor. Mollit aute ea aute anim eiusmod eiusmod adipisicing non aliquip velit consequat sunt consectetur. Lorem mollit consequat nulla sit proident culpa in Lorem nisi."
    //         },
    //         {
    //             "title": "Автоматизация",
    //             "body": "Et mollit sunt duis sint voluptate officia commodo tempor excepteur do sint consectetur. Labore cillum ullamco Lorem in. Aute voluptate exercitation dolore minim esse elit enim aute dolor dolor. Mollit aute ea aute anim eiusmod eiusmod adipisicing non aliquip velit consequat sunt consectetur. Lorem mollit consequat nulla sit proident culpa in Lorem nisi."
    //         },
    //         {
    //             "title": "Модернизация",
    //             "body": "Et mollit sunt duis sint voluptate officia commodo tempor excepteur do sint consectetur. Labore cillum ullamco Lorem in. Aute voluptate exercitation dolore minim esse elit enim aute dolor dolor. Mollit aute ea aute anim eiusmod eiusmod adipisicing non aliquip velit consequat sunt consectetur. Lorem mollit consequat nulla sit proident culpa in Lorem nisi."
    //         },
    //         {
    //             "title": "Техногогия производства",
    //             "body": "Et mollit sunt duis sint voluptate officia commodo tempor excepteur do sint consectetur. Labore cillum ullamco Lorem in. Aute voluptate exercitation dolore minim esse elit enim aute dolor dolor. Mollit aute ea aute anim eiusmod eiusmod adipisicing non aliquip velit consequat sunt consectetur. Lorem mollit consequat nulla sit proident culpa in Lorem nisi."
    //         },
    //         {
    //             "title": "Управление проектами",
    //             "body": "Et mollit sunt duis sint voluptate officia commodo tempor excepteur do sint consectetur. Labore cillum ullamco Lorem in. Aute voluptate exercitation dolore minim esse elit enim aute dolor dolor. Mollit aute ea aute anim eiusmod eiusmod adipisicing non aliquip velit consequat sunt consectetur. Lorem mollit consequat nulla sit proident culpa in Lorem nisi."
    //         },
    //         {
    //             "title": "Экономика энергетики",
    //             "body": "Et mollit sunt duis sint voluptate officia commodo tempor excepteur do sint consectetur. Labore cillum ullamco Lorem in. Aute voluptate exercitation dolore minim esse elit enim aute dolor dolor. Mollit aute ea aute anim eiusmod eiusmod adipisicing non aliquip velit consequat sunt consectetur. Lorem mollit consequat nulla sit proident culpa in Lorem nisi."
    //         },
    //         {
    //             "title": "Области специализации",
    //             "body": "Et mollit sunt duis sint voluptate officia commodo tempor excepteur do sint consectetur. Labore cillum ullamco Lorem in. Aute voluptate exercitation dolore minim esse elit enim aute dolor dolor. Mollit aute ea aute anim eiusmod eiusmod adipisicing non aliquip velit consequat sunt consectetur. Lorem mollit consequat nulla sit proident culpa in Lorem nisi."
    //         }
    //
    //     ]
    // }
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
    console.log(data);

                const templateScript = $('services').html();
                const template = Handlebars.compile(templateScript);
                const html = template(data);
                container.append(html);
            })
    };

    createInfoBlock();

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

    $('.sidenav').sidenav({
    menuWidth: 250,
    closeOnClick: true   
  });
  $('.carousel').carousel();
  $('.collapsible.expandable').collapsible();



});


// function createInfoBlock () {

// var container = document.getElementById('container');
// var template = document.getElementById('template-accordeon');
// var tmpl = _.template(template.textContent);
// var compiled = _.template(tmpl);

// console.log(container);
// console.log(document.getElementById('template-accordeon'));
// console.log(template);
// console.log(tmpl);
// console.log(compiled);

// fetch("../data.json")
// .then(function(response){
//   if (response.ok){
//     return response.json();
//   }
//   throw new Error('Error during fetch');
// })
// .then(function(data){
//   var info = _.map(data.articles, function(item){
//           return {
//         title:item.title,
//         body: item.body
//         };

//   });
// render(compiled, data, container);
//   })
// }

// function render(template, data, parent) {
//   var htmlString = ' ';
//   _.forEach(data, function(item) {
//     htmlString += template(item);
//   });

// parent.innerHTML = htmlString;
// }

// createInfoBlock ();
})();