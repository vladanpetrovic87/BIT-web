$('li').click(function(){
    $(this).remove();
});


// var li = document.querySelector('li');

// document.addEventListener('click', function(event) {
//     if()
// });


// var elList = document.querySelectorAll('li');

// elList.forEach(function (el) {
//     el.addEventListener();
// });



var $selected = $('body');

var $created = $('<h1>');

$created.text('Add some heading!');

$selected.prepend($created);


// $selected.append($('<h1>').text('Added text'));