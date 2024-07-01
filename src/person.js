class Game {
    constructor(container = Element, person = Element, map = [], sub = []) {
        this.person = person
        this.tick = 120
        this.step = 50
        this.width = 25
        this.size = [container.offsetHeight, container.offsetWidth]
        this.sub = sub
        this.map = map
        this.position = [0,0]
        this.position_map = [0,0]
        this.container = container
        this.key = []
        this.velocity = []
        this.init_position()
        this.get_key()
    }



    get_key() {
        this.person.style.inset = `${this.position[0] * this.step}px ${this.position[1] * this.step}px`
        document.onkeydown = (event) => {
            this.key.indexOf(event.key) == -1 ? this.key.push(event.key) : {}
            this.moviment()
            this.show_party()
        }
        document.onkeyup = (event) => {
            let index = this.key.indexOf(event.key)
            index != -1 ? this.key.splice(index, 1) : {}
        }
    }

    moviment() {
        if (this.key.indexOf('w') != -1 || this.key.indexOf('ArrowUp') != -1) {
            this.velocity[1] = 0
            this.velocity[0] = -1
        }
        if (this.key.indexOf('s') != -1 || this.key.indexOf('ArrowDown') != -1) {
            this.velocity[1] = 0
            this.velocity[0] = 1
        }
        if (this.key.indexOf('d') != -1 || this.key.indexOf('ArrowRight') != -1) {
            this.velocity[0] = 0
            this.velocity[1] = 1
        }
        if (this.key.indexOf('a') != -1 || this.key.indexOf('ArrowLeft') != -1) {
            this.velocity[0] = 0
            this.velocity[1] = -1
        }
        if (this.key.indexOf('r') != -1) {
            this.stop()
            console.log('stoped')
        }
    }

    show_party() {
        if(this.position[1] + this.velocity[1] >= this.map[this.position[0]].length || this.position[1] + this.velocity[1] < 0){
            this.velocity[1] = 0
        }
        else if(this.map[this.position[0]][this.position[1] + this.velocity[1]] == 0){
            this.velocity[1] = 0
        }
        if(this.position[0] + this.velocity[0] >= this.map.length || this.position[0] + this.velocity[0] < 0){
            this.velocity[0] = 0
        }
        else if(this.map[this.position[0] + this.velocity[0]][this.position[1]] == 0){
            this.velocity[0] = 0
        }

        if(this.sub.length > 0){
            console.log(this.sub)
            if(this.sub[this.position[0]][this.position[1] + this.velocity[1]] == 1){
                this.velocity[1] = 0 
            }
            if(this.sub[this.position[0] + this.velocity[0]][this.position[1]] == 1){
                this.velocity[0] = 0
            }
        }

        console.log(this.map[this.position[0] + this.velocity[0]][this.position[1]])

        this.position[1] += this.velocity[1]
        this.position[0] += this.velocity[0]
        this.position_map[1] += this.velocity[1]
        this.position_map[0] += this.velocity[0]

        this.person.style.inset = `${this.position[0] * this.step}px ${this.position[1] * this.step}px`
    }

    init_position(){
        if(this.sub[0] != undefined){
            console.log('sim')
            for(let n = 0; n < this.map.length; n++){
                for(let i = 0; i < this.map[n].length; i++){
                    if(this.map[n][i] == 1 && this.sub[n][i] == 0){
                        this.position[1] = i
                        this.position[0] = n
                    }
                }
            }
        }
        else{
            console.log('não')
            for(let n = 0; n < this.map.length; n++){
                let index = this.map[n].indexOf(1)
                if(index != -1){
                    this.position[1] = index
                    this.position[0] = n
                    break
                }
            }
        }
    }

    click(command=''){
        switch(command){
            case 'ArrowUp':
                this.velocity[1] = 0
                this.velocity[0] = -1
                break
            
            case 'ArrowDown':
                this.velocity[1] = 0
                this.velocity[0] = 1
                break
            
            case 'ArrowRight':
                this.velocity[0] = 0
                this.velocity[1] = 1
                break
            
            case 'ArrowLeft':
                this.velocity[0] = 0
                this.velocity[1] = -1
                break
            
        }
        this.moviment()
        this.show_party()
    }
}

const game = new Game(display,person, map[map.length - floor], map[map.length - (floor + 1)])