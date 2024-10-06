barraHp = document.getElementById("hp-heroi-atual")
goblinHp = document.getElementById("hp-goblin-atual")
texto2 = document.getElementById("texto-luta")

acionamento = document.getElementById("acoes")
acionamento.addEventListener("click", tomarDano)


function tomarDano() {
    heroi.hp = heroi.hp - (heroi.dmg * heroi.multiplicador)
// Corrigindo para valores negativos
    if(heroi.hp <= 0){
        heroi.hp = 0
        spriteheroi.style.animationName = "none"
    }
//    
    barraHp.style.width = heroi.hp + '%'
    heroi.multiplicador = 1
    texto2.innerHTML =  "O heroi te causou " + (heroi.dmg * heroi.multiplicador) + " pontos de dano"
    console.log(heroi.hp)
}

function levarPreparo(){
    heroi.multiplicador = heroi.multiplicador * 1.5
    texto1.innerHTML =  "O heroi preparou o ataque..."

}

function serAssustado(){
    heroi.multiplicador = heroi.multiplicador * 0.75
    texto1.innerHTML =  "O inimigo está fragilizado"
}

function tomarCura(){
    heroi.hp = heroi.hp + 20
// Corrigindo para valores maiores q o hp max
    if(heroi.hp > 100){
        heroi.hp = 100
    }
//
    barraHp.style.width = heroi.hp + '%'
    texto1.innerHTML =  "O heroi está se sentindo melhor"
}

