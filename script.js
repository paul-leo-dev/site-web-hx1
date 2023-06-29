let add_blocks = document.getElementsByClassName("additional");
let toggle = document.getElementsByClassName("toggle");
let anti_toggle = document.getElementsByClassName("anti_toggle")

console.log(toggle)

for (let i = 0; i < toggle.length; i++) {

    console.log("Hey")

    toggle[i].addEventListener('click', function() {
        add_blocks[i].classList.toggle('visible')
        add_blocks[i].classList.toggle('not-visible')
    
        toggle[i].classList.toggle("not-visible")
    })
    
    anti_toggle[i].addEventListener('click', function() {
        add_blocks[i].classList.toggle('visible')
        add_blocks[i].classList.toggle('not-visible')
    
        toggle[i].classList.toggle("not-visible")
    })
    
}