let press = false

function med(n = 0) {
    n > 180 ? n = 180 : {}
    n < -180 ? n = -180 : {}
    return n
}

window.onclick = (event) => {
    press = !press
    let screenX = window.innerWidth / 2
    let screenY = window.innerHeight / 2
    let degX = med((event.clientX - screenX))
    let degY = med((event.clientY - screenY))

    display.style.transform = `rotateY(${degX}deg) rotateX(${degY * -1}deg)`
    person.children[0].style.transform = `rotateY(${-degX * -1}deg)`
    document.body.classList.toggle('click')
}

window.onmousemove = (event) => {
    if (press) {
        let screenX = window.innerWidth / 2
        let screenY = window.innerHeight / 2
        let degX = med((event.clientX - screenX))
        let degY = med((event.clientY - screenY))

        display.style.transform = `rotateY(${degX}deg) rotateX(${degY * -1}deg)`
        person.children[0].style.transform = `rotateY(${-degX * -1}deg)`

        
    }
}