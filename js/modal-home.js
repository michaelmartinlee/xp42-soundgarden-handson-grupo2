const modalReservarIngresso = () => {
    var modal = document.getElementById("myModal");

    const botaoReservar0 = document.getElementById("botao-reservar0");
    botaoReservar0.addEventListener("click", (event) => {
        event.preventDefault
        modal.style.display = "block";
    })
    const botaoReservar1 = document.getElementById("botao-reservar1");
    botaoReservar1.addEventListener("click", (event) => {
        event.preventDefault
        modal.style.display = "block";
    })
    const botaoReservar2 = document.getElementById("botao-reservar2");
    botaoReservar2.addEventListener("click", (event) => {
        event.preventDefault
        modal.style.display = "block";
    })

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}