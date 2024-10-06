barraHp = document.getElementById("hp-heroi-atual")
goblinHp = document.getElementById("hp-goblin-atual")
texto = document.getElementById("texto-luta")

acionamento = document.getElementById("acoes")
acionamento.addEventListener("click", tomarDano)


function tomarDano() {
    heroi.hp = heroi.hp - goblin.dmg
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