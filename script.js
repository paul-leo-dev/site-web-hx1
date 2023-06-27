let blocks = document.getElementsByClassName("block-visible");
let toggle = document.getElementsByClassName("toggle");
let classes = .classList;

toggle[0].addEventListener('click', function() {
    let result = classes.toggle("c");
  
    if (result) {
      span.textContent = `'c' ajouté ; classList vaut désormais "${classes}".`;
    } else {
      span.textContent = `'c' retiré ; classList vaut désormais "${classes}".`;
    }
})