const floor_div = document.querySelector('.floor')
const person = document.querySelector('.person')
const d_pad = document.querySelectorAll('.d-pad button')

window.onload = () =>{   
    for(let n = 0; n < d_pad.length; n++){
        d_pad[n].onclick = () =>{
            let class_button = d_pad[n].getAttribute('class')
            game.click(class_button)
        }
    }
}