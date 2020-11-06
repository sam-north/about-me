console.log('loaded!');

function makeBigger(e){
    console.log(e.target.innerHTML);
    var $target = $(e.target);
    //$target.hide();
    var existingPadding = $target.css('padding');
    existingPadding = existingPadding.replace("px", "");
    console.log('existingPadding: ' + existingPadding);
    var newPadding = parseInt(existingPadding) + 10;
    console.log('newPadding: ' + newPadding);
    $target.css('padding', newPadding + 'px');    
}

function makeSmaller(e){
    console.log(e.target.innerHTML);
    var $target = $(e.target);

    var existingPadding = $target.css('padding');
    existingPadding = existingPadding.replace("px", "");
    console.log('existingPadding: ' + existingPadding);
    var newPadding = parseInt(existingPadding) - 10;
    console.log('newPadding: ' + newPadding);
    $target.css('padding', newPadding + 'px');    
}



$('.sams-favorite-button').click(makeBigger);

$('.sams-favorite-button').contextmenu(makeSmaller);


var i = 0;
function change() {
 clearInterval(backgroundInterval); 
  var doc = document.getElementById("background");
  var color = ["black", "blue", "brown", "green", "red", "pink", "purple", "yellow"];
  var random = Math.floor(Math.random() * color.length);  
  doc.style.backgroundColor = color[random];
  var backgroundRandom = Math.floor(Math.random() * 5000);  
  backgroundInterval = setInterval(change, backgroundRandom);
}
var backgroundInterval = setInterval(change, 500);