const display = document.querySelector('.display')
const sprites = []
const model_cube = '<div class="cube" >\
            <div class="face face--front"></div>\
            <div class="face face--right" style="filter: brightness(80%);"></div>\
            <div class="face face--left" style="filter: brightness(70%);"></div>\
            <div class="face face--bottom" style="filter: brightness(50%);"></div>\
            <div class="face face--back"></div>\
            <div class="face face--top"></div>\
        </div>'

function template(size = 0, x = 0, y = 0) {
    let x_template = ''
    let y_template = ''

    for (let n = 0; n < x; n++) {
        x_template += `${size}px `
    }

    for (let n = 0; n < y; n++) {
        y_template += `${size}px `
    }

    return [x_template, y_template]
}

function generate(display = Element, map = [], model = []) {

    let width = 50

    let [x, y] = template(width, map[0][0].length, map[0].length)
    let [x_display, y_display] = template(width, map[0].length, map.length)

    display.style.gridTemplateColumns = '1fr'
    display.style.gridTemplateRows = y_display
    

    for (map_layer of map) {
        let layer = document.createElement('div')
        layer.setAttribute('class','subs')
        layer.style.minWidth = `${width*map[0][0].length}px`
        layer.style.minHeight = `${width*map[0].length}px`
        layer.style.gridTemplateColumns = x
        layer.style.gridTemplateRows = y

        for(l of map_layer){
            for(c of l){
                c == 1 ? layer.innerHTML += model : layer.innerHTML += '<div></div>'
            }
        }
        display.appendChild(layer)
    }
    display.children[display.children.length - floor].setAttribute('class', 'floor')
    display.children[display.children.length - floor].innerHTML += '<div class="person">\
    <div class="sprite"></div>\
    </div>'
}

generate(display, map, model_cube)