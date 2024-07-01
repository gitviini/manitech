const model_cube = '<div class="cube" >\
            <div class="face face--front"></div>\
            <div class="face face--right"></div>\
            <div class="face face--left"></div>\
            <div class="face face--bottom"></div>\
            <div class="face face--back"></div>\
            <div class="face face--top"></div>\
        </div>'

let map = [
    [1,1,1,1,1],
    [1,0,1,0,1],
    [1,1,0,0,1],
    [1,0,1,0,1],
    [1,1,1,1,1],
]

function template(size=0,x=0,y=0){
    let x_template = ''
    let y_template = ''

    for(let n = 0 ; n < x; n++){
        x_template += `${size}px `
    }

    for(let n = 0 ; n < y; n++){
        y_template += `${size}px `
    }

    return [x_template, y_template]
}

function generate(display=Element,map=[], model=[]){

    let [x, y] = template(50,map[0].length,map.length)
    display.style.gridTemplateColumns = x
    display.style.gridTemplateRows = y

    for(l of map){
        console.log(l)
        for(c of l){
            c == 1 ? display.innerHTML += model : display.innerHTML += '<div></div>'
        }
    }
}

generate(display, map, model_cube)