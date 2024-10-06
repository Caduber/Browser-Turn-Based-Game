barraHp = document.getElementById("hp-heroi-atual")
goblinHp = document.getElementById("hp-goblin-atual")
texto1 = document.getElementById("texto-luta-ant")
spriteHeroi = document.getElementById("sprite-heroi")

function darDano() {
    goblin.hp = goblin.hp - (heroi.dmg * heroi.multiplicador)
// Corrigindo para valores negativos
    if(goblin.hp <= 0){
        goblin.hp = 0
    }
//
    goblinHp.style.width = (goblin.hp / 60) * 100 + "%"

    texto1.innerHTML = "O oponente sofreu " + (heroi.dmg * heroi.multiplicador) + " de dano!"
    heroi.multiplicador = 1
    console.log(goblin.hp)
}

function prepararAtaque(){
    heroi.multiplicador = heroi.multiplicador * 1.5
    texto1.innerHTML =  "O heroi preparou o ataque..."

}

function assustarInimigo(){
    goblin.multiplicador = goblin.multiplicador * 0.75
    texto1.innerHTML =  "O inimigo está fragilizado"
}

function enfaixarFeridas(){
    heroi.hp = heroi.hp + 20
// Corrigindo para valores maiores q o hp max
    if(heroi.hp > 100){
        heroi.hp = 100
    }
//
    barraHp.style.width = heroi.hp + '%'
    texto1.innerHTML =  "O heroi está se sentindo melhor"
}

