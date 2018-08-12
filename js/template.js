(function (){

    function createInfoBlock () {
        console.log('1');
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
                console.log('2');
            })
    };

    createInfoBlock();

}());