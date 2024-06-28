var setadireita =window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    samantha.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function rolarparaesquerda(){
    samantha.style = "display:none"
    leonardo.style = "display:flex"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}
