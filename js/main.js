let square_blue = $('<div style="width: 70px; height: 70px; margin: 5px; background-color: deepskyblue;""></div>');

$(document).ready(function() {
    setTimeout(function(index) {
        for (i = 0; i < 100; i++) {
            let square_blue = $('<div style="width: 70px; height: 70px; margin: 5px; background-color: deepskyblue;""></div>');
            document.body.prepend(square_blue[0]);
        }
    }, 2000);


    setTimeout(function() {
        for (i = 0; i < 100; i++) {
            let squarePurple = $('<div style="width: 100px; height: 100px; margin: 5px; background-color: purple;""></div>');
            document.body.prepend(squarePurple[0])
        }
    }, 4000);
    setTimeout(function() {
        $('div').each(function(index) {
            $(this).prepend(index + 1);
        });
    }, 6000);


    setTimeout(function() {
        $("div").each(function(index) {
            if (i % 3 - 2 === 0 && index % 15 !== 0) {
                let red = $(this).css('background-color', 'red');
                $(this).css('border:20px', 'solid transparent', 'border-top:20px ', 'solid green');
            }
            if (i % 20 === 0) {
                $(this).css('background-color', 'yellow')
            }
        });
        setTimeout(function() {
            $('div.delete').remove();
        }, 10000);
    }, 8000);

});
