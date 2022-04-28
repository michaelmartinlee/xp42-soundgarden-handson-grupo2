const modalReservarIngresso = () => {
    var modal = document.getElementById("myModal");

    const botaoReservar0 = document.getElementById("botao-reservar0");
    botaoReservar0.addEventListener("click", (event) => {
        event.preventDefault()
        modal.style.display = "block";
    })
    const botaoReservar1 = document.getElementById("botao-reservar1");
    botaoReservar1.addEventListener("click", (event) => {
        event.preventDefault()
        modal.style.display = "block";
    })
    const botaoReservar2 = document.getElementById("botao-reservar2");
    botaoReservar2.addEventListener("click", (event) => {
        event.preventDefault()
        modal.style.display = "block";
    })

    var botaoFechar = document.getElementById("modal-home-fechar");
    var botaoCancelar = document.getElementById("modal-home-cancelar");

    const formReservarIngresso = document.querySelector("#reserva");

    botaoFechar.onclick = function() {
        modal.style.display = "none";
        formReservarIngresso[0].value = ""
        formReservarIngresso[2].value = ""
        formReservarIngresso[3].value = ""
    }
    botaoCancelar.onclick = function() {
        modal.style.display = "none";
        formReservarIngresso[0].value = ""
        formReservarIngresso[2].value = ""
        formReservarIngresso[3].value = ""
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = ""
        }
    }

}