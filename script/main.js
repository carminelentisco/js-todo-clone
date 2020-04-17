$( document ).ready( function() {

    var listItems = ['Pane', 'Pasta', 'Fagioli', 'Pizza'];
    var list = $('.list');

    for (var i = 0; i < listItems.length; i++ ){

        // Clone del template
        var elementList = $('.template li').clone();

        // Aggingo testo 
        elementList.prepend(listItems[i]);

        // Aggingi il clone alla lista
        list.append(elementList);
    }

    var app = $('body');

    // Rimozione items
    app.on('click', '.list li i', function(){
        $(this).parent().slideUp();
    });

    app.on('click', '.list li', function(){
        $(this).toggleClass('buy');
    });

    var elementInput = $('.add-element');
    
    // Aggingi un elemento tramite l'input 
    elementInput.keyup(function (e) { 

        if (e.which == 13) {
            var text = elementInput.val().trim();
            elementInput.val("");
            
            if (text !== '') {
                var elementNew = $('.template li').clone();
                elementNew.prepend(text);
                list.append(elementNew);
            }
            
        }
    });


} ); // <------------------------------ End page