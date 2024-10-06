barraHp = document.getElementById("hp-heroi-atual")
goblinHp = document.getElementById("hp-goblin-atual")
texto = document.getElementById("texto-luta")
spriteHeroi = document.getElementById("sprite-heroi")

function tomarDano(danoTomado) {
    heroi.hp = heroi.hp - danoTomado
// Corrigindo para valores negativos
    if(heroi.hp <= 0){
        heroi.hp = 0
        spriteHeroi.style.animationName = "a"
    }
//    
    barraHp.style.width = heroi.hp + '%'
    goblin.multiplicador = 1
    console.log(heroi.hp)
}



function darDano() {
    goblin.hp = goblin.hp - (heroi.dmg * heroi.multiplicador)
// Corrigindo para valores negativos
    if(goblin.hp <= 0){
        goblin.hp = 0
    }
//
    goblinHp.style.width = (goblin.hp / 60) * 100 + "%"

    texto.innerHTML = "O oponente sofreu " + (heroi.dmg * heroi.multiplicador) + " de dano!"
    heroi.multiplicador = 1
    console.log(goblin.hp)
}

function prepararAtaque(){
    heroi.multiplicador = heroi.multiplicador * 1.5
    texto.innerHTML =  "O heroi preparou o ataque..."

}

function assustarInimigo(){
    goblin.multiplicador = goblin.multiplicador * 0.75
    texto.innerHTML =  "O inimigo está fragilizado"
}

function enfaixarFeridas(){
    heroi.hp = heroi.hp + 10
// Corrigindo para valores maiores q o hp max
    if(heroi.hp > 100){
        heroi.hp = 100
    }
//
    barraHp.style.width = heroi.hp + '%'
    texto.innerHTML =  "O heroi está se sentindo melhor"
}

